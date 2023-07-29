import { formatCurrencyCompact } from '@/utils/currency'
import { ResponsiveLine } from '@nivo/line'

interface LineProps {
  data: { id: string; data: { x: string; y: number }[] }[]
}

const Line: React.FC<LineProps> = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
    tooltip={({ point }) => (
      <div className='flex gap-2'>
        <span>{point.serieId}</span>
        <span>{formatCurrencyCompact(point.data.y as number)}</span>
      </div>
    )}
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
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'revenue',
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
)

export default Line
