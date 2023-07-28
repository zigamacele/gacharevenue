import { Github, QrCode } from 'lucide-react'

const SocialLinks = () => {
  return (
    <section className='flex gap-4'>
      <QrCode size={22} className='cursor-pointer hover:opacity-80' />
      <Github size={22} className='cursor-pointer hover:opacity-80' />
    </section>
  )
}

export default SocialLinks
