import Styles from './Shop.module.css';
import { ImageMap } from '../assets/ImageMap';
import Footer from './Footer';
import TopBtn from './TopBtn';
import { useCart } from './CartContext';

export default function Shop() {
  const { addToCart } = useCart();

 const products = {
  'Fruits & Vegetables': [
    { name: 'Strawberries', description: 'Vibrant red, sweet, eye-catching', price: 1459, image: ImageMap.Strawberry },
    { name: 'Mangoes', description: 'Tropical, juicy, golden-yellow', price: 378, image: ImageMap.Mango },
    { name: 'Grapes', description: 'Compact, colorful (green or purple)', price: 201, image: ImageMap.Grapes },
    { name: 'Bananas', description: 'Great as a snack, in pancakes, or with cereal', price: 713, image: ImageMap.Banana },
    { name: 'Tangerines', description: 'Small, sweet, and easy to peel.', price: 651, image: ImageMap.Tangerine },
    { name: 'Pineapples', description: 'Sweet and tangy — ideal for juicing or desserts.', price: 607, image: ImageMap.Pineapple },
    { name: 'Blueberries', description: 'Antioxidant-rich and great for baking.', price: 435, image: ImageMap.BlueBerry },
    { name: 'Oranges', description: 'Packed with vitamin C, great for juicing.', price: 359, image: ImageMap.Oranges },
    { name: 'Papayas', description: 'Soft, sweet, and good for digestion.', price: 1266, image: ImageMap.Papayas },
    { name: 'Watermelons', description: 'Hydrating and refreshing, perfect for hot days.', price: 328, image: ImageMap.Watermelon },
    { name: 'Pears', description: 'Mild and juicy — a kid favorite.', price: 1359, image: ImageMap.Pears },
    { name: 'Brocoli', description: 'Bright green, healthy and crunchy', price: 1014, image: ImageMap.Brocoli },
    { name: 'Carrots', description: 'Orange, crisp, kid-friendly', price: 215, image: ImageMap.Carrots },
    { name: 'Bell Peppers', description: 'Colorful (red/yellow/green), versatile', price: 211, image: ImageMap.Peppers },
    { name: 'Spinach', description: 'A leafy green superfood rich in iron', price: 341, image: ImageMap.Spinach },
    { name: 'Tomatoes', description: 'Fresh for salads, cooking, or sandwiches.', price: 597, image: ImageMap.Tomato },
    { name: 'Cabbage', description: 'Crunchy, versatile in stir-fries or slaws.', price: 626, image: ImageMap.Cabbage },
    { name: 'Lettuce', description: 'Crisp, great for salads and wraps.', price: 1184, image: ImageMap.Lettuce },
    { name: 'Zucchini', description: 'Soft texture — great for sautéing or baking.', price: 1382, image: ImageMap.Zucchini },
    { name: 'Onions', description: 'A kitchen staple for savory dishes.', price: 204, image: ImageMap.Onions },
    { name: 'Sweet Potatoes', description: 'Naturally sweet, full of fiber and vitamins.', price: 1299, image: ImageMap.Potato }
  ],
  'Baked Goods': [
    { name: 'Croissants', description: 'Golden, flaky, and buttery – perfect for breakfast or a quick snack.', price: 657, image: ImageMap.Cross },
    { name: 'Chocolate Chip Cookies', description: 'Soft, chewy, and loaded with chocolate chips.', price: 1716, image: ImageMap.Chip },
    { name: 'Sourdough Bread', description: 'Artisan-style sourdough with a crisp crust and soft interior.', price: 1580, image: ImageMap.Sour },
    { name: 'Blueberry Muffins', description: 'Moist muffins packed with fresh blueberries.', price: 1686, image: ImageMap.Muffin },
    { name: 'Cinnamon Rolls', description: 'Swirled with cinnamon sugar and topped with vanilla glaze.', price: 1366, image: ImageMap.Cinnamon },
    { name: 'Banana Bread', description: 'Banana loaf with a hint of vanilla and walnut crunch.', price: 1109, image: ImageMap.BananaBread },
    { name: 'Cupcakes', description: 'Mini cakes with colorful frosting — fun and sweet.', price: 701, image: ImageMap.CupCake },
    { name: 'Baguettes', description: 'Crusty on the outside, soft inside — great with soups or spreads.', price: 1169, image: ImageMap.Baguette },
    { name: 'Meat Pies', description: 'Savory and satisfying — stuffed with spiced meats or veggies.', price: 1456, image: ImageMap.MeatPie },
    { name: 'Puff Pastries', description: 'Light, layered dough — can be sweet or savory.', price: 819, image: ImageMap.Puff },
    { name: 'Donuts', description: 'Glazed, filled, or sprinkled — a sweet tooth’s dream.', price: 1907, image: ImageMap.Donuts },
    { name: 'Apple Pie', description: 'Sweet apple filling with a golden crust.', price: 263, image: ImageMap.Pie },
    { name: 'Vanilla Loaf Cake', description: 'Soft, lightly sweetened, perfect with tea or coffee.', price: 1804, image: ImageMap.Vanilla },
    { name: 'Cheese Rolls', description: 'Savory and cheesy, soft with a golden top.', price: 1900, image: ImageMap.Cheese },
    { name: 'Garlic Bread', description: 'Warm, buttery, and loaded with garlic flavor.', price: 576, image: ImageMap.Garlic }
  ],
  'Nigerian Delicacies': [
    { name: 'Jollof Rice with Plantain', description: 'Party-style jollof with plantain and grilled chicken.', price: 3359, image: ImageMap.Jollof },
    { name: 'Egusi Soup with Pounded Yam', description: 'Melon seed soup with assorted meat and greens.', price: 2231, image: ImageMap.Egusi },
    { name: 'Moi Moi', description: 'Spicy bean pudding wrapped in leaves or foil.', price: 1893, image: ImageMap.Moi },
    { name: 'Ofada Rice & Ayamase Sauce', description: 'Rice with spicy green pepper stew and meats.', price: 1638, image: ImageMap.Ofada },
    { name: 'Suya Skewers', description: 'Grilled beef skewers with suya spice and onions.', price: 1136, image: ImageMap.Suya },
    { name: 'Akara', description: 'Deep-fried bean balls – crispy outside, soft inside.', price: 1381, image: ImageMap.Akara },
    { name: 'Fried Rice & Plantain', description: 'Stir-fried rice with liver and sweet plantain.', price: 1878, image: ImageMap.rice },
    { name: 'Okra Soup with Swallow', description: 'Cooked with meat and fish, served with swallow.', price: 918, image: ImageMap.Okra },
    { name: 'Asun', description: 'Grilled spicy goat meat.', price: 879, image: ImageMap.Asun },
    { name: 'Ewa Agoyin', description: 'Mashed beans with spicy stew and plantain.', price: 2056, image: ImageMap.Beans },
    { name: 'Boli & Groundnut', description: 'Roasted plantain with groundnuts.', price: 896, image: ImageMap.Boli },
    { name: 'Nkwobi', description: 'Cow foot in spicy palm oil sauce.', price: 1970, image: ImageMap.Nkwobi },
    { name: 'Pepper Soup', description: 'Spicy broth with meat or fish.', price: 1908, image: ImageMap.Soup },
    { name: 'Amala with Gbegiri & Ewedu', description: 'Yam flour with beans and jute leaf soups.', price: 2972, image: ImageMap.Amala }
  ],
  'Kitchen Utensils': [
    { name: 'Non-Stick Frying Pan', description: 'Quick cooking with minimal oil.', price: 5333, image: ImageMap.Pan },
    { name: 'Knife Set', description: 'Chef’s, bread & paring knives with block.', price: 14223, image: ImageMap.Knife },
    { name: 'Wooden Spoon Set', description: 'Great for stirring stews, soups, etc.', price: 1711, image: ImageMap.Spoons },
    { name: 'Digital Kitchen Scale', description: 'Accurate baking and portioning.', price: 12955, image: ImageMap.Weigh },
    { name: 'Hand Whisk', description: 'For beating eggs, mixing, etc.', price: 8527, image: ImageMap.Whisk },
    { name: 'Grater & Slicer Combo', description: 'Multifunctional kitchen tool.', price: 9785, image: ImageMap.Grate }
  ]
};


  return (
    <>
      <div className={Styles.cards}>
        {Object.entries(products).map(([category, items]) => (
          <div key={category} className={Styles.cards1}>
            <h2>{category}</h2>
            <p>Explore our {category.toLowerCase()}</p>
            <h2>Featured items</h2>
            <div className={Styles.items}>
              {items.map((item, index) => (
                <div key={index} className={Styles.itemcard}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                  <p>{item.price.toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN'
                  })}</p>
                  <button
                    className={Styles.btn}
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <TopBtn />
    </>
  );
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