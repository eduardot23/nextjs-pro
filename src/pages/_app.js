import MainLayout from '@/Layout/MainLayout'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </> 
  )
}
