import { css } from '@emotion/core'
import { layout } from 'style'

const mapStyle = css`
  ${layout.container};
  display: block;
  height: 300px;
  margin-bottom: 60px;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
  }

  /* this is a ugly hack to prevent interactions on the map but
  leave a spot for the zoom scontrolls
  lets hope som does not change their css */
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: calc(100% - 50px);
    height: 100%;
    top: 0;
    left: 50px;
  }
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: calc(100% - 100px);
    top: 100px;
    left: 0;
  }
`

const Map = () => {
  return (
    <div css={mapStyle}>
      <iframe
        frameBorder='0'
        scrolling='no'
        marginHeight={0}
        marginWidth={0}
        src='https://www.openstreetmap.org/export/embed.html?bbox=13.267976045608522%2C52.47190980418642%2C13.271623849868776%2C52.4747591785234&amp;layer=mapnik&amp;marker=52.47333451441639%2C13.269799947738647'
      ></iframe>
    </div>
  )
}

export default Map
