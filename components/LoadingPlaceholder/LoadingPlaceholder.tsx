import { css, keyframes } from '@emotion/core'
import { layout } from 'style'

const fadeIn = keyframes`
  from, to {
    opacity: 0.4
  }

  40%, 43% {
    opacity: 1
  }

`

export default function LoadingPlaceholder() {
  const loadingStyle = css`
    ${layout.block};
    ${layout.container};
    min-height: 80vh;
    opacity: 0;
    animation: ${fadeIn} 3s infinite;
    animation-delay: 1s;
  `
  return <div css={loadingStyle} />
}
