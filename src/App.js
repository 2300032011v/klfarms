import React, { useState, useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CropSuggestionSection from "./components/CropSuggestionSection";
import ProductSection from "./components/ProductSection";
import ChatbotSection from "./components/ChatbotSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";
import Contact from "./components/Contact"; // Import the Contact
import "./styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
  const [address, setAddress] = useState("");

  // Create a reference for the contact section
  const contactRef = useRef(null);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Function to close the cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Function to open the cart
  const openCart = () => {
    setIsCartOpen(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle address form submission
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Order will be delivered to:", address);
    setIsAddressFormVisible(false); // Close the address form
    alert("Order placed successfully! It will be delivered to: " + address);
  };

  // Scroll to the contact section when the link is clicked
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Header openCart={openCart} cartItemsCount={cartItems.length} scrollToContact={scrollToContact} />
          <HeroSection />
          <AboutSection />
          <CropSuggestionSection />
          <ProductSection addToCart={addToCart} />
          <ChatbotSection />
          <Footer />
          
          {/* Add Contact Section */}
          <Contact ref={contactRef} />
          
          {isCartOpen && (
            <Cart
              items={cartItems}
              removeFromCart={removeFromCart}
              closeCart={closeCart}
              onOrderNow={() => setIsAddressFormVisible(true)} // Show address form when "Order Now" is clicked
            />
          )}

          {isAddressFormVisible && (
            <div className="address-form-overlay">
              <div className="address-form-container">
                <h3>Enter Delivery Address</h3>
                <form onSubmit={handleAddressSubmit}>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your complete address"
                    required
                  />
                  <button type="submit" className="submit-address-btn">
                    Submit Address
                  </button>
                  <button
                    type="button"
                    className="close-form-btn"
                    onClick={() => setIsAddressFormVisible(false)}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
