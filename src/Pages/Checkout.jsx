
import React from 'react';
// import styled from 'styled-components';
import './Checkout.css'
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import Home from './Home';
import Card from './Card';


const Checkout = () => {
const { cart, addToCart, removeFromCart } = useCart();

// Calculate total
const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = 4.99;
const discount = 3.99;
const total = subtotal - discount + shipping;


  return (
    <> 
 <Link to='/' className='home'>
    <a href="#">Go home</a>
    </Link>
      <div className="master-container">
        <div className="card cart">
          <label className="title">Your cart</label>
          <div className="products">
          {cart.map((item, index) => (
  <div className="product" key={index}>
    <img src={item.image} alt={item.name} width={60} height={60} className='image'/>
    <div>
      <span>{item.name}</span>
      <p>{item.description}</p>
    </div>
    <div className="quantity">
      <button onClick={() => removeFromCart(item)}>
        <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12H4" />
        </svg>
      </button>
      <label>{item.quantity}</label>
      <button onClick={() => addToCart(item)}>
        <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4v16M4 12h16" />
        </svg>
      </button>
    </div>
    <label className="price small">₦{(item.price * item.quantity).toFixed(2)}</label>
  </div>
))}


          </div>
        </div>
        <div className="card coupons">
          <label className="title">Apply coupons</label>
          <form className="form">
            <input type="text" placeholder="Apply your coupons here" className="input_field" />
            <button className="btn">Apply</button>
          </form>
        </div>
        <div className="card checkout">
          <label className="title">Checkout</label>
          <div className="details">
         <span>Your cart subtotal:</span>
  <span>₦{subtotal.toFixed(2)}</span>
  <span>Discount through applied coupons:</span>
  <span>₦{discount.toFixed(2)}</span>
  <span>Shipping fees:</span>
  <span>₦{shipping.toFixed(2)}</span>
          </div>

          
       <Link to='/Card' className='link'>
          <div className="checkout--footer">
             <label className="price"><sup>₦</sup>{total.toFixed(2)}</label>
             {/* <button className="checkout-btn">Checkout</button> */}
                   <button className="btn">Checkout</button>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Checkout;
