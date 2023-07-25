export const getRegion = (region: string | undefined) => {
  switch (region) {
    case 'GLOBAL':
      return { emoji: '🌐', color: 'bg-blue-500' }
    case 'JAPAN':
      return { emoji: '🇯🇵', color: 'bg-red-500' }
    case 'KOREA':
      return { emoji: '🇰🇷', color: 'bg-gray-500' }
    default:
      return { emoji: '', color: 'bg-gray-500' }
  }
}
