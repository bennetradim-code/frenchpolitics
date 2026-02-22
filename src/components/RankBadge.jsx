import { getRank } from '../utils/getRank'
import { getSeverityColor, computeSeverityScore } from '../utils/severityScore'

function getStatus(politician) {
  const rank = getRank(politician.id)
  if (rank) {
    const { total } = computeSeverityScore(politician)
    return {
      label: `TOP ${rank}`,
      color: getSeverityColor(total),
      rank
    }
  }

  // Pas de condamnation mais MEX ou enquête
  const incidents = politician.details?.justiceIncidents || []
  if (incidents.some(inc => (inc.type || '').includes('Mise en examen')))
    return { label: 'MEX', color: '#7C3AED', rank: null }
  if (incidents.some(inc => (inc.type || '').includes('Enquête') || (inc.type || '').includes('Accusation')))
    return { label: 'Enquête', color: '#0284C7', rank: null }

  return null
}

export default function RankBadge({ politician, size = 'sm' }) {
  const status = getStatus(politician)
  if (!status) return null

  const fontSize = size === 'sm' ? '11px' : '14px'
  const padding = size === 'sm' ? 'px-1.5 py-0.5' : 'px-2.5 py-1'

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${padding} rounded font-bold whitespace-nowrap flex-shrink-0`}
      style={{
        border: `2px solid ${status.color}`,
        color: status.color,
        backgroundColor: status.color + '15',
        fontSize,
        lineHeight: 1.2,
        transform: 'rotate(-2deg)',
      }}
    >
      {status.label}
    </span>
  )
}
