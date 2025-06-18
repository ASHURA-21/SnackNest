import { Routes, Route, Link } from "react-router-dom";
import Ticker from "./Pages/Ticker";
import nest from "./assets/download.svg";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Recipes from "./Pages/Recipes"
import Shop from "./Pages/Shop"

function App() {
  return (
    <>
<Ticker />
<div style={{  paddingtop: '50px'}}>
      <nav className="navbar">
        <h2>
          <img src={nest} alt="Brand_logo" />
        </h2>
        <ul className="nav-list">
          <li className="nav-links"><Link to="/">Home</Link></li>
          <li className="nav-links"><Link to="/about">About Us</Link></li>
          <li className="nav-links"><Link to="/Recipes">Recipes</Link></li>
          <li className="nav-links"><Link to="/shop">Shop now</Link></li>
          <li className="nav-links"><Link to="/contact">Contact us</Link></li>
        </ul>

        <div className="buttons">
          <button className="button">Login</button>
          <button className="button">Sign Up</button>
        </div>
      </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
    </>
  );
}

export default App;

