/**
 * Compute a confidence/trust score for a politician (0-100).
 * 100 = no incidents, 0 = heavily implicated.
 */
export function computeConfidenceScore(politician) {
  let score = 100

  score -= politician.convictions * 20
  score -= politician.ongoingCases * 10

  const incidents = politician.details?.justiceIncidents || []
  for (const incident of incidents) {
    const type = incident.type || ''
    if (type.includes('Condamnation')) {
      score -= 5
    } else if (type.includes('Mise en examen')) {
      score -= 5
    } else if (type.includes('Enquête')) {
      score -= 3
    } else {
      score -= 2
    }
  }

  return Math.max(0, Math.min(100, score))
}

/**
 * Return a human-readable label and color for a given score.
 */
export function getScoreLabel(score) {
  if (score >= 80) return { label: 'Fiable', color: '#16a34a' }
  if (score >= 60) return { label: 'Acceptable', color: '#ca8a04' }
  if (score >= 40) return { label: 'Préoccupant', color: '#ea580c' }
  return { label: 'Critique', color: '#dc2626' }
}
