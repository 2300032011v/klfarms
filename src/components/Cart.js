import React from "react";
import "./Cart.css";

const Cart = ({ items, removeFromCart, closeCart, onOrderNow }) => {
  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={closeCart}>
            Close
          </button>
        </div>

        <div className="cart-items">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="cart-footer">
          <button className="order-now-btn" onClick={onOrderNow}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;



