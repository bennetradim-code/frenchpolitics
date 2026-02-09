import { Link } from 'react-router-dom'
import { getPartyStats, getPoliticiansByParty } from '../data/frenchPolitics'
import { computePartySeverity, getSeverityColor } from '../utils/severityScore'
import PartyAvatar from './PartyAvatar'

export default function PartyCard({ party }) {
  const stats = getPartyStats(party.id)
  const severity = computePartySeverity(getPoliticiansByParty(party.id).filter(p => !p.deceased))

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
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-green-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">Sièges</p>
            <p className="text-lg font-bold text-green-600">{party.seats}</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">Personnalités</p>
            <p className="text-lg font-bold text-indigo-600">{stats.count}</p>
          </div>
        </div>

        {/* Justice stamp */}
        <div className="border-t pt-4">
          {stats.totalConvictions > 0 || stats.totalOngoingCases > 0 ? (
            <div className="flex items-center gap-3">
              {severity.average > 0 && (
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded font-bold flex-shrink-0"
                  style={{
                    border: `2.5px solid ${getSeverityColor(severity.average)}`,
                    color: getSeverityColor(severity.average),
                    backgroundColor: getSeverityColor(severity.average) + '15',
                    fontSize: '14px',
                    lineHeight: 1.2,
                    transform: 'rotate(-2deg)',
                  }}
                  title={`Score total : ${severity.total} pts / ${severity.count} personnalités`}
                >
                  {severity.average}
                  <span style={{ fontSize: '10px', fontWeight: 600 }}>pts/pers.</span>
                </span>
              )}
              <div className="flex flex-wrap gap-1.5 text-xs text-gray-600">
                {stats.totalConvictions > 0 && (
                  <span>{stats.totalConvictions} condamnation{stats.totalConvictions > 1 ? 's' : ''}</span>
                )}
                {stats.totalConvictions > 0 && stats.totalOngoingCases > 0 && <span>·</span>}
                {stats.totalOngoingCases > 0 && (
                  <span>{stats.totalOngoingCases} affaire{stats.totalOngoingCases > 1 ? 's' : ''} en cours</span>
                )}
              </div>
            </div>
          ) : (
            <p className="text-xs text-green-600 font-semibold">Aucun incident de justice</p>
          )}
        </div>
      </div>
    </Link>
  )
}
