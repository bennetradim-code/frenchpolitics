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
        <p className="text-xl text-gray-600">Personnalité non trouvée.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          &larr; Retour à l'accueil
        </Link>
      </main>
    )
  }

  const party = getPartyById(politician.party)
  const partyColor = party?.color || '#999'
  const placeholderImage = generatePoliticianImagePlaceholder(politician.name, partyColor)
  const incidents = (politician.details.justiceIncidents || []).filter(
    inc => inc.sources && inc.sources.length > 0
  )

  function getIncidentColor(type) {
    if (type === 'Condamnation') return '#dc2626'
    if (type.includes('Mise en examen')) return '#ea580c'
    if (type.includes('Enquête')) return '#f59e0b'
    return '#0284c7'
  }

  function getIncidentIcon(type) {
    const icons = {
      'Condamnation': '⚖️',
      'Mise en examen': '📋',
      'Enquête': '🔍',
      'Mise en examen/Enquête': '📋',
      'Enquête/Information judiciaire': '📋',
      'Enquête/Mise en examen': '🔍',
      'Accusation/Enquête': '❓',
      'Condamnation/Enquête': '⚖️'
    }
    return icons[type] ? icons[type] + ' ' : ''
  }

  function getStatusColor(status) {
    if (!status) return { bg: '#e5e7eb', text: '#374151' }
    if (status.includes('Condamn')) return { bg: '#fee2e2', text: '#991b1b' }
    if (status.includes('En cours')) return { bg: '#fef3c7', text: '#92400e' }
    if (status.includes('Classée') || status.includes('classé')) return { bg: '#e0e7ff', text: '#3730a3' }
    return { bg: '#e5e7eb', text: '#374151' }
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
            <Link
              to={`/party/${politician.party}`}
              className="text-lg font-semibold mt-1 inline-block hover:underline transition"
              style={{ color: partyColor }}
            >
              {party?.name || politician.party}
            </Link>
            <p className="text-gray-600 mt-1">{politician.position}</p>
            {politician.details.birthDate && (
              <p className="text-sm text-gray-500 mt-2">
                Né(e) le {politician.details.birthDate}{politician.details.birthPlace ? ` à ${politician.details.birthPlace}` : ''}
              </p>
            )}

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
            <div className="space-y-4">
              {incidents.map((incident, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-200 hover:shadow-md transition-shadow"
                  style={{ borderLeftColor: getIncidentColor(incident.type) }}
                >
                  {/* Header: Type and Date */}
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                        style={{ backgroundColor: getIncidentColor(incident.type) }}
                      >
                        {getIncidentIcon(incident.type)}
                        {incident.type}
                      </span>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {incident.date}
                      </span>
                    </div>
                    {incident.status && (
                      <span
                        className="inline-block px-2 py-1 rounded text-xs font-semibold whitespace-nowrap"
                        style={{
                          backgroundColor: getStatusColor(incident.status).bg,
                          color: getStatusColor(incident.status).text
                        }}
                      >
                        {incident.status}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{incident.description}</p>

                  {/* Penalty and Sources if available */}
                  {(incident.penalty || incident.source || incident.sources) && (
                    <div className="pt-3 border-t border-gray-200 space-y-3">
                      {incident.penalty && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-600">Peine:</span>
                          <span className="text-sm text-gray-700">{incident.penalty}</span>
                        </div>
                      )}
                      
                      {/* Support both old format (source) and new format (sources array) */}
                      {(incident.source || incident.sources) && (
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-semibold text-gray-600">Sources:</span>
                          {incident.sources && incident.sources.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {incident.sources.map((src, sidx) => (
                                <a
                                  key={sidx}
                                  href={src.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                                  title={src.title}
                                >
                                  🔗
                                  <span className="font-medium">{src.title}</span>
                                </a>
                              ))}
                            </div>
                          ) : incident.source ? (
                            <span className="text-sm text-gray-700">{incident.source}</span>
                          ) : null}
                        </div>
                      )}
                    </div>
                  )}
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
