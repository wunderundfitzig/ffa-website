export interface InternalPage {
  type: 'internal'
  slug: string
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
    displayName: 'Willkommen',
  },
  {
    type: 'internal',
    slug: '/ueber-uns',
    displayName: 'Über Uns',
    children: [
      {
        type: 'internal',
        slug: '/ueber-uns/philosophie-methoden',
        displayName: 'Philosophie & Methoden',
      },
      {
        type: 'internal',
        slug: '/ueber-uns/team',
        displayName: 'Unser Team',
      },
      {
        type: 'internal',
        slug: '/ueber-uns/gelaende',
        displayName: 'Unser Gelände',
      },
      {
        type: 'internal',
        slug: '/ueber-uns/jobs-praktika',
        displayName: 'Jobs & Praktika',
      },
    ],
  },
  {
    type: 'internal',
    slug: '/angebote',
    displayName: 'Angebote',
    children: [
      {
        type: 'internal',
        slug: '/angebote/fortbildungen',
        displayName: 'Fortbildungen',
      },
      {
        type: 'internal',
        slug: '/angebote/internationaler-jugendaustausch',
        displayName: 'Internationale Projekte',
      },
      {
        type: 'internal',
        slug: '/angebote/baumhaus-bau',
        displayName: 'Feriencamps',
      },
      {
        type: 'internal',
        slug: '/angebote/veranstaltungen',
        displayName: ' Naturpädagogik',
      },
      {
        type: 'internal',
        slug: '/angebote/erlebnispadagogik',
        displayName: 'Erlebnispädagogik',
      },
    ],
  },
  {
    type: 'internal',
    slug: '/fuer-schulen',
    displayName: 'Für Schulen',
  },
  {
    type: 'internal',
    slug: '/blog',
    displayName: 'Blog',
  },
  {
    type: 'external',
    url: 'https://waldkita-berlin.de/',
    displayName: 'Waldkita Fila',
  },
]

export default pageLinks
