import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

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
  return dayjs(`${table.split('-')[0]}.01.${table.split('-')[1]}`).format(
    'MMM YYYY',
  )
}
