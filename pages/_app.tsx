import '../styles/globals.css'
import Navbar from 'src/components/Navbar'
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="system" // default "light"
      >
        <Navbar />
        <div className="pt-12"><Component {...pageProps} /></div>
      </ThemeProvider>
    </div>

  )
}

export default MyApp
