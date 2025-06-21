import Styles from './Shop.module.css'
import { ImageMap} from '../assets/ImageMap'
import Footer from './Footer'
import TopBtn from './TopBtn'

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
      <img src={ImageMap.Strawberry} alt="Strawberries" />
      <h3>Strawberries</h3>
      <span>Vibrant red, sweet, eye-catching</span>
      <p>₦100.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

      <div className={Styles.itemcard}>
      <img src={ImageMap.Mango} alt="Mangoes" />
      <h3>Mangoes</h3>
      <span>Tropical, juicy, golden-yellow</span>
      <p>₦500.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

      <div className={Styles.itemcard}>
      <img src={ImageMap.Grapes} alt="Grapes" />
      <h3>Grapes</h3>
      <span>Compact, colorful (green or purple)</span>
      <p>₦1000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Banana} alt="Bananas" />
      <h3>Bananas</h3>
      <span>Great as a snack, in pancakes, or with cereal</span>
      <p>₦4000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Tangerine} alt="Tangerines" />
      <h3>Tangerines</h3>
      <span>Small, sweet, and easy to peel.</span>
      <p>₦5000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Pineapple} alt="Pineapples" />
      <h3>Pineapples</h3>
      <span>Sweet and tangy — ideal for juicing or desserts.</span>
      <p>₦1000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.BlueBerry} alt="Blueberries" />
      <h3>Blueberries</h3>
      <span>Antioxidant-rich and great for baking.</span>
      <p>₦1000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Oranges} alt="Oranges" />
      <h3>Oranges</h3>
      <span>Packed with vitamin C, great for juicing.</span>
      <p>₦1000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Papayas} alt="Papayas" />
      <h3>Papayas</h3>
      <span>Soft, sweet, and good for digestion.</span>
      <p>₦1000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Watermelon} alt="Grapes" />
      <h3>Watermelons</h3>
      <span>Hydrating and refreshing, perfect for hot days.</span>
      <p>₦7000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Pears} alt="Grapes" />
      <h3>Pears</h3>
      <span>Mild and juicy — a kid favorite.</span>
      <p>₦8000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

{/* Vegetables */}
{/* //  Vegetables
// Name	Short Description
// Spinach	A leafy green superfood rich in iron.
// Tomatoes	Fresh for salads, cooking, or sandwiches.
// Cabbage	Crunchy, versatile in stir-fries or slaws.
// Lettuce	Crisp, great for salads and wraps.
// Zucchini	Soft texture — great for sautéing or baking.
// Onions	A kitchen staple for savory dishes.
// Sweet Potatoes	Naturally sweet, full of fiber and vitamins. */}
        <div className={Styles.itemcard}>
      <img src={ImageMap.Brocoli} alt="Brocoli" />
      <h3>Brocoli</h3>
      <span>Bright green, healthy and crunchy</span>
      <p>₦6000.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

       <div className={Styles.itemcard}>
      <img src={ImageMap.Carrots} alt="Carrots" />
      <h3>Carrots</h3>
      <span> Orange, crisp, kid-friendly</span>
      <p>₦4500.00</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Peppers} alt="Bell Peppers" />
      <h3>Bell Peppers</h3>
      <span>Colorful (red/yellow/green), versatile</span>
      <p>₦3000.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Spinach} alt="Spinach" />
      <h3>Spinach</h3>
      <span>A leafy green superfood rich in iron</span>
      <p>₦6000.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Tomato} alt="Tomato" />
      <h3>Tomatoes</h3>
      <span>Fresh for salads, cooking, or sandwiches.</span>
      <p>₦2000.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Cabbage} alt="Cabbage" />
      <h3>Cabbage</h3>
      <span>Crunchy, versatile in stir-fries or slaws.</span>
      <p>₦4000.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Lettuce} alt="Lettuce" />
      <h3>Lettuce</h3>
      <span>Crisp, great for salads and wraps.</span>
      <p>₦6500.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Zucchini} alt="Zucchini" />
      <h3>Zucchini</h3>
      <span>Soft texture — great for sautéing or baking.</span>
      <p>₦4900.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Onions} alt="Onions" />
      <h3>Onions</h3>
      <span>A kitchen staple for savory dishes.</span>
      <p>₦6800.00</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Potato} alt="Sweet potatoes" />
      <h3>Sweet Potatoes</h3>
      <span>Naturally sweet, full of fiber and vitamins.</span>
      <p>₦6000.00</p>
      <button className="btn"> Add to Cart</button>
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
      <img src={ImageMap.Cross} alt="Croissants" />
      <h3>Freshly Baked Croissants</h3>
      <span>Golden, flaky, and buttery – perfect for breakfast or a quick snack.</span>
      <p>£2.50 each</p>
      <button className="btn"> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Chip} alt="Chip" />
      <h3>Classic Chocolate Chip Cookies</h3>
      <span>Soft, chewy, and loaded with chocolate chips.</span>
      <p> £4.00 / 6 pack</p>
      <button className="btn"> Add to Cart
</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Sour} alt="Bread loaf" />
      <h3>Sourdough Bread Loaf</h3>
      <span>Artisan-style sourdough with a crisp crust and soft interior.</span>
      <p>£3.80 per loaf</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Muffin} alt="Muffins" />
      <h3>Blueberry Muffins</h3>
      <span>Moist muffins packed with fresh blueberries and a sugary crumb topping.</span>
      <p>£2.20 each</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Cinnamon} alt="Cinnamon" />
      <h3>Cinnamon Rolls</h3>
      <span>Swirled with cinnamon sugar and topped with vanilla glaze.</span>
      <p>£3.00 each</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.BananaBread} alt="Banana Bread" />
      <h3>Banana Bread</h3>
      <span>Homemade banana loaf with a hint of vanilla and walnut crunch.</span>
      <p>£4.50 per loaf</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>
{/* //  Recommended Baked Goods
// Item	Short Description
// Cupcakes	Mini cakes with colorful frosting — fun and sweet.
// Baguettes	Crusty on the outside, soft inside — great with soups or spreads.
// Meat Pies	Savory and satisfying — stuffed with spiced meats or veggies.
// Puff Pastries	Light, layered dough — can be sweet or savory.
// Donuts	Glazed, filled, or sprinkled — a sweet tooth’s dream.
// Apple Pie	A timeless classic — sweet apple filling with a golden crust.
// Vanilla Loaf Cake	Soft, lightly sweetened, perfect with tea or coffee.
// Cheese Rolls	Savory and cheesy, soft with a golden top.
// Garlic Bread	Warm, buttery, and loaded with garlic flavor. */}
<div className={Styles.itemcard}>
      <img src={ImageMap.CupCake} alt="CupCake" />
      <h3>Cupcakes</h3>
      <span>Mini cakes with colorful frosting — fun and sweet.</span>
      <p>£5.50</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

<div className={Styles.itemcard}>
      <img src={ImageMap.Baguette} alt="CupCake" />
      <h3>Baguettes</h3>
      <span>Crusty on the outside, soft inside — great with soups or spreads.</span>
      <p>£7.50</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.MeatPie} alt="CupCake" />
      <h3>Meat Pies</h3>
      <span>Savory and satisfying — stuffed with spiced meats or veggies.</span>
      <p>£2.50 </p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Puff} alt="CupCake" />
      <h3>Puff Pastries</h3>
      <span>Light, layered dough — can be sweet or savory.</span>
      <p>£2.50</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Donuts} alt="CupCake" />
      <h3>Donuts	Glazed, filled, or sprinkled</h3>
      <span>a sweet tooth’s dream.</span>
      <p>£5.50</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Pie} alt="CupCake" />
      <h3>Apple Pie</h3>
      <span>A timeless classic — sweet apple filling with a golden crust.</span>
      <p>£9.50</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Vanilla} alt="CupCake" />
      <h3> Vanilla Loaf Cake</h3>
      <span>Soft, lightly sweetened, perfect with tea or coffee.</span>
      <p>£7.50</p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Cheese} alt="CupCake" />
      <h3>Cheese Rolls</h3>
      <span>Savory and cheesy, soft with a golden top.</span>
      <p>£5.50 </p>
      <button className={Styles.btn}> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Garlic} alt="CupCake" />
      <h3>Garlic Bread</h3>
      <span>Warm, buttery, and loaded with garlic flavor.</span>
      <p>£6.50</p>
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
      <img src={ImageMap.Jollof} alt="Jollof" />
      <h3>Jollof Rice with Plantain</h3>
      <span>Party-style jollof rice served with fried plantain and grilled chicken.</span>
      <p>₦2,500</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

     <div className={Styles.itemcard}>
      <img src={ImageMap.Egusi} alt="Egusi" />
      <h3> Egusi Soup with Pounded Yam</h3>
      <span>Rich melon seed soup made with assorted meat and leafy vegetables.</span>
      <p> ₦3,000</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Moi} alt="Moi" />
      <h3> Moi Moi (Steamed Bean Cake)</h3>
      <span>Soft, spicy bean pudding wrapped in leaves or foil, often served as a side.</span>
      <p>₦800 each</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Ofada} alt="Ofada" />
      <h3>Ofada Rice and Ayamase Sauce</h3>
      <span>Locally grown rice served with spicy green pepper stew and assorted meats.</span>
      <p>₦3,200</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Suya} alt="Suya" />
      <h3>Suya Skewers</h3>
      <span>Grilled spicy beef skewers with suya spice and onions.</span>
      <p>₦1,500 per pack</p>
      <button className="btn"> Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Akara} alt="Akara" />
      <h3> Akara (Bean Fritters)</h3>
      <span>Deep-fried bean balls – crispy on the outside, soft inside.</span>
      <p> ₦500 for 5 pieces</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.rice} alt="Akara" />
      <h3> Fried Rice with Plantain</h3>
      <span>Flavorful rice stir-fried with vegetables and liver, paired with sweet, fried plantains.</span>
      <p>₦800</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

     <div className={Styles.itemcard}>
      <img src={ImageMap.Okra} alt="Akara" />
      <h3>Okra Soup with Swallow</h3>
      <span>Slimy and flavorful okra cooked with meat, fish, and served with a swallow like amala or eba.</span>
      <p>₦600</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

     <div className={Styles.itemcard}>
      <img src={ImageMap.Asun} alt="Akara" />
      <h3>Asun (Spicy Goat Meat)</h3>
      <span>Tender goat meat grilled and tossed in spicy pepper sauce.</span>
      <p>₦900</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

     <div className={Styles.itemcard}>
      <img src={ImageMap.Beans} alt="Akara" />
      <h3>Beans & Plantain (Ewa Agoyin)</h3>
      <span>Mashed beans with spicy stew, served with sweet fried plantains.</span>
      <p>₦900</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Boli} alt="Akara" />
      <h3> Boli & Groundnut</h3>
      <span>Roasted plantain served with groundnuts (peanuts) — perfect street food snack.</span>
      <p>₦300</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Nkwobi} alt="Akara" />
      <h3>Nkwobi</h3>
      <span>Cow foot delicacy cooked in spicy palm oil sauce.</span>
      <p>₦100</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Soup} alt="Akara" />
      <h3>Pepper Soup</h3>
      <span>Spicy, aromatic broth made with meat or fish and local herbs.</span>
      <p>₦300</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Amala} alt="Akara" />
      <h3>Amala with Gbegiri & Ewedu</h3>
      <span>A Southwestern trio: yam flour swallow with beans and jute leaf soups.</span>
      <p>₦500</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>


  </div>
