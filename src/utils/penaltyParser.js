/**
 * Parse a French penalty string into structured components.
 * All durations are returned in months. Fines are in euros.
 *
 * @param {string} penaltyStr - Raw penalty string (e.g. "4 ans de prison (2 ferme), 5 ans d'inéligibilité")
 * @returns {{ prisonFerme: number, prisonSursis: number, amende: number, ineligibilite: number, dispenseDePeine: boolean }}
 */
export function parsePenalty(penaltyStr) {
  const result = {
    prisonFerme: 0,
    prisonSursis: 0,
    amende: 0,
    ineligibilite: 0,
    dispenseDePeine: false,
  }

  if (!penaltyStr || typeof penaltyStr !== 'string') return result

  const s = penaltyStr.trim()

  // Dispensée de peine
  if (/dispensée?\s+de\s+peine/i.test(s)) {
    result.dispenseDePeine = true
    return result
  }

  // Early exits for non-penalty strings
  if (/^néant/i.test(s) || /^en\s+(attente|cours)/i.test(s)) return result

  // === PRISON ===
  parsePrison(s, result)

  // === AMENDE ===
  parseAmende(s, result)

  // === INÉLIGIBILITÉ ===
  parseIneligibilite(s, result)

  return result
}

/** Parse amount string: remove spaces (thousands sep), handle comma decimals */
function parseAmount(str) {
  return parseFloat(str.replace(/\s/g, '').replace(',', '.')) || 0
}

/** Convert a numeric value + unit context to months */
function toMonths(value, isYears) {
  return isYears ? value * 12 : value
}

