import useFeedbackChanges from '@/hooks/useFeedbackChanges'
import MotionInView from '@/lib/framer-motion/MotionInView'
import { formatTimestampz } from '@/utils/timeDate'
import { Clock } from 'lucide-react'

const FeedbackMessages: React.FC = () => {
  const { data, loading } = useFeedbackChanges()
  return (
    <section>
      {!loading && (
        <div className='flex w-screen flex-col justify-between gap-2 text-sm sm:w-[40em]'>
          {data.map((feedback) => {
            return (
              <MotionInView
                key={feedback.id}
                y={-50}
                duration={0.8}
                styles='flex flex-col gap-2 rounded border border-neutral-700 bg-neutral-900 px-4 py-2'
              >
                <div className='flex justify-between'>
                  <span>{feedback.name || 'Anonymous'}</span>
                  <div className='flex flex-col items-end'>
                    <div className='flex items-center gap-1.5 opacity-40'>
                      <Clock size={14} />
                      <span className='text-xs'>
                        {formatTimestampz(feedback.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='break-words opacity-60'>
                  {feedback.content}
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
