import { useLocation } from 'react-router-dom'

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <section className='hidden gap-3 sm:flex'>
      <span
        className={`cursor-pointer opacity-40 hover:opacity-80 ${
          pathname === '/' && 'opacity-100'
        }`}
      >
        Revenue
      </span>
      <span className='cursor-pointer opacity-40 hover:opacity-80'>Charts</span>
      <span className='cursor-pointer opacity-40 hover:opacity-80'>
        Feedback
      </span>
    </section>
  )
}

export default Navigation
