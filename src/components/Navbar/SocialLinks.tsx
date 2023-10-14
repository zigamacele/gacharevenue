import { Link } from 'react-router-dom'

import { iconsLibrary } from '@/constants/icons.ts'
import {
  GACHAGAMING_URL,
  GITHUB_PROJECT_URL,
  SENSORTOWER_URL,
} from '@/constants/links'

const SocialLinks: React.FC = () => {
  return (
    <section className='hidden items-center gap-3 xl:flex'>
      <Link to={GACHAGAMING_URL} target='_blank' className='hidden sm:block'>
        <img
          src={iconsLibrary['REDDIT']}
          alt='r/gachagaming'
          className='h-[26px] w-[26px] hover:opacity-60'
        />
      </Link>
      <Link to={SENSORTOWER_URL} target='_blank'>
        <img
          src={iconsLibrary['SENSOR_TOWER']}
          alt='sensortower'
          className='h-[22px] w-[22px] hover:opacity-60'
        />
      </Link>
      <Link to={GITHUB_PROJECT_URL} target='_blank'>
        <img
          src={iconsLibrary['GITHUB']}
          alt='github project'
          className='h-[22px] w-[22px] hover:opacity-60'
        />
      </Link>
    </section>
  )
}

export default SocialLinks
