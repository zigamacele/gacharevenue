import { Route, Routes } from 'react-router-dom'

import useSupabaseRelay from '@/hooks/useSupabaseRelay'

import Charts from '@/pages/Charts'
import Feedback from '@/pages/Feedback'
import Game from '@/pages/Game'
import Home from '@/pages/Home'
import Revenue from '@/pages/Revenue'

import Background from '@/layouts/Background'
import Navbar from '@/layouts/Navbar'

const AppRoutes = () => {
  useSupabaseRelay()

  return (
    <>
      <Navbar />
      <div className='absolute left-0 right-0 z-40 pt-14'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/revenue' element={<Revenue />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/game/:id' element={<Game />} />
        </Routes>
      </div>
      <Background />
    </>
  )
}

export default AppRoutes
