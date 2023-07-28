'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/shadcn/utils'

const toggleVariants = cva(
  'inline-flex items-center border text-neutral-500 border-neutral-700/80 justify-center rounded-md text-sm font-medium transition-colors hover:bg-neutral-700/50 hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-neutral-900 data-[state=on]:border-neutral-400 data-[state=on]:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 dark:focus-visible:ring-neutral-800 dark:data-[state=on]:bg-neutral-800 dark:data-[state=on]:text-neutral-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent rounded',
        outline:
          'border border-neutral-200 bg-transparent shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
      },
      size: {
        default: 'h-9 px-3',
        sm: 'h-8 px-2',
        lg: 'h-10 px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }
