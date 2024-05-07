import FeedbackFormBase from '@/components/Feedback/FeedbackFormBase'
import FeedbackMessages from '@/components/Feedback/FeedbackMessages'

const Feedback: React.FC = () => {
  return (
    <main className='my-2 flex flex-col items-center gap-2'>
      <FeedbackFormBase />
      <FeedbackMessages />
    </main>
  )
}

export default Feedback
