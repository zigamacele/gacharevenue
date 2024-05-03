import Alerts from '@/components/Home/Alerts'
import Hero from '@/components/Home/Hero'
import Overview from '@/components/Home/Overview'

import useSupabaseStore from '@/stores/supabase-store'

const Home: React.FC = () => {
  const { alerts } = useSupabaseStore()
  return (
    <>
      {alerts.length > 0 && <Alerts />}
      <main className='mb-4 mt-24 flex flex-col items-center gap-4 sm:mt-40'>
        <Hero />
        <Overview />
      </main>
    </>
  )
}

export default Home
