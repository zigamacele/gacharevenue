import { SelectedSections } from '@/types/monthlyRevenue'
import { useEffect, useState } from 'react'

const useSelectedSections = () => {
  const [selected, setSelected] = useState<SelectedSections>({
    pinned: [],
    removed: [],
  })

  useEffect(() => {
    if (selected.pinned.length || selected.removed.length) {
      localStorage.setItem('selected', JSON.stringify(selected))
    }
  }, [selected])

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem('selected')
    if (typeof window !== 'undefined' && fromLocalStorage) {
      setSelected(JSON.parse(fromLocalStorage) as unknown as SelectedSections)
    }
  }, [])
  return { selected, setSelected }
}

export default useSelectedSections
