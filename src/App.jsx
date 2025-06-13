import { Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Ticker from "./Pages/Ticker"
import nest from "./assets/download.svg"

function App() {

  return (
    <>
    <Ticker></Ticker>
    <nav className="navbar">
      <h2><img src={nest} alt="Brand_logo"/></h2>
<ul className="nav-list">
  <li className="nav-links"><Link to="/">Home</Link></li>
  <li className="nav-links"><Link to="/about">About Us</Link></li>
  <li className="nav-links"><Link to="/contact">Contact us</Link></li>
</ul>

<div className="buttons">
  <button className="button">Login</button>
  <button className="button">Sign Up</button>
</div>
    </nav>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
    
    </>
  )
}

export default App
