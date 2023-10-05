import FeedbackForm from '@/components/Feedback/FeedbackForm'
import FeedbackMessages from '@/components/Feedback/FeedbackMessages'

const Feedback: React.FC = () => {
  return (
    <main className='my-2 flex flex-col items-center gap-4'>
      <FeedbackForm />
      <FeedbackMessages />
    </main>
  )
}

export default Feedback
