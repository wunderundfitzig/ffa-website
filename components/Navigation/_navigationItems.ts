export interface InternalNavigationItem {
  type: 'internal'
  slug: string
  route: string
  displayName: string
}

export interface ExternalNavigationItem {
  type: 'external'
  url: string
  displayName: string
}

export type NavigationItem = InternalNavigationItem | ExternalNavigationItem
const navigationItems: NavigationItem[] = [
  {
    type: 'internal',
    slug: '/',
    route: 'index',
    displayName: 'Willkommen',
  },
  {
    type: 'internal',
    slug: '/ueber-uns',
    route: '[...page]',
    displayName: 'Über Uns',
  },
  {
    type: 'internal',
    slug: '/angebote',
    route: '[...page]',
    displayName: 'Unsere Angebote',
  },
  {
    type: 'internal',
    slug: '/projekte',
    route: '[...page]',
    displayName: 'Unsere Projekte',
  },
  {
    type: 'external',
    url: 'https://waldkita-berlin.de/',
    displayName: 'Waldkita Fila',
  },
]

export default navigationItems
