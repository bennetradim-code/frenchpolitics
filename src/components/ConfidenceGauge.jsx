import { useState } from 'react'
import { computeConfidenceScore, getScoreLabel } from '../utils/confidenceScore'

export default function ConfidenceGauge({ politician }) {
  const [showDetails, setShowDetails] = useState(false)
  const score = computeConfidenceScore(politician)
  const { label, color } = getScoreLabel(score)

  const incidents = politician.details?.justiceIncidents || []
  const incidentMalus = incidents.reduce((sum, inc) => {
    const type = inc.type || ''
    if (type.includes('Condamnation')) return sum + 5
    if (type.includes('Mise en examen')) return sum + 5
    if (type.includes('Enquête')) return sum + 3
    return sum + 2
  }, 0)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-gray-700">
          Score de confiance
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-300 text-gray-600 text-xs leading-none hover:bg-gray-400 transition cursor-pointer"
            title="Comment ce score est-il calculé ?"
            aria-label="Détail du calcul du score"
          >
            ?
          </button>
        </span>
        <span className="text-sm font-bold" style={{ color }}>
          {score}/100 — {label}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-500"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
      {showDetails && (
        <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 space-y-1">
          <p className="font-semibold text-gray-700 mb-1">Détail du calcul :</p>
          <p>Base de départ : <span className="font-mono">100</span></p>
          {politician.convictions > 0 && (
            <p>Condamnations ({politician.convictions}) : <span className="font-mono text-red-600">−{politician.convictions * 20}</span> <span className="text-gray-400">(−20 par condamnation)</span></p>
          )}
          {politician.ongoingCases > 0 && (
            <p>Affaires en cours ({politician.ongoingCases}) : <span className="font-mono text-orange-600">−{politician.ongoingCases * 10}</span> <span className="text-gray-400">(−10 par affaire)</span></p>
          )}
          {incidentMalus > 0 && (
            <p>Incidents détaillés ({incidents.length}) : <span className="font-mono text-yellow-700">−{incidentMalus}</span> <span className="text-gray-400">(−5 condamnation/MEX, −3 enquête, −2 autre)</span></p>
          )}
          <p className="pt-1 border-t border-gray-200 font-semibold text-gray-700">
            Total : <span className="font-mono" style={{ color }}>{score}/100</span>
          </p>
        </div>
      )}
    </div>
  )
}
