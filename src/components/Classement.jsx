import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { politicians as politiciansData, getPartyById } from '../data/frenchPolitics'
import { computeSeverityScore } from '../utils/severityScore'
import PoliticianAvatar from './PoliticianAvatar'
import SeverityStamp from './SeverityStamp'

const PAGE_SIZE = 30

export default function Classement() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const sentinelRef = useRef(null)

  const rankedPoliticians = useMemo(() => {
    const living = politiciansData.filter(p => !p.deceased)
    return [...living]
      .map(p => ({ ...p, _severity: computeSeverityScore(p).total }))
      .filter(p => p._severity > 0)
      .sort((a, b) => {
        if (a._severity !== b._severity) return b._severity - a._severity
        return a.name.localeCompare(b.name, 'fr')
      })
  }, [])

  const visiblePoliticians = rankedPoliticians.slice(0, visibleCount)
  const hasMore = visibleCount < rankedPoliticians.length

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, rankedPoliticians.length))
  }, [rankedPoliticians.length])

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

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 font-medium transition">
        &larr; Retour à l'accueil
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-900">Classement par sévérité</h1>
          <p className="text-sm text-gray-500 mt-1">
            {rankedPoliticians.length} personnalités condamnées, classées par score de sévérité décroissant.
            Le score est calculé à partir des peines prononcées lors de condamnations définitives.
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {visiblePoliticians.map((pol, index) => {
            const party = getPartyById(pol.party)
            return (
              <Link
                key={pol.id}
                to={`/politician/${pol.id}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition group"
              >
                <span className="w-8 text-right text-sm font-mono text-gray-400 flex-shrink-0">
                  {index + 1}
                </span>
                <PoliticianAvatar
                  name={pol.name}
                  partyColor={party?.color || '#6b7280'}
                  size="sm"
                  className="flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition truncate">
                    {pol.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="truncate">{pol.position}</span>
                    {party && (
                      <>
                        <span className="text-gray-300">·</span>
                        <span
                          className="font-medium flex-shrink-0"
                          style={{ color: party.color }}
                        >
                          {party.name}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <SeverityStamp politician={pol} size="sm" />
              </Link>
            )
          })}
        </div>

        {hasMore && (
          <div ref={sentinelRef} className="py-6 text-center text-sm text-gray-400">
            Chargement...
          </div>
        )}

        {!hasMore && (
          <div className="py-4 text-center text-xs text-gray-400">
            Fin du classement — {rankedPoliticians.length} personnalités
          </div>
        )}
      </div>
    </main>
  )
}
