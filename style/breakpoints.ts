export type Breakpoint = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export const breakpointS = 400
export const breakpointM = 550
export const breakpointL = 750
export const breakpointXL = 1000
export const breakpointXXL = 1200

export function getBreakpoint(windowWidth: number): Breakpoint {
  if (windowWidth >= breakpointXXL) return 'xxl'
  if (windowWidth >= breakpointXL) return 'xl'
  if (windowWidth >= breakpointL) return 'l'
  if (windowWidth >= breakpointM) return 'm'
  if (windowWidth >= breakpointS) return 's'
  return 'xs'
}
