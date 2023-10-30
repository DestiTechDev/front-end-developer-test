import type { NextPage } from 'next'
import Head from 'next/head'
import TopHeader from '../src/components/TopHeader'
import Header from '../src/components/Header'
import Banner from '../src/components/Banner'
import TabSearch from '../src/components/TabSearch'
import OurPacked from '../src/components/OurPacked'
import OurActivities from '../src/components/OurActivities'
import Contact from '../src/components/Contact'
import Bagdes from '../src/components/Bagdes'
import Blog from '../src/components/Blog'
import Brands from '../src/components/Brands'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Excursion</title>
        <meta name="description" content="Conheça os melhores pacotes de turismo da região" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <header>
          <TopHeader />
          <Header />
        </header>
        <section>
          <Banner />
          <TabSearch />
        </section>
        <OurPacked />
        <OurActivities />
        <Contact />
        <Bagdes />
        <Blog />
        <Brands />
        <footer>
        <Footer />
        </footer>
      </main>

    </>
  )
}

export default Home
