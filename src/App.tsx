import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/carousel'
import TravelCarousel from './components/TravelCarousel/TravelCarousel'
import ActivityGallery from './components/ActivityGallery/ActivityGallery'
import ContactUs from './components/ContactUs/ContactUs'
import Infos from './components/Infos/Infos'
import BlogCarousel from './components/BlogCarousel/BlogCarousel'
import Footer from './components/Footer/Footer'
import Customers from './components/Customers/Customers'
import TravelFilter from './components/TravelFilter/TravelFilter'

const App = () => {
  return (
    <div className="App">

      {/* header */}
      <Header/>

      {/* body */}

      {/* section one */}
      <Carousel/>
      <TravelFilter/>
      <TravelCarousel/>
      <ActivityGallery/>
      <ContactUs/>
      <Infos/>
      <BlogCarousel/>
      <Customers/>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default App
