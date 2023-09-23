import { Link } from 'react-router-dom'

import { CHARTS, FEEDBACK, REVENUE } from '@/constants/links'

const Navigation: React.FC = () => {
  return (
    <section className='hidden gap-3 sm:flex'>
      <Link to={REVENUE} className='cursor-pointer opacity-40 hover:opacity-80'>
        <span>Revenue</span>
      </Link>
      <Link to={CHARTS} className='cursor-pointer opacity-40 hover:opacity-80'>
        <span>Charts</span>
      </Link>
      <Link
        to={FEEDBACK}
        className='cursor-pointer opacity-40 hover:opacity-80'
      >
        <span>Feedback</span>
      </Link>
    </section>
  )
}

export default Navigation
