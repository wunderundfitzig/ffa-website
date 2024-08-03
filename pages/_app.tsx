import { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import Layout from 'components/Layout/Layout'
import LoadingPlaceholder from 'components/LoadingPlaceholder/LoadingPlaceholder'

const cache = createCache({ key: 'next' })

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
    <CacheProvider value={cache}>
      <Layout>
        {isLoading ? <LoadingPlaceholder /> : <Component {...pageProps} />}
      </Layout>
    </CacheProvider>
  )
}
