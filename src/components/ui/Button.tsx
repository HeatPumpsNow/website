import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          // Variant styles
          {
            'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800': variant === 'primary',
            'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 active:bg-secondary-300': variant === 'secondary',
            'border border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100': variant === 'outline',
            'text-secondary-700 hover:bg-secondary-100 active:bg-secondary-200': variant === 'ghost',
          },
          // Size styles
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }