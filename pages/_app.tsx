import { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from 'components/Layout/Layout'
import LoadingPlaceholder from 'components/LoadingPlaceholder/LoadingPlaceholder'

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
      {isLoading ? <LoadingPlaceholder /> : <Component {...pageProps} />}
    </Layout>
  )
}
