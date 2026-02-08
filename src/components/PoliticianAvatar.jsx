import { useMemo } from 'react'
import { useWikipediaPhoto } from '../hooks/useWikipediaPhoto'
import { generatePoliticianImagePlaceholder } from '../utils/imageGenerator'

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-48 h-48',
  card: 'w-full h-full',
}

const defaultBorders = { sm: '2px', md: '2px', lg: '4px', card: '0px' }

export default function PoliticianAvatar({
  name,
  partyColor,
  size = 'md',
  shape = 'circle',
  borderWidth,
  className = '',
}) {
  const { photoUrl, isLoading } = useWikipediaPhoto(name)
  const fallback = useMemo(
    () => generatePoliticianImagePlaceholder(name, partyColor),
    [name, partyColor]
  )

  const roundedClass = shape === 'circle' ? 'rounded-full' : ''
  const actualBorder = borderWidth ?? defaultBorders[size]

  return (
    <img
      src={photoUrl || fallback}
      alt={name}
      className={`${sizeClasses[size]} ${roundedClass} object-cover ${className}`}
      style={{
        borderWidth: actualBorder,
        borderStyle: actualBorder !== '0px' ? 'solid' : 'none',
        borderColor: partyColor,
        backgroundColor: isLoading ? `${partyColor}22` : 'transparent',
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}
