import bettIcon from './_bett.svg'
import bolzplatzIcon from './_bolzplatz.svg'
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
import wippeIcon from './_wippe.svg'

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
      { icon: tischtennisIcon, name: 'Tischtennisplatten' },
      { icon: wippeIcon, name: 'Wippe' },
      { icon: schaukelnIcon, name: 'Schaukeln' },
      { icon: bolzplatzIcon, name: 'Bolzplatz' },
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
    title: 'Angebote',
    items: [
      { icon: hochseilgartenIcon, name: 'Hochseilgarten', highlight: true },
      { icon: waldkitaIcon, name: 'Waldkita' },
      { icon: waldbuhneIcon, name: 'Waldbühne' },
      { icon: jutendorfIcon, name: 'Jurtendorf' },
    ],
  },
]

export default legend
