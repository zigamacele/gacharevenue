import html2canvas from 'html2canvas-pro'

import { CURRENT_TABLE } from '@/constants/tables.ts'

export async function capture() {
  const revenueTableElement = document.getElementById('revenue_chart')
  function getElementsByClassName(className: string): Element[] {
    return Array.from(document.getElementsByClassName(className))
  }

  const elements = [
    ...getElementsByClassName('revenue_chart_current_table'),
    ...getElementsByClassName('revenue_chart_region'),
  ]

  elements.forEach((element: Element) => {
    element.classList.add('border-b')
  })

  await html2canvas(revenueTableElement as HTMLElement, {
    allowTaint: true,
    useCORS: true,
    logging: true,
  })
    .then((canvas) => {
      canvas.style.display = 'none'
      document.body.appendChild(canvas)
      return canvas
    })
    .then((canvas) => {
      const image = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      a.setAttribute('download', `GACHAREVENUE-${CURRENT_TABLE}`)
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
    })

  elements.forEach((element: Element) => {
    element.classList.remove('border-b')
  })
}
