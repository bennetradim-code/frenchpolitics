import { parsePenalty } from './penaltyParser'

/**
 * Compute the severity score for a single parsed penalty.
 * Formula: (mois_prison_ferme × 10) + (mois_sursis × 3) + (mois_inéligibilité × 5) + (log₁₀(amende) × 2)
 *
 * @param {{ prisonFerme: number, prisonSursis: number, amende: number, ineligibilite: number, dispenseDePeine: boolean }} parsed
 * @returns {number}
 */
export function computePenaltyScore(parsed) {
  if (parsed.dispenseDePeine) return 0

  const prisonFermeScore = parsed.prisonFerme * 10
  const prisonSursisScore = parsed.prisonSursis * 3
  const ineligibiliteScore = parsed.ineligibilite * 5
  const amendeScore = parsed.amende > 0 ? Math.log10(parsed.amende) * 2 : 0

  return Math.round(prisonFermeScore + prisonSursisScore + ineligibiliteScore + amendeScore)
}

/**
 * Compute the total severity score for a politician.
 * Only definitive convictions (type === 'Condamnation') are counted.
 *
 * @param {object} politician
 * @returns {{ total: number, breakdown: Array<{ incident: object, parsed: object, score: number }> }}
 */
export function computeSeverityScore(politician) {
  const incidents = politician.details?.justiceIncidents || []
  const condamnations = incidents.filter(inc => (inc.type || '') === 'Condamnation')

  const breakdown = condamnations.map(inc => {
    const parsed = parsePenalty(inc.penalty || '')
    const score = computePenaltyScore(parsed)
    return { incident: inc, parsed, score }
  })

  const total = breakdown.reduce((sum, b) => sum + b.score, 0)
  return { total, breakdown }
}

/**
 * Compute severity stats for a group of politicians (e.g. a party).
 * Returns total score, average per politician, and number of convicted members.
 *
 * @param {object[]} politicians
 * @returns {{ total: number, average: number, convicted: number, count: number }}
 */
export function computePartySeverity(politicians) {
  const count = politicians.length
  if (count === 0) return { total: 0, average: 0, convicted: 0, count: 0 }

  let total = 0
  let convicted = 0
  for (const pol of politicians) {
    const { total: score } = computeSeverityScore(pol)
    if (score > 0) convicted++
    total += score
  }

  return {
    total,
    average: Math.round((total / count) * 10) / 10,
    convicted,
    count,
  }
}

/**
 * Return a color for a severity score.
 * Higher = more severe = redder.
 *
 * @param {number} score
 * @returns {string} hex color
 */
export function getSeverityColor(score) {
  if (score === 0) return '#16a34a'   // green
  if (score <= 10) return '#ca8a04'   // yellow
  if (score <= 50) return '#ea580c'   // orange
  return '#dc2626'                     // red
}
