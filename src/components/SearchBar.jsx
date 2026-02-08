import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPartyById } from '../data/frenchPolitics'
import PoliticianAvatar from './PoliticianAvatar'

export default function SearchBar({ searchTerm, onSearchChange, politicians }) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const navigate = useNavigate()
  const wrapperRef = useRef(null)

  const suggestions = searchTerm.length >= 1
    ? (politicians || []).filter(p => {
        const term = searchTerm.toLowerCase()
        const party = getPartyById(p.party)
        return (
          p.name.toLowerCase().includes(term) ||
          (party?.name || '').toLowerCase().includes(term) ||
          p.position.toLowerCase().includes(term)
        )
      }).slice(0, 8)
    : []

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setHighlightIndex(-1)
  }, [searchTerm])

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightIndex(prev => Math.min(prev + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      e.preventDefault()
      navigateTo(suggestions[highlightIndex])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  function navigateTo(politician) {
    setIsOpen(false)
    onSearchChange('')
    navigate(`/politician/${politician.id}`)
  }

  return (
    <div className="mb-8 relative" ref={wrapperRef}>
      <input
        type="text"
        placeholder="Chercher une personnalité politique..."
        value={searchTerm}
        onChange={(e) => {
          onSearchChange(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => { if (searchTerm.length >= 1) setIsOpen(true) }}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
      />

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {suggestions.map((p, idx) => {
            const party = getPartyById(p.party)
            return (
              <button
                key={p.id}
                onClick={() => navigateTo(p)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition ${
                  idx === highlightIndex ? 'bg-blue-50' : ''
                }`}
              >
                <PoliticianAvatar
                  name={p.name}
                  partyColor={party?.color || '#999'}
                  size="sm"
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-500">
                    {party?.name || p.party} — {p.position}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
