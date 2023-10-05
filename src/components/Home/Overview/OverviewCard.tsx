import { useNavigate } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView'

import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'

import { REVENUE } from '@/constants/links.ts'

import PercentageBox from './OverviewCard/PercentageBox'

import { CompareRevenueOutput } from '@/types/monthlyRevenue'

type OverviewCardProps = {
  game?: CompareRevenueOutput
  title: string
  desc: string
  body: string | number
  difference?: CompareRevenueOutput
  minimal?: boolean
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  desc,
  body,
  difference,
  minimal,
  game,
}) => {
  const navigate = useNavigate()

  if (minimal) {
    return (
      <MotionInView
        y={100}
        duration={0.8}
        delay={0.2}
        styles='flex flex-col gap-1 cursor-pointer hover:border-neutral-700 tranistion-all hover:to-neutral-800/80 h-24 w-80 xl:w-72 rounded-lg px-4 py-4 border border-neutral-800 bg-gradient-to-t from-neutral-900 to-neutral-800/50'
        onClick={() => navigate(REVENUE)}
      >
        <p className='opacity-80'>{title}</p>
        <div className='flex h-10 items-center gap-5'>
          <span className='max-w-sm truncate text-2xl font-bold'>{body}</span>
          {!!difference && <PercentageBox percentage={difference.percentage} />}
        </div>
      </MotionInView>
    )
  }

  return (
    <MotionInView
      y={100}
      duration={0.8}
      delay={0.2}
      styles='flex h-52 w-80 flex-col justify-between group hover:border-neutral-700 rounded-lg bg-neutral-900 relative border cursor-pointer border-neutral-800'
      onClick={() => navigate(`/game/${game?.id}`)}
    >
      <span className='absolute z-10 h-24 w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent'></span>
      <img
        src={game?.background}
        alt={game?.name}
        className='absolute h-24 w-full rounded-t-lg object-cover opacity-60 transition-opacity group-hover:opacity-100'
      />
      <div className='z-50 m-2 flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 bg-neutral-950 text-2xl'>
        <img
          src={game?.icon}
          alt={game?.name}
          className='h-8 w-8 rounded transition-all group-hover:scale-110'
        />
        <RegionTooltip gameRegion={game?.region} className='right-2 top-2' />
      </div>
      <div className='flex flex-col gap-1 p-3'>
        <p className='opacity-80'>{title}</p>
        <div className='flex h-10 items-center gap-5'>
          <span className='max-w-sm truncate text-2xl font-bold'>{body}</span>
          {!!difference && <PercentageBox percentage={difference.percentage} />}
        </div>
        <p className='text-sm opacity-40'>{desc}</p>
      </div>
    </MotionInView>
  )
}

export default OverviewCard
