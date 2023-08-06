import useBackgroundStore from '@/stores/background-store'

const Background: React.FC = () => {
  const { background } = useBackgroundStore()
  return (
    <>
      <div className='absolute top-14 z-10 h-60 w-full bg-gradient-to-t from-neutral-950 to-transparent opacity-100'></div>

      {background && (
        <img
          src={background}
          alt='background'
          className='absolute top-14 z-0 h-60 w-full object-cover opacity-60'
        />
      )}
    </>
  )
}

export default Background
