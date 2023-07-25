import { useEffect, useState } from 'react'

const useCurrentDevice = () => {
  const mobileBreakpoint = 640
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint)

  const handleResize = () => {
    if (window.innerWidth < mobileBreakpoint) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export default useCurrentDevice
