import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { parties } from '../data/frenchPolitics'

const INCIDENT_TYPES = [
  { key: 'convictions', label: 'Condamnations', color: '#DC2626' },
  { key: 'ongoingCases', label: 'Affaires en cours', color: '#EA580C' },
  { key: 'enquetes', label: 'Enquêtes', color: '#0284C7' },
  { key: 'misesEnExamen', label: 'Mises en examen', color: '#7C3AED' }
]

export default function PartyStats({ politicians, selectedParty, onPartySelect }) {
  const [activeFilters, setActiveFilters] = useState(
    INCIDENT_TYPES.reduce((acc, t) => ({ ...acc, [t.key]: true }), {})
  )

  const toggleFilter = (key) => {
    setActiveFilters(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const partyIds = [...new Set(politicians.map(p => p.party))]

  const partyStats = useMemo(() => {
    return partyIds.map(partyId => {
      const partyObj = parties.find(p => p.id === partyId)
      const partyPols = politicians.filter(p => p.party === partyId)

      let enquetes = 0
      let misesEnExamen = 0
      partyPols.forEach(pol => {
        const incidents = pol.details?.justiceIncidents || []
        incidents.forEach(inc => {
          const type = inc.type || ''
          if (type.includes('Enquête') || type.includes('Accusation')) {
            enquetes++
          }
          if (type.includes('Mise en examen')) {
            misesEnExamen++
          }
        })
      })

      return {
        partyId,
        partyName: partyObj?.name || partyId,
        color: partyObj?.color || '#999',
        count: partyPols.length,
        convictions: partyPols.reduce((sum, p) => sum + p.convictions, 0),
        ongoingCases: partyPols.reduce((sum, p) => sum + p.ongoingCases, 0),
        enquetes,
        misesEnExamen
      }
    })
  }, [politicians, partyIds])

  const chartData = useMemo(() => {
    return partyStats
      .filter(s => {
        const hasData = INCIDENT_TYPES.some(t => activeFilters[t.key] && s[t.key] > 0)
        return hasData
      })
      .map(s => {
        const shortName = s.partyName.split('(')[0].trim()
        const entry = {
          name: shortName,
          fullName: shortName
        }
        INCIDENT_TYPES.forEach(t => {
          if (activeFilters[t.key]) {
            entry[t.key] = s[t.key]
          }
        })
        return entry
      })
  }, [partyStats, activeFilters])

  const activeTypes = INCIDENT_TYPES.filter(t => activeFilters[t.key])

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistiques par parti</h2>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Incidents de justice par parti</h3>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {INCIDENT_TYPES.map(type => (
            <label
              key={type.key}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={activeFilters[type.key]}
                onChange={() => toggleFilter(type.key)}
                className="w-4 h-4 rounded"
                style={{ accentColor: type.color }}
              />
              <span
                className="text-sm font-medium px-2 py-1 rounded"
                style={{
                  backgroundColor: activeFilters[type.key] ? type.color + '20' : '#f3f4f6',
                  color: activeFilters[type.key] ? type.color : '#6b7280'
                }}
              >
                {type.label}
              </span>
            </label>
          ))}
        </div>

        {/* Chart */}
        {chartData.length > 0 ? (
          <div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ bottom: 20, left: 0, right: 0, top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={false}
                />
                <YAxis allowDecimals={false} />
                <Tooltip
                  labelFormatter={(label) => {
                    const item = chartData.find(d => d.name === label)
                    return item?.fullName || label
                  }}
                />
                <Legend />
                {activeTypes.map(type => (
                  <Bar
                    key={type.key}
                    dataKey={type.key}
                    name={type.label}
                    fill={type.color}
                    stackId="incidents"
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {chartData.map((item) => (
                <div key={item.name} className="bg-gray-50 p-3 rounded border border-gray-200 text-center">
                  <p className="text-sm font-semibold text-gray-900 break-words">{item.fullName}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">Sélectionnez au moins un type d'incident pour afficher le graphique.</p>
        )}
      </div>

      {/* Party Selection */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtrer par parti</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onPartySelect(null)}
            className={`px-4 py-2 rounded font-medium transition ${
              !selectedParty
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Tous les partis
          </button>
          {partyStats.map(stat => (
            <button
              key={stat.partyId}
              onClick={() => onPartySelect(stat.partyId)}
              style={{
                backgroundColor: selectedParty === stat.partyId ? stat.color : '#e5e7eb',
                color: selectedParty === stat.partyId ? 'white' : '#1f2937'
              }}
              className="px-4 py-2 rounded font-medium transition hover:opacity-80"
            >
              {stat.partyName.split('(')[0].trim()} ({stat.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
