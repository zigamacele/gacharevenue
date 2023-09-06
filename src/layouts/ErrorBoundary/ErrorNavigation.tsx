import { Disc2, Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/lib/shadcn/ui/button'

interface ErrorNavigationProps {
  resetErrorBoundary: () => void
  hide?: boolean
}

const ErrorNavigation: React.FC<ErrorNavigationProps> = ({
  resetErrorBoundary,
  hide,
}) => {
  const navigate = useNavigate()

  if (hide) return null

  return (
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
  )
}

export default ErrorNavigation
