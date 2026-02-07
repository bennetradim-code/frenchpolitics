import { useParams, Link } from 'react-router-dom'
import { parties, getPoliticiansByParty, getPartyStats } from '../data/frenchPolitics'
import { generatePoliticianImagePlaceholder } from '../utils/imageGenerator'

function generatePartyLogoSVG(name, color) {
  const code = name.split('(')[0].trim().slice(0, 3).toUpperCase()
  const bgColor = color || '#3B82F6'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="95" fill="${bgColor}" opacity="0.15"/>
    <circle cx="100" cy="100" r="80" fill="none" stroke="${bgColor}" stroke-width="4"/>
    <text x="100" y="115" font-size="28" font-weight="bold" fill="${bgColor}" text-anchor="middle" font-family="Arial, sans-serif">${code}</text>
  </svg>`
  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;utf8,${encoded}`
}

export default function PartyDetail() {
  const { id } = useParams()
  const party = parties.find(p => p.id === id)

  if (!party) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-xl text-gray-600">Parti non trouvé.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          &larr; Retour à l'accueil
        </Link>
      </main>
    )
  }

  const politicians = getPoliticiansByParty(party.id)
  const stats = getPartyStats(party.id)
  const logoSVG = generatePartyLogoSVG(party.name, party.color)

  const livingPoliticians = politicians.filter(p => !p.deceased)

  const sortedPoliticians = [...livingPoliticians].sort((a, b) => {
    const scoreA = a.convictions * 2 + a.ongoingCases
    const scoreB = b.convictions * 2 + b.ongoingCases
    if (scoreB !== scoreA) return scoreB - scoreA
    return a.name.localeCompare(b.name, 'fr')
  })

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 font-medium transition">
        &larr; Retour à l'accueil
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* En-tête du parti */}
        <div
          className="p-8"
          style={{ borderTop: `6px solid ${party.color}` }}
        >
          <div className="flex items-center gap-6">
            <img
              src={logoSVG}
              alt={party.name}
              className="w-24 h-24 rounded-full flex-shrink-0"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{party.name}</h1>
              <p className="text-lg text-gray-600 mt-1">Chef : {party.leader}</p>
              <p className="text-sm text-gray-500 mt-1">{party.ideology}</p>
              <p className="text-sm text-gray-500">Fondé en {party.founded}</p>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="p-6 border-t">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Statistiques</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-blue-50 p-4 rounded text-center">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Membres</p>
              <p className="text-2xl font-bold text-blue-600">{(party.members / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-green-50 p-4 rounded text-center">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Sièges AN</p>
              <p className="text-2xl font-bold text-green-600">{party.seats}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded text-center">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Personnalités</p>
              <p className="text-2xl font-bold text-indigo-600">{stats.count}</p>
            </div>
            <div className="bg-red-50 p-4 rounded text-center">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Condamnations</p>
              <p className="text-2xl font-bold text-red-600">{stats.totalConvictions}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded text-center">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Affaires en cours</p>
              <p className="text-2xl font-bold text-orange-600">{stats.totalOngoingCases}</p>
            </div>
          </div>

          {/* Indicateur ratio condamnations */}
          {livingPoliticians.length > 0 && (() => {
            const convicted = livingPoliticians.filter(p => p.convictions > 0).length
            const ongoingOnly = livingPoliticians.filter(p => p.convictions === 0 && p.ongoingCases > 0).length
            const clean = livingPoliticians.length - convicted - ongoingOnly
            const pctConvicted = (convicted / livingPoliticians.length * 100).toFixed(1)
            const pctOngoing = (ongoingOnly / livingPoliticians.length * 100).toFixed(1)
            const pctClean = (clean / livingPoliticians.length * 100).toFixed(1)

            return (
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-bold text-gray-700 mb-3">
                  Ratio des membres impliqués (membres actuels)
                </h3>
                {/* Barre de ratio */}
                <div className="flex rounded-full overflow-hidden h-6 bg-gray-200">
                  {convicted > 0 && (
                    <div
                      className="flex items-center justify-center text-xs font-bold text-white transition-all"
                      style={{
                        width: `${Math.max(convicted / livingPoliticians.length * 100, 2)}%`,
                        backgroundColor: '#dc2626'
                      }}
                      title={`${convicted} condamné${convicted > 1 ? 's' : ''} (${pctConvicted}%)`}
                    >
                      {convicted / livingPoliticians.length >= 0.06 && `${pctConvicted}%`}
                    </div>
                  )}
                  {ongoingOnly > 0 && (
                    <div
                      className="flex items-center justify-center text-xs font-bold text-white transition-all"
                      style={{
                        width: `${Math.max(ongoingOnly / livingPoliticians.length * 100, 2)}%`,
                        backgroundColor: '#f97316'
                      }}
                      title={`${ongoingOnly} en cours (${pctOngoing}%)`}
                    >
                      {ongoingOnly / livingPoliticians.length >= 0.06 && `${pctOngoing}%`}
                    </div>
                  )}
                  <div
                    className="flex items-center justify-center text-xs font-bold text-gray-700 transition-all"
                    style={{
                      width: `${clean / livingPoliticians.length * 100}%`,
                      backgroundColor: '#bbf7d0'
                    }}
                    title={`${clean} sans incident (${pctClean}%)`}
                  >
                    {clean / livingPoliticians.length >= 0.06 && `${pctClean}%`}
                  </div>
                </div>
                {/* Légende */}
                <div className="flex flex-wrap gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#dc2626' }} />
                    <span className="text-gray-600">
                      Condamnés : <strong>{convicted}</strong> ({pctConvicted}%)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#f97316' }} />
                    <span className="text-gray-600">
                      Affaires en cours : <strong>{ongoingOnly}</strong> ({pctOngoing}%)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#bbf7d0' }} />
                    <span className="text-gray-600">
                      Sans incident : <strong>{clean}</strong> ({pctClean}%)
                    </span>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>

        {/* Liste des membres */}
        <div className="p-6 border-t">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Membres ({livingPoliticians.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sortedPoliticians.map(pol => {
              const placeholderImage = generatePoliticianImagePlaceholder(pol.name, party.color)
              const hasIncidents = pol.convictions > 0 || pol.ongoingCases > 0
              return (
                <Link
                  key={pol.id}
                  to={`/politician/${pol.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition group"
                >
                  <img
                    src={placeholderImage}
                    alt={pol.name}
                    className="w-12 h-12 rounded-full flex-shrink-0 border-2"
                    style={{ borderColor: party.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition truncate">
                      {pol.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{pol.position}</p>
                  </div>
                  <div className="flex-shrink-0 flex gap-1">
                    {pol.convictions > 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold text-white bg-red-600">
                        {pol.convictions}
                      </span>
                    )}
                    {pol.ongoingCases > 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold text-white bg-orange-500">
                        {pol.ongoingCases}
                      </span>
                    )}
                    {!hasIncidents && (
                      <span className="text-xs text-green-600 font-medium">OK</span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
