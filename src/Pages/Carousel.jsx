import { Link } from 'react-router-dom'
import './Pages.css'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
// import nest from "../assets/download.svg"
import Recipes from "./Recipes"
import Shop from "./Shop"
import Food from '../assets/Food.jpg'
import Jollof1 from '../assets/Jollof1.jpeg'
import Kitchen from '../assets/Kitchen.jpg'
import Avocado from '../assets/Avocado.jpg'
import Baker from '../assets/Baker.jpg'
import { useEffect } from 'react'

export default function Carousel(){
useEffect(() => {
    const items = document.querySelectorAll('.slider .list .item');
    let countItem = items.length;
    let itemActive = 0;

    const showSlider = () => {
      const current = document.querySelector('.slider .list .item.active');
      if (current) current.classList.remove('active');
      items[itemActive].classList.add('active');
    };

    const nextSlide = () => {
      itemActive = (itemActive + 1) % countItem;
      showSlider();
    };

    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
    return(
<>
            <div className="slider" >
        <div className="list">
            <div className="item active">
                <img src={Food}/>
                <div className="content">
                    <p>Anouncement</p>
                    <h2>New Recipes</h2>
                    <p>
                        Check out our new recipes, smoothies, healthy, delicious meals and more
                    </p>
                    <Link to="/Recipes"><button className="btn">Shop now</button></Link>
                </div>
            </div>
            <div className="item">
                <img src={Jollof1}/>
                <div className="content">
                    <p>New Addition</p>
                    <h2>Jollof Rice</h2>
                    <p>
                        Check out our new Jollof rice and asun recipe 
                    </p>
                       <Link to="/Shop"><button className="btn">Shop now</button></Link>
                </div>
            </div>
            <div className="item">
                <img src={Kitchen}/>
                <div className="content">
                    <p>New Addition</p>
                    <h2>New Kitchen Utensils and tools</h2>
                    <p>
                        New ovens, Spoons, Frying pans, Equipment for Baking and more
                    </p>
                        <Link to="/Shop"><button className="btn">Shop now</button></Link>
                </div>
            </div>
            <div className="item">
                <img src={Avocado}/>
                <div className="content">
                    <p>New Addition</p>
                    <h2>Avocado Smoothie</h2>
                    <p>
                        Come check out our new Avocado smoothies
                        Come shop now
                    </p>
                        <Link to="/Shop"><button className="btn">Shop now</button></Link>
                </div>
            </div>
            <div className="item">
                <img src={Baker}/>
                <div className="content">
                    <p>New Addition</p>
                    <h2>Baking recipes</h2>
                    <p>
                        New Cake recipes, Varieties of bread and much more
                    </p>
                   <Link to="/Shop"><button className="btn">Shop now</button></Link>
                </div>
            </div>
        </div> 
        </div>
</>
    )
}