// LoginModal.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoginModal = ({ show, onClose, switchToSignup }) => {
  if (!show) return null;

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const fileContent = `LOGIN FORM DATA\n\nEmail: ${email}\nPassword: ${password}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'login_data.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`Welcome back, ${email.split('@')[0]}!`);
    onClose();
  };

  return (
    <Backdrop onClick={onClose}>
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="form_area">
            <p className="title">LOGIN</p>
            <form onSubmit={handleLogin}>
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="form_style"
                  type="email"
                  required
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input
                  name="password"
                  placeholder="Enter your password"
                  className="form_style"
                  type="password"
                  required
                />
              </div>
              <div>
                <button className="btn" type="submit">LOGIN</button>
                <p>
                  Don't have an account?{' '}
                  <span
                    className="link"
                    onClick={() => {
                      onClose();
                      switchToSignup();
                    }}
                  >
                    Sign up here!
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </StyledWrapper>
    </Backdrop>
  );
};

export default LoginModal;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInBackdrop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInBackdrop} 0.3s ease-out forwards;
`;


const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

.form_area {
  background-color: #D6E4E5;
  border: 2px solid #1C315E;
  border-radius: 20px;
  box-shadow: 3px 4px 0px 1px #98A8F8;
  padding: 30px;
  animation: ${slideInFromBottom} 0.4s ease-out forwards;
}

  .title {
    color: #1C315E;
    font-weight: 900;
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  .sub_title {
    font-weight: 600;
    margin: 5px 0;
  }

  .form_group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
  }

  .form_style {
    outline: none;
    border: 2px solid #1C315E;
    box-shadow: 3px 4px 0px 1px #98A8F8;
    width: 290px;
    padding: 12px 10px;
    border-radius: 4px;
    font-size: 15px;
  }

  .form_style:focus, .btn:focus {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #98A8F8;
  }

  .btn {
    padding: 15px;
    margin: 25px 0 10px 0;
    width: 290px;
    font-size: 15px;
    background: #3A98B9;
    border-radius: 10px;
    font-weight: 800;
    box-shadow: 3px 3px 0px 0px #98A8F8;
    cursor: pointer;
  }

  .btn:hover {
    opacity: .9;
  }

  .link {
    font-weight: 800;
    color: #1C315E;
    cursor: pointer;
  }
`;

// import { Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { lazy, Suspense,} from "react";
// import Ticker from "./Pages/Ticker";
// import nest from "./assets/download.svg";
// import Loader from "./Pages/Loader";
// const Home = lazy(() => import("./Pages/Home"));
// const About = lazy(() => import("./Pages/About"));
// const Contact = lazy(() => import("./Pages/Contact"));
// const Recipes = lazy(() => import("./Pages/Recipes"));
// const Shop = lazy(() => import("./Pages/Shop"));
// const Checkout = lazy(() => import("./Pages/Checkout"));
// const NotFound = lazy(() => import("./Pages/NotFound"));


// import CartIcon from "./Pages/CartIcon";
// import TopBtn from "./Pages/TopBtn";
// import Search from "./Pages/Search";
// import SignupModal from "./SignupModal";
// import LoginModal from "./LoginModal";
// import { FaBars, FaTimes } from "react-icons/fa";

// function App() {
//   const [showSignup, setShowSignup] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const location = useLocation();


//   return (
//     <>
//       <Ticker />
//       <div style={{ paddingTop: "50px" }}>
//      <nav className="navbar">
//   <h2>
//     <img src={nest} alt="Brand_logo" />
//   </h2>

//   {/* Desktop Nav */}
//   <ul className="nav-list desktop-only">
//     <li className="nav-links"><Link to="/">Home</Link></li>
//     <li className="nav-links"><Link to="/about">About Us</Link></li>
//     <li className="nav-links"><Link to="/Recipes">Recipes</Link></li>
//     <li className="nav-links"><Link to="/shop">Shop now</Link></li>
//     <li className="nav-links"><Link to="/contact">Contact us</Link></li>
//   </ul>

//   {/* Desktop Search & Buttons */}
//   <div className="desktop-only search-wrapper">
//     <Search />
//   </div>

//   <div className="buttons desktop-only">
//     <button className="button" onClick={() => setShowLogin(true)}>Login</button>
//     <button className="button" onClick={() => setShowSignup(true)}>Sign Up</button>
//   </div>

//   {/* Mobile Menu Toggle */}
//   <div className="menu-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
//     {isMobileOpen ? <FaTimes /> : <FaBars />}
//   </div>
// </nav>

// {/* Mobile Nav */}
// {isMobileOpen && (
//   <>
//     <ul className="nav-list mobile-active">
//       <li className="nav-links"><Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
//       <li className="nav-links"><Link to="/about" onClick={() => setIsMobileOpen(false)}>About Us</Link></li>
//       <li className="nav-links"><Link to="/Recipes" onClick={() => setIsMobileOpen(false)}>Recipes</Link></li>
//       <li className="nav-links"><Link to="/shop" onClick={() => setIsMobileOpen(false)}>Shop now</Link></li>
//       <li className="nav-links"><Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact us</Link></li>
//     </ul>

//     <div className="search-wrapper mobile-active">
//       <Search />
//     </div>

//     <div className="buttons mobile-active">
//       <button className="button" onClick={() => { setShowLogin(true); setIsMobileOpen(false); }}>Login</button>
//       <button className="button" onClick={() => { setShowSignup(true); setIsMobileOpen(false); }}>Sign Up</button>
//     </div>
//   </>
// )}


// {location.pathname !== "/Checkout" && <CartIcon />}

// <Suspense fallback={<Loader />}>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/Recipes" element={<Recipes />} />
//     <Route path="/shop" element={<Shop />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/Checkout" element={<Checkout />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// </Suspense>

//       </div>

//       <TopBtn />

//       <LoginModal
//         show={showLogin}
//         onClose={() => setShowLogin(false)}
//         switchToSignup={() => {
//           setShowLogin(false);
//           setShowSignup(true);
//         }}
//       />

//       <SignupModal
//         show={showSignup}
//         onClose={() => setShowSignup(false)}
//         switchToLogin={() => {
//           setShowSignup(false);
//           setShowLogin(true);
//         }}
//       />
//     </>
//   );
// }


// export default App;