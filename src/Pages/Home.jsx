import Carousel from './Carousel';
import './Home.css'
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

export default function Home() {
  return (
    <>
      <Carousel />
<div className="cards">
  <div className="cards1">
  <h2>Fruits & Vegetables</h2>
  <p>Fresh and healthy options delivered to your door.</p>
  <h2>Featured items</h2>
  <div className="items">
    <div className="item-card">
      <img src={Strawberry} alt="Strawberries" />
      <h3>Strawberries</h3>
      <span>Vibrant red, sweet, eye-catching</span>
      <p>₦100.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

      <div className="item-card">
      <img src={Mango} alt="Mangoes" />
      <h3>Mangoes</h3>
      <span>Tropical, juicy, golden-yellow</span>
      <p>₦500.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

      <div className="item-card">
      <img src={Grapes} alt="Grapes" />
      <h3>Grapes</h3>
      <span>Compact, colorful (green or purple)</span>
      <p>₦1000.00</p>
      <button className="btn"> Add to Cart
</button>
    </div>

        <div className="item-card">
      <img src={Brocoli} alt="Brocoli" />
      <h3>Brocoli</h3>
      <span>Bright green, healthy and crunchy</span>
      <p>₦6000.00</p>
      <button className="btn"> Add to Cart
</button>
    </div>

        <div className="item-card">
      <img src={Carrots} alt="Carrots" />
      <h3>Carrots</h3>
      <span> Orange, crisp, kid-friendly</span>
      <p>₦4500.00</p>
      <button className="btn"> Add to Cart
</button>
    </div>

        <div className="item-card">
      <img src={Peppers} alt="Bell Peppers" />
      <h3>Bell Peppers</h3>
      <span>Colorful (red/yellow/green), versatile</span>
      <p>₦3000.00</p>
      <button className="btn"> Add to Cart
</button>
    </div>

<button className="Btn-Container">
  <span className="text">View More</span>
  <span className="icon-Container">
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="nones"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
    </svg>
  </span>
</button>
</div>
</div>

{/* Baked */}
<div className="cards1">
  <h2>Baked Goods</h2>
  <p>Preview Baked Goods</p>
  <h2>Featured items</h2>
  <div className="items">
    <div className="item-card">
      <img src={Cross} alt="Croissants" />
      <h3>Freshly Baked Croissants</h3>
      <span>Golden, flaky, and buttery – perfect for breakfast or a quick snack.</span>
      <p>£2.50 each</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Chip} alt="Chip" />
      <h3>Classic Chocolate Chip Cookies</h3>
      <span>Soft, chewy, and loaded with chocolate chips.</span>
      <p> £4.00 / 6 pack</p>
      <button className="btn"> Add to Cart
</button>
    </div>

        <div className="item-card">
      <img src={Sour} alt="Bread loaf" />
      <h3>Sourdough Bread Loaf</h3>
      <span>Artisan-style sourdough with a crisp crust and soft interior.</span>
      <p>£3.80 per loaf</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Muffin} alt="Muffins" />
      <h3>Blueberry Muffins</h3>
      <span>Moist muffins packed with fresh blueberries and a sugary crumb topping.</span>
      <p>£2.20 each</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Cinnamon} alt="Cinnamon" />
      <h3>Cinnamon Rolls</h3>
      <span>Swirled with cinnamon sugar and topped with vanilla glaze.</span>
      <p>£3.00 each</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className="item-card">
      <img src={Banana} alt="Banana Bread" />
      <h3>Banana Bread</h3>
      <span>Homemade banana loaf with a hint of vanilla and walnut crunch.</span>
      <p>£4.50 per loaf</p>
      <button className="btn"> Add to Cart</button>
    </div>

<button className="Btn-Container">
  <span className="text">View More</span>
  <span className="icon-Container">
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="nones"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
    </svg>
  </span>
</button>
</div>
</div>


{/*NG products  */}
<div className="cards1">
  <h2>Nigerian Delicacies</h2>
  <p>Featured Nigerian Delicacies</p>
  <h2>Featured items</h2>
  <div className="items">
    <div className="item-card">
      <img src={Jollof} alt="Jollof" />
      <h3>Jollof Rice with Plantain</h3>
      <span>Party-style jollof rice served with fried plantain and grilled chicken.</span>
      <p>₦2,500</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Egusi} alt="Egusi" />
      <h3> Egusi Soup with Pounded Yam</h3>
      <span>Rich melon seed soup made with assorted meat and leafy vegetables.</span>
      <p> ₦3,000</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Moi} alt="Moi" />
      <h3> Moi Moi (Steamed Bean Cake)</h3>
      <span>Soft, spicy bean pudding wrapped in leaves or foil, often served as a side.</span>
      <p>₦800 each</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Ofada} alt="Ofada" />
      <h3>Ofada Rice and Ayamase Sauce</h3>
      <span>Locally grown rice served with spicy green pepper stew and assorted meats.</span>
      <p>₦3,200</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Suya} alt="Suya" />
      <h3>Suya Skewers</h3>
      <span>Grilled spicy beef skewers with suya spice and onions.</span>
      <p>₦1,500 per pack</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className="item-card">
      <img src={Akara} alt="Akara" />
      <h3> Akara (Bean Fritters)</h3>
      <span>Deep-fried bean balls – crispy on the outside, soft inside.</span>
      <p> ₦500 for 5 pieces</p>
      <button className="btn"> Add to Cart</button>
    </div>

<button className="Btn-Container">
  <span className="text">View More</span>
  <span className="icon-Container">
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="nones"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
    </svg>
  </span>
</button>
</div>
</div>

{/* Kitchen Utensils */}
<div className="cards1">
  <h2>Newly Added Kitchen Utensils</h2>
  <p>Our Newly added Kitchen</p>
  <h2>Preview Items</h2>
  <div className="items">
    <div className="item-card">
      <img src={Pan} alt="Pan" />
      <h3>Non-Stick Frying Pan</h3>
      <span>Ideal for quick cooking with minimal oil – easy to clean and durable.</span>
      <p>₦5,000</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Knife} alt="Knife" />
      <h3>Stainless Steel Knife Set</h3>
      <span>Includes chef’s knife, bread knife, and paring knife with a wooden block.</span>
      <p>₦12,000</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Spoons} alt="Spoons" />
      <h3>Wooden Cooking Spoon Set</h3>
      <span>Natural wood, perfect for stirring stews, soups, and more.</span>
      <p>₦2,000 (set of 3)</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Weigh} alt="Weigh" />
      <h3>Digital Kitchen Scale</h3>
      <span>Accurately measure ingredients for baking and portion control.</span>
      <p>₦4,500</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className="item-card">
      <img src={Whisk} alt="Whisk" />
      <h3> Manual Hand Whisk</h3>
      <span>Great for beating eggs, whipping cream, or light mixing tasks.</span>
      <p>₦1,500</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className="item-card">
      <img src={Grate} alt="Grate" />
      <h3> Grater & Slicer Combo</h3>
      <span>Multi-functional grater for veggies, cheese, and more.</span>
      <p>₦3,000</p>
      <button className="btn"> Add to Cart</button>
    </div>

<button className="Btn-Container">
  <span className="text">View More</span>
  <span className="icon-Container">
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="nones"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
    </svg>
  </span>
</button>
</div>
</div>
</div>
    </>
  );
}
