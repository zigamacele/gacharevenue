import MotionInView from '@/lib/framer-motion/MotionInView'
import PercentageBox from './OverviewCard/PercentageBox'

type OverviewCardProps = {
  icon: string
  title: string
  desc: string
  body: string | number
  difference?: { percentage: number; difference: number; name?: string }
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  icon,
  title,
  desc,
  body,
  difference,
}) => {
  return (
    <MotionInView
      y={100}
      duration={0.8}
      delay={0.2}
      styles='flex h-48 w-80 flex-col justify-between rounded-lg  bg-neutral-900 px-4 py-5 hover:shadow-lg hover:shadow-neutral-700/20'
    >
      <div className='flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-2xl'>
        <span>{icon}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='opacity-80'>{title}</span>
        <div className='flex h-10 items-center gap-5'>
          <span className='max-w-sm truncate text-2xl font-bold'>{body}</span>
          {!!difference && <PercentageBox percentage={difference.percentage} />}
        </div>
        <span className='text-sm opacity-40'>{desc}</span>
      </div>
    </MotionInView>
  )
}

export default OverviewCard
