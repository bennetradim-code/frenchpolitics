import { useState, useMemo } from 'react'
import { getPartyById } from '../data/frenchPolitics'

/**
 * Generate a placeholder SVG image for a politician
 */
function generatePlaceholderImage(name, color = '#3B82F6') {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  const bgColor = color || '#3B82F6'
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="${bgColor}"/>
    <text x="100" y="120" font-size="60" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial, sans-serif">${initials}</text>
  </svg>`
  
  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;utf8,${encoded}`
}

export default function PoliticianCard({ politician }) {
  const [showDetails, setShowDetails] = useState(false)
  const party = getPartyById(politician.party)
  const partyColor = party?.color || '#999'
  const placeholderImage = useMemo(() => generatePlaceholderImage(politician.name, partyColor), [politician.name, partyColor])

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div 
        className="aspect-square bg-gray-200 overflow-hidden flex items-center justify-center"
        style={{ borderBottom: `3px solid ${partyColor}` }}
      >
        <img
          src={placeholderImage}
          alt={politician.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{politician.name}</h3>
        <p className="text-sm font-semibold" style={{ color: partyColor }}>{party?.name || politician.party}</p>
        <p className="text-sm text-gray-600 mb-4">{politician.position}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-3 rounded">
            <p className="text-xs text-gray-600">Condamnations</p>
            <p className="text-2xl font-bold text-red-600">{politician.convictions}</p>
          </div>
          <div className="bg-orange-50 p-3 rounded">
            <p className="text-xs text-gray-600">Affaires en cours</p>
            <p className="text-2xl font-bold text-orange-600">{politician.ongoingCases}</p>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition"
        >
          {showDetails ? 'Masquer détails' : 'Voir détails'}
        </button>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600"><strong>Né:</strong> {politician.details.birthDate}</p>
            <p className="text-sm text-gray-600"><strong>Lieu:</strong> {politician.details.birthPlace}</p>
            
            <div className="mt-3">
              <p className="text-sm font-semibold text-gray-700">Carrière:</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {politician.details.career.map((job, idx) => (
                  <li key={idx}>{job}</li>
                ))}
              </ul>
            </div>

            {politician.details.justiceIncidents && politician.details.justiceIncidents.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-700">Incidents de justice:</p>
                <div className="mt-2 space-y-2">
                  {politician.details.justiceIncidents.map((incident, idx) => (
                    <div key={idx} className="bg-gray-50 p-2 rounded text-sm">
                      <span className="inline-block px-2 py-1 rounded text-xs font-semibold text-white mr-2" 
                        style={{ 
                          backgroundColor: incident.type === 'Condamnation' ? '#dc2626' : 
                                         incident.type === 'Mise en examen' ? '#ea580c' : '#0284c7'
                        }}>
                        {incident.type}
                      </span>
                      <span className="text-gray-700">{incident.date}</span>
                      <p className="text-gray-600 mt-1">{incident.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
