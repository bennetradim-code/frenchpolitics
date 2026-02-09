import { useParams, Link } from 'react-router-dom'
import { parties, getPoliticiansByParty, getPartyStats } from '../data/frenchPolitics'
import { computeSeverityScore, computePartySeverity, getSeverityColor } from '../utils/severityScore'
import PoliticianAvatar from './PoliticianAvatar'
import PartyAvatar from './PartyAvatar'

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

  const livingPoliticians = politicians.filter(p => !p.deceased)

  const severity = computePartySeverity(livingPoliticians)

  const sortedPoliticians = [...livingPoliticians].sort((a, b) => {
    const scoreA = computeSeverityScore(a).total + a.ongoingCases * 10
    const scoreB = computeSeverityScore(b).total + b.ongoingCases * 10
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
            <PartyAvatar
              name={party.name}
              color={party.color}
              size="lg"
              className="flex-shrink-0"
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            <div className="bg-gray-50 p-4 rounded" title={`Score total : ${severity.total} pts / ${severity.count} personnalités`}>
              <p className="text-xs text-gray-600 uppercase tracking-wide text-center">Sévérité moy.</p>
              <p className="text-2xl font-bold text-center" style={{ color: getSeverityColor(severity.average) }}>{severity.average}</p>
              <div className="w-full bg-green-100 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min((severity.average / 50) * 100, 100)}%`,
                    backgroundColor: getSeverityColor(severity.average)
                  }}
                />
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-1">pts / personnalité ({severity.convicted} condamné{severity.convicted > 1 ? 's' : ''})</p>
            </div>
          </div>

          {/* Indicateur ratio condamnations */}
          {livingPoliticians.length > 0 && (() => {
            const total = livingPoliticians.length
            // Mutually exclusive buckets (priority: convicted > mex > enquête > clean)
            let convicted = 0, mex = 0, enquete = 0
            livingPoliticians.forEach(p => {
              if (p.convictions > 0) { convicted++; return }
              const incidents = p.details?.justiceIncidents || []
              if (incidents.some(inc => (inc.type || '').includes('Mise en examen'))) { mex++; return }
              if (incidents.some(inc => (inc.type || '').includes('Enquête') || (inc.type || '').includes('Accusation'))) { enquete++; return }
            })
            const clean = total - convicted - mex - enquete
            const pctConvicted = (convicted / total * 100).toFixed(1)
            const pctMEX = (mex / total * 100).toFixed(1)
            const pctEnquete = (enquete / total * 100).toFixed(1)
            const pctClean = (clean / total * 100).toFixed(1)

            const segments = [
              { count: convicted, pct: pctConvicted, color: '#dc2626', label: 'Condamnés' },
              { count: mex, pct: pctMEX, color: '#7C3AED', label: 'Mises en examen' },
              { count: enquete, pct: pctEnquete, color: '#0284C7', label: 'Enquêtes' }
            ]

            return (
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-bold text-gray-700 mb-3">
                  Ratio des membres impliqués (personnalités référencées)
                </h3>
                {/* Barre de ratio */}
                <div className="flex rounded-full overflow-hidden h-6 bg-gray-200">
                  {segments.map(s => s.count > 0 && (
                    <div
                      key={s.label}
                      className="flex items-center justify-center text-xs font-bold text-white transition-all"
                      style={{
                        width: `${Math.max(s.count / total * 100, 2)}%`,
                        backgroundColor: s.color
                      }}
                      title={`${s.count} ${s.label.toLowerCase()} (${s.pct}%)`}
                    >
                      {s.count / total >= 0.06 && `${s.pct}%`}
                    </div>
                  ))}
                  <div
                    className="flex items-center justify-center text-xs font-bold text-gray-700 transition-all"
                    style={{
                      width: `${clean / total * 100}%`,
                      backgroundColor: '#bbf7d0'
                    }}
                    title={`${clean} sans incident (${pctClean}%)`}
                  >
                    {clean / total >= 0.06 && `${pctClean}%`}
                  </div>
                </div>
                {/* Légende */}
                <div className="flex flex-wrap gap-4 mt-3 text-xs">
                  {segments.map(s => (
                    <div key={s.label} className="flex items-center gap-1.5">
                      <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="text-gray-600">
                        {s.label} : <strong>{s.count}</strong> ({s.pct}%)
                      </span>
                    </div>
                  ))}
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
              const hasIncidents = pol.convictions > 0 || pol.ongoingCases > 0
              return (
                <Link
                  key={pol.id}
                  to={`/politician/${pol.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition group"
                >
                  <PoliticianAvatar
                    name={pol.name}
                    partyColor={party.color}
                    size="md"
                    className="flex-shrink-0"
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
