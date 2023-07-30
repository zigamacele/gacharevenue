import FeedbackForm from '@/components/Feedback/FeedbackForm'
import FeedbackMessages from '@/components/Feedback/FeedbackMessages'

const Feedback = () => {
  return (
    <main className='my-4 flex flex-col items-center gap-4'>
      <FeedbackForm />
      <FeedbackMessages />
    </main>
  )
}

export default Feedback
