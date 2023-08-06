import logo from '@/assets/logo.png'
import { Button } from '@/lib/shadcn/ui/button'
import { Disc2, Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ErrorBoundaryProps {
  resetErrorBoundary: () => void
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  resetErrorBoundary,
}) => {
  const navigate = useNavigate()
  return (
    <section className='absolute left-0 right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3'>
      <img src={logo} alt='logo' className='h-24' />
      <span className=' text-neutral-600'>
        Oops! Looks like your luck ran out..
      </span>
      <div className='flex gap-3'>
        <Button
          className='flex gap-2'
          onClick={() => {
            navigate('/')
            resetErrorBoundary()
          }}
        >
          <Undo2 width={16} />
          <span>Go back</span>
        </Button>
        <Button onClick={() => resetErrorBoundary()} className='flex gap-2'>
          <Disc2 width={16} />
          <span>Reroll</span>
        </Button>
      </div>
    </section>
  )
}

export default ErrorBoundary
