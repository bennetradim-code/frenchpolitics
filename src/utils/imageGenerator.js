/**
 * Generate placeholder SVG images for politicians
 * This ensures images always load, with proper fallback styling
 */

export function generatePoliticianImagePlaceholder(name, color = '#3B82F6') {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  const bgColor = color || '#3B82F6'
  
  // Create SVG with initials - using data URI encoding
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="${bgColor}"/><text x="100" y="120" font-size="60" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial, sans-serif">${initials}</text></svg>`
  
  // URL encode and create data URI
  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;utf8,${encoded}`
}

/**
 * Generate party logo placeholder
 */
export function generatePartyLogoPlaceholder(name, color = '#3B82F6') {
  const code = name.slice(0, 3).toUpperCase()
  const bgColor = color || '#3B82F6'
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="${bgColor}" opacity="0.15"/><circle cx="100" cy="100" r="80" fill="none" stroke="${bgColor}" stroke-width="4"/><text x="100" y="115" font-size="28" font-weight="bold" fill="${bgColor}" text-anchor="middle" font-family="Arial, sans-serif">${code}</text></svg>`
  
  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;utf8,${encoded}`
}
