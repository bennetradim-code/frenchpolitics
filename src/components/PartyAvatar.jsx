import { useMemo } from 'react'
import { useWikipediaPhoto } from '../hooks/useWikipediaPhoto'
import { generatePartyLogoPlaceholder } from '../utils/imageGenerator'

const sizeClasses = { sm: 'w-12 h-12', lg: 'w-24 h-24' }

// Mapping des noms de partis vers leur titre Wikipedia exact
const wikiTitleOverrides = {
  'Rassemblement National (RN)': 'Rassemblement national',
  'Les Républicains (LR)': 'Les Républicains',
  'Parti Socialiste (PS)': 'Parti socialiste (France)',
  'La France Insoumise (LFI)': 'La France insoumise',
  'Ensemble pour la République': 'Ensemble (coalition)',
  'MoDem': 'Mouvement démocrate (France)',
  'Europe Écologie Les Verts (EELV)': 'Europe Écologie Les Verts',
  'Nouveau Parti Anticapitaliste (NPA)': 'Nouveau Parti anticapitaliste',
  'Parti Communiste Français (PCF)': 'Parti communiste français',
  'Agir, la droite constructive': 'Agir, la droite constructive',
  'Union des Démocrates et Indépendants (UDI)': 'Union des démocrates et indépendants',
  'Horizons (HOR)': 'Horizons (parti politique)',
  'LIOT (Libertés, Indépendants, Outre-mer et Territoires)': 'Libertés, Indépendants, Outre-mer et Territoires',
  'Union des droites pour la République (UDR)': 'Union des droites pour la République',
}

function getWikiTitle(name) {
  return wikiTitleOverrides[name] || name.replace(/\s*\(.*?\)\s*/g, '').trim()
}

export default function PartyAvatar({ name, color, size = 'sm', className = '' }) {
  const wikiName = useMemo(() => getWikiTitle(name), [name])
  const { photoUrl, isLoading } = useWikipediaPhoto(wikiName)
  const fallback = useMemo(
    () => generatePartyLogoPlaceholder(name, color),
    [name, color]
  )

  return (
    <img
      src={photoUrl || fallback}
      alt={name}
      className={`${sizeClasses[size]} rounded-lg object-contain ${className}`}
      style={{
        backgroundColor: isLoading ? `${color}22` : (photoUrl ? 'white' : 'transparent'),
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}
