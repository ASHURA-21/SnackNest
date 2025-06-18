import Jollof1 from '../assets/Jollof1.jpeg'
import BananaCake from '../assets/BananaCake.jpeg'
import Chicken from '../assets/Chicken.jpeg'
import Styles from './Recipes.module.css'

export default function Recipes(){
    return(
        <>
<div className={Styles.recipes}>
    <div className={Styles.inner}>
        <div className={Styles.header}>
            <h1>Recipes from our Chefs</h1>
        </div>
          <h2>Featured Recipes</h2>
        <div className="project-container">
            <div className="project-box">
                <div className="project-title">
                    <div className="pro-img">
                        <img src={Jollof1} alt="Jollof1" className='pro-icon'/>
                    </div>
                    <h3>Jollof rice with Asun</h3>
                </div>
                <p>A bold and flavorful West African classic, featuring spicy, smoky jollof rice paired with tender, peppered goat meat (asun). Perfectly seasoned and irresistibly delicious – a true party favorite!</p>
                   <button className="btn">Read More</button>
            </div>
                <div className="project-box">
                <div className="project-title">
                    <div className="pro-img">
                        <img src={BananaCake} alt="BananaCake" className='pro-icon'/>
                    </div>
                    <h3>Banana Pancakes</h3>
                </div>
                <p>Fluffy, golden pancakes infused with ripe bananas for a naturally sweet and comforting breakfast. Perfect with a drizzle of honey or a scoop of whipped cream!</p>
                   <button className="btn">Read More</button>
            </div>
                 <div className="project-box">
                <div className="project-title">
                    <div className="pro-img">
                        <img src={Chicken} alt="Chicken" className='pro-icon'/>
                    </div>
                    <h3>Oven-Roasted Chicken Wings</h3>
                </div>
                <p>Crispy on the outside, juicy on the inside—these perfectly seasoned chicken wings are oven-roasted to golden perfection and packed with flavor in every bite.</p>
                   <button className="btn">Read More</button>
            </div>
        </div>
    </div>  
</div>
    
</>

);
}

               