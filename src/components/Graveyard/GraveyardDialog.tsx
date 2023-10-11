import { ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/lib/shadcn/ui/dialog.tsx'

import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'

import ImageComponent from '@/layouts/ImageComponent.tsx'
import YoutubeEmbed from '@/layouts/YoutubeEmbed.tsx'

import { GraveyardOutput } from '@/types/supabase.ts'

interface DialogProps {
  children: ReactNode
  game: GraveyardOutput
}

const GraveyardDialog: React.FC<DialogProps> = ({
  children,
  game: { trailer, games },
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='group sm:max-w-[425px]'>
        <RegionTooltip gameRegion={games.region} className=' left-2 top-2' />
        <span className='absolute top-0 z-10 h-48 w-full bg-gradient-to-t from-neutral-900 via-neutral-950/80 to-transparent md:rounded-t' />
        <span className='absolute top-[14.44em] z-50 w-full border-b border-neutral-800 group-hover:border-neutral-700'></span>
        <ImageComponent
          height={192}
          width={350}
          src={games.background}
          alt={games.name}
          className='absolute top-0 h-48 w-full object-cover opacity-60 transition-opacity group-hover:opacity-100 md:rounded-t'
        />
        <div className='z-30 flex justify-center gap-6'>
          <div className='mb-2 flex flex-col items-center justify-end'>
            <p className='text-xs opacity-60'>Developer</p>
            <p className='max-w-[6em] truncate'>{games.developer}</p>
          </div>
          {children}
          <div className='mb-2 flex flex-col items-center justify-end'>
            <p className='text-xs opacity-60'>Publisher</p>
            <p className='max-w-[6em] truncate'>{games.publisher}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <YoutubeEmbed
            embedId={trailer}
            className='h-52 w-full rounded-lg border border-neutral-800 group-hover:border-neutral-700'
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GraveyardDialog
