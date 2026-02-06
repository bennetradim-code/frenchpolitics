export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Chercher un homme politique..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-6 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
      />
    </div>
  )
}
