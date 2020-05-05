import { css } from '@emotion/core'
import { layout } from 'style'

const mapStyle = css`
  ${layout.container};
  display: block;
  height: 300px;
  margin-bottom: 60px;
`

const Map = () => {
  return (
    <iframe
      css={mapStyle}
      frameBorder='0'
      scrolling='no'
      marginHeight={0}
      marginWidth={0}
      src='https://www.openstreetmap.org/export/embed.html?bbox=13.267976045608522%2C52.47190980418642%2C13.271623849868776%2C52.4747591785234&amp;layer=mapnik&amp;marker=52.47333451441639%2C13.269799947738647'
    ></iframe>
  )
}

export default Map
