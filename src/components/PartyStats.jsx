import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { parties } from '../data/frenchPolitics'
import { computeSeverityScore } from '../utils/severityScore'

const INCIDENT_TYPES = [
  { key: 'convictions', label: 'Condamnations', color: '#DC2626' },
  { key: 'misesEnExamen', label: 'Mises en examen', color: '#7C3AED' },
  { key: 'enquetes', label: 'Enquêtes', color: '#0284C7' }
]

export default function PartyStats({ politicians }) {
  const [activeFilters, setActiveFilters] = useState(
    INCIDENT_TYPES.reduce((acc, t) => ({ ...acc, [t.key]: t.key === 'convictions' }), {})
  )

  const toggleFilter = (key) => {
    setActiveFilters(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const partyIds = [...new Set(politicians.map(p => p.party))]

  const partyStats = useMemo(() => {
    return partyIds.map(partyId => {
      const partyObj = parties.find(p => p.id === partyId)
      const partyPols = politicians.filter(p => p.party === partyId)

      // Count persons per exclusive category (same as ratio chart)
      const counts = { convictions: 0, misesEnExamen: 0, enquetes: 0 }
      partyPols.forEach(pol => {
        if (pol.convictions > 0) { counts.convictions++; return }
        const incidents = pol.details?.justiceIncidents || []
        if (incidents.some(inc => (inc.type || '').includes('Mise en examen'))) { counts.misesEnExamen++; return }
        if (incidents.some(inc => (inc.type || '').includes('Enquête') || (inc.type || '').includes('Accusation'))) { counts.enquetes++; return }
      })

      return {
        partyId,
        partyName: partyObj?.name || partyId,
        color: partyObj?.color || '#999',
        count: partyPols.length,
        ...counts
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
        const abbr = s.partyName.match(/\(([^)]+)\)/)?.[1]
        const entry = {
          name: abbr || shortName,
          fullName: shortName
        }
        INCIDENT_TYPES.forEach(t => {
          if (activeFilters[t.key]) {
            entry[t.key] = s[t.key]
          }
        })
        return entry
      })
      .sort((a, b) => (b.convictions || 0) - (a.convictions || 0))
  }, [partyStats, activeFilters])

  const activeTypes = INCIDENT_TYPES.filter(t => activeFilters[t.key])

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistiques par parti</h2>

      {/* Shared filters */}
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

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personnalités impliquées par parti</h3>

        {/* Chart */}
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={Math.max(350, chartData.length * 45)}>
            <BarChart layout="vertical" data={chartData} margin={{ bottom: 5, left: 0, right: 20, top: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis
                dataKey="name"
                type="category"
                width={90}
                interval={0}
                tick={{ fontSize: 13, fill: '#374151' }}
              />
              <XAxis type="number" allowDecimals={false} />
              <Tooltip
                labelFormatter={(label) => {
                  const item = chartData.find(d => d.name === label)
                  return item?.fullName || label
                }}
              />
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
        ) : (
          <p className="text-gray-500 text-center py-8">Sélectionnez au moins un type d'incident pour afficher le graphique.</p>
        )}
      </div>

      {/* Ratio chart */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Ratio des membres impliqués par parti</h3>
        <p className="text-xs text-gray-500 mb-4">Pourcentage de membres impliqués par parti selon les filtres sélectionnés (membres actuels uniquement)</p>

        {(() => {
          const showConvictions = activeFilters.convictions
          const showEnquetes = activeFilters.enquetes
          const showMEX = activeFilters.misesEnExamen

          const ratioData = partyStats
            .filter(s => s.count > 0)
            .map(s => {
              const partyPols = politicians.filter(p => p.party === s.partyId)
              const total = partyPols.length

              // Mutually exclusive buckets (priority: convicted > mex > enquête > clean)
              const counts = { convicted: 0, mex: 0, enquete: 0 }
              partyPols.forEach(p => {
                if (p.convictions > 0) { counts.convicted++; return }
                const incidents = p.details?.justiceIncidents || []
                if (incidents.some(inc => (inc.type || '').includes('Mise en examen'))) { counts.mex++; return }
                if (incidents.some(inc => (inc.type || '').includes('Enquête') || (inc.type || '').includes('Accusation'))) { counts.enquete++; return }
              })

              let involved = 0
              if (showConvictions) involved += counts.convicted
              if (showMEX) involved += counts.mex
              if (showEnquetes) involved += counts.enquete
              const clean = total - involved
              const abbr = s.partyName.match(/\(([^)]+)\)/)?.[1] || s.partyName.split('(')[0].trim()

              const pctInvolved = +(involved / total * 100).toFixed(1)
              const abbr2 = abbr
              const entry = {
                name: abbr2,
                fullName: s.partyName.split('(')[0].trim(),
                total,
                pctInvolved,
                pctClean: +(100 - pctInvolved).toFixed(1)
              }
              if (showConvictions) entry.pctConvictions = +(counts.convicted / total * 100).toFixed(1)
              if (showMEX) entry.pctMEX = +(counts.mex / total * 100).toFixed(1)
              if (showEnquetes) entry.pctEnquetes = +(counts.enquete / total * 100).toFixed(1)
              return entry
            })
            .filter(d => d.pctInvolved > 0)
            .sort((a, b) => b.pctInvolved - a.pctInvolved)

          const hasAnyFilter = showConvictions || showEnquetes || showMEX

          const ratioBars = [
            { key: 'pctConvictions', label: 'Condamnés', color: '#DC2626', show: showConvictions },
            { key: 'pctMEX', label: 'Mises en examen', color: '#7C3AED', show: showMEX },
            { key: 'pctEnquetes', label: 'Enquêtes', color: '#0284C7', show: showEnquetes }
          ].filter(b => b.show)

          return hasAnyFilter ? (
            <>
              <ResponsiveContainer width="100%" height={Math.max(350, ratioData.length * 45)}>
                <BarChart layout="vertical" data={ratioData} margin={{ bottom: 5, left: 0, right: 20, top: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={90}
                    interval={0}
                    tick={{ fontSize: 13, fill: '#374151' }}
                  />
                  <XAxis type="number" domain={[0, 100]} unit="%" allowDecimals={false} />
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, name]}
                    labelFormatter={(label) => {
                      const item = ratioData.find(d => d.name === label)
                      return item ? `${item.fullName} (${item.total} membres)` : label
                    }}
                  />
                  {ratioBars.map(b => (
                    <Bar key={b.key} dataKey={b.key} name={b.label} fill={b.color} stackId="ratio" />
                  ))}
                  <Bar dataKey="pctClean" name="Sans incident" fill="#86efac" stackId="ratio" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-3 text-xs justify-center">
                {ratioBars.map(b => (
                  <div key={b.key} className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: b.color }} />
                    <span className="text-gray-600">{b.label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#86efac' }} />
                  <span className="text-gray-600">Sans incident</span>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center py-8">Sélectionnez au moins un type d'incident pour afficher le graphique.</p>
          )
        })()}
      </div>

      {/* Severity chart */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Score de sévérité moyen par parti</h3>
        <p className="text-xs text-gray-500 mb-4">
          Basé sur les peines prononcées : (prison ferme × 10) + (sursis × 3) + (inéligibilité × 5) + (log₁₀(amende) × 2).
          Seules les condamnations définitives sont comptées. Score divisé par le nombre de personnalités référencées.
        </p>

        {(() => {
          const severityData = partyStats
            .filter(s => s.count > 0)
            .map(s => {
              const partyPols = politicians.filter(p => p.party === s.partyId)
              let total = 0
              let convicted = 0
              partyPols.forEach(pol => {
                const score = computeSeverityScore(pol).total
                if (score > 0) convicted++
                total += score
              })
              const average = Math.round((total / partyPols.length) * 10) / 10
              const abbr = s.partyName.match(/\(([^)]+)\)/)?.[1] || s.partyName.split('(')[0].trim()
              return {
                name: abbr,
                fullName: s.partyName.split('(')[0].trim(),
                average,
                total,
                count: partyPols.length,
                convicted,
                color: s.color
              }
            })
            .filter(s => s.average > 0)
            .sort((a, b) => b.average - a.average)

          if (severityData.length === 0) {
            return <p className="text-gray-500 text-center py-8">Aucune condamnation définitive enregistrée.</p>
          }

          return (
            <ResponsiveContainer width="100%" height={Math.max(300, severityData.length * 50)}>
              <BarChart layout="vertical" data={severityData} margin={{ bottom: 5, left: 0, right: 20, top: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={90}
                  interval={0}
                  tick={{ fontSize: 13, fill: '#374151' }}
                />
                <XAxis type="number" allowDecimals={false} />
                <Tooltip
                  formatter={(value, name, props) => {
                    const d = props.payload
                    return [`${value} pts/pers. (total: ${d.total} pts, ${d.convicted} condamné${d.convicted > 1 ? 's' : ''} / ${d.count} pers.)`, 'Sévérité moyenne']
                  }}
                  labelFormatter={(label) => {
                    const item = severityData.find(d => d.name === label)
                    return item?.fullName || label
                  }}
                />
                <Bar
                  dataKey="average"
                  name="Sévérité moyenne"
                  fill="#dc2626"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          )
        })()}
      </div>

    </div>
  )
}
