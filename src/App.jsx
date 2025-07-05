import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { lazy, Suspense,} from "react";
import Ticker from "./Pages/Ticker";
import nest from "./assets/download.svg";
import Loader from "./Pages/Loader";
import ThemeToggle from "./Pages/ThemeToggle";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Recipes = lazy(() => import("./Pages/Recipes"));
const Shop = lazy(() => import("./Pages/Shop"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Card = lazy(() => import("./Pages/Card"));
const Done = lazy(() => import("./Pages/Done"));


import CartIcon from "./Pages/CartIcon";
import TopBtn from "./Pages/TopBtn";
import Search from "./Pages/Search";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();


  return (
    <>
      <Ticker />
      <div style={{ paddingTop: "50px" }}>

     <nav className="navbar">
  <h2>
    <img src={nest} alt="Brand_logo"/>
  </h2>

  {/* Desktop Nav */}
  <ul className="nav-list desktop-only">
    <li className="nav-links"><Link to="/">Home</Link></li>
    <li className="nav-links"><Link to="/about">About Us</Link></li>
    <li className="nav-links"><Link to="/Recipes">Recipes</Link></li>
    <li className="nav-links"><Link to="/shop">Shop now</Link></li>
    <li className="nav-links"><Link to="/contact">Contact us</Link></li>
  </ul>

  {/* Desktop Search & Buttons */}
  <div className="desktop-only search-wrapper">
    <Search />
  </div>

  <div className="buttons desktop-only">
        <ThemeToggle /> 
    <button className="button" onClick={() => setShowLogin(true)}>Login</button>
    <button className="button" onClick={() => setShowSignup(true)}>Sign Up</button>
  </div>

  {/* Mobile Menu Toggle */}
  <div className="menu-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
    {isMobileOpen ? <FaTimes /> : <FaBars />}
  </div>
</nav>

{/* Mobile Nav */}
{isMobileOpen && (
  <>
    <ul className="nav-list mobile-active">
      <Search />
      <li className="nav-links"><Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
      <li className="nav-links"><Link to="/about" onClick={() => setIsMobileOpen(false)}>About Us</Link></li>
      <li className="nav-links"><Link to="/Recipes" onClick={() => setIsMobileOpen(false)}>Recipes</Link></li>
      <li className="nav-links"><Link to="/shop" onClick={() => setIsMobileOpen(false)}>Shop now</Link></li>
      <li className="nav-links"><Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact us</Link></li>
       <ThemeToggle /> 
      <button className="button" onClick={() => { setShowLogin(true); setIsMobileOpen(false); }}>Login</button>
      <button className="button" onClick={() => { setShowSignup(true); setIsMobileOpen(false); }}>Sign Up</button>
    </ul>
 </>
)}


{location.pathname !== "/Checkout" && location.pathname !== "/Card" && <CartIcon />}
<Suspense fallback={<Loader />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/Recipes" element={<Recipes />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Checkout" element={<Checkout />} />
    <Route path="/Card" element={<Card />} />
    <Route path="/Done" element={<Done />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Suspense>

      </div>

      <TopBtn />

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


