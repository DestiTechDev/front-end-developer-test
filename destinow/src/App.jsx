import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contact from './components/pages/contact/Contact'
import Home from './components/pages/home/Home'
import Products from './components/pages/products/Products'
import Insurance from './components/pages/security/Security'



function App() {

  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Products />
      <Contact />
      <Insurance/>
      <Footer />
    </div>
  )
}

export default App
