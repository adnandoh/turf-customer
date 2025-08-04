import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        // Fallback for older browsers
        const startPosition = window.pageYOffset
        const distance = offsetPosition - startPosition
        const duration = 800
        let start: number | null = null

        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = timestamp - start
          const progressPercentage = Math.min(progress / duration, 1)
          
          // Easing function for smooth animation
          const easeInOutCubic = (t: number) => 
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

          window.scrollTo(0, startPosition + distance * easeInOutCubic(progressPercentage))

          if (progress < duration) {
            window.requestAnimationFrame(step)
          }
        }

        window.requestAnimationFrame(step)
      }
    }
  }, [])

  const scrollToTop = useCallback(() => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Enhanced fallback with easing
      const startPosition = window.pageYOffset
      const duration = 600
      let start: number | null = null

      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = timestamp - start
        const progressPercentage = Math.min(progress / duration, 1)
        
        // Easing function
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
        
        window.scrollTo(0, startPosition * (1 - easeOutCubic(progressPercentage)))

        if (progress < duration) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [])

  return { scrollToElement, scrollToTop }
}