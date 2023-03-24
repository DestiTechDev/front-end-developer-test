import './App.css'
import Navbar from './components/navbar/Navbar'
import Contact from './components/pages/contact/Contact'
import Home from './components/pages/home/Home'
import Products from './components/pages/products/Products'


function App() {

  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Products />
      <Contact />
      
    </div>
  )
}

export default App
