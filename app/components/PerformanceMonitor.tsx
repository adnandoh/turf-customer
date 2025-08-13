'use client'

import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // You can send this data to your analytics service
      console.log('Web Vital:', metric)
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }
    }

    // Import and use web-vitals
    import('web-vitals').then((webVitals) => {
      // Use the correct API for web-vitals v3+
      if (webVitals.onCLS) webVitals.onCLS(reportWebVitals)
      if (webVitals.onINP) webVitals.onINP(reportWebVitals) // INP replaced FID
      if (webVitals.onFCP) webVitals.onFCP(reportWebVitals)
      if (webVitals.onLCP) webVitals.onLCP(reportWebVitals)
      if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals)
    }).catch(() => {
      // web-vitals not available, skip monitoring
      console.log('Web Vitals monitoring not available')
    })

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      try {
        // Monitor long tasks
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              console.warn('Long task detected:', entry.duration + 'ms')
            }
          })
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })

        // Monitor layout shifts
        const layoutShiftObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (entry.hadRecentInput) return
            console.log('Layout shift:', entry.value)
          })
        })
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })

        // Cleanup
        return () => {
          longTaskObserver.disconnect()
          layoutShiftObserver.disconnect()
        }
      } catch (error) {
        console.warn('Performance monitoring setup failed:', error)
      }
    }
  }, [])

  return null
}

export default PerformanceMonitor