import { posthog } from 'posthog-js'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import useSupabaseRelay from '@/hooks/useSupabaseRelay'

import Navbar from '@/components/Navbar.tsx'

import useUserStore from '@/stores/user-store.ts'

import Charts from '@/pages/Charts'
import Faq from '@/pages/Faq'
import Feedback from '@/pages/Feedback'
import Game from '@/pages/Game'
import Graveyard from '@/pages/Graveyard.tsx'
import Home from '@/pages/Home'
import Revenue from '@/pages/Revenue'

import supabase from '@/config/supabase.ts'
import {
  CHARTS,
  FAQ,
  FEEDBACK,
  GRAVEYARD,
  HOME,
  REVENUE,
} from '@/constants/links.ts'
import Background from '@/layouts/Background'
import LastUpdated from '@/layouts/LastUpdated.tsx'
import PageNotFound from '@/layouts/PageNotFound'

const AppRoutes: React.FC = () => {
  const { setUser } = useUserStore()
  useSupabaseRelay()

  const location = useLocation()

  useEffect(() => {
    posthog.capture('$pageview')
  }, [location])

  const getSession = async () => {
    await supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user)
    })
  }

  useEffect(() => {
    void getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <Navbar />
      {/* <Kofi /> */}
      <LastUpdated />
      <div className='absolute left-0 right-0 z-40 pt-14'>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CHARTS} element={<Charts />} />
          <Route path={REVENUE} element={<Revenue />} />
          <Route path={FEEDBACK} element={<Feedback />} />
          <Route path={GRAVEYARD} element={<Graveyard />} />
          <Route path={FAQ} element={<Faq />} />
          <Route path='/game/:id' element={<Game />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Background />
    </>
  )
}

export default AppRoutes
