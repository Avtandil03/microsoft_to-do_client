import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/global.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <div>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  )
}
