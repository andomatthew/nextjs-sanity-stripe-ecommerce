import { Layout } from '../components'

import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { StateContext } from '../context/stateContext'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
