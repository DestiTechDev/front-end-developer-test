import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/home/Home'
import Products from './components/pages/products/Products'


function App() {

  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Products />
      
    </div>
  )
}

export default App
