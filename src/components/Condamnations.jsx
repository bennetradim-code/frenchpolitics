import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { politicians as politiciansData, getPartyById, parties } from '../data/frenchPolitics'
import { CONVICTION_CATEGORIES, getAllConvictions, countConvictionsByCategory } from '../utils/convictionCategories'
import { computeSeverityScore } from '../utils/severityScore'
import PoliticianAvatar from './PoliticianAvatar'
import SeverityStamp from './SeverityStamp'

const PAGE_SIZE = 30

export default function Condamnations() {
  const navigate = useNavigate()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedCategories, setSelectedCategories] = useState(() =>
    Object.keys(CONVICTION_CATEGORIES)
  )
  const sentinelRef = useRef(null)

  // Récupérer toutes les condamnations filtrées par catégories
  const allConvictions = useMemo(() => {
    const convictions = getAllConvictions(politiciansData)

    // Filtrer par catégories sélectionnées
    const filtered = convictions.filter(c =>
      c.categories.some(cat => selectedCategories.includes(cat))
    )

    // Trier par score de sévérité du politicien
    return filtered.sort((a, b) => {
      const scoreA = computeSeverityScore(a.politician).total
      const scoreB = computeSeverityScore(b.politician).total
      if (scoreA !== scoreB) return scoreB - scoreA
      return a.politician.name.localeCompare(b.politician.name, 'fr')
    })
  }, [selectedCategories])

  // Stats par parti
  const partyStats = useMemo(() => {
    const stats = parties
      .map(party => ({
        party,
        count: countConvictionsByCategory(politiciansData, party.id, selectedCategories)
      }))
      .filter(s => s.count > 0)
      .sort((a, b) => b.count - a.count)

    return stats
  }, [selectedCategories])

  const visibleConvictions = allConvictions.slice(0, visibleCount)
  const hasMore = visibleCount < allConvictions.length

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, allConvictions.length))
  }, [allConvictions.length])

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [selectedCategories])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore()
      },
      { rootMargin: '200px' }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        // Ne pas désélectionner si c'est la dernière catégorie
        if (prev.length === 1) return prev
        return prev.filter(c => c !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  const selectAll = () => {
    setSelectedCategories(Object.keys(CONVICTION_CATEGORIES))
  }

  const deselectAll = () => {
    // Garder au moins une catégorie sélectionnée
    setSelectedCategories([Object.keys(CONVICTION_CATEGORIES)[0]])
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 font-medium transition cursor-pointer">
        &larr; Retour
      </button>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Condamnations par catégorie</h1>
        <p className="text-gray-600">
          Analyse thématique des {allConvictions.length} condamnations définitives recensées
        </p>
      </div>

      {/* Filtres par catégorie */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Filtrer par catégorie</h2>
          <div className="flex gap-2">
            <button
              onClick={selectAll}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Tout sélectionner
            </button>
            <span className="text-gray-300">·</span>
            <button
              onClick={deselectAll}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Tout désélectionner
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.values(CONVICTION_CATEGORIES).map(category => {
            const isSelected = selectedCategories.includes(category.id)
            return (
              <label
                key={category.id}
                className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCategory(category.id)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {category.label}
                    </span>
                  </div>
                </div>
              </label>
            )
          })}
        </div>
      </div>

      {/* Stats par parti */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Condamnations par parti</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Parti</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Condamnations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {partyStats.map(({ party, count }) => (
                <tr key={party.id} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-4">
                    <Link
                      to={`/party/${party.id}`}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: party.color }}
                      />
                      <span className="font-medium">{party.name}</span>
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center justify-center min-w-[2rem] h-6 px-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold">
                      {count}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Liste des condamnations */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Liste des condamnations
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {allConvictions.length} condamnation{allConvictions.length > 1 ? 's' : ''}
            {selectedCategories.length < Object.keys(CONVICTION_CATEGORIES).length &&
              ` dans ${selectedCategories.length} catégorie${selectedCategories.length > 1 ? 's' : ''}`
            }
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {visibleConvictions.map((conviction, index) => {
            const { politician, incident, categories } = conviction
            const party = getPartyById(politician.party)

            return (
              <div
                key={`${politician.id}-${index}`}
                className="px-4 py-4 hover:bg-blue-50 transition"
              >
                <Link
                  to={`/politician/${politician.id}`}
                  className="flex items-start gap-3 group"
                >
                  <PoliticianAvatar
                    name={politician.name}
                    partyColor={party?.color || '#6b7280'}
                    size="sm"
                    className="flex-shrink-0 mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                        {politician.name}
                      </p>
                      {party && (
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: `${party.color}15`,
                            color: party.color
                          }}
                        >
                          {party.name}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                      {incident.description}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap">
                      {incident.date && (
                        <span className="text-xs text-gray-500">
                          {incident.date}
                        </span>
                      )}
                      {categories.map(catId => {
                        const category = CONVICTION_CATEGORIES[catId]
                        return (
                          <span
                            key={catId}
                            className="text-xs px-2 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: category.color }}
                          >
                            {category.label}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <SeverityStamp politician={politician} size="sm" />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {hasMore && (
          <div ref={sentinelRef} className="py-6 text-center text-sm text-gray-400">
            Chargement...
          </div>
        )}

        {!hasMore && allConvictions.length > 0 && (
          <div className="py-4 text-center text-xs text-gray-400">
            Fin de la liste — {allConvictions.length} condamnation{allConvictions.length > 1 ? 's' : ''}
          </div>
        )}

        {allConvictions.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            Aucune condamnation trouvée pour les catégories sélectionnées
          </div>
        )}
      </div>
    </main>
  )
}
