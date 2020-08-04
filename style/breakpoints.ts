export type Breakpoint = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export const breakpointS = 400
export const breakpointM = 550
export const breakpointL = 750
export const breakpointXL = 1040
export const breakpointXXL = 1200

const orderedBreakpoints = ['xs', 's', 'm', 'l', 'xl', 'xxl']

export function getBreakpoint(windowWidth: number): Breakpoint {
  if (windowWidth >= breakpointXXL) return 'xxl'
  if (windowWidth >= breakpointXL) return 'xl'
  if (windowWidth >= breakpointL) return 'l'
  if (windowWidth >= breakpointM) return 'm'
  if (windowWidth >= breakpointS) return 's'
  return 'xs'
}

export function isAtOrAboveBreakpoint(
  breakpoint: Breakpoint,
  windowWidth: number
) {
  const currentBreakpoint = getBreakpoint(windowWidth)
  const currentBreakpointIndex = orderedBreakpoints.indexOf(currentBreakpoint)
  const breakpointIndex = orderedBreakpoints.indexOf(breakpoint)

  return currentBreakpointIndex >= breakpointIndex
}

export function isBelowBreakpoint(breakpoint: Breakpoint, windowWidth: number) {
  return !isAtOrAboveBreakpoint(breakpoint, windowWidth)
}