function parsePrison(s, result) {
  let matched = false

  // Pattern: "X ans de prison dont/( Y [ans/mois] ferme"
  // Note: Y may have no unit — if so, assume same as X (years)
  let m = s.match(/(\d+)\s*ans?\s*de\s*prison\s*(?:dont|\()\s*(\d+)\s*mois\s*ferme/i)
  if (m) {
    const total = parseInt(m[1]) * 12
    const ferme = parseInt(m[2])
    result.prisonFerme = ferme
    result.prisonSursis = total - ferme
    matched = true
  }
  if (!matched) {
    m = s.match(/(\d+)\s*ans?\s*de\s*prison\s*(?:dont|\()\s*(\d+)\s*(?:ans?\s*)?ferme/i)
    if (m) {
      const total = parseInt(m[1]) * 12
      const ferme = parseInt(m[2]) * 12
      result.prisonFerme = ferme
      result.prisonSursis = total - ferme
      matched = true
    }
  }
  if (!matched) {
    m = s.match(/(\d+)\s*mois\s*de\s*prison\s*(?:dont|\()\s*(\d+)\s*(?:mois?\s*)?ferme/i)
    if (m) {
      const total = parseInt(m[1])
      const ferme = parseInt(m[2])
      result.prisonFerme = ferme
      result.prisonSursis = total - ferme
      matched = true
    }
  }

  // Pattern: "X ans de prison (Y avec sursis)" -> ferme = total - sursis
  if (!matched) {
    m = s.match(/(\d+)\s*ans?\s*de\s*prison\s*\(\s*(\d+)\s*(?:ans?\s*)?avec\s*sursis/i)
    if (m) {
      const total = parseInt(m[1]) * 12
      const sursis = parseInt(m[2]) * 12
      result.prisonFerme = total - sursis
      result.prisonSursis = sursis
      matched = true
    }
  }

  // Pattern: "X ans/mois de prison ferme" (tout ferme)
  if (!matched) {
    m = s.match(/(\d+)\s*ans?\s*de\s*prison\s*ferme/i)
    if (m) {
      result.prisonFerme = parseInt(m[1]) * 12
      matched = true
    }
  }
  if (!matched) {
    m = s.match(/(\d+)\s*mois\s*de\s*prison\s*ferme/i)
    if (m) {
      result.prisonFerme = parseInt(m[1])
      matched = true
    }
  }

  // Pattern: "X ans/mois de prison avec sursis" (tout sursis)
  if (!matched) {
    m = s.match(/(\d+)\s*ans?\s*de\s*prison\s*avec\s*sursis/i)
    if (m) {
      result.prisonSursis = parseInt(m[1]) * 12
      matched = true
    }
  }
  if (!matched) {
    m = s.match(/(\d+)\s*mois\s*de\s*prison\s*avec\s*sursis/i)
    if (m) {
      result.prisonSursis = parseInt(m[1])
      matched = true
    }
  }

  // Pattern: "X ans/mois de sursis" (standalone, without "prison")
  if (!matched) {
    m = s.match(/(\d+)\s*ans?\s*de\s*sursis/i)
    if (m) {
      result.prisonSursis = parseInt(m[1]) * 12
      matched = true
    }
  }
  if (!matched) {
    m = s.match(/(\d+)\s*mois\s*de\s*sursis/i)
    if (m) {
      result.prisonSursis = parseInt(m[1])
      matched = true
    }
  }

  // Pattern: "5 ans de prison (en plus)" - treat as all ferme (additional firm sentence)
  if (!matched) {
    m = s.match(/(\d+)\s*ans?\s*de\s*prison\s*\(\s*en\s*plus\s*\)/i)
    if (m) {
      result.prisonFerme = parseInt(m[1]) * 12
      matched = true
    }
  }

  // Vague: "Peine avec sursis" (no duration)
  if (!matched && /peine\s+avec\s+sursis/i.test(s)) {
    result.prisonSursis = 3
  }
  // Vague: "Prison avec sursis" (no duration, possibly with "et inéligibilité")
  if (!matched && /prison\s+avec\s+sursis/i.test(s)) {
    result.prisonSursis = 6
  }
}

function parseAmende(s, result) {
  let m
  // Use a permissive apostrophe pattern: straight ', curly ', or backtick
  const ap = "['\u2019\u0060]"

  // Millions: "X,Y millions d'euros d'amende"
  m = s.match(new RegExp(`(\\d[\\d,.\\s]*)\\s*millions?\\s*d${ap}euros?\\s*d${ap}amende`, 'i'))
  if (m) {
    result.amende = parseAmount(m[1]) * 1_000_000
    return
  }

  // Amende with sursis portion: "N€ d'amende dont M€ avec sursis"
  m = s.match(new RegExp(`(\\d[\\d\\s.]*)\\s*(?:€|euros?)\\s*d${ap}amende\\s*dont\\s*(\\d[\\d\\s.]*)\\s*(?:€|euros?)?\\s*avec\\s*sursis`, 'i'))
  if (m) {
    result.amende = parseAmount(m[1]) - parseAmount(m[2])
    return
  }

  // Francs: "N francs d'amende"
  m = s.match(new RegExp(`(\\d[\\d\\s.]*)\\s*francs?\\s*d${ap}amende`, 'i'))
  if (m) {
    result.amende = Math.round(parseAmount(m[1]) * 0.1524)
    return
  }

  // Standard: "N€ d'amende" or "N euros d'amende"
  m = s.match(new RegExp(`(\\d[\\d\\s.]*)\\s*(?:€|euros?)\\s*d${ap}amende`, 'i'))
  if (m) {
    result.amende = parseAmount(m[1])
    return
  }

  // "N€ amende" (without d') e.g. "50 000€ amende"
  m = s.match(/([\d][\d\s.]*)(?:€|euros?)\s*amende/i)
  if (m) {
    result.amende = parseAmount(m[1])
    return
  }

  // Without currency symbol: "N d'amende"
  m = s.match(new RegExp(`(\\d[\\d\\s.]*)\\s*d${ap}amende`, 'i'))
  if (m) {
    result.amende = parseAmount(m[1])
    return
  }

  // Vague: just "amende" or "Amende" alone, no number before it
  if (/\bamende\b/i.test(s) && !/\d[\d\s.]*\s*(?:€|euros?|francs?)?\s*(?:d['\u2019])?amende/i.test(s)) {
    result.amende = 500
  }
}

function parseIneligibilite(s, result) {
  let m
  const ap = "['\u2019\u0060]"

  // "X ans d'inéligibilité"
  m = s.match(new RegExp(`(\\d+)\\s*ans?\\s*d${ap}inéligibilité`, 'i'))
  if (m) {
    result.ineligibilite = parseInt(m[1]) * 12
    return
  }

  // "X mois d'inéligibilité"
  m = s.match(new RegExp(`(\\d+)\\s*mois\\s*d${ap}inéligibilité`, 'i'))
  if (m) {
    result.ineligibilite = parseInt(m[1])
    return
  }

  // Vague: "inéligibilité" mentionnée sans durée
  if (/inéligibilité/i.test(s) && !new RegExp(`\\d+\\s*(?:ans?|mois)\\s*d${ap}inéligibilité`, 'i').test(s)) {
    result.ineligibilite = 12
  }
}
