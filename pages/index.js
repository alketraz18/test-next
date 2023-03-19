import Head from 'next/head'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
// import Card from './Components/Cards'
import NweCard from './Components/NewCard'
import CardW from './Components/CardsW'
import Footer from './Components/Footer'
import CarouselCard from './Components/CarouselCard'
import ButtonGroup from './Components/ButtonGroup'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - enenapiyasa - Learnig Space for evryone</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Navbar/>
      <Hero/>
      {/* <Card/> */}
      <CardW/>
      {/* <NweCard/> */}
      <CarouselCard/>
      <ButtonGroup/>
      <Footer/>
 </div>

  )
}