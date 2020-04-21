import { useState, useEffect } from 'react'
import { Breakpoint, getBreakpoint } from 'style/breakpoints'

export default function useBreakpoint(initialValue: Breakpoint): Breakpoint {
  const [breakpoint, setBreakpoint] = useState(initialValue)

  useEffect(() => {
    function updateBreakpoint() {
      setBreakpoint(getBreakpoint(window.innerWidth))
    }

    updateBreakpoint() // run initally

    // add listener to run on resize
    window.addEventListener('resize', updateBreakpoint)
    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
  })

  return breakpoint
}
