import bettIcon from './_bett.svg'
import buroIcon from './_buro.svg'
import eingangIcon from './_eingang.svg'
import grillplatzIcon from './_grillplatz.svg'
import hochseilgartenIcon from './_hochseilgarten.svg'
import jutendorfIcon from './_jutendorf.svg'
import kucheIcon from './_kuche.svg'
import lagerfeuerIcon from './_lagerfeuer.svg'
import picknickIcon from './_picknick.svg'
import schaukelnIcon from './_schaukeln.svg'
import tischtennisIcon from './_tischtennis.svg'
import veranstaltungIcon from './_veranstaltung.svg'
import waldbuhneIcon from './_waldbuhne.svg'
import waldkitaIcon from './_waldkita.svg'
import zeltIcon from './_zelt.svg'
import baumhausIcon from './_baumhaus.svg'
import ponyIcon from './_pony.svg'

const legend = [
  {
    title: 'Gebäude',
    items: [
      { icon: buroIcon, name: 'Büro', highlight: true },
      { icon: kucheIcon, name: 'Küche' },
      { icon: bettIcon, name: 'Schlafräume' },
      { icon: veranstaltungIcon, name: 'Veranstaltungssaal' },
    ],
  },
  {
    title: 'Aktivitäten',
    items: [
      { icon: ponyIcon, name: 'Ponyreiten', highlight: true },
      { icon: schaukelnIcon, name: 'Spielplatz' },
      { icon: tischtennisIcon, name: 'Tischtennisplatten' },
    ],
  },
  {
    title: 'Gelände',
    items: [
      { icon: eingangIcon, name: 'Eingang', highlight: true },
      { icon: picknickIcon, name: 'Picknick' },
      { icon: lagerfeuerIcon, name: 'Lagerfeuer' },
      { icon: grillplatzIcon, name: 'Grillplatz' },
    ],
  },
  {
    title: 'Übernachtungshaus',
    items: [
      { icon: bettIcon, name: 'Übernachtungshaus' },
      { icon: baumhausIcon, name: 'Baumhausdorf' },
      { icon: jutendorfIcon, name: 'Jurtendorf' },
      { icon: zeltIcon, name: 'Zeltplatz' },
    ],
  },
  {
    title: 'Angebote',
    items: [
      { icon: hochseilgartenIcon, name: 'Hochseilgarten', highlight: true },
      { icon: waldkitaIcon, name: 'Waldkita' },
      { icon: waldbuhneIcon, name: 'Waldbühne' },
    ],
  },
]

export default legend
