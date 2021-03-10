export interface InternalPage {
  type: 'internal'
  slug: string
  route: string
  children?: InternalPage[]
  displayName: string
}

export interface ExternalPage {
  type: 'external'
  url: string
  displayName: string
}

export type NavigationItem = InternalPage | ExternalPage

const pageLinks: NavigationItem[] = [
  {
    type: 'internal',
    slug: '/',
    route: '/index',
    displayName: 'Willkommen',
  },
  {
    type: 'internal',
    slug: '/ueber-uns',
    route: '/[...page]',
    displayName: 'Über Uns',
    children: [
      {
        type: 'internal',
        slug: '/ueber-uns/philosophie-methoden',
        route: '/[...page]',
        displayName: 'Philosophie & Methoden',
      },
      {
        type: 'internal',
        slug: '/ueber-uns/team',
        route: '/[...page]',
        displayName: 'Unser Team',
      },
      {
        type: 'internal',
        slug: '/ueber-uns/gelaende',
        route: '/[...page]',
        displayName: 'Unser Gelände',
      },
      {
        type: 'internal',
        slug: '/ueber-uns/jobs-praktika',
        route: '/[...page]',
        displayName: 'Jobs & Praktika',
      },
    ],
  },
  {
    type: 'internal',
    slug: '/angebote',
    route: '/[...page]',
    displayName: 'Bildungsangebote',
    children: [
      {
        type: 'internal',
        slug: '/angebote/erlebnispadagogik',
        route: '/[...page]',
        displayName: 'Erlebnispädagogik',
      },
      {
        type: 'internal',
        slug: '/angebote/fortbildungen',
        route: '/[...page]',
        displayName: 'Fortbildungen',
      },
      {
        type: 'internal',
        slug: '/angebote/veranstaltungen',
        route: '/[...page]',
        displayName: 'Walk Away',
      },
      {
        type: 'internal',
        slug: '/angebote/baumhaus-bau',
        route: '/[...page]',
        displayName: 'Baumhaus Bau',
      },
      {
        type: 'internal',
        slug: '/angebote/internationaler-jugendaustausch',
        route: '/[...page]',
        displayName: 'Internationaler Jugendaustausch',
      },
    ],
  },
  {
    type: 'internal',
    slug: '/blog',
    route: '/[...page]',
    displayName: 'Blog',
  },
  {
    type: 'external',
    url: 'https://waldkita-berlin.de/',
    displayName: 'Waldkita Fila',
  },
]

export default pageLinks
