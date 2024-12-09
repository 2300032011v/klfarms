import React from 'react';
import './CartSection.css'; 

const CartSection = ({ cart }) => {
  return (
    <section id="cart">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p className="cart-item-price">{item.price}</p>
                <p>Size: {item.size}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CartSection;
