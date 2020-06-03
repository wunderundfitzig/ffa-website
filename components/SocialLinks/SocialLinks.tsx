import { css } from '@emotion/core'
import { helpers } from 'style'

const socialLinkStyle = css`
  ${helpers.resetLinkStyles};
  display: inline-block;
  margin: 15px 15px 0 0;
  width: 20px;

  svg {
    width: 100%;
  }
`
type Platform = 'instagram' | 'facebook' | 'youtube'

interface Link {
  url: string
  platform: Platform
}

function Logo(props: { platform: Platform; color: string }) {
  switch (props.platform) {
    case 'instagram':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33 33'>
          <g
            fill='none'
            stroke={props.color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3'
          >
            <path d='M9 1.5h15A7.5 7.5 0 0131.5 9v15a7.5 7.5 0 01-7.5 7.5H9A7.5 7.5 0 011.5 24V9A7.5 7.5 0 019 1.5z' />
            <path d='M22.5 15.555a6 6 0 11-5.055-5.055 6 6 0 015.055 5.055zM24.75 8.25h0' />
          </g>
        </svg>
      )
    case 'facebook':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.5 31.5'>
          <path
            d='M28.125 0H3.375A3.375 3.375 0 000 3.375v24.75A3.375 3.375 0 003.375 31.5h9.65V20.791H8.6V15.75h4.43v-3.842c0-4.37 2.6-6.784 6.586-6.784a26.836 26.836 0 013.9.34V9.75h-2.2a2.521 2.521 0 00-2.842 2.723v3.277h4.836l-.773 5.041h-4.062V31.5h9.65a3.375 3.375 0 003.375-3.375V3.375A3.375 3.375 0 0028.125 0z'
            fill={props.color}
          />
        </svg>
      )
    case 'youtube':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 504 504'>
          <path d='M219.6 202.4v92l84.8-45.6z' fill={props.color} />
          <path
            fill={props.color}
            d='M377.6 0H126C56.8 0 0 56.8 0 126.4V378c0 69.2 56.8 126 126 126h251.6c69.6 0 126.4-56.8 126.4-126.4V126.4C504 56.8 447.2 0 377.6 0zM408 264.4c0 26.4-2.4 53.2-2.4 53.2s-2.8 22.4-12 32.4c-12 13.2-25.2 13.2-31.2 14-44 3.2-110 3.6-110 3.6s-82-1.2-107.2-3.6c-6.8-1.2-22.8-.8-34.8-14-9.6-10-12-32.4-12-32.4S96 290.8 96 264.4v-24.8c0-26.4 2.4-53.2 2.4-53.2s2.8-22.4 12-32.4c12-13.2 25.2-13.6 31.2-14.4C186 136.4 252 136 252 136s66 .4 110 3.6c6 .8 19.6 1.2 31.6 14 9.6 10 12 32.8 12 32.8s2.4 26.8 2.4 53.2v24.8z'
          />
        </svg>
      )
  }
}

export default function SocialLinks(props: { links: Link[]; color: string }) {
  return (
    <>
      {props.links.map((link) => (
        <a
          key={link.url}
          css={socialLinkStyle}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Logo platform={link.platform} color={props.color} />
        </a>
      ))}
    </>
  )
}
