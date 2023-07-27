import Home from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div className='pt-14'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
