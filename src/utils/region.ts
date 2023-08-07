export const getRegion = (region: string | undefined) => {
  switch (region) {
    case 'GLOBAL':
      return { emoji: '🌐', color: 'bg-blue-500', text: 'Global' }
    case 'COMBINED':
      return { emoji: '🌐', color: 'bg-violet-600', text: 'Global + Japan' }
    case 'JAPAN':
      return { emoji: '🇯🇵', color: 'bg-red-600', text: 'Japan' }
    case 'KOREA':
      return { emoji: '🇰🇷', color: 'bg-gray-600', text: 'Korea' }
    case 'USA':
      return { emoji: '🇺🇸', color: 'bg-blue-500/60', text: 'America' }
    default:
      return { emoji: '', color: 'bg-gray-500', text: 'Unknown' }
  }
}
