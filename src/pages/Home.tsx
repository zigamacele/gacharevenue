const Home: React.FC = () => {
  return (
    <div className='mt-4 flex justify-center'>
      <div className='flex h-44 w-80 flex-col justify-between gap-3 rounded-lg  bg-neutral-900 px-4 py-5'>
        <div className='flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-2xl'>
          <span>💰</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='opacity-80'>Total Revenue</span>
          <span className='text-2xl font-bold'>$ 220,000,000</span>
          <span className='text-sm opacity-40'>Compared to last month</span>
        </div>
      </div>
    </div>
  )
}

export default Home
