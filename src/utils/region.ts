import { Region } from '@/types/supabase'

export const getRegion = (region: string | undefined) => {
  switch (region) {
    case Region.GLOBAL:
      return {
        emoji: '🌐',
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        text: 'Global',
      }
    case Region.COMBINED:
      return {
        emoji: '🌐',
        color: 'bg-violet-700',
        textColor: 'text-violet-700',
        text: 'Global + Japan',
      }
    case Region.JAPAN:
      return {
        emoji: '🇯🇵',
        color: 'bg-red-600',
        textColor: 'text-red-600',
        text: 'Japan',
      }
    case Region.KOREA:
      return {
        emoji: '🇰🇷',
        color: 'bg-gray-600',
        textColor: 'text-gray-600',
        text: 'Korea',
      }
    case Region.USA:
      return {
        emoji: '🇺🇸',
        color: 'bg-blue-700',
        textColor: 'text-blue-700',
        text: 'America',
      }
    case Region.CHINA:
      return {
        emoji: '🇨🇳',
        color: 'bg-yellow-400',
        textColor: 'text-yellow-500',
        text: 'China',
      }
    case Region.COMBINED_REGIONS:
      return {
        emoji: '🌍',
        color: 'bg-gradient-to-b from-blue-500 via-yellow-400 to-red-600',
        textColor: 'text-white',
        text: 'Combined',
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
