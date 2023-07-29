import dayjs from 'dayjs'

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
