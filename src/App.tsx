import React from 'react'
import SubNavBar from './components/SubNavBar'
import NavBar from './components/NavBar'
import PhotoBanner from './components/PhotoBanner'
import Form from './components/Form'
import Package from './components/Package'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Badges from './components/Badges'
import Blog from './components/Blog'
import Partners from './components/Partners'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <SubNavBar />
      <NavBar />
      <div className="w-screen relative">
        <PhotoBanner />
        <div className="absolute w-screen -bottom-16 flex justify-center">
          <Form />
        </div>
      </div>
      <div className="w-screen flex items-center justify-center mt-40">
        <div>
          <p className="text-4xl font-semibold">NOSSOS PACOTES</p>
          <div className="w-10 border-2 border-solid border-secondary mx-auto my-4"></div>
        </div>
      </div>
      <Package />
      <div className="w-screen flex items-center justify-center mt-20">
        <div>
          <p className="text-4xl font-semibold">NOSSAS ATIVIDADES</p>
          <div className="w-10 border-2 border-solid border-secondary mx-auto my-4"></div>
        </div>
      </div>
      <Gallery />
      <Contact />
      <Badges />
      <div className="w-full flex items-center justify-center mt-20">
        <div>
          <p className="text-4xl font-semibold">BLOG</p>
          <div className="w-10 border-2 border-solid border-secondary mx-auto my-4"></div>
        </div>
      </div>
      <Blog />
      <Partners />
    </div>
  )
}

export default App