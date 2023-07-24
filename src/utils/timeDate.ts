import dayjs from 'dayjs'

export const currentMonthYear = () => {
  return `${dayjs().month() + 1}-${dayjs().year()}`
}

export const previousMonthYear = () => {
  if (!dayjs().month()) {
    return `12-${dayjs().year() - 1}`
  }

  return `${dayjs().month()}-${dayjs().year()}`
}
