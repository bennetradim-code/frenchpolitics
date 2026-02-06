import PoliticianCard from './PoliticianCard'

export default function PoliticiansList({ politicians }) {
  if (politicians.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Aucun résultat trouvé.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Hommes politiques ({politicians.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {politicians.map(politician => (
          <PoliticianCard key={politician.id} politician={politician} />
        ))}
      </div>
    </div>
  )
}
