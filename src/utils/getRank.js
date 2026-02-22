import { politicians as politiciansData } from '../data/frenchPolitics'
import { computeSeverityScore } from './severityScore'

// Calcule le classement global (cache au premier appel)
let rankingsCache = null

export function getGlobalRankings() {
  if (rankingsCache) return rankingsCache

  const living = politiciansData.filter(p => !p.deceased)
  const ranked = [...living]
    .map(p => ({
      id: p.id,
      severity: computeSeverityScore(p).total,
      name: p.name
    }))
    .filter(p => p.severity > 0)
    .sort((a, b) => {
      if (a.severity !== b.severity) return b.severity - a.severity
      return a.name.localeCompare(b.name, 'fr')
    })

  // Créer un map id -> rank
  const rankMap = new Map()
  ranked.forEach((p, index) => {
    rankMap.set(p.id, index + 1)
  })

  rankingsCache = { ranked, rankMap }
  return rankingsCache
}

export function getRank(politicianId) {
  const { rankMap } = getGlobalRankings()
  return rankMap.get(politicianId) || null
}

export function getTotalRanked() {
  const { ranked } = getGlobalRankings()
  return ranked.length
}
