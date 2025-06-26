import { Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
// import nest from "../assets/download.svg"
import Recipes from "./Recipes"
import Shop from "./Shop"
import './Footer.css'

  
export default function Footer(){
return(
 <>
  <footer className="footer-sec">
      <div className="info">

         <div className="info-types">
          <h3 className="heading">Quick Links</h3>
          <ul className="foot-list">
            <li><Link to="/" className="list-items">Home</Link></li>
            <li><Link to="/about" className="list-items">About Us</Link></li>
            <li><Link to="/contact" className="list-items">Contact Us</Link></li>
            <li><Link to="/recipes" className="list-items">Recipes</Link></li>
          </ul>
        </div>

        <div className="info-types">
          <h3 className="heading">More</h3>
          <ul className="foot-list">
            <li><Link to="/baked-goods" className="list-items">Baked Goods</Link></li>
            <li><Link to="/fruits" className="list-items">Fruits & Vegetables</Link></li>
            <li><Link to="/shop" className="list-items">Shop</Link></li>
          </ul>
        </div>


        <div className="mail">

          <span><p className="text">Email:</p>
<input type="email" name="text" class="input" placeholder="Email address" />    
<input class="button--submit" value="Subscribe" type="submit"/>
</span>
          <label htmlFor="mail" className="mail-info">Sign up for our newsletter to be informed on the latest discounts, new arrivals and more</label>
          <span><h2>Socials</h2></span>
<div className="social">
            <a href="https://x.com/ASHURA425565192" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/weirdintrovertkid/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/ASHURA-21" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
        </div>
        </div>
        
<div className="info-types">
  <h3 className="heading">Contact us</h3>
  <ul  className="foot-list">
    <li><a href="#" className="list-items">Phone Number</a></li>
    <li><a href="#" className="list-items">Email</a></li>
    <li><a href="#" className="list-items">Location</a></li>
  </ul>
</div>


<div>
  <h3 className="heading">Legal</h3>
  <ul  className="foot-list">
    <li><a href="#" className="list-items">Privacy Policy</a></li>
    <li><a href="#" className="list-items">Terms of service</a></li>
    <li><a href="#" className="list-items">Cookies</a></li>
  </ul>
</div>
      </div>
 </footer>
 </>
)
}