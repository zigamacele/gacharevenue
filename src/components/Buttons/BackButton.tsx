import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/lib/shadcn/ui/button.tsx'

import { REVENUE } from '@/constants/links'

const BackButton: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button
      className='absolute left-1 top-1 z-30 border border-neutral-800 bg-neutral-900 p-3 hover:border-neutral-700 hover:bg-neutral-800'
      size='sm'
      onClick={() => navigate(REVENUE)}
    >
      <ArrowLeft width={16} />
    </Button>
  )
}

export default BackButton
