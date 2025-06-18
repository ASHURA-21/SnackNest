import Styles from './Shop.module.css'
import Footer from './Footer'
import Strawberry from '../assets/Strawberry.jpeg'
import Mango from '../assets/Mangoes.jpeg'
import Grapes from '../assets/Grapes.jpeg'
import Brocoli from '../assets/Brocoli.jpeg'
import Carrots from '../assets/Carrots.jpeg'
import Peppers from '../assets/Peppers.jpeg'
import Jollof from '../assets/Jollof2.jpeg'
import Egusi from '../assets/Egusi.jpeg'
import Moi from '../assets/Moi.jpg'
import Ofada from '../assets/Ofada.jpeg'
import Suya from '../assets/Suya.jpeg'
import Akara from '../assets/Akara.jpeg'
import Pan from '../assets/Pan.jpeg'
import Knife from '../assets/Knife.jpeg'
import Spoons from '../assets/Spoons.jpeg'
import Weigh from '../assets/Weigh.jpeg'
import Whisk from '../assets/Whisk.jpeg'
import Grate from '../assets/Grate.jpeg'
import Cross from '../assets/Cross.jpeg'
import Chip from '../assets/Chip.jpeg'
import Sour from '../assets/Sour.jpeg'
import Muffin from '../assets/Muffin.jpeg'
import Cinnamon from '../assets/Cinnamon.jpeg'
import Banana from '../assets/Banana.jpeg'

export default function Shop(){
    return(
<>
<div className={Styles.cards}>
    <div className={Styles.cards1}>
  <h2>Fruits & Vegetables</h2>
  <p>Fresh and healthy options delivered to your door.</p>
  <h2>Featured items</h2>
  <div className={Styles.items}>
    <div className={Styles.itemcard}>
      <img src={Strawberry} alt="Strawberries" />
      <h3>Strawberries</h3>
      <span>Vibrant red, sweet, eye-catching</span>
      <p>₦100.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

      <div className={Styles.itemcard}>
      <img src={Mango} alt="Mangoes" />
      <h3>Mangoes</h3>
      <span>Tropical, juicy, golden-yellow</span>
      <p>₦500.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

      <div className={Styles.itemcard}>
      <img src={Grapes} alt="Grapes" />
      <h3>Grapes</h3>
      <span>Compact, colorful (green or purple)</span>
      <p>₦1000.00</p>
      <button className={Styles.btn}> Add to Cart
</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Brocoli} alt="Brocoli" />
      <h3>Brocoli</h3>
      <span>Bright green, healthy and crunchy</span>
      <p>₦6000.00</p>
      <button className={Styles.btn}> Add to Cart
</button>
    </div>

       <div className={Styles.itemcard}>
      <img src={Carrots} alt="Carrots" />
      <h3>Carrots</h3>
      <span> Orange, crisp, kid-friendly</span>
      <p>₦4500.00</p>
      <button className={Styles.btn}> Add to Cart
</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Peppers} alt="Bell Peppers" />
      <h3>Bell Peppers</h3>
      <span>Colorful (red/yellow/green), versatile</span>
      <p>₦3000.00</p>
      <button className="btn"> Add to Cart
</button>
    </div>
</div>
</div>

{/* Baked */}
 <div className={Styles.cards1}>
  <h2>Baked Goods</h2>
  <p>Preview Baked Goods</p>
  <h2>Featured items</h2>
  <div className={Styles.items}>
    <div className={Styles.itemcard}>
      <img src={Cross} alt="Croissants" />
      <h3>Freshly Baked Croissants</h3>
      <span>Golden, flaky, and buttery – perfect for breakfast or a quick snack.</span>
      <p>£2.50 each</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Chip} alt="Chip" />
      <h3>Classic Chocolate Chip Cookies</h3>
      <span>Soft, chewy, and loaded with chocolate chips.</span>
      <p> £4.00 / 6 pack</p>
      <button className="btn"> Add to Cart
</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Sour} alt="Bread loaf" />
      <h3>Sourdough Bread Loaf</h3>
      <span>Artisan-style sourdough with a crisp crust and soft interior.</span>
      <p>£3.80 per loaf</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Muffin} alt="Muffins" />
      <h3>Blueberry Muffins</h3>
      <span>Moist muffins packed with fresh blueberries and a sugary crumb topping.</span>
      <p>£2.20 each</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Cinnamon} alt="Cinnamon" />
      <h3>Cinnamon Rolls</h3>
      <span>Swirled with cinnamon sugar and topped with vanilla glaze.</span>
      <p>£3.00 each</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={Banana} alt="Banana Bread" />
      <h3>Banana Bread</h3>
      <span>Homemade banana loaf with a hint of vanilla and walnut crunch.</span>
      <p>£4.50 per loaf</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>
</div>
</div>


{/*NG products  */}
 <div className={Styles.cards1}>
  <h2>Nigerian Delicacies</h2>
  <p>Featured Nigerian Delicacies</p>
  <h2>Featured items</h2>
    <div className={Styles.items}>
    <div className={Styles.itemcard}>
      <img src={Jollof} alt="Jollof" />
      <h3>Jollof Rice with Plantain</h3>
      <span>Party-style jollof rice served with fried plantain and grilled chicken.</span>
      <p>₦2,500</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Egusi} alt="Egusi" />
      <h3> Egusi Soup with Pounded Yam</h3>
      <span>Rich melon seed soup made with assorted meat and leafy vegetables.</span>
      <p> ₦3,000</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Knife} alt="Knife" />
      <h3>Stainless Steel Knife Set</h3>
      <span>Includes chef’s knife, bread knife, and paring knife with a wooden block.</span>
      <p>₦12,000</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Spoons} alt="Spoons" />
      <h3>Wooden Cooking Spoon Set</h3>
      <span>Natural wood, perfect for stirring stews, soups, and more.</span>
      <p>₦2,000 (set of 3)</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Weigh} alt="Weigh" />
      <h3>Digital Kitchen Scale</h3>
      <span>Accurately measure ingredients for baking and portion control.</span>
      <p>₦4,500</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={Whisk} alt="Whisk" />
      <h3> Manual Hand Whisk</h3>
      <span>Great for beating eggs, whipping cream, or light mixing tasks.</span>
      <p>₦1,500</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={Grate} alt="Grate" />
      <h3> Grater & Slicer Combo</h3>
      <span>Multi-functional grater for veggies, cheese, and more.</span>
      <p>₦3,000</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>
</div>
</div>
</div>
<Footer></Footer>
</>
    )
}