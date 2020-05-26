import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Router } from 'next/router'

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
  return isLoading ? null : <Component {...pageProps} />
}
