'use client'

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

import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'

import useSupabaseStore from '@/stores/supabase-store.ts'

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
        Search{' '}
        <kbd className='bg-muted text-muted-foreground pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-neutral-600 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:inline-flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </p>
      <CommandDialogComponent open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
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
                <RegionTooltip
                  gameRegion={game.region}
                  className='right-2 border-neutral-700'
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialogComponent>
    </>
  )
}

export default CommandDialog
