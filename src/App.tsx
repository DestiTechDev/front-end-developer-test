import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import TravelCarousel from './components/TravelCarousel/TravelCarousel'
import ActivityGallery from './components/ActivityGallery/ActivityGallery'
import ContactUs from './components/ContactUs/ContactUs'
import Infos from './components/Infos/Infos'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Carousel/>


      <div className='flex justify-center flex-col items-center mt-8'>
        <h2 className="uppercase font-bold p-3 text-xl">nossos pacotes</h2>
        <div className='border-b border-blue-500 w-8 border-2'></div>
      </div>
      <TravelCarousel/>

      <div className='flex justify-center flex-col items-center mt-8'>
        <h2 className="uppercase font-bold p-3 text-xl">nossas atividades</h2>
        <div className='border-b border-blue-500 w-8 border-2'></div>
      </div>
      <ActivityGallery/>
      <ContactUs/>
      <Infos/>
    </div>
  )
}

export default App
