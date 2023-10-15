import { Fragment } from 'react'

import MotionOpacity from '@/lib/framer-motion/MotionOpacity'

import ImageComponent from '@/components/ImageComponent.tsx'

import useBackgroundStore from '@/stores/background-store'

const Background: React.FC = () => {
  const { background, blurhash } = useBackgroundStore()
  return (
    <Fragment>
      <div className='absolute top-14 z-10 h-[15.1em] w-full bg-gradient-to-t from-neutral-950 to-transparent opacity-100'></div>
      {background && (
        <MotionOpacity>
          <ImageComponent
            height={240}
            width={window.innerWidth}
            alt='background'
            blurhash={blurhash}
            src={background}
            className='absolute top-14 z-0 h-60 w-full object-cover opacity-60'
          />
        </MotionOpacity>
      )}
    </Fragment>
  )
}

export default Background
