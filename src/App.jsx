import { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar'
import PartyStats from './components/PartyStats'
import PoliticiansList from './components/PoliticiansList'
import PartyCard from './components/PartyCard'
import { politicians as politiciansData, parties as partiesData } from './data/frenchPolitics'
import './index.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedParty, setSelectedParty] = useState(null)
  const [showParties, setShowParties] = useState(false)
  const [politicians] = useState(politiciansData)

  const filteredPoliticians = useMemo(() => {
    return politicians.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesParty = !selectedParty || p.party === selectedParty
      return matchesSearch && matchesParty
    })
  }, [searchTerm, selectedParty, politicians])

  const visibleParties = useMemo(() => {
    return partiesData.filter(party => 
      politicians.some(p => p.party === party.id)
    )
  }, [politicians])

  const totalStats = useMemo(() => {
    return {
      politicians: politicians.length,
      convictions: politicians.reduce((sum, p) => sum + p.convictions, 0),
      ongoingCases: politicians.reduce((sum, p) => sum + p.ongoingCases, 0),
      withIncidents: politicians.filter(p => p.convictions > 0 || p.ongoingCases > 0).length
    }
  }, [politicians])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900">🇫🇷 French Politics Tracker</h1>
          <p className="text-gray-600 mt-2">Suivi complet des partis politiques français et des affaires judiciaires des hommes politiques</p>
          
          {/* Global Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Politiciens</p>
              <p className="text-3xl font-bold text-blue-600">{totalStats.politicians}</p>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Condamnations</p>
              <p className="text-3xl font-bold text-red-600">{totalStats.convictions}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Affaires en cours</p>
              <p className="text-3xl font-bold text-orange-600">{totalStats.ongoingCases}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Avec incidents</p>
              <p className="text-3xl font-bold text-purple-600">{totalStats.withIncidents}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        {/* Parties Overview Toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowParties(!showParties)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-md"
          >
            {showParties ? '📋 Masquer les partis politiques' : '📊 Afficher les partis politiques'}
          </button>
        </div>

        {/* Parties Section */}
        {showParties && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partis Politiques Français</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleParties.map(party => (
                <PartyCard key={party.id} party={party} />
              ))}
            </div>
          </div>
        )}
        
        <PartyStats
          politicians={politicians}
          selectedParty={selectedParty}
          onPartySelect={setSelectedParty}
        />

        <PoliticiansList politicians={filteredPoliticians} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm">
            📊 <strong>French Politics Tracker</strong> - Données compilées depuis Wikipedia, Wikimedia Commons, et sources gouvernementales officielles.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')} | Source des images: Wikimedia Commons (domaine public)
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
