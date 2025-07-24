import Link from 'next/link'
import { Button } from './Button'
import { COMPANY_INFO } from '@/lib/constants'

interface CTASectionProps {
  title: string
  description: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: 'default' | 'gradient' | 'minimal'
  className?: string
}

export default function CTASection({
  title,
  description,
  primaryCta = { text: 'Get Free Quote', href: '/contact' },
  secondaryCta = { text: `Call ${COMPANY_INFO.phone}`, href: `tel:${COMPANY_INFO.phone}` },
  variant = 'default',
  className = ""
}: CTASectionProps) {
  const baseClasses = "py-16 text-center"
  
  const variantClasses = {
    default: "bg-secondary-50",
    gradient: "bg-gradient-to-r from-primary-600 to-primary-700 text-white",
    minimal: "bg-white"
  }

  return (
    <section className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-4 ${
          variant === 'gradient' ? 'text-white' : 'text-secondary-900'
        }`}>
          {title}
        </h2>
        
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          variant === 'gradient' 
            ? 'text-primary-100' 
            : 'text-secondary-600'
        }`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant={variant === 'gradient' ? 'secondary' : 'primary'}
            className={variant === 'gradient' ? 'bg-white text-primary-600 hover:bg-primary-50' : ''}
          >
            <Link href={primaryCta.href}>
              {primaryCta.text}
            </Link>
          </Button>
          
          <Button 
            size="lg"
            variant={variant === 'gradient' ? 'ghost' : 'outline'}
            className={variant === 'gradient' ? 'text-white border-white hover:bg-white/10' : ''}
          >
            <Link href={secondaryCta.href}>
              {secondaryCta.text}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}