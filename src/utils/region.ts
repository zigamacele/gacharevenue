export const getRegion = (region: string | undefined) => {
  switch (region) {
    case 'GLOBAL':
      return { emoji: '🌐', color: 'bg-blue-500' }
    case 'JAPAN':
      return { emoji: '🇯🇵', color: 'bg-red-600' }
    case 'KOREA':
      return { emoji: '🇰🇷', color: 'bg-gray-600' }
    default:
      return { emoji: '', color: 'bg-gray-500' }
  }
}
