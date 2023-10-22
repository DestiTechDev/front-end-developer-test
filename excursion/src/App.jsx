import './App.css'
import NavbarTab from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Packages from "./components/packages/Packages";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <NavbarTab/>
      <Header/>
      <Packages/>
      <Footer/>
    </div>
  )
}

export default App
