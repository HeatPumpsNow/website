interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  service: string
  className?: string
}

export default function TestimonialCard({
  quote,
  author,
  location,
  service,
  className = ""
}: TestimonialCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-300 ${className}`}>
      <div className="mb-4">
        <p className="text-secondary-700 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      
      <div className="border-t border-secondary-100 pt-4">
        <div className="font-semibold text-secondary-900">
          {author}
        </div>
        <div className="text-sm text-secondary-600">
          {location} • {service}
        </div>
      </div>
    </div>
  )
}