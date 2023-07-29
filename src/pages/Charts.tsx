import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import Pie from '@/lib/nivo/Pie'

import { Button } from '@/lib/shadcn/ui/button'
import { BarChart3, LineChart, PieChart } from 'lucide-react'
import { useState } from 'react'

const Charts = () => {
  const [selectedChart, setSelectedChart] = useState('pie')
  const pie = [
    {
      id: 'rust',
      label: 'rust',
      value: 357,
      color: 'hsl(123, 70%, 50%)',
    },
    {
      id: 'css',
      label: 'css',
      value: 478,
      color: 'hsl(254, 70%, 50%)',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 297,
      color: 'hsl(2, 70%, 50%)',
    },
    {
      id: 'scala',
      label: 'scala',
      value: 385,
      color: 'hsl(261, 70%, 50%)',
    },
    {
      id: 'erlang',
      label: 'erlang',
      value: 220,
      color: 'hsl(338, 70%, 50%)',
    },
  ]

  const line = [
    {
      id: 'japan',
      color: 'hsl(131, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 243,
        },
        {
          x: 'helicopter',
          y: 66,
        },
        {
          x: 'boat',
          y: 290,
        },
        {
          x: 'train',
          y: 248,
        },
        {
          x: 'subway',
          y: 232,
        },
        {
          x: 'bus',
          y: 163,
        },
        {
          x: 'car',
          y: 208,
        },
        {
          x: 'moto',
          y: 229,
        },
        {
          x: 'bicycle',
          y: 65,
        },
        {
          x: 'horse',
          y: 52,
        },
        {
          x: 'skateboard',
          y: 79,
        },
        {
          x: 'others',
          y: 45,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(268, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 5,
        },
        {
          x: 'helicopter',
          y: 233,
        },
        {
          x: 'boat',
          y: 151,
        },
        {
          x: 'train',
          y: 210,
        },
        {
          x: 'subway',
          y: 264,
        },
        {
          x: 'bus',
          y: 146,
        },
        {
          x: 'car',
          y: 223,
        },
        {
          x: 'moto',
          y: 273,
        },
        {
          x: 'bicycle',
          y: 74,
        },
        {
          x: 'horse',
          y: 142,
        },
        {
          x: 'skateboard',
          y: 282,
        },
        {
          x: 'others',
          y: 84,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(276, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 103,
        },
        {
          x: 'helicopter',
          y: 275,
        },
        {
          x: 'boat',
          y: 159,
        },
        {
          x: 'train',
          y: 282,
        },
        {
          x: 'subway',
          y: 243,
        },
        {
          x: 'bus',
          y: 172,
        },
        {
          x: 'car',
          y: 121,
        },
        {
          x: 'moto',
          y: 287,
        },
        {
          x: 'bicycle',
          y: 299,
        },
        {
          x: 'horse',
          y: 138,
        },
        {
          x: 'skateboard',
          y: 8,
        },
        {
          x: 'others',
          y: 50,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(89, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 20,
        },
        {
          x: 'helicopter',
          y: 48,
        },
        {
          x: 'boat',
          y: 125,
        },
        {
          x: 'train',
          y: 3,
        },
        {
          x: 'subway',
          y: 291,
        },
        {
          x: 'bus',
          y: 97,
        },
        {
          x: 'car',
          y: 170,
        },
        {
          x: 'moto',
          y: 246,
        },
        {
          x: 'bicycle',
          y: 297,
        },
        {
          x: 'horse',
          y: 227,
        },
        {
          x: 'skateboard',
          y: 155,
        },
        {
          x: 'others',
          y: 44,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 158,
        },
        {
          x: 'helicopter',
          y: 175,
        },
        {
          x: 'boat',
          y: 159,
        },
        {
          x: 'train',
          y: 36,
        },
        {
          x: 'subway',
          y: 4,
        },
        {
          x: 'bus',
          y: 50,
        },
        {
          x: 'car',
          y: 182,
        },
        {
          x: 'moto',
          y: 35,
        },
        {
          x: 'bicycle',
          y: 162,
        },
        {
          x: 'horse',
          y: 180,
        },
        {
          x: 'skateboard',
          y: 3,
        },
        {
          x: 'others',
          y: 56,
        },
      ],
    },
  ]

  const bar = [
    {
      country: 'AD',
      'hot dog': 27,
      'hot dogColor': 'hsl(192, 70%, 50%)',
      burger: 151,
      burgerColor: 'hsl(127, 70%, 50%)',
      sandwich: 51,
      sandwichColor: 'hsl(68, 70%, 50%)',
      kebab: 85,
      kebabColor: 'hsl(78, 70%, 50%)',
      fries: 42,
      friesColor: 'hsl(280, 70%, 50%)',
      donut: 94,
      donutColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 40,
      'hot dogColor': 'hsl(23, 70%, 50%)',
      burger: 103,
      burgerColor: 'hsl(231, 70%, 50%)',
      sandwich: 41,
      sandwichColor: 'hsl(134, 70%, 50%)',
      kebab: 78,
      kebabColor: 'hsl(39, 70%, 50%)',
      fries: 168,
      friesColor: 'hsl(258, 70%, 50%)',
      donut: 124,
      donutColor: 'hsl(65, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 23,
      'hot dogColor': 'hsl(9, 70%, 50%)',
      burger: 21,
      burgerColor: 'hsl(168, 70%, 50%)',
      sandwich: 69,
      sandwichColor: 'hsl(276, 70%, 50%)',
      kebab: 169,
      kebabColor: 'hsl(355, 70%, 50%)',
      fries: 26,
      friesColor: 'hsl(250, 70%, 50%)',
      donut: 115,
      donutColor: 'hsl(198, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 5,
      'hot dogColor': 'hsl(171, 70%, 50%)',
      burger: 139,
      burgerColor: 'hsl(67, 70%, 50%)',
      sandwich: 156,
      sandwichColor: 'hsl(340, 70%, 50%)',
      kebab: 64,
      kebabColor: 'hsl(112, 70%, 50%)',
      fries: 186,
      friesColor: 'hsl(108, 70%, 50%)',
      donut: 103,
      donutColor: 'hsl(245, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 111,
      'hot dogColor': 'hsl(291, 70%, 50%)',
      burger: 135,
      burgerColor: 'hsl(16, 70%, 50%)',
      sandwich: 47,
      sandwichColor: 'hsl(206, 70%, 50%)',
      kebab: 143,
      kebabColor: 'hsl(201, 70%, 50%)',
      fries: 48,
      friesColor: 'hsl(171, 70%, 50%)',
      donut: 26,
      donutColor: 'hsl(225, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 164,
      'hot dogColor': 'hsl(159, 70%, 50%)',
      burger: 174,
      burgerColor: 'hsl(196, 70%, 50%)',
      sandwich: 48,
      sandwichColor: 'hsl(160, 70%, 50%)',
      kebab: 185,
      kebabColor: 'hsl(255, 70%, 50%)',
      fries: 31,
      friesColor: 'hsl(58, 70%, 50%)',
      donut: 112,
      donutColor: 'hsl(92, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 28,
      'hot dogColor': 'hsl(315, 70%, 50%)',
      burger: 33,
      burgerColor: 'hsl(12, 70%, 50%)',
      sandwich: 130,
      sandwichColor: 'hsl(233, 70%, 50%)',
      kebab: 69,
      kebabColor: 'hsl(251, 70%, 50%)',
      fries: 61,
      friesColor: 'hsl(226, 70%, 50%)',
      donut: 82,
      donutColor: 'hsl(327, 70%, 50%)',
    },
  ]
  return (
    <>
      <div className='mx-6 my-4 flex justify-between '>
        <div className='flex gap-2'>
          <Button
            onClick={() => setSelectedChart('pie')}
            className={`text-opacity-40 hover:text-opacity-80 ${
              selectedChart === 'pie' && 'text-opacity-100'
            }`}
          >
            <PieChart width={22} />
          </Button>
          <Button
            onClick={() => setSelectedChart('line')}
            className={`text-opacity-40 hover:text-opacity-80 ${
              selectedChart === 'line' && 'text-opacity-100'
            }`}
          >
            <LineChart width={22} />
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setSelectedChart('bar')}
            className={`text-opacity-40 hover:text-opacity-80 ${
              selectedChart === 'bar' && 'text-opacity-100'
            }`}
          >
            <BarChart3 width={22} />
          </Button>
        </div>
      </div>
      <div className='h-[60vh] w-full'>
        {selectedChart === 'pie' && <Pie data={pie} />}
        {selectedChart === 'line' && <Line data={line} />}
        {selectedChart === 'bar' && <Bar data={bar} />}
      </div>
    </>
  )
}

export default Charts
