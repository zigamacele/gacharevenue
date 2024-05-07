import { Clock } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView'

import useFeedbackChanges from '@/hooks/useFeedbackChanges'

import { formatTimestampz } from '@/utils/timeDate'

import { FeedbackType } from '@/types/feedback'

const FeedbackMessages: React.FC = () => {
  const { data, loading } = useFeedbackChanges()
  const [searchParams] = useSearchParams()
  const currentFeedbackType = searchParams.get('type') ?? FeedbackType.FEEDBACK
  return (
    <section>
      {!loading && (
        <div className='flex w-screen flex-col justify-between gap-2 text-sm sm:w-[40em]'>
          {data.map((feedback) => {
            if (currentFeedbackType !== (feedback.type as string)) {
              return null
            }

            return (
              <MotionInView
                key={feedback.id}
                y={-50}
                duration={0.8}
                styles='flex flex-col gap-2 rounded border border-neutral-700 bg-neutral-900 px-4 py-2'
              >
                <div className='flex justify-between'>
                  <span className='max-w-[14em] truncate'>
                    {feedback.name || 'Anonymous'}
                  </span>
                  <div className='flex flex-col items-end'>
                    <div className='flex items-center gap-1.5 opacity-40'>
                      <Clock size={14} />
                      <span className='text-xs'>
                        {formatTimestampz(feedback.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='hyphens-auto break-words py-1 opacity-60'>
                  {feedback.type === FeedbackType.SUGGESTIONS ? (
                    <pre className='rounded-md bg-neutral-800 p-4'>
                      <code className='text-white'>{feedback.content}</code>
                    </pre>
                  ) : (
                    feedback.content
                  )}
                </span>
              </MotionInView>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default FeedbackMessages
