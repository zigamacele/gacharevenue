import html2canvas from 'html2canvas-pro'

export async function capture(elementId: string, fileName: string) {
  const revenueTableElement = document.getElementById(elementId)

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
      a.setAttribute('download', fileName)
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
    })
}
