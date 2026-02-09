import { useState } from 'react'
import { computeSeverityScore, getSeverityColor } from '../utils/severityScore'

function getStatus(politician) {
  const { total, breakdown } = computeSeverityScore(politician)
  if (total > 0) return { label: `${total}`, sub: 'pts', color: getSeverityColor(total), total, breakdown }

  const incidents = politician.details?.justiceIncidents || []
  if (incidents.some(inc => (inc.type || '').includes('Mise en examen')))
    return { label: 'MEX', sub: null, color: '#7C3AED', total: 0, breakdown: [] }
  if (incidents.some(inc => (inc.type || '').includes('Enquête') || (inc.type || '').includes('Accusation')))
    return { label: 'Enquête', sub: null, color: '#0284C7', total: 0, breakdown: [] }

  return null
}

export default function SeverityStamp({ politician, size = 'sm' }) {
  const [showDetails, setShowDetails] = useState(false)
  const status = getStatus(politician)
  if (!status) return null

  if (size === 'sm') {
    return (
      <span
        className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded font-bold whitespace-nowrap flex-shrink-0"
        style={{
          border: `2px solid ${status.color}`,
          color: status.color,
          backgroundColor: status.color + '15',
          fontSize: '11px',
          lineHeight: 1.2,
          transform: 'rotate(-2deg)',
        }}
      >
        {status.label}
        {status.sub && <span style={{ fontSize: '9px', fontWeight: 600 }}>{status.sub}</span>}
      </span>
    )
  }

  // size === 'lg'
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded font-bold"
          style={{
            border: `3px solid ${status.color}`,
            color: status.color,
            backgroundColor: status.color + '15',
            fontSize: '18px',
            lineHeight: 1.2,
            transform: 'rotate(-2deg)',
          }}
        >
          {status.label}
          {status.sub && <span style={{ fontSize: '13px', fontWeight: 600 }}>{status.sub}</span>}
        </span>
        {status.breakdown.length > 0 && (
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-500 text-xs hover:bg-gray-300 transition cursor-pointer"
            title="Détail du calcul"
          >
            ?
          </button>
        )}
      </div>
      {showDetails && status.breakdown.length > 0 && (
        <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 space-y-2">
          <p className="font-semibold text-gray-700 mb-1">Détail du calcul :</p>
          {status.breakdown.map((b, i) => (
            <div key={i} className="border-b border-gray-100 pb-2">
              <p className="font-medium text-gray-700">{b.incident.date} — {b.score} pts</p>
              {b.parsed.prisonFerme > 0 && (
                <p>Prison ferme : {b.parsed.prisonFerme} mois × 10 = {b.parsed.prisonFerme * 10}</p>
              )}
              {b.parsed.prisonSursis > 0 && (
                <p>Prison sursis : {b.parsed.prisonSursis} mois × 3 = {b.parsed.prisonSursis * 3}</p>
              )}
              {b.parsed.ineligibilite > 0 && (
                <p>Inéligibilité : {b.parsed.ineligibilite} mois × 5 = {b.parsed.ineligibilite * 5}</p>
              )}
              {b.parsed.amende > 0 && (
                <p>Amende : {b.parsed.amende.toLocaleString('fr-FR')}€ → log₁₀ × 2 = {(Math.log10(b.parsed.amende) * 2).toFixed(1)}</p>
              )}
              {b.parsed.dispenseDePeine && <p>Dispensée de peine (score nul)</p>}
            </div>
          ))}
          <p className="pt-1 border-t border-gray-200 font-semibold text-gray-700">
            Total : <span className="font-mono" style={{ color: status.color }}>{status.total} pts</span>
          </p>
          <p className="text-gray-400 italic" style={{ fontSize: '10px' }}>
            Formule : (mois prison ferme × 10) + (mois sursis × 3) + (mois inéligibilité × 5) + (log₁₀(amende) × 2).
            Seules les condamnations définitives sont comptées.
          </p>
        </div>
      )}
    </div>
  )
}
