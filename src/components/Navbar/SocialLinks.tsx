import { Coffee, Github } from 'lucide-react'

import { CommandGroup, CommandItem } from '@/lib/shadcn/ui/command.tsx'

import { iconsLibrary } from '@/constants/icons.ts'
import {
  GACHAGAMING_URL,
  GITHUB_PROJECT_URL,
  KOFI_URL,
  SENSORTOWER_URL,
} from '@/constants/links'

const LinksCommandGroup = [
  {
    name: 'Ko-fi',
    navigate: KOFI_URL,
    icon: <Coffee className='h-5 w-5' />,
  },
  {
    name: 'Github',
    navigate: GITHUB_PROJECT_URL,
    icon: <Github className='h-5 w-5' />,
  },
  {
    name: 'Reddit',
    navigate: GACHAGAMING_URL,
    icon: (
      <img src={iconsLibrary.REDDIT} alt='reddit logo' className='h-5 w-5' />
    ),
  },
  {
    name: 'SensorTower',
    navigate: SENSORTOWER_URL,
    icon: (
      <img
        src={iconsLibrary.SENSOR_TOWER}
        alt='sensortower logo'
        className='h-5 w-5'
      />
    ),
  },
]

const SocialLinks: React.FC = () => {
  return (
    <CommandGroup heading='Links'>
      {LinksCommandGroup.map((item) => (
        <CommandItem
          key={item.name}
          className='flex cursor-pointer gap-2'
          onSelect={() => window.open(item.navigate, '_blank')}
        >
          {item.icon}
          <span>{item.name}</span>
        </CommandItem>
      ))}
    </CommandGroup>
  )
}

export default SocialLinks
