import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/lib/shadcn/ui/tooltip'

interface TooltipProps {
  children: React.ReactNode
  text: string
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <TooltipProvider>
      <TooltipComponent>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  )
}

export default Tooltip
