import {
  Alert as AlertComp,
  AlertDescription,
  AlertTitle,
} from '@/lib/shadcn/ui/alert'
import { AlertCircle } from 'lucide-react'

interface AlertProps {
  title: string
  message: string
}

const Alert: React.FC<AlertProps> = ({ title, message }) => {
  return (
    <AlertComp className='w-[27em] sm:w-full'>
      <AlertCircle className='h-4 w-4 text-white' />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </AlertComp>
  )
}

export default Alert
