export interface BreadcrumbItem {
  label: string
  href: string
  isCurrentPage?: boolean
}

export interface BreadcrumbConfig {
  [key: string]: {
    label: string
    parent?: string
    customItems?: BreadcrumbItem[]
  }
}

export const breadcrumbConfig: BreadcrumbConfig = {
  '/': {
    label: 'Home'
  },
  '/about': {
    label: 'About Us',
    parent: '/'
  },
  '/amenities': {
    label: 'Amenities',
    parent: '/'
  },
  '/gallery': {
    label: 'Gallery',
    parent: '/'
  },
  '/contact': {
    label: 'Contact Us',
    parent: '/'
  },
  '/book': {
    label: 'Book Now',
    parent: '/'
  },
  '/faq': {
    label: 'FAQ',
    parent: '/'
  },
  '/policy': {
    label: 'Policies',
    parent: '/'
  },
  '/privacy-policy': {
    label: 'Privacy Policy',
    parent: '/'
  },
  // Sports-specific pages (if they exist)
  '/sports': {
    label: 'Sports',
    parent: '/'
  },
  '/sports/cricket': {
    label: 'Cricket',
    parent: '/sports'
  },
  '/sports/football': {
    label: 'Football',
    parent: '/sports'
  },
  '/sports/basketball': {
    label: 'Basketball',
    parent: '/sports'
  },
  '/sports/badminton': {
    label: 'Badminton',
    parent: '/sports'
  },
  '/sports/pickleball': {
    label: 'Pickleball',
    parent: '/sports'
  },
  // Booking-related pages
  '/book/confirmation': {
    label: 'Booking Confirmation',
    parent: '/book'
  },
  '/book/payment': {
    label: 'Payment',
    parent: '/book'
  }
}

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = []
  
  // Always start with home unless we're on home page
  if (pathname !== '/') {
    breadcrumbs.push({ label: 'Home', href: '/' })
  }

  const config = breadcrumbConfig[pathname]
  if (!config) {
    // Fallback for dynamic routes
    const segments = pathname.split('/').filter(Boolean)
    let currentPath = ''
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: isLast
      })
    })
    
    return breadcrumbs
  }

  // Build breadcrumb trail from config
  const buildTrail = (path: string): void => {
    const pageConfig = breadcrumbConfig[path]
    if (!pageConfig) return

    if (pageConfig.parent && pageConfig.parent !== '/') {
      buildTrail(pageConfig.parent)
      breadcrumbs.push({
        label: breadcrumbConfig[pageConfig.parent]?.label || 'Parent',
        href: pageConfig.parent
      })
    }
  }

  if (config.parent && pathname !== '/') {
    buildTrail(pathname)
  }

  // Add current page
  breadcrumbs.push({
    label: config.label,
    href: pathname,
    isCurrentPage: true
  })

  return breadcrumbs
}