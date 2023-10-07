import { Route, Routes } from 'react-router-dom'

import useSupabaseRelay from '@/hooks/useSupabaseRelay'

import Charts from '@/pages/Charts'
import Feedback from '@/pages/Feedback'
import Game from '@/pages/Game'
import Graveyard from '@/pages/Graveyard.tsx'
import Home from '@/pages/Home'
import Revenue from '@/pages/Revenue'

import {
  CHARTS,
  FEEDBACK,
  GRAVEYARD,
  HOME,
  REVENUE,
} from '@/constants/links.ts'
import Background from '@/layouts/Background'
import LastUpdated from '@/layouts/LastUpdated.tsx'
import Navbar from '@/layouts/Navbar'
import PageNotFound from '@/layouts/PageNotFound'

const AppRoutes: React.FC = () => {
  useSupabaseRelay()

  return (
    <>
      <Navbar />
      <LastUpdated />
      <div className='absolute left-0 right-0 z-40 pt-14'>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CHARTS} element={<Charts />} />
          <Route path={REVENUE} element={<Revenue />} />
          <Route path={FEEDBACK} element={<Feedback />} />
          <Route path={GRAVEYARD} element={<Graveyard />} />
          <Route path='/game/:id' element={<Game />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Background />
    </>
  )
}

export default AppRoutes
