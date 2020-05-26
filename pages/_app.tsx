import { AppProps } from 'next/app'
import { Router } from 'next/router'
import { css } from '@emotion/core'
import { useEffect, useState } from 'react'
import Layout from 'components/Layout/Layout'

const LoadingIndicator = function () {
  const loadingStyle = css`
    min-height: 80vh;
  `
  return <div css={loadingStyle} />
}

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true)
    }
    const handleRouteChangeEnd = () => {
      setIsLoading(false)
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeEnd)
    Router.events.on('routeChangeError', handleRouteChangeEnd)
  }, [])
  return (
    <Layout>
      {isLoading ? <LoadingIndicator /> : <Component {...pageProps} />}
    </Layout>
  )
}
