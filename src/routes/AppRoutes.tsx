import Charts from '@/pages/Charts'
import Feedback from '@/pages/Feedback'
import Home from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div className='pt-14'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
