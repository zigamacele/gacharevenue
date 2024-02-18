export const getRegion = (region: string | undefined) => {
  switch (region) {
    case 'GLOBAL':
      return {
        emoji: '🌐',
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        text: 'Global',
      }
    case 'COMBINED':
      return {
        emoji: '🌐',
        color: 'bg-violet-700',
        textColor: 'text-violet-700',
        text: 'Global + Japan',
      }
    case 'JAPAN':
      return {
        emoji: '🇯🇵',
        color: 'bg-red-600',
        textColor: 'text-red-600',
        text: 'Japan',
      }
    case 'KOREA':
      return {
        emoji: '🇰🇷',
        color: 'bg-gray-600',
        textColor: 'text-gray-600',
        text: 'Korea',
      }
    case 'USA':
      return {
        emoji: '🇺🇸',
        color: 'bg-blue-700',
        textColor: 'text-blue-700',
        text: 'America',
      }
    case 'CHINA':
      return {
        emoji: '🇨🇳',
        color: 'bg-yellow-400',
        textColor: 'text-yellow-500',
        text: 'China',
      }
    default:
      return {
        emoji: '',
        color: 'bg-gray-500',
        textColor: 'text-gray-500',
        text: 'Unknown',
      }
  }
}
