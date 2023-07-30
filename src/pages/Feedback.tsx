import FeedbackForm from '@/components/Feedback/FeedbackForm'
import useFeedbackChanges from '@/hooks/useFeedbackChanges'

const Feedback = () => {
  const { data, loading } = useFeedbackChanges()

  return (
    <main className='mt-4 flex flex-col items-center'>
      <FeedbackForm />
      <section>
        {!loading && (
          <div>
            {data.map((feedback) => {
              return (
                <div key={feedback.id} className='flex gap-2'>
                  {feedback.name || 'Anonymous'} {feedback.content}
                </div>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}

export default Feedback
