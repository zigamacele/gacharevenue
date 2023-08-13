import { TableHead, TableHeader, TableRow } from '@/lib/shadcn/ui/table'
import { Fragment } from 'react'

const AdvancedViewTableHeader = () => {
  const platforms = ['Android', 'iOs', 'Total']
  return (
    <TableHeader>
      <TableRow>
        <TableHead></TableHead>
        {platforms.map((platform: string) => (
          <TableHead colSpan={2} key={platform} className='text-center'>
            {platform}
          </TableHead>
        ))}
      </TableRow>
      <TableRow>
        <TableHead></TableHead>
        {platforms.map((platform: string) => (
          <Fragment key={platform}>
            <TableHead className='text-center'>Downloads</TableHead>
            <TableHead className='text-center'>Revenue</TableHead>
          </Fragment>
        ))}
      </TableRow>
    </TableHeader>
  )
}

export default AdvancedViewTableHeader
