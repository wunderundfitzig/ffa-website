import { Global, css } from '@emotion/core'
import woodBackground from './_woodBackground.jpg'
import { colors, typography } from 'style'

const fonts = [
  {
    family: 'Museo Sans',
    style: 'normal',
    weight: 500,
    fileName: 'museo-sans500',
  },
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
    fileName: 'museo500',
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
          ${typography.museoSans};
          margin: 0;
          padding: 0;
          background-image: url(${woodBackground.src});
          background-size: 100%;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5em;
          color: ${colors.brown};
        }

        p {
          margin: 0 0 1em 0;
        }

        h1 {
          ${typography.heading1};
        }

        h2 {
          ${typography.heading2};
        }

        h3 {
          ${typography.heading3};
        }
      `}
    />
  </>
)

export default GlobalStyles
