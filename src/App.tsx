import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
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
      <Header/>
      <Carousel/>
      <TravelFilter/>


      <div className='flex justify-center flex-col items-center mt-8 mb-8'>
        <h2 className="uppercase font-bold p-3 text-[36px]">nossos pacotes</h2>
        <div className='border-b border-blue-500 w-8 border-2'></div>
      </div>
      <TravelCarousel/>

      <div className='flex justify-center flex-col items-center mb-8'>
        <h2 className="uppercase font-bold p-3 text-[36px]">nossas atividades</h2>
        <div className='border-b border-blue-500 w-8 border-2'></div>
      </div>
      <ActivityGallery/>
      <ContactUs/>
      <Infos/>
      <div className='flex justify-center flex-col items-center mb-8'>
        <h2 className="uppercase font-bold p-3 text-[36px]">blog</h2>
        <div className='border-b border-blue-500 w-8 border-2'></div>
      </div>
      <BlogCarousel/>
      <Customers/>
      <Footer/>
    </div>
  )
}

export default App
