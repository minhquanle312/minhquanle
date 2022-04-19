import { useState, useEffect } from 'react'
import { debounce } from './../utils/index'

const useResizeWidth = (bouncingTime = 100) => {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth
    }
  })

  // * Link resize window in react: https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const debouncedHandleResize = debounce(function handleResize() {
        setWindowWidth(window.innerWidth)
      }, bouncingTime)

      window.addEventListener('resize', debouncedHandleResize)

      // NOTE: Cleanup function
      return _ => {
        window.removeEventListener('resize', debouncedHandleResize)
      }
    }
  }, [bouncingTime])

  return { windowWidth }
}

export default useResizeWidth
