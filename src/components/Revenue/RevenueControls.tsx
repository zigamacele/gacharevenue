import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Combine,
  Construction,
  Eye,
  Filter,
  Fullscreen,
  Globe,
  Pin,
  PinOff,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import { useState } from 'react'

import { Input } from '@/lib/shadcn/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcn/ui/select'
import { Separator } from '@/lib/shadcn/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs'

import useCurrentDevice from '@/hooks/useCurrentDevice'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import { regions as regionsConstant } from '@/constants/regions'
import { CURRENT_TABLE } from '@/constants/tables.ts'
import { capture } from '@/utils/canvas.ts'
import { getRegion } from '@/utils/region'

import AndroidMultiplier from './RevenueControls/AndroidMultiplier'
import MonthSwitcher from './RevenueControls/MonthSwitcher'
import Toggle from './Toggle'
import Button from '../Button'

const RevenueControls: React.FC = () => {
  const {
    search,
    updateSearch,
    toggle,
    showEditSection,
    showCombinedRevenue,
    sortAscending,
    showPinned,
    showMaintenance,
    pinned,
    updateSelectedRegion,
    selectedRegion,
  } = useRevenueTableControls()

  const isMobile = useCurrentDevice()

  const [currentTab, setCurrentTab] = useState<string>('controls')

  const regions = [...regionsConstant]

  if (showCombinedRevenue) {
    regions.push('COMBINED_REGIONS')
  }

  if (selectedRegion === 'COMBINED_REGIONS' && !showCombinedRevenue) {
    updateSelectedRegion('ALL')
  }

  return (
    <section className='mx-2 mb-1 mt-3'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <Tabs
            value={currentTab}
            className='flex flex-col items-start bg-neutral-950'
          >
            <TabsList className='center flex rounded-md'>
              <TabsTrigger
                value='controls'
                className='flex items-center gap-2 font-normal'
                onClick={() => setCurrentTab('controls')}
              >
                <SlidersHorizontal size={18} />
                {!isMobile ? (
                  <p>Controls</p>
                ) : (
                  currentTab === 'controls' && <p>Controls</p>
                )}
              </TabsTrigger>
              <TabsTrigger
                value='region'
                className='flex items-center gap-2 font-normal'
                onClick={() => setCurrentTab('region')}
              >
                <Globe size={18} />
                {!isMobile ? (
                  <p>Region</p>
                ) : (
                  currentTab === 'region' && <p>Region</p>
                )}
              </TabsTrigger>
              <TabsTrigger
                value='filters'
                className='flex items-center gap-2 font-normal'
                onClick={() => setCurrentTab('filters')}
              >
                <Filter size={18} />
                {!isMobile ? (
                  <p>Filters</p>
                ) : (
                  currentTab === 'filters' && <p>Filters</p>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className='flex gap-2'>
            <Button
              tooltip='Take a screenshot'
              className='w-12 text-opacity-60'
              onClick={() =>
                void capture('revenue_chart', `GACHAREVENUE-${CURRENT_TABLE}`)
              }
            >
              <Fullscreen size={18} />
            </Button>
            <Button
              tooltip='Hide controls'
              className='w-12 text-opacity-60'
              disabled
            >
              <Eye size={18} />
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-between'></div>
        {currentTab === 'filters' && (
          <div className='flex w-full items-center justify-between gap-2'>
            <Toggle
              onClick={() => toggle('showEditSection')}
              pressed={showEditSection}
              tooltip={!showEditSection ? 'Edit Chart' : 'Close Editor'}
            >
              <ClipboardEdit size={20} />
            </Toggle>
            <Input
              className='rounded border-neutral-700/80 bg-neutral-950'
              placeholder='Search'
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
            />
            <Separator orientation='vertical' className='h-6' />
            <div className='flex items-center gap-2'>
              <Toggle
                onClick={() => toggle('showMaintenance')}
                pressed={showMaintenance}
                tooltip={
                  !showMaintenance
                    ? 'Show Games in Maintenance Mode'
                    : 'Hide Games in Maintenance Mode'
                }
              >
                <Construction size={18} />
              </Toggle>
              <Separator orientation='vertical' className='h-6' />
              <Toggle
                onClick={() => toggle('showPinned')}
                disabled={!pinned.length && !showPinned}
                pressed={showPinned}
                tooltip={!showPinned ? 'Show Pinned' : 'Hide Pinned'}
              >
                {showPinned ? <PinOff size={18} /> : <Pin size={18} />}
              </Toggle>

              <Toggle
                onClick={() => toggle('sortAscending')}
                pressed={sortAscending}
                tooltip={!sortAscending ? 'Sort Ascending' : 'Sort Descending'}
              >
                {sortAscending ? (
                  <ArrowUp10 size={22} />
                ) : (
                  <ArrowDown10 size={22} />
                )}
              </Toggle>
            </div>
          </div>
        )}
        {currentTab === 'region' && (
          <div className='flex w-full items-center justify-between gap-2'>
            <Toggle
              onClick={() => toggle('showCombinedRevenue')}
              pressed={showCombinedRevenue}
              tooltip={
                !showCombinedRevenue
                  ? 'Combine Region Revenue'
                  : 'Separate Region Revenue'
              }
            >
              <Combine size={18} />
            </Toggle>
            <Input
              className='rounded border-neutral-700/80 bg-neutral-950'
              placeholder='Search'
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
            />
            <Separator orientation='vertical' className='h-6' />
            <div className='flex items-center gap-2'>
              <AndroidMultiplier />
              <Select
                value={selectedRegion}
                onValueChange={(value) => updateSelectedRegion(value)}
              >
                <SelectTrigger className='w-16 rounded border-neutral-700/80 bg-neutral-950 md:w-52'>
                  <SelectValue placeholder='Region' aria-label={selectedRegion}>
                    {regions.includes(selectedRegion) ? (
                      isMobile ? (
                        getRegion(selectedRegion).emoji
                      ) : (
                        <div className='flex items-center gap-2 whitespace-nowrap'>
                          <div>{getRegion(selectedRegion).emoji}</div>
                          <div>{getRegion(selectedRegion).text}</div>
                        </div>
                      )
                    ) : (
                      'All'
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className='border-neutral-700/80 bg-neutral-900'>
                  <SelectGroup>
                    <SelectItem value='ALL'>All</SelectItem>
                    {regions.map((region) => {
                      const { text, emoji } = getRegion(region)
                      return (
                        <SelectItem key={region} value={region}>
                          <div className='flex items-center gap-2 whitespace-nowrap'>
                            <div>{emoji}</div>
                            <div>{text}</div>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        {currentTab === 'controls' && (
          <div className='flex w-full items-center justify-between gap-2'>
            <Button
              tooltip='Clear search bar'
              disabled={!search}
              className='w-12'
              onClick={() => updateSearch('')}
            >
              <X size={18} />
            </Button>
            <Input
              className='rounded border-neutral-700/80 bg-neutral-950'
              placeholder='Search'
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
            />
            <Separator orientation='vertical' className='h-6' />
            <MonthSwitcher />
          </div>
        )}
      </div>
    </section>
  )
}

export default RevenueControls
