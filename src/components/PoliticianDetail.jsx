import { useParams, Link } from 'react-router-dom'
import { politicians, getPartyById } from '../data/frenchPolitics'
import { generatePoliticianImagePlaceholder } from '../utils/imageGenerator'
import ConfidenceGauge from './ConfidenceGauge'

export default function PoliticianDetail() {
  const { id } = useParams()
  const politician = politicians.find(p => p.id === Number(id))

  if (!politician) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-xl text-gray-600">Politicien non trouvé.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          &larr; Retour à l'accueil
        </Link>
      </main>
    )
  }

  const party = getPartyById(politician.party)
  const partyColor = party?.color || '#999'
  const placeholderImage = generatePoliticianImagePlaceholder(politician.name, partyColor)
  const incidents = politician.details.justiceIncidents || []

  function getIncidentColor(type) {
    if (type === 'Condamnation') return '#dc2626'
    if (type.includes('Mise en examen')) return '#ea580c'
    return '#0284c7'
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 font-medium transition">
        &larr; Retour à la liste
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Hero */}
        <div className="md:flex">
          <div
            className="md:w-1/3 p-8 flex items-center justify-center"
            style={{ backgroundColor: partyColor + '18' }}
          >
            <img
              src={placeholderImage}
              alt={politician.name}
              className="w-48 h-48 rounded-full border-4"
              style={{ borderColor: partyColor }}
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-gray-900">{politician.name}</h1>
            <p className="text-lg font-semibold mt-1" style={{ color: partyColor }}>
              {party?.name || politician.party}
            </p>
            <p className="text-gray-600 mt-1">{politician.position}</p>
            <p className="text-sm text-gray-500 mt-2">
              Né(e) le {politician.details.birthDate} à {politician.details.birthPlace}
            </p>

            <div className="mt-4">
              <ConfidenceGauge politician={politician} />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-3 rounded">
                <p className="text-xs text-gray-600">Condamnations</p>
                <p className="text-2xl font-bold text-red-600">{politician.convictions}</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <p className="text-xs text-gray-600">Affaires en cours</p>
                <p className="text-2xl font-bold text-orange-600">{politician.ongoingCases}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carrière */}
        <div className="p-6 border-t">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Carrière</h2>
          <div className="relative pl-8 border-l-2 border-blue-300 space-y-4">
            {politician.details.career.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[25px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
                <p className="text-gray-700">{job}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents de justice */}
        <div className="p-6 border-t">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Incidents de justice</h2>
          {incidents.length > 0 ? (
            <div className="space-y-3">
              {incidents.map((incident, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-4 rounded-lg border-l-4"
                  style={{ borderLeftColor: getIncidentColor(incident.type) }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-block px-2 py-1 rounded text-xs font-semibold text-white"
                      style={{ backgroundColor: getIncidentColor(incident.type) }}
                    >
                      {incident.type}
                    </span>
                    <span className="text-sm text-gray-500">{incident.date}</span>
                  </div>
                  <p className="text-gray-700">{incident.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-green-600 font-semibold">Aucun incident de justice enregistré</p>
          )}
        </div>
      </div>
    </main>
  )
}
