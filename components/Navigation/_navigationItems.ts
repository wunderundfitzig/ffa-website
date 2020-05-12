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
    ],
  },
  {
    type: 'internal',
    slug: '/angebote',
    route: '/[...page]',
    displayName: 'Unsere Angebote',
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
        displayName: 'Übergangsbegleitung',
      },
      {
        type: 'internal',
        slug: '/angebote/jobs-praktika',
        route: '/[...page]',
        displayName: 'Jobs & Praktika',
      },
    ],
  },
  {
    type: 'internal',
    slug: '/projekte',
    route: '/[...page]',
    displayName: 'Unsere Projekte',
    children: [
      {
        type: 'internal',
        slug: '/projekte/inisek',
        route: '/[...page]',
        displayName: 'INISEK',
      },
      {
        type: 'internal',
        slug: '/projekte/internationaler-jugendaustausch',
        route: '/[...page]',
        displayName: 'Internationaler Jugendaustausch',
      },
      {
        type: 'internal',
        slug: '/projekte/natur-und-wildnispadagogik',
        route: '/[...page]',
        displayName: 'Natur- und Wildnispädagogik',
      },
    ],
  },
  {
    type: 'external',
    url: 'https://waldkita-berlin.de/',
    displayName: 'Waldkita Fila',
  },
]

export default pageLinks
