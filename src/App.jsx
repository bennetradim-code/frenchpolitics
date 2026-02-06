import { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar'
import PartyStats from './components/PartyStats'
import PoliticiansList from './components/PoliticiansList'
import './index.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedParty, setSelectedParty] = useState(null)
  const [politicians, setPoliticians] = useState([
    {
      id: 1,
      name: 'François Hollande',
      party: 'PS',
      position: 'Ancien Président',
      image: 'https://via.placeholder.com/150',
      convictions: 0,
      ongoingCases: 0,
      details: {
        birthDate: '1965-08-12',
        birthPlace: 'Rouen',
        career: ['Président (2012-2017)', 'Député (1997-2012)', 'Maire de Tulle (1995-2017)']
      }
    },
    {
      id: 2,
      name: 'Nicolas Sarkozy',
      party: 'LR',
      position: 'Ancien Président',
      image: 'https://via.placeholder.com/150',
      convictions: 1,
      ongoingCases: 2,
      details: {
        birthDate: '1955-01-28',
        birthPlace: 'Paris',
        career: ['Président (2007-2012)', 'Ministre de l\'Intérieur', 'Maire de Neuilly']
      }
    },
    {
      id: 3,
      name: 'Jean-Luc Mélenchon',
      party: 'LFI',
      position: 'Chef de parti',
      image: 'https://via.placeholder.com/150',
      convictions: 0,
      ongoingCases: 0,
      details: {
        birthDate: '1951-08-02',
        birthPlace: 'Tangier',
        career: ['Sénateur', 'Député', 'Candidat présidentiel']
      }
    },
    {
      id: 4,
      name: 'Marine Le Pen',
      party: 'RN',
      position: 'Président du RN',
      image: 'https://via.placeholder.com/150',
      convictions: 0,
      ongoingCases: 1,
      details: {
        birthDate: '1968-12-05',
        birthPlace: 'Neuilly-sur-Seine',
        career: ['Avocate', 'Députée', 'Présidente du RN']
      }
    }
  ])

  const filteredPoliticians = useMemo(() => {
    return politicians.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesParty = !selectedParty || p.party === selectedParty
      return matchesSearch && matchesParty
    })
  }, [searchTerm, selectedParty, politicians])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900">French Politics Tracker</h1>
          <p className="text-gray-600 mt-2">Suivi des affaires judiciaires et condamnations des hommes politiques</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <PartyStats
          politicians={politicians}
          selectedParty={selectedParty}
          onPartySelect={setSelectedParty}
        />

        <PoliticiansList politicians={filteredPoliticians} />
      </main>
    </div>
  )
}

export default App
