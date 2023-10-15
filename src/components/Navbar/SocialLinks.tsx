import { Github } from 'lucide-react'

import { CommandGroup, CommandItem } from '@/lib/shadcn/ui/command.tsx'

import { iconsLibrary } from '@/constants/icons.ts'
import { GITHUB_PROJECT_URL } from '@/constants/links'

const SocialLinks: React.FC = () => {
  return (
    <CommandGroup heading='Links'>
      <CommandItem
        className='flex gap-2'
        onSelect={() => window.open(GITHUB_PROJECT_URL, '_blank')}
      >
        <Github className='h-5 w-5' />
        <span>Github</span>
      </CommandItem>
      <CommandItem className='flex gap-2'>
        <img src={iconsLibrary.REDDIT} alt='reddit logo' className='h-5 w-5' />
        <span>Reddit</span>
      </CommandItem>
      <CommandItem className='flex gap-2'>
        <img
          src={iconsLibrary.SENSOR_TOWER}
          alt='sensortower logo'
          className='h-5 w-5'
        />
        <span>SensorTower</span>
      </CommandItem>
    </CommandGroup>
  )
}

export default SocialLinks
