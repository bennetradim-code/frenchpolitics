import { useState } from 'react'

export default function PoliticianCard({ politician }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
        <img
          src={politician.image}
          alt={politician.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{politician.name}</h3>
        <p className="text-sm text-gray-600 font-semibold">{politician.party}</p>
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
            <div className="mt-2">
              <p className="text-sm font-semibold text-gray-700">Carrière:</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {politician.details.career.map((job, idx) => (
                  <li key={idx}>{job}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
