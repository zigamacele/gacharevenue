import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/lib/shadcn/ui/badge.tsx'
import { Button } from '@/lib/shadcn/ui/button.tsx'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/lib/shadcn/ui/command.tsx'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/shadcn/ui/popover.tsx'
import { cn } from '@/lib/shadcn/utils.ts'

import useCurrentDevice from '@/hooks/useCurrentDevice.tsx'

import useRevenueTableControls from '@/stores/revenue-table-controls.ts'

import { regions } from '@/constants/regions.ts'
import { getRegion } from '@/utils/region.ts'

export const RegionSelector: React.FC = () => {
  const isMobile = useCurrentDevice()
  const { selectedRegions, updateSelectedRegions } = useRevenueTableControls()
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className='w-24 justify-between px-2 sm:w-52'
        >
          <div className='flex items-center gap-2'>
            {!selectedRegions.length && (
              <span className='px-1 font-normal opacity-50'>None</span>
            )}
            {selectedRegions.map((region, index) => {
              if ((isMobile && index > 0) || index > 2) return null

              const regionDetails = getRegion(region)

              return (
                <Badge
                  key={`badge-${region}`}
                  variant='secondary'
                  className={cn(
                    'border border-neutral-700',
                    regionDetails.color,
                  )}
                >
                  {regionDetails.emoji}
                </Badge>
              )
            })}
            {selectedRegions.length > (isMobile ? 1 : 3) && (
              <span className='whitespace-nowrap font-normal opacity-80'>
                +{selectedRegions.length - (isMobile ? 1 : 3)}
              </span>
            )}
          </div>
          <ChevronsUpDown className='ml-2 h-3 w-3 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-52 p-0'>
        <Command>
          {open ? (
            <CommandList className='bg-popover text-popover-foreground z-10 w-full rounded-md bg-neutral-900 shadow-md outline-none animate-in'>
              <CommandGroup className='h-full overflow-auto'>
                {regions.map((region) => {
                  const regionDetails = getRegion(region)

                  return (
                    <CommandItem
                      key={`dropdown-${region}`}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      onSelect={() => {
                        updateSelectedRegions(region)
                      }}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center'>
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            selectedRegions.includes(region)
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                        {regionDetails.text}
                      </div>
                      <Badge
                        variant='secondary'
                        className={cn(
                          'border border-neutral-600',
                          regionDetails.color,
                        )}
                      >
                        {regionDetails.emoji}
                      </Badge>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          ) : null}
        </Command>
      </PopoverContent>
    </Popover>
  )
}
