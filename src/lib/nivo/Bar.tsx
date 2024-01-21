import { ResponsiveBar } from '@nivo/bar'

import useCurrentDevice from '@/hooks/useCurrentDevice'

import theme from '@/styles/nivo-theme.json'
import { formatCurrencyCompact } from '@/utils/currency'

import { BarDatum } from '@/types/nivo'

interface BarProps {
  data: { barData: BarDatum[]; allKeys: string[] }
  height?: string | number
}

const Bar: React.FC<BarProps> = ({ data, height = '20rem' }) => {
  const { barData, allKeys } = data
  const isMobile = useCurrentDevice()
  const dataLength = barData.length

  return (
    <div
      style={{
        height,
        width: !isMobile || dataLength < 8 ? '100%' : `${dataLength * 4}rem`,
      }}
    >
      {!!isMobile}
      <ResponsiveBar
        data={barData}
        keys={allKeys}
        indexBy='month'
        margin={{ top: 20, right: 20, bottom: 40, left: 60 }}
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
          legendOffset: 35,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'total revenue',
          legendPosition: 'middle',
          legendOffset: -50,
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
    </div>
  )
}

export default Bar
