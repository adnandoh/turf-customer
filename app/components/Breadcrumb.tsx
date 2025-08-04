'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbs } from '../utils/breadcrumbConfig'

interface BreadcrumbItem {
  label: string
  href: string
  isCurrentPage?: boolean
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  const pathname = usePathname()

  const breadcrumbItems = items || generateBreadcrumbs(pathname)

  // Don't show breadcrumbs on home page unless explicitly provided
  if (pathname === '/' && !items) {
    return null
  }

  return (
    <nav 
      aria-label="Breadcrumb navigation" 
      className={`bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 ${className}`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3 md:py-4">
          <ol className="flex items-center space-x-1 md:space-x-2 text-sm" role="list">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center" role="listitem">
                {index > 0 && (
                  <ChevronRight 
                    size={14} 
                    className="text-gray-400 mx-1 md:mx-2 flex-shrink-0" 
                    aria-hidden="true"
                  />
                )}
                
                {item.isCurrentPage ? (
                  <span 
                    className="text-gray-900 font-semibold flex items-center px-2 py-1 rounded-md bg-white/50"
                    aria-current="page"
                  >
                    {index === 0 && <Home size={14} className="mr-1 text-primary" />}
                    <span className="truncate max-w-[120px] md:max-w-none">{item.label}</span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-all duration-200 flex items-center group px-2 py-1 rounded-md hover:bg-white/30"
                    title={`Navigate to ${item.label}`}
                  >
                    {index === 0 && (
                      <Home 
                        size={14} 
                        className="mr-1 group-hover:text-primary transition-colors duration-200" 
                      />
                    )}
                    <span className="hover:underline truncate max-w-[120px] md:max-w-none">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": `https://www.turfngroup.com${item.href === '/' ? '/' : item.href + '/'}`
            }))
          })
        }}
      />
    </nav>
  )
}

export default Breadcrumb