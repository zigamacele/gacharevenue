import useBackgroundStore from '@/stores/background-store'
import MotionOpacity from '@/lib/framer-motion/MotionOpacity'

const Background: React.FC = () => {
  const { background } = useBackgroundStore()
  return (
    <>
      <div className='absolute top-14 z-10 h-[15.1em] w-full bg-gradient-to-t from-neutral-950 to-transparent opacity-100'></div>
      {background && (
        <MotionOpacity>
          <img
            src={background}
            alt='background'
            className='absolute top-14 z-0 h-60 w-full object-cover opacity-60'
          />
        </MotionOpacity>
      )}
    </>
  )
}

export default Background