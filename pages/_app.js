import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <style jsx global>{`
      body {
        color: blue;
      }
    `}</style>
  </>
}

export default MyApp
