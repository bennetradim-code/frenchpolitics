import { useMemo } from 'react'
import { useWikipediaPhoto } from '../hooks/useWikipediaPhoto'
import { generatePartyLogoPlaceholder } from '../utils/imageGenerator'

const sizeClasses = { sm: 'w-12 h-12', lg: 'w-24 h-24' }

function cleanPartyName(name) {
  return name.replace(/\s*\(.*?\)\s*/g, '').trim()
}

export default function PartyAvatar({ name, color, size = 'sm', className = '' }) {
  const wikiName = useMemo(() => cleanPartyName(name), [name])
  const { photoUrl, isLoading } = useWikipediaPhoto(wikiName)
  const fallback = useMemo(
    () => generatePartyLogoPlaceholder(name, color),
    [name, color]
  )

  return (
    <img
      src={photoUrl || fallback}
      alt={name}
      className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      style={{
        backgroundColor: isLoading ? `${color}22` : 'transparent',
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}
