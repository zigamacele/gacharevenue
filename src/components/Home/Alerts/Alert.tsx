import { AlertCircle } from 'lucide-react'

import {
  Alert as AlertComp,
  AlertDescription,
  AlertTitle,
} from '@/lib/shadcn/ui/alert'

interface AlertProps {
  title: string
  message: string
}

const Alert: React.FC<AlertProps> = ({ title, message }) => {
  return (
    <AlertComp className='w-[25em] bg-neutral-900 sm:w-full'>
      <AlertCircle className='h-4 w-4 text-white' />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </AlertComp>
  )
}

export default Alert
