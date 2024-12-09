import React from "react";
import "./ProductSection.css";


import fert1 from "./images/fert1.jpg";
import fert2 from "./images/fert2.jpg";
import fert3 from "./images/fert3.jpg";
import fert4 from "./images/fert4.jpg";
import fert5 from "./images/fert5.jpg";


import tomatoSeeds from "./images/tomatoseed.jpg";
import pepperSeeds from "./images/pepperseed.jpg";
import carrotSeeds from "./images/carrotseed.png";
import sunflowerSeeds from "./images/sunflowerseed.png";
import watermelonSeeds from "./images/watermelonseed.png";


import insecticide from "./images/insectiside.png";
import fungicide from "./images/fungiside.png";
import herbicide from "./images/herbiside.png";
import rodenticide from "./images/rodenticide.png";
import miticide from "./images/misticide.png";


const fertilizers = [
  {
    name: "Organic Fertilizer",
    price: "₹482",
    originalPrice: "₹580",
    saved: "₹98",
    size: "500 gms",
    image: fert1,
  },
  {
    name: "Nitrogen-Rich Fertilizer",
    price: "₹350",
    originalPrice: "₹450",
    saved: "₹100",
    size: "1 kg",
    image: fert2,
  },
  {
    name: "Compost Fertilizer",
    price: "₹650",
    originalPrice: "₹750",
    saved: "₹100",
    size: "2 kg",
    image: fert3,
  },
  {
    name: "Phosphate Fertilizer",
    price: "₹290",
    originalPrice: "₹350",
    saved: "₹60",
    size: "750 gms",
    image: fert4,
  },
  {
    name: "Potassium Fertilizer",
    price: "₹520",
    originalPrice: "₹600",
    saved: "₹80",
    size: "1.5 kg",
    image: fert5,
  },
];

const seeds = [
  {
    name: "SAAHO TOMATO SEEDS",
    price: "₹983",
    originalPrice: "₹1450",
    saved: "₹467",
    size: "3500 seeds",
    image: tomatoSeeds,
  },
  {
    name: "Bell Pepper Seeds",
    price: "₹750",
    originalPrice: "₹950",
    saved: "₹200",
    size: "3000 seeds",
    image: pepperSeeds,
  },
  {
    name: "Carrot Seeds",
    price: "₹600",
    originalPrice: "₹700",
    saved: "₹100",
    size: "2000 seeds",
    image: carrotSeeds,
  },
  {
    name: "Sunflower Seeds",
    price: "₹500",
    originalPrice: "₹650",
    saved: "₹150",
    size: "1500 seeds",
    image: sunflowerSeeds,
  },
  {
    name: "Watermelon Seeds",
    price: "₹800",
    originalPrice: "₹1000",
    saved: "₹200",
    size: "2000 seeds",
    image: watermelonSeeds,
  },
];

const pesticides = [
  {
    name: "Insecticide ABC",
    price: "₹310",
    originalPrice: "₹520",
    saved: "₹210",
    size: "1 kg",
    image: insecticide,
  },
  {
    name: "Fungicide XYZ",
    price: "₹450",
    originalPrice: "₹600",
    saved: "₹150",
    size: "500 gms",
    image: fungicide,
  },
  {
    name: "Herbicide DEF",
    price: "₹375",
    originalPrice: "₹475",
    saved: "₹100",
    size: "750 gms",
    image: herbicide,
  },
  {
    name: "Rodenticide PQR",
    price: "₹550",
    originalPrice: "₹700",
    saved: "₹150",
    size: "1.2 kg",
    image: rodenticide,
  },
  {
    name: "Miticide UVW",
    price: "₹490",
    originalPrice: "₹600",
    saved: "₹110",
    size: "1 kg",
    image: miticide,
  },
];

// ProductSection Component
const ProductSection = ({ addToCart }) => {
  return (
    <section id="products">
      <h2>Our Farm Products</h2>

      {/* Fertilizers Section */}
      <div className="product-category">
        <h3>Fertilizers</h3>
        <div className="products-grid">
          {fertilizers.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">
                {product.price}{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
              <p className="discount">Saved: {product.saved}</p>
              <p>Size: {product.size}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Seeds Section */}
      <div className="product-category">
        <h3>Seeds</h3>
        <div className="products-grid">
          {seeds.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">
                {product.price}{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
              <p className="discount">Saved: {product.saved}</p>
              <p>Size: {product.size}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pesticides Section */}
      <div className="product-category">
        <h3>Pesticides</h3>
        <div className="products-grid">
          {pesticides.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">
                {product.price}{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
              <p className="discount">Saved: {product.saved}</p>
              <p>Size: {product.size}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
