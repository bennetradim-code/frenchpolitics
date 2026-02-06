import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { parties } from '../data/frenchPolitics'

export default function PartyStats({ politicians, selectedParty, onPartySelect }) {
  const partyIds = [...new Set(politicians.map(p => p.party))]
  
  const partyStats = partyIds.map(partyId => {
    const partyObj = parties.find(p => p.id === partyId)
    const partyPols = politicians.filter(p => p.party === partyId)
    return {
      partyId,
      partyName: partyObj?.name || partyId,
      color: partyObj?.color || '#999',
      count: partyPols.length,
      convictions: partyPols.reduce((sum, p) => sum + p.convictions, 0),
      ongoingCases: partyPols.reduce((sum, p) => sum + p.ongoingCases, 0)
    }
  })

  const convictionData = partyStats.map(s => ({
    name: s.partyName.split('(')[0].trim(),
    convictions: s.convictions
  }))

  const caseData = partyStats.map(s => ({
    name: s.partyName.split('(')[0].trim(),
    value: s.ongoingCases,
    color: s.color
  }))

  const COLORS = partyStats.map(s => s.color)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistiques par parti</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Histogram - Convictions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Condamnations par parti</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={convictionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="convictions" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Ongoing Cases */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Affaires en cours par parti</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={caseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {caseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
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