</div>

      {/* Kitchen Utensils */}
 <div className={Styles.cards1}>
  <h2>Newly Added Kitchen Utensils</h2>
  <p>Our Newly added Kitchen</p>
  <h2>Preview Items</h2>
  <div className={Styles.items}>
    <div className={Styles.itemcard}>
      <img src={ImageMap.Pan} alt="Pan" />
      <h3>Non-Stick Frying Pan</h3>
      <span>Ideal for quick cooking with minimal oil – easy to clean and durable.</span>
      <p>₦5,000</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Knife} alt="Knife" />
      <h3>Stainless Steel Knife Set</h3>
      <span>Includes chef’s knife, bread knife, and paring knife with a wooden block.</span>
      <p>₦12,000</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Spoons} alt="Spoons" />
      <h3>Wooden Cooking Spoon Set</h3>
      <span>Natural wood, perfect for stirring stews, soups, and more.</span>
      <p>₦2,000 (set of 3)</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Weigh} alt="Weigh" />
      <h3>Digital Kitchen Scale</h3>
      <span>Accurately measure ingredients for baking and portion control.</span>
      <p>₦4,500</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

        <div className={Styles.itemcard}>
      <img src={ImageMap.Whisk} alt="Whisk" />
      <h3> Manual Hand Whisk</h3>
      <span>Great for beating eggs, whipping cream, or light mixing tasks.</span>
      <p>₦1,500</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>

    <div className={Styles.itemcard}>
      <img src={ImageMap.Grate} alt="Grate" />
      <h3> Grater & Slicer Combo</h3>
      <span>Multi-functional grater for veggies, cheese, and more.</span>
      <p>₦3,000</p>
      <button className={Styles.btn}>Add to Cart</button>
    </div>
</div>
</div>
</div>
<Footer></Footer>
<TopBtn></TopBtn>
</>
    )
}




// 🥐 Recommended Baked Goods
// Item	Short Description
// Croissants	Buttery, flaky, and perfect for breakfast or coffee time.
// Banana Bread	Moist and rich, made with ripe bananas — a customer favorite.
// Cinnamon Rolls	Soft rolls swirled with cinnamon and topped with icing.
// Chocolate Chip Cookies	Classic, chewy, and full of gooey chocolate chunks.
// Muffins	Choose from blueberry, chocolate, or bran — great snacks.
// Cupcakes	Mini cakes with colorful frosting — fun and sweet.
// Baguettes	Crusty on the outside, soft inside — great with soups or spreads.
// Sourdough Bread	Tangy flavor, rustic crust — ideal for sandwiches.
// Meat Pies	Savory and satisfying — stuffed with spiced meats or veggies.
// Puff Pastries	Light, layered dough — can be sweet or savory.
// Donuts	Glazed, filled, or sprinkled — a sweet tooth’s dream.
// Apple Pie	A timeless classic — sweet apple filling with a golden crust.
// Vanilla Loaf Cake	Soft, lightly sweetened, perfect with tea or coffee.
// Cheese Rolls	Savory and cheesy, soft with a golden top.
// Garlic Bread	Warm, buttery, and loaded with garlic flavor.

