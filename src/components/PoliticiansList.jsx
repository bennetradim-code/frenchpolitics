import PoliticianCard from './PoliticianCard'

export default function PoliticiansList({ politicians, isSearching, totalCount }) {
  if (politicians.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Aucun résultat trouvé.</p>
      </div>
    )
  }

  const title = isSearching
    ? `Personnalités politiques (${politicians.length} résultat${politicians.length > 1 ? 's' : ''})`
    : `Top 20 des personnalités les plus impliquées`

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {!isSearching && (
        <p className="text-sm text-gray-500 mb-6">
          Sur {totalCount} personnalités au total — utilisez la recherche pour trouver les autres
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {politicians.map(politician => (
          <PoliticianCard key={politician.id} politician={politician} />
        ))}
      </div>
    </div>
  )
}
