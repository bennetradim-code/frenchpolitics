/**
 * Compute a score for a politician (0-100) based on definitive convictions only.
 * Only final convictions (type === 'Condamnation') are counted,
 * respecting the presumption of innocence for all other proceedings.
 */
export function computeConfidenceScore(politician) {
  let score = 100

  const incidents = politician.details?.justiceIncidents || []
  const definitiveConvictions = incidents.filter(inc => {
    const type = inc.type || ''
    return type === 'Condamnation'
  }).length

  score -= definitiveConvictions * 20

  return Math.max(0, Math.min(100, score))
}

/**
 * Return a color for a given score.
 */
export function getScoreColor(score) {
  if (score >= 80) return '#16a34a'
  if (score >= 60) return '#ca8a04'
  if (score >= 40) return '#ea580c'
  return '#dc2626'
}
