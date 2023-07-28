import { GITHUB_PROJECT_URL, QR_CODE_URL } from '@/constants/links'
import { Github, QrCode } from 'lucide-react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <section className='flex items-center gap-4'>
      <Link to={QR_CODE_URL} target='_blank'>
        <QrCode size={22} className='cursor-pointer hover:opacity-80' />
      </Link>
      <Link to={GITHUB_PROJECT_URL} target='_blank'>
        <Github size={22} className='cursor-pointer hover:opacity-80' />
      </Link>
    </section>
  )
}

export default SocialLinks
