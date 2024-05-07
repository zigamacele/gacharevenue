import { Eye, MessageCircleMore, Swords } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Separator } from '@/lib/shadcn/ui/separator.tsx'
import { Tabs, TabsList } from '@/lib/shadcn/ui/tabs'

import useCurrentDevice from '@/hooks/useCurrentDevice'

import Button from '@/components/Button.tsx'
import GameSuggestionForm from '@/components/Feedback/Form/GameSuggestionForm.tsx'

import FeedbackForm from './Form/FeedbackForm'
import TabsTriggerWrapper from './TabsTriggerWrapper'

import { FeedbackType } from '@/types/feedback'

const FeedbackFormBase: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showForm, setShowForm] = useState<boolean>(true)
  const currentTab = searchParams.get('type') ?? FeedbackType.FEEDBACK
  const isMobile = useCurrentDevice()

  const handleSearchTabsSwitch = (value: string) => {
    setSearchParams({ type: value })
  }

  const formSelector = () => {
    switch (currentTab) {
      case FeedbackType.FEEDBACK:
        return <FeedbackForm />
      case FeedbackType.SUGGESTIONS:
        return <GameSuggestionForm />
      default:
        return null
    }
  }

  return (
    <section className='flex w-full flex-col gap-3 rounded-lg border border-neutral-700 bg-neutral-900 p-4 fade-in sm:w-[35em]'>
      <div className='flex justify-between'>
        <Tabs
          value={currentTab}
          onValueChange={(value) => handleSearchTabsSwitch(value)}
          className='flex items-start justify-between rounded-md bg-neutral-950'
        >
          <TabsList className='center flex rounded-md'>
            <TabsTriggerWrapper
              value={FeedbackType.FEEDBACK}
              currentTab={currentTab}
              icon={<MessageCircleMore size={18} />}
              isMobile={isMobile}
            />
            <TabsTriggerWrapper
              value={FeedbackType.SUGGESTIONS}
              currentTab={currentTab}
              icon={<Swords size={18} />}
              isMobile={isMobile}
            />
          </TabsList>
        </Tabs>
        <Button
          tooltip='Hide controls'
          className='w-12 text-opacity-60'
          onClick={() => setShowForm(!showForm)}
        >
          <Eye size={18} />
        </Button>
      </div>

      {showForm && (
        <>
          <Separator className='opacity-60' />
          {formSelector()}
        </>
      )}
    </section>
  )
}

export default FeedbackFormBase
