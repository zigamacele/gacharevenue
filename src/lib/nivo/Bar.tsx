import theme from '@/styles/nivo-theme.json'
import { BarDatum } from '@/types/nivo'
import { formatCurrencyCompact } from '@/utils/currency'
import { ResponsiveBar } from '@nivo/bar'

interface BarProps {
  data: { barData: BarDatum[]; allKeys: string[] }
}

const Bar: React.FC<BarProps> = ({ data }) => {
  const { barData, allKeys } = data
  return (
    <ResponsiveBar
      data={barData}
      keys={allKeys}
      indexBy='month'
      margin={{ top: 50, right: 60, bottom: 50, left: 100 }}
      theme={theme}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      valueFormat={(value) => formatCurrencyCompact(value)}
      colors={{ scheme: 'nivo' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'month',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'total revenue',
        legendPosition: 'middle',
        legendOffset: -60,
        format: (revenue: number) => formatCurrencyCompact(revenue),
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[]}
      role='application'
      ariaLabel='Nivo bar chart demo'
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  )
}

export default Bar
