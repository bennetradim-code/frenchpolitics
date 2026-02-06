import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function PartyStats({ politicians, selectedParty, onPartySelect }) {
  const parties = [...new Set(politicians.map(p => p.party))]
  
  const partyStats = parties.map(party => {
    const partyPols = politicians.filter(p => p.party === party)
    return {
      party,
      count: partyPols.length,
      convictions: partyPols.reduce((sum, p) => sum + p.convictions, 0),
      ongoingCases: partyPols.reduce((sum, p) => sum + p.ongoingCases, 0)
    }
  })

  const convictionData = parties.map(party => {
    const partyPols = politicians.filter(p => p.party === party)
    return {
      name: party,
      convictions: partyPols.reduce((sum, p) => sum + p.convictions, 0)
    }
  })

  const caseData = partyStats.map(s => ({
    name: s.party,
    value: s.ongoingCases
  }))

  const COLORS = ['#3B82F6', '#EF4444', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981']

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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="convictions" fill="#3B82F6" />
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
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
          {parties.map(party => (
            <button
              key={party}
              onClick={() => onPartySelect(party)}
              className={`px-4 py-2 rounded font-medium transition ${
                selectedParty === party
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {party}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
