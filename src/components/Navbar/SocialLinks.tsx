import github from '@/assets/icons/github.svg'
import reddit from '@/assets/icons/reddit.svg'
import sensorTower from '@/assets/icons/sensor-tower.svg'
import {
  GACHAGAMING_URL,
  GITHUB_PROJECT_URL,
  SENSORTOWER_URL,
} from '@/constants/links'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <section className='flex items-center gap-3'>
      <Link to={GACHAGAMING_URL} target='_blank'>
        <img
          src={reddit}
          alt='r/gachagaming'
          className='h-[26px] w-[26px] hover:opacity-60'
        />
      </Link>
      <Link to={SENSORTOWER_URL} target='_blank'>
        <img
          src={sensorTower}
          alt='sensortower'
          className='h-[22px] w-[22px] hover:opacity-60'
        />
      </Link>
      <Link to={GITHUB_PROJECT_URL} target='_blank'>
        <img
          src={github}
          alt='github project'
          className='h-[22px] w-[22px] hover:opacity-60'
        />
      </Link>
    </section>
  )
}

export default SocialLinks
