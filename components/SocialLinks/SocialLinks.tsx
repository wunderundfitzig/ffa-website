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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke={props.color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' />
          <path d='M9.75 15.02l5.75-3.27-5.75-3.27v6.54z' />
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
