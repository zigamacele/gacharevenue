import { Table } from '@/lib/shadcn/ui/table'
import AdvancedViewTableBody from './AdvancedViewTable/AdvancedViewTableBody'
import AdvancedViewTableHeader from './AdvancedViewTable/AdvancedViewTableHeader'

const AdvancedViewTable = () => {
  return (
    <Table>
      <AdvancedViewTableHeader />
      <AdvancedViewTableBody />
    </Table>
  )
}

export default AdvancedViewTable
