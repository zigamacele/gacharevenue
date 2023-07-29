const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
})

export const formatCurrency = (value: number | undefined) => {
  if (!value) {
    return ''
  }

  return USDollar.format(value)
}

export const formatCurrencyCompact = (value: number | undefined) => {
  if (!value) {
    return ''
  }

  return Intl.NumberFormat('en', { notation: 'compact' }).format(value)
}
