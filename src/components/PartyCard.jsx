import { getPartyStats } from '../data/frenchPolitics'

/**
 * Generate a placeholder SVG logo for a party
 */
function generatePartyLogoSVG(name, color) {
  const code = name.split('(')[0].trim().slice(0, 3).toUpperCase()
  const bgColor = color || '#3B82F6'
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="95" fill="${bgColor}" opacity="0.15"/>
    <circle cx="100" cy="100" r="80" fill="none" stroke="${bgColor}" stroke-width="4"/>
    <text x="100" y="115" font-size="28" font-weight="bold" fill="${bgColor}" text-anchor="middle" font-family="Arial, sans-serif">${code}</text>
  </svg>`
  
  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;utf8,${encoded}`
}

export default function PartyCard({ party }) {
  const stats = getPartyStats(party.id)
  const partyLogoSVG = generatePartyLogoSVG(party.name, party.color)

  return (
    <div 
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
      style={{ borderTop: `4px solid ${party.color}` }}
    >
      <div className="p-6">
        {/* Logo/Color bar */}
        <div className="mb-4 flex items-center gap-3">
          <img 
            src={partyLogoSVG}
            alt={party.name}
            className="w-12 h-12 rounded flex-shrink-0"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{party.name}</h3>
            <p className="text-sm text-gray-600">Chef: {party.leader}</p>
          </div>
        </div>

        {/* Ideology */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <strong>Idéologie:</strong> {party.ideology}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Fondé:</strong> {party.founded}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-blue-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">Membres</p>
            <p className="text-lg font-bold text-blue-600">{(party.members / 1000).toFixed(0)}K</p>
          </div>
          <div className="bg-green-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">Sièges</p>
            <p className="text-lg font-bold text-green-600">{party.seats}</p>
          </div>
          <div className="bg-orange-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">Politique</p>
            <p className="text-lg font-bold text-orange-600">{stats.count}</p>
          </div>
        </div>

        {/* Justice incidents */}
        {stats.totalConvictions > 0 || stats.totalOngoingCases > 0 ? (
          <div className="border-t pt-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Incidents de justice:</p>
            <div className="flex gap-2">
              {stats.totalConvictions > 0 && (
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-red-600">
                    {stats.totalConvictions} condamnation{stats.totalConvictions > 1 ? 's' : ''}
                  </span>
                </div>
              )}
              {stats.totalOngoingCases > 0 && (
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-orange-600">
                    {stats.totalOngoingCases} affaire{stats.totalOngoingCases > 1 ? 's' : ''} en cours
                  </span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {stats.percentageWithIncidents}% des politiciens du parti avec incidents
            </p>
          </div>
        ) : (
          <div className="border-t pt-4">
            <p className="text-xs text-green-600 font-semibold">✓ Aucun incident de justice</p>
          </div>
        )}
      </div>
    </div>
  )
}
