import './App.css'
import NavbarTab from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Packages from "./components/packages/Packages";

function App() {

  return (
    <div className="App">
      <NavbarTab/>
      <Header/>
      <Packages/>
    </div>
  )
}

export default App
