import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: {
    readonly id: string
    readonly name: string
    readonly icon: string
    readonly description: string
    readonly featured?: boolean
    readonly benefits?: readonly {
      readonly title: string
      readonly description: string
    }[]
    readonly stats?: readonly {
      readonly value: string
      readonly label: string
    }[]
    readonly integrationTags?: readonly string[]
  }
  variant?: 'default' | 'featured' | 'compact'
  className?: string
}

export default function ServiceCard({ 
  service, 
  variant = 'default',
  className 
}: ServiceCardProps) {
  const href = `/services/${service.id}`

  if (variant === 'featured') {
    return (
      <div className={cn(
        'bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-primary-300 group',
        className
      )}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-3xl">{service.icon}</div>
          <h3 className="text-xl font-bold text-secondary-900">
            {service.name}
          </h3>
        </div>
        
        <p className="text-secondary-700 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Stats */}
        {service.stats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {service.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="text-xs text-secondary-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        {service.benefits && (
          <div className="space-y-3 mb-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium text-secondary-900 text-sm">
                    {benefit.title}
                  </div>
                  <div className="text-secondary-600 text-sm">
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Link href={href}>
          <Button className="w-full group-hover:bg-primary-700">
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <Link 
        href={href}
        className={cn(
          'block bg-white border border-secondary-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-primary-300 group',
          className
        )}
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-xl">{service.icon}</div>
          <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
            {service.name}
          </h3>
        </div>
        <p className="text-secondary-600 text-sm line-clamp-2">
          {service.description}
        </p>
        {service.integrationTags && (
          <div className="mt-3 space-y-1">
            {service.integrationTags.slice(0, 1).map((tag, index) => (
              <div key={index} className="text-xs text-primary-600 font-medium">
                {tag}
              </div>
            ))}
          </div>
        )}
      </Link>
    )
  }

  return (
    <div className={cn(
      'bg-white border border-secondary-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary-300 group',
      className
    )}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-2xl">{service.icon}</div>
        <h3 className="text-lg font-semibold text-secondary-900">
          {service.name}
        </h3>
      </div>
      
      <p className="text-secondary-700 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Integration Tags */}
      {service.integrationTags && (
        <div className="space-y-2 mb-4">
          {service.integrationTags.map((tag, index) => (
            <div key={index} className="text-sm text-primary-600 font-medium">
              {tag}
            </div>
          ))}
        </div>
      )}

      <Link href={href}>
        <Button 
          variant="outline" 
          size="sm"
          className="group-hover:bg-primary-50 group-hover:border-primary-500"
        >
          Learn More
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  )
}