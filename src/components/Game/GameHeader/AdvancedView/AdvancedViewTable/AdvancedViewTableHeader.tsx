import { Fragment } from 'react'

import { TableHead, TableHeader, TableRow } from '@/lib/shadcn/ui/table'

const AdvancedViewTableHeader: React.FC = () => {
  const platforms = ['Android', 'iOS', 'Total']
  return (
    <TableHeader>
      <TableRow>
        <TableHead />
        {platforms.map((platform: string) => (
          <TableHead colSpan={2} key={platform} className='text-center text-sm'>
            {platform}
          </TableHead>
        ))}
      </TableRow>
      <TableRow>
        <TableHead />
        {platforms.map((platform: string) => (
          <Fragment key={platform}>
            <TableHead className='text-center text-opacity-60'>
              Downloads
            </TableHead>
            <TableHead className='text-center text-opacity-60'>
              Revenue
            </TableHead>
          </Fragment>
        ))}
      </TableRow>
    </TableHeader>
  )
}

export default AdvancedViewTableHeader
