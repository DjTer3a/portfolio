import { useEffect, useRef } from 'react'
import { ThemeProvider } from 'next-themes'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Toaster } from 'react-hot-toast'

import '@/styles/tailwind.css'
import 'focus-visible'
// import Script from 'next/script'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router)
  // let scriptSrc = `"https://www.googletagmanager.com/gtag/js?id="+${process.env.NEXT_PUBLIC_GOOGLE_API}`
  return (
    <ThemeProvider attribute="class">
      <>
        <Header />
        {/* <Script strategy="afterInteractive" src={scriptSrc}/> */}
        {/* <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_API}', {
            page_path: window.location.pathname,
          });
        `,
        }}
    /> */}
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="" />
          </div>
        </div>
        <div className="relative">
          <Toaster />
          <main>
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}
