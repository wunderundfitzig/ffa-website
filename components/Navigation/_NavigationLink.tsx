import { css } from '@emotion/core'
import Link from 'next/link'
import { colors, breakpoints } from 'style'
import useCurrentSlug from 'lib/hooks/useCurrentSlug'
import {
  NavigationItem,
  ExternalNavigationItem,
  InternalNavigationItem,
} from './_navigationItems'

const navigationLinkStyle = ({ isActive }: { isActive: boolean }) => css`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.3em;
  margin: 35px 0;
  text-decoration: none;
  color: ${isActive ? colors.orange : colors.brown};

  @media (min-width: ${breakpoints.breakpointL}px) {
    background-color: ${isActive ? colors.darkGreen : colors.lightGreen};
    color: white;
    border: 1px solid;
    border-color: ${isActive ? colors.darkGreen : 'white'};
    border-bottom: none;
    width: auto;
    font-size: 1.1em;
    padding: 0.5em 0.7em;
    margin: 0;
    margin-right: 1em;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    font-size: 1.3em;
  }
`

function ExternalLink(link: ExternalNavigationItem) {
  const linkStyle = navigationLinkStyle({ isActive: false })
  return (
    <a
      css={linkStyle}
      href={link.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {link.displayName}
    </a>
  )
}

function InternalLink(link: InternalNavigationItem) {
  const currentSlug = useCurrentSlug()
  const isActive =
    link.slug === '/'
      ? currentSlug === link.slug
      : currentSlug.startsWith(link.slug)

  const linkStyle = navigationLinkStyle({ isActive: isActive })

  return (
    <Link passHref href={link.route} as={link.slug}>
      <a css={linkStyle}>{link.displayName}</a>
    </Link>
  )
}

export default function NavigationLink(navigationItem: NavigationItem) {
  switch (navigationItem.type) {
    case 'external':
      return <ExternalLink {...navigationItem} />
    case 'internal':
      return <InternalLink {...navigationItem} />
  }
}
