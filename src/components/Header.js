import React from "react";
import "./Header.css";
import logoImage from "./images/logo.jpg"; 

const Header = ({ openCart, cartItemsCount, scrollToContact }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logoImage} alt="logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#crop-suggestions">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Contact</a></li>
          <li><a href="#order-timeline" id="track-order-btn">Track My Order</a></li>
        </ul>
        {/* Cart icon with item count */}
        <div className="cart-icon" onClick={openCart}>
          <span className="cart-count">{cartItemsCount}</span>
          <i className="fas fa-shopping-cart"></i> {/* Font Awesome Cart Icon */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
