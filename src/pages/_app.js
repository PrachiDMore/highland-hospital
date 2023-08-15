import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handleRouteStart = () => {
      setProgress(30)
    }
    const handleRouteComplete = () => {
      setProgress(100)
    }

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteComplete)
    };
  }, []);
  return (
    <>
      <LoadingBar
        color='#01A998'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  )
}
