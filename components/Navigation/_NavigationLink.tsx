import { css } from '@emotion/core'
import Link from 'next/link'
import { colors, breakpoints, helpers, typography } from 'style'
import useCurrentSlug from 'lib/hooks/useCurrentSlug'
import { NavigationItem, InternalPage, ExternalPage } from 'lib/navigationItems'

const navigationLinkStyle = ({ isActive }: { isActive: boolean }) => css`
  ${typography.museoSlab};
  box-sizing: border-box;
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.1em;
  margin: 35px 0;
  text-decoration: none;
  color: ${colors.brown};
  transition: background-color 1s, border-color 1s;
  color: ${isActive ? colors.lightGreen : colors.brown};

  @media (min-width: ${breakpoints.breakpointL}px) {
    background-color: ${isActive ? colors.darkGreen : colors.lightGreen};
    border: 1px solid;
    border-color: ${isActive ? colors.darkGreen : 'white'};
    border-bottom: none;
    width: auto;
    font-size: 1em;
    padding: 0.5em 0.7em;
    margin: 0;
    margin-right: 1em;
    color: ${isActive ? 'white' : colors.brown};

    &:hover {
      color: ${isActive ? 'white' : colors.darkGreen};
    }
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    font-size: 1.1em;
  }
`

const externalLinkStyle = css`
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-weight: normal;
    text-transform: none;
    background-color: ${colors.brown};
    color: ${colors.beige};
    border-color: ${colors.brown};

    &:hover {
      color: ${colors.lightGreen};
    }
  }
`

const linkGroupStyle = css`
  @media (min-width: ${breakpoints.breakpointL}px) {
    position: relative;

    &:hover ul {
      display: block;
    }
  }

  & > a {
    font-weight: bold;
    text-transform: uppercase;

    @media (min-width: ${breakpoints.breakpointL}px) {
      font-weight: normal;
      text-transform: none;
    }
  }

  ul {
    ${helpers.resetListStyles};

    @media (min-width: ${breakpoints.breakpointL}px) {
      display: none;
      position: absolute;
      width: 100%;
      min-width: 200px;
      z-index: 1;
      border: 1px solid white;
      border-top: 0;
    }

    a {
      width: 100%;
      border: none;
    }
  }
`

function ExternalLink(page: ExternalPage) {
  const linkStyle = navigationLinkStyle({ isActive: false })
  return (
    <a
      css={[linkStyle, externalLinkStyle]}
      href={page.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {page.displayName}
    </a>
  )
}

function InternalLink(page: InternalPage) {
  const currentSlug = useCurrentSlug()
  const isActive =
    page.slug === '/'
      ? currentSlug === page.slug
      : currentSlug.startsWith(page.slug)

  const linkStyle = navigationLinkStyle({ isActive: isActive })

  return (
    <Link css={linkStyle} href={page.slug}>
      {page.displayName}
    </Link>
  )
}

function LinkGroup(page: InternalPage) {
  return (
    <div css={linkGroupStyle}>
      <InternalLink {...page} />
      {page.children && (
        <ul>
          {page.children.map((childPage) => (
            <li key={childPage.slug}>
              <InternalLink {...childPage} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function NavigationLink(navigationItem: NavigationItem) {
  switch (navigationItem.type) {
    case 'external':
      return <ExternalLink {...navigationItem} />
    case 'internal':
      return <LinkGroup {...navigationItem} />
  }
}
