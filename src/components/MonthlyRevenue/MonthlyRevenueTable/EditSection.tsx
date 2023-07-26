import { SelectedSections } from '@/types/monthlyRevenue'
import { QueryOutput } from '@/types/supabase'
import { CheckCircle2, Pin, PinOff, XCircle } from 'lucide-react'

interface EditSectionProps {
  data: QueryOutput
  selected: SelectedSections
  setSelected: (
    updateState: (value: SelectedSections) => SelectedSections,
  ) => void
}

const EditSection: React.FC<EditSectionProps> = ({
  data,
  selected,
  setSelected,
}) => {
  const handleSelect = (type: string) => {
    const gameId = String(data.id)
    if (selected[type as keyof SelectedSections].includes(gameId)) {
      setSelected((prev) => ({
        ...prev,
        [type]: prev[type as keyof SelectedSections].filter(
          (id) => id !== gameId,
        ),
      }))
    } else {
      setSelected((prev) => ({
        ...prev,
        [type]: [...prev[type as keyof SelectedSections], gameId],
      }))
    }
  }

  return (
    <div className='mt-1 flex gap-2'>
      <div
        onClick={() => {
          handleSelect('pinned')
        }}
      >
        {selected.pinned.includes(String(data.game?.id)) ? (
          <PinOff size={15} opacity={0.5} />
        ) : (
          <Pin size={15} />
        )}
      </div>
      <div
        onClick={() => {
          handleSelect('removed')
        }}
      >
        {selected.removed.includes(String(data.game?.id)) ? (
          <XCircle size={15} opacity={0.5} />
        ) : (
          <CheckCircle2 size={15} />
        )}
      </div>
    </div>
  )
}

export default EditSection
