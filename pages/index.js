import Head from 'next/head'
import Image from 'next/image'
// import Header from '../components/Header'
import FrontScreen from '../components/FrontScreen'
import Question from '../components/Question'
import WhatsInside from '../components/WhatsInside'
import EmailInput from '../components/EmailInput'
import DidYouKnow from '../components/DidYouKnow'
import Author from '../components/Author'
import Footer from '../components/Footer'

import dynamic from "next/dynamic"

const Header = dynamic(()=>import('../components/Header'),{ssr: false})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Convin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <FrontScreen />
        <Question />
        <WhatsInside />
        <EmailInput />
        <DidYouKnow />
        <Author />
        <Footer />
      </div>
      
    </div>
  )
}
