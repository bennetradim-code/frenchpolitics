import { useState, useEffect } from 'react'

const photoCache = new Map()
const pendingFetches = new Map()

async function fetchWikipediaPhoto(name) {
  const title = name.replace(/ /g, '_')
  const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`

  try {
    const response = await fetch(url, {
      headers: { 'Api-User-Agent': 'FrenchPoliticsTracker/1.0' }
    })
    if (!response.ok) return null
    const data = await response.json()
    return data.thumbnail?.source || null
  } catch {
    return null
  }
}

export function useWikipediaPhoto(name) {
  const [photoUrl, setPhotoUrl] = useState(() => {
    if (!name) return null
    if (photoCache.has(name)) return photoCache.get(name)
    return undefined
  })
  const [isLoading, setIsLoading] = useState(() => !!name && !photoCache.has(name))

  useEffect(() => {
    if (!name) {
      setPhotoUrl(null)
      setIsLoading(false)
      return
    }

    if (photoCache.has(name)) {
      setPhotoUrl(photoCache.get(name))
      setIsLoading(false)
      return
    }

    let cancelled = false

    async function load() {
      setIsLoading(true)

      let promise = pendingFetches.get(name)
      if (!promise) {
        promise = fetchWikipediaPhoto(name)
        pendingFetches.set(name, promise)
      }

      const result = await promise
      photoCache.set(name, result)
      pendingFetches.delete(name)

      if (!cancelled) {
        setPhotoUrl(result)
        setIsLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [name])

  return { photoUrl: photoUrl ?? null, isLoading }
}
