import { useState } from 'react'
import { computeSeverityScore, getSeverityColor } from '../utils/severityScore'

export default function SeverityGauge({ politician }) {
  const [showDetails, setShowDetails] = useState(false)
  const { total, breakdown } = computeSeverityScore(politician)
  const color = getSeverityColor(total)

  // Normalize bar width: cap at 200 for visual purposes
  const barPct = Math.min((total / 200) * 100, 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-gray-700">
          Sévérité
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
          {total} pts
        </span>
      </div>
      <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-500"
          style={{ width: `${barPct}%`, backgroundColor: color }}
        />
      </div>
      {showDetails && (
        <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 space-y-2">
          <p className="font-semibold text-gray-700 mb-1">Détail du calcul :</p>
          {breakdown.length === 0 && (
            <p className="text-green-600">Aucune condamnation définitive.</p>
          )}
          {breakdown.map((b, i) => (
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
          {breakdown.length > 0 && (
            <p className="pt-1 border-t border-gray-200 font-semibold text-gray-700">
              Total : <span className="font-mono" style={{ color }}>{total} pts</span>
            </p>
          )}
          <p className="text-gray-400 italic" style={{ fontSize: '10px' }}>
            Formule : (mois prison ferme × 10) + (mois sursis × 3) + (mois inéligibilité × 5) + (log₁₀(amende) × 2).
            Seules les condamnations définitives sont comptées.
          </p>
        </div>
      )}
    </div>
  )
}