// You can also tag some items as:

// 🆕 New

// 💥 Popular

// 🧁 Sweet Treats

// 🥖 Savory Picks

// Would you like help displaying these in a card layout (image, name, price, button)? Or want icons or categories to go along with them?








// You said:
// can you recommend some Nigerian foods after i press the view more button of the few preview items 


// ChatGPT said:
// Absolutely! After clicking the "View More" button in your Nigerian Foods section, here are some tasty and authentic Nigerian dishes you can showcase:

// 🇳🇬 Recommended Nigerian Foods
// Dish	Description
// Jollof Rice with Chicken	Nigeria’s iconic tomato-based rice dish, served with grilled or fried chicken.
// Egusi Soup with Pounded Yam	A hearty melon seed soup cooked with leafy greens and meat, served with soft pounded yam.
// Fried Rice with Plantain	Flavorful rice stir-fried with vegetables and liver, paired with sweet, fried plantains.
// Ofada Rice & Ayamase (Designer Stew)	Local rice with a spicy green pepper sauce and assorted meats.
// Efo Riro	A richly spiced spinach stew made with locust beans, bell peppers, and meats.
// Moi Moi	Steamed bean pudding made with ground beans, peppers, and sometimes eggs or fish.
// Okra Soup with Swallow	Slimy and flavorful okra cooked with meat, fish, and served with a swallow like amala or eba.
// Asun (Spicy Goat Meat)	Tender goat meat grilled and tossed in spicy pepper sauce.
// Suya	Spiced grilled beef or chicken skewers served with onions and spicy yaji pepper.
// Akara & Pap	Deep-fried bean cakes served with fermented corn pap — a common Nigerian breakfast.
// Beans & Plantain (Ewa Agoyin)	Mashed beans with spicy stew, served with sweet fried plantains.
// Boli & Groundnut	Roasted plantain served with groundnuts (peanuts) — perfect street food snack.
// Nkwobi	Cow foot delicacy cooked in spicy palm oil sauce.
// Pepper Soup	Spicy, aromatic broth made with meat or fish and local herbs.
// Amala with Gbegiri & Ewedu	A Southwestern trio: yam flour swallow with beans and jute leaf soups.

// These dishes can be labeled with tags like:

// 🔥 Spicy Favorites

// 🆕 New Additions

// 🧡 Traditional Dishes

// 🍛 Hearty Meals

// Would you like help turning these into card-style layout elements with images and buttons (e.g., "Add to Cart", "See More")?








// You said:
// can you recommend some Kitchen utensils after i press the view more button of the few preview items 


// ChatGPT said:
// Absolutely! Here's a curated list of kitchen utensils and tools you can display after the "View More" button is clicked in your kitchen essentials section:

// 🍴 Recommended Kitchen Utensils & Tools
// Item	Description
// Non-Stick Frying Pan	Perfect for frying eggs, plantains, pancakes, and more — easy to clean and durable.
// Wooden Spoon Set	Gentle on pots and pans, ideal for stirring stews, rice, and traditional soups.
// Chef’s Knife	A sharp, reliable knife for slicing meats, vegetables, and everything in between.
// Cutting Board	A sturdy surface for safe chopping, slicing, and prepping.
// Blender	Great for smoothies, soups, and blending ingredients for recipes like moi moi or stew.
// Spice Jar Set	Organized containers to keep your spices fresh and accessible.
// Colander / Sieve	Used for draining pasta, washing vegetables, and filtering ingredients.
// Measuring Cups & Spoons	Essential for baking and accurate cooking measurements.
// Mixing Bowls	Great for prepping ingredients, mixing batters, or marinating meats.
// Whisk	Ideal for beating eggs, mixing pancake batter, or making sauces.
// Grater	For grating cheese, carrots, or ginger and garlic in Nigerian dishes.
// Garlic Press	Makes it easy to crush garlic without the mess.
// Serving Tray	For elegant serving of food, snacks, or drinks to guests.
// Yam Pounder / Food Processor	Perfect for making pounded yam, dough, or other blended ingredients.
// Gas Lighter or Electric Igniter	A must-have for lighting up your gas stove with ease.
// Tongs & Ladles	Helpful for turning meat, serving soups, and frying.
// Kitchen Scale	Useful for portioning ingredients, especially for baking and meal prep.