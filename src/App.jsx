import { useState, useMemo } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import PartyStats from './components/PartyStats'
import PoliticiansList from './components/PoliticiansList'
import PartyCard from './components/PartyCard'
import PoliticianDetail from './components/PoliticianDetail'
import PartyDetail from './components/PartyDetail'
import MentionsLegales from './components/MentionsLegales'
import { politicians as politiciansData, parties as partiesData } from './data/frenchPolitics'
import './index.css'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedParty, setSelectedParty] = useState(null)
  const [showParties, setShowParties] = useState(false)
  const [politicians] = useState(() => politiciansData.filter(p => !p.deceased))

  const isSearching = searchTerm.length > 0 || selectedParty !== null

  const filteredPoliticians = useMemo(() => {
    let result = politicians.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesParty = !selectedParty || p.party === selectedParty
      return matchesSearch && matchesParty
    })

    // Sort by most implicated (convictions + ongoing cases)
    result = [...result].sort((a, b) => {
      const scoreA = a.convictions * 2 + a.ongoingCases
      const scoreB = b.convictions * 2 + b.ongoingCases
      return scoreB - scoreA
    })

    // Show only top 20 unless user is searching/filtering
    if (!isSearching) {
      result = result.slice(0, 20)
    }

    return result
  }, [searchTerm, selectedParty, politicians, isSearching])

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
    <>
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link to="/" className="text-4xl font-bold text-gray-900 hover:text-blue-700 transition">
            French Politics Tracker
          </Link>
          <p className="text-gray-600 mt-2">Suivi complet des partis politiques français et des affaires judiciaires des personnalités politiques</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4 text-xs text-amber-800 leading-relaxed">
            <strong>Avertissement :</strong> Ce site est un projet informatif généré et maintenu de manière automatisée
            à l'aide d'outils d'intelligence artificielle. Toute personne mentionnée est <strong>présumée
            innocente</strong> tant qu'elle n'a pas été déclarée coupable par une décision de justice définitive
            (art. 9-1 du Code civil). Malgré les vérifications effectuées, des erreurs peuvent subsister.
            Toute personne concernée peut exercer son <strong>droit de rectification</strong> en
            nous contactant.{' '}
            <Link to="/mentions-legales" className="underline hover:text-amber-900 font-semibold">Mentions légales</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-xs text-gray-600 uppercase tracking-wide">Personnalités</p>
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
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} politicians={politicians} />

        <div className="mb-8">
          <button
            onClick={() => setShowParties(!showParties)}
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            {showParties ? 'Masquer les partis politiques' : 'Afficher les partis politiques'}
          </button>
        </div>

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

        <PoliticiansList politicians={filteredPoliticians} isSearching={isSearching} totalCount={politicians.length} />
      </main>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politician/:id" element={<PoliticianDetail />} />
        <Route path="/party/:id" element={<PartyDetail />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>

      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm">
                <strong>French Politics Tracker</strong> - Données compilées depuis des sources publiques vérifiables.
              </p>
              <p className="text-xs mt-1 text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
            <Link to="/mentions-legales" className="text-sm text-blue-400 hover:text-blue-300 underline transition">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
