import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import { Separator } from '@/lib/shadcn/ui/separator'
import { cn } from '@/lib/shadcn/utils'

import FAQ from '@/constants/faq'

interface FaqQuestionProps {
  question: string
  answer: string
  index: number
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({
  question,
  answer,
  index,
}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <section className='flex flex-col gap-2.5 px-8'>
      <Separator className='opacity-80' />
      <div
        className={cn(
          'group flex cursor-pointer items-center justify-between px-2 text-sm transition-opacity hover:opacity-60',
          !showAnswer && FAQ.length - 1 !== index && 'mb-2.5',
        )}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p>{question}</p>
        <span>{!showAnswer ? <ChevronDown /> : <ChevronUp />}</span>
      </div>
      {(FAQ.length - 1 === index || showAnswer) && (
        <Separator className='opacity-80' />
      )}
      {showAnswer && (
        <p
          className={cn(
            'slide-from-top px-2 text-sm opacity-60',
            FAQ.length - 1 !== index && 'mb-8',
          )}
        >
          {answer}
        </p>
      )}
    </section>
  )
}

export default FaqQuestion
