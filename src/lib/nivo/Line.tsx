import { ResponsiveLine } from '@nivo/line'

import useCurrentDevice from '@/hooks/useCurrentDevice'

import theme from '@/styles/nivo-theme.json'
import { formatCurrencyCompact } from '@/utils/currency'

interface LineProps {
  data: { id: string; data: { x: string; y: number }[] }[]
  height?: string | number
}

const Line: React.FC<LineProps> = ({ data, height = '20rem' }) => {
  const isMobile = useCurrentDevice()
  const dataLength = data[0]?.data.length ?? 1
  return (
    <div
      style={{
        height,
        width:
          (!isMobile && dataLength <= 12) || dataLength < 8
            ? '100%'
            : `${dataLength * 3}rem`,
      }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 30, bottom: 40, left: 60 }}
        theme={theme}
        tooltip={({ point }) => {
          return (
            <div className='flex items-center gap-2 bg-neutral-900 px-2 py-1 text-xs'>
              <div
                style={{ backgroundColor: point.serieColor }}
                className='h-3 w-3'
              />
              <span>{point.serieId}</span>
              <span>-</span>
              <span className='font-semibold'>
                {formatCurrencyCompact(point.data.y as number)}
              </span>
            </div>
          )
        }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=' >-.2f'
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'month',
          legendOffset: 35,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'total revenue',
          legendOffset: -50,
          legendPosition: 'middle',
          format: (revenue: number) => formatCurrencyCompact(revenue),
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </div>
  )
}

export default Line
