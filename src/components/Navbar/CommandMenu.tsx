'use client'

import { Mailbox, PieChart, Skull, Table2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  CommandDialog as CommandDialogComponent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/lib/shadcn/ui/command'

import EosTooltip from '@/components/Game/GameHeader/CoverImage/EosTooltip.tsx'
import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'
import SocialLinks from '@/components/Navbar/SocialLinks.tsx'

import useSupabaseStore from '@/stores/supabase-store.ts'

import { CHARTS, FEEDBACK, GRAVEYARD, REVENUE } from '@/constants/links.ts'

const NavigationCommandGroup = [
  { name: 'Revenue', icon: <Table2 className='h-5 w-5' />, navigate: REVENUE },
  { name: 'Charts', icon: <PieChart className='h-5 w-5' />, navigate: CHARTS },
  {
    name: 'Graveyard',
    icon: <Skull className='h-5 w-5' />,
    navigate: GRAVEYARD,
  },
  {
    name: 'Feedback',
    icon: <Mailbox className='h-5 w-5' />,
    navigate: FEEDBACK,
  },
]

const CommandDialog = () => {
  const [open, setOpen] = useState(false)
  const { storage } = useSupabaseStore()
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className='text-muted-foreground flex cursor-pointer gap-2 text-sm hover:opacity-60'
      >
        Search
      </p>
      <CommandDialogComponent open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <SocialLinks />
          <CommandGroup heading='Games'>
            {storage.map((game) => (
              <CommandItem
                key={`${game.name}_${game.region}`}
                className='flex cursor-pointer gap-2'
                onSelect={() => {
                  navigate(`/game/${game.id}`)
                  setOpen(false)
                }}
              >
                <ImageComponent
                  height={24}
                  width={24}
                  src={game.icon}
                  alt={game.name}
                  className='h-6 w-6 rounded border border-neutral-700'
                />
                <p>{game.en_name}</p>
                <EosTooltip className='right-10' isEos={game.eos} />
                <RegionTooltip
                  gameRegion={game.region}
                  className='right-2 border-neutral-700'
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading='Navigation'>
            {NavigationCommandGroup.map((item) => (
              <CommandItem
                key={item.name}
                className='flex cursor-pointer gap-2'
                onSelect={() => {
                  navigate(item.navigate)
                  setOpen(false)
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialogComponent>
    </>
  )
}

export default CommandDialog
