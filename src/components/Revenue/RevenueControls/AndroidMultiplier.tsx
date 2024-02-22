import { Input } from '@/lib/shadcn/ui/input'
import { Label } from '@/lib/shadcn/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/shadcn/ui/popover'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import { getRegion } from '@/utils/region'

const AndroidMultiplier: React.FC = () => {
  const { androidMultiplier, updateAndroidMultiplier } =
    useRevenueTableControls()
  return (
    <Popover>
      <PopoverTrigger className='group h-9 rounded border border-neutral-700/80 bg-neutral-950 px-3 text-xl grayscale transition-all hover:bg-neutral-800 hover:grayscale-0'>
        {getRegion('CHINA').emoji}
      </PopoverTrigger>
      <PopoverContent className='mt-2 w-80 rounded-lg border-neutral-700/80 bg-neutral-900 px-5 py-4 text-white'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Chinese Revenue</h4>
            <p className='text-muted-foreground mt-2 text-sm opacity-60'>
              SensorTower doesn't report Chinese Android revenue. How it's
              calculated:
            </p>
            <p className='text-muted-foreground text-sm opacity-40'>
              iOS + Android ( {androidMultiplier} x iOS ) revenue
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='multiplier'>Android Multiplier</Label>
              <Input
                type='number'
                min='0'
                max='5'
                step='.25'
                id='multiplier'
                value={androidMultiplier}
                className='col-span-2 h-8 w-24 bg-neutral-800 pl-8 pr-4 text-center'
                onChange={(event) =>
                  updateAndroidMultiplier(Number(event.target.value))
                }
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AndroidMultiplier
