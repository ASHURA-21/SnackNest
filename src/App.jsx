import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Ticker from "./Pages/Ticker";
import nest from "./assets/download.svg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Recipes from "./Pages/Recipes";
import Shop from "./Pages/Shop";
import TopBtn from "./Pages/TopBtn";

import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Ticker />

      <div style={{ paddingTop: "50px" }}>
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
            <button className="button" onClick={() => setShowLogin(true)}>Login</button>
            <button className="button" onClick={() => setShowSignup(true)}>Sign Up</button>
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

      <TopBtn />

      {/* Modals */}
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        switchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      <SignupModal
        show={showSignup}
        onClose={() => setShowSignup(false)}
        switchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </>
  );
}

export default App;


