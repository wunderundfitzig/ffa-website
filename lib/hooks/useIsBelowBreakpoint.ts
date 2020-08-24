import { Breakpoint, isBelowBreakpoint } from 'style/breakpoints'
import useWindowSize from './useWindowSize'

export default function useIsBelowBreakpoint(
  breakpoint: Breakpoint,
  initialValue: boolean
) {
  const { width } = useWindowSize()
  if (width === undefined) return initialValue
  return isBelowBreakpoint(breakpoint, width)
}
