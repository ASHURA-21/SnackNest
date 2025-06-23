import Jollof1 from '../assets/Jollof1.jpeg'
import BananaCake from '../assets/BananaCake.jpeg'
import Chicken from '../assets/Chicken.jpeg'
import Styles from './Recipes.module.css'
import Avocado from '../assets/Avocado.jpg'
import { ImageMap} from '../assets/ImageMap'
import TopBtn from './TopBtn';
import Footer from './Footer';

export default function Recipes(){
    return(
        <>
<div className={Styles.recipes}>
    <div className={Styles.inner}>
        <div className={Styles.header}>
            <h1>Recipes from our Chefs</h1>
        </div>
          <h2>Featured Recipes</h2>
        <div className={Styles.projectcontainer}>
            <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={Jollof1} alt="Jollof1" className={Styles.proicon}/>
                    </div>
                    <h3>Jollof rice with Asun</h3>
                </div>
                <p>A bold and flavorful West African classic, featuring spicy, smoky jollof rice paired with tender, peppered goat meat (asun). Perfectly seasoned and irresistibly delicious – a true party favorite!</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

                <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={BananaCake} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Banana Pancakes</h3>
                </div>
                <p>Fluffy, golden pancakes infused with ripe bananas for a naturally sweet and comforting breakfast. Perfect with a drizzle of honey or a scoop of whipped cream!</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

                 <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={Chicken} alt="Chicken" className={Styles.proicon}/>
                    </div>
                    <h3>Oven-Roasted Chicken Wings</h3>
                </div>
                <p>Crispy on the outside, juicy on the inside—these perfectly seasoned chicken wings are oven-roasted to golden perfection and packed with flavor in every bite.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

            <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={Avocado} alt="Avocado" className={Styles.proicon}/>
                    </div>
                    <h3>Avocado Smoothie</h3>
                </div>
                <p>Creamy, refreshing, and packed with healthy fats — this avocado smoothie is the perfect blend of nutrition and flavor to kickstart your day.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

            <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.Pasta} alt="Pasta" className={Styles.proicon}/>
                    </div>
                    <h3>Creamy Alfredo Pasta</h3>
                </div>
                <p>A rich, garlic-infused white sauce with fettuccine noodles and grilled chicken or mushrooms.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>


            <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.Fried} alt="Fried rice" className={Styles.proicon}/>
                    </div>
                    <h3>Fried Rice & Chicken</h3>
                </div>
                <p>Nigerian-style fried rice loaded with veggies, paired with crispy fried chicken.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>
            

                     <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.Fried} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Beef Stir Fry</h3>
                </div>
                <p>Sautéed beef strips with colorful bell peppers in a savory soy-ginger sauce.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

                     <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.EgusiSoup} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Egusi Soup</h3>
                </div>
                <p>Ground melon seeds with palm oil, assorted meats, and bitterleaf/spinach.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

                     <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.Yam} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Yam Porridge (Asaro)</h3>
                </div>
                <p>Soft yam chunks cooked in pepper sauce with palm oil and vegetables.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

                <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.riro} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Efo Riro</h3>
                </div>
                <p>Spinach stew with smoked fish, crayfish, and palm oil.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

               <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.Salad} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Avocado & Tuna Salad</h3>
                </div>
                <p>Fresh avocado slices, canned tuna, cherry tomatoes, cucumbers, and olive oil.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>

               <div className={Styles.projectbox}>
                <div className={Styles.projecttitle}>
                    <div className={Styles.proimg}>
                        <img src={ImageMap.Bowl} alt="BananaCake" className={Styles.proicon}/>
                    </div>
                    <h3>Quinoa & Veggie Bowl</h3>
                </div>
                <p>Protein-rich quinoa with roasted veggies, chickpeas, and tahini dressing.</p>
                   <button className={Styles.btn}>Read More</button>
            </div>
        </div>
    </div>  
</div>
<Footer/>
    <TopBtn></TopBtn>
</>

);
}

               