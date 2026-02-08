import { Link } from 'react-router-dom'
import { getPartyStats } from '../data/frenchPolitics'
import PartyAvatar from './PartyAvatar'

export default function PartyCard({ party }) {
  const stats = getPartyStats(party.id)

  return (
    <Link
      to={`/party/${party.id}`}
      className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
      style={{ borderTop: `4px solid ${party.color}` }}
    >
      <div className="p-6">
        {/* Logo/Color bar */}
        <div className="mb-4 flex items-center gap-3">
          <PartyAvatar
            name={party.name}
            color={party.color}
            size="sm"
            className="flex-shrink-0"
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
            <p className="text-xs text-gray-600">Personnalités</p>
            <p className="text-lg font-bold text-orange-600">{stats.count}</p>
          </div>
        </div>

        {/* Justice incidents */}
        {stats.totalConvictions > 0 || stats.totalOngoingCases > 0 ? (
          <div className="border-t pt-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Incidents de justice:</p>
            <div className="flex flex-wrap gap-2">
              {stats.totalConvictions > 0 && (
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold text-white bg-red-600">
                  {stats.totalConvictions} condamnation{stats.totalConvictions > 1 ? 's' : ''}
                </span>
              )}
              {stats.totalOngoingCases > 0 && (
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold text-white bg-orange-500">
                  {stats.totalOngoingCases} affaire{stats.totalOngoingCases > 1 ? 's' : ''} en cours
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="border-t pt-4">
            <p className="text-xs text-green-600 font-semibold">✓ Aucun incident de justice</p>
          </div>
        )}
      </div>
    </Link>
  )
}
