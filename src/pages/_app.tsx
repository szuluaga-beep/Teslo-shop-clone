import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { lightTheme } from '../../themes'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <main className={roboto.className}>
        <CssBaseline />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
