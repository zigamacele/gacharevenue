import { Separator } from '@/lib/shadcn/ui/separator'
import AdvancedViewTable from './AdvancedView/AdvancedViewTable'

const AdvancedView: React.FC = () => {
  return (
    <section>
      <Separator className='my-2 w-full opacity-40' />
      <AdvancedViewTable />
    </section>
  )
}

export default AdvancedView
