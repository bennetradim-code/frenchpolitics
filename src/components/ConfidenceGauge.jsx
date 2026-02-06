import { computeConfidenceScore, getScoreLabel } from '../utils/confidenceScore'

export default function ConfidenceGauge({ politician }) {
  const score = computeConfidenceScore(politician)
  const { label, color } = getScoreLabel(score)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-gray-700">Score de confiance</span>
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
    </div>
  )
}
