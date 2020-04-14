import { Global, css } from '@emotion/core'

const fonts = [
  {
    family: 'Museo',
    style: 'normal',
    weight: 300,
    fileName: 'museo300',
  },
  {
    family: 'Museo',
    style: 'normal',
    weight: 500,
    fileName: 'museo500r',
  },
  {
    family: 'Museo',
    style: 'normal',
    weight: 700,
    fileName: 'museo700',
  },
]

const GlobalStyles = () => (
  <>
    <Global
      styles={fonts.map(
        (font) => css`
            @font-face {
              font-family: ${font.family};
              font-style: ${font.style};
              font-weight: ${font.weight};
              src: local(''),
                url('/fonts/${font.fileName}.woff2') format('woff2'),
                url('/fonts/${font.fileName}.woff') format('woff');
            }
          `
      )}
    />
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: Museo, sans-serif;
        }
      `}
    />
  </>
)

export default GlobalStyles
