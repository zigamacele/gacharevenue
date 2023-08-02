import theme from '@/styles/nivo-theme.json'
import { BarDatum } from '@/types/nivo'
import { formatCurrencyCompact } from '@/utils/currency'
import { ResponsivePie } from '@nivo/pie'

interface PieProps {
  data: BarDatum[]
}

const Pie: React.FC<PieProps> = ({ data }) => (
  <ResponsivePie
    data={data}
    theme={theme}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    valueFormat={(value) => formatCurrencyCompact(value)}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor='#333333'
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
  />
)

export default Pie
