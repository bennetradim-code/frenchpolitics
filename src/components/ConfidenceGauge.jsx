import { useState } from 'react'
import { computeConfidenceScore, getScoreColor } from '../utils/confidenceScore'

export default function ConfidenceGauge({ politician }) {
  const [showDetails, setShowDetails] = useState(false)
  const score = computeConfidenceScore(politician)
  const color = getScoreColor(score)

  const incidents = politician.details?.justiceIncidents || []
  const definitiveConvictions = incidents.filter(inc => (inc.type || '') === 'Condamnation').length

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-gray-700">
          Score
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
          {score}/100
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
          {definitiveConvictions > 0 && (
            <p>Condamnations définitives ({definitiveConvictions}) : <span className="font-mono text-red-600">−{definitiveConvictions * 20}</span> <span className="text-gray-400">(−20 par condamnation définitive)</span></p>
          )}
          <p className="text-gray-400 italic">Seules les condamnations définitives sont prises en compte (présomption d'innocence).</p>
          <p className="pt-1 border-t border-gray-200 font-semibold text-gray-700">
            Total : <span className="font-mono" style={{ color }}>{score}/100</span>
          </p>
        </div>
      )}
    </div>
  )
}
