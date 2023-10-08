import dayjs, { extend } from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

extend(utc)
extend(timezone)
extend(advancedFormat)

export const currentMonthYear = () => {
  return `${dayjs().month()}-${dayjs().year()}`
}

export const previousMonthYear = () => {
  if (!dayjs().month()) {
    return `10-${dayjs().year() - 1}`
  }

  if (dayjs().month() === 1) {
    return `11-${dayjs().year() - 1}`
  }

  return `${dayjs().month() - 1}-${dayjs().year()}`
}

export const formatTimestampz = (timestampz: string) => {
  return dayjs(timestampz).tz('UTC').format('YYYY-MM-DD HH:mm')
}

export const humanizeTable = (table: string) => {
  const splitTable = table.split('-')

  return dayjs(`${splitTable[1]}-${splitTable[0]}-01`).format('MMM YYYY')
}

export const formatDate = (date: string) => {
  return dayjs(date).format('MMMM Do, YYYY')
}

export const formatMonthYear = (date: string) => {
  return dayjs(date).format('MMM YYYY')
}
