import { Button as ButtonComp } from '@/lib/shadcn/ui/button'

import Tooltip from '@/components/Tooltip'

interface ButtonProps {
  tooltip: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ tooltip, children, ...props }) => {
  return (
    <Tooltip text={tooltip}>
      <ButtonComp {...props}>{children}</ButtonComp>
    </Tooltip>
  )
}

export default Button
