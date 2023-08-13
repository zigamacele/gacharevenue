import { Separator } from '@/lib/shadcn/ui/separator'
import AdvancedViewTable from './AdvancedView/AdvancedViewTable'

const AdvancedView = () => {
  return (
    <section>
      <Separator className='mb-2 mt-3 w-full opacity-40' />
      <AdvancedViewTable />
    </section>
  )
}

export default AdvancedView
