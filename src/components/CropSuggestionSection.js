import React, { useState } from 'react';
import './CropSuggestionSection.css';
import fert5 from './images/fert5.jpg'; 
import fert1 from './images/fert1.jpg';
import fert2 from './images/fert2.jpg';
import fert3 from './images/fert3.jpg';
import fert4 from './images/fert4.jpg';
import sugarcane from './images/sugarcane.png';
import sugarcane1 from './images/sugarcane1.png';
import { Button } from '@mui/material';

const CropSuggestionSection = () => {
  
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]); 

  const handleGetSuggestions = (event) => {
    event.preventDefault();
    const selectedCrop = document.getElementById('season').value;

    const cropProducts = {
      summer: [
        {
          name: 'Potassium Fertilizer',
          price: '₹520',
          originalPrice: '₹600',
          saved: '₹80',
          size: '1.5 kg',
          image: fert5,
        },
        {
          name: 'Organic Fertilizer',
          price: '₹400',
          originalPrice: '₹450',
          saved: '₹50',
          size: '2 kg',
          image: fert1,
        },
      ],
      sugarcane: [
        {
          name: 'Agracane',
          price: '₹232',
          originalPrice: '₹600',
          saved: '₹80',
          size: '1.5 kg',
          image:sugarcane1 ,
        },
        {
          name: 'sugarside',
          price: '₹400',
          originalPrice: '₹450',
          saved: '₹50',
          size: '2 kg',
          image: sugarcane,
        },
      ],
      winter: [
        {
          name: 'Urea Fertilizer',
          price: '₹450',
          originalPrice: '₹500',
          saved: '₹50',
          size: '1 kg',
          image: fert4,
        },
        {
          name: 'Compost Fertilizer',
          price: '₹350',
          originalPrice: '₹400',
          saved: '₹50',
          size: '1.5 kg',
          image: fert2,
        },
      ],
      monsoon: [
        {
          name: 'Phosphorus Fertilizer',
          price: '₹600',
          originalPrice: '₹650',
          saved: '₹50',
          size: '2 kg',
          image: fert3,
        },
        {
          name: 'Nitrogen Fertilizer',
          price: '₹500',
          originalPrice: '₹550',
          saved: '₹50',
          size: '2.5 kg',
          image: fert1,
        },
      ],
      r: [
        {
          name: 'NPK Fertilizer',
          price: '₹700',
          originalPrice: '₹750',
          saved: '₹50',
          size: '2.5 kg',
          image: fert2,
        },
        {
          name: 'Bio Fertilizer',
          price: '₹550',
          originalPrice: '₹600',
          saved: '₹50',
          size: '2 kg',
          image: fert4,
        },
      ],
    };

    const cropSuggestions = {
      summer: [
        "1. Leaf Rust (Puccinia triticina): Yellow to orange pustules on leaves, reducing photosynthesis. TREATMENT:Fungicides like Tebuconazole or Propiconazole. Resistant wheat varieties can help prevent the disease.",
        "2. Stem Rust (Puccinia graminis): Dark red or black pustules on stems and leaves. TREATMENT: Fungicides like Mancozeb and Tebuconazole.",
        "3. Wheat Blast (Magnaporthe oryzae): Lesions on stems, panicles, and leaves leading to shriveled grains. TREATMENT: Use Carbendazim or Prothioconazole as fungicides.",
        "4. Fusarium Head Blight (Fusarium graminearum): Blighted heads, pinkish-orange mold on kernels. TREATMENT: Fungicides like Triazole-based TREATMENTs such as Propiconazole.",
        "5. Powdery Mildew (Blumeria graminis): White, powdery spots on leaves, stems, and spikes. TREATMENT: Fungicides such as Myclobutanil and Azoxystrobin.",
      ],
      winter: [
        "1. Blast Disease (Pyricularia oryzae): Spindle-shaped lesions with gray centers and brown margins.  TREATMENT:  Use fungicides like Tricyclazole, Carbendazim, or Azoxystrobin.",
        "2. Bacterial Leaf Blight (Xanthomonas oryzae pv. oryzae): Water-soaked streaks turning yellow and brown.  TREATMENT:  Use bactericides such as Copper oxychloride or Streptocycline.",
        "3. Sheath Blight (Rhizoctonia solani): Oval-shaped lesions on leaf sheaths. TREATMENT: Apply fungicides like Validamycin or Hexaconazole.",
        "4. Brown Spot (Bipolaris oryzae):Brown lesions with gray centers. TREATMENT: Spray fungicides like Mancozeb or Propiconazole.",
        "5. Stem Rot (Sclerotium oryzae):Black lesions at the waterline. TREATMENT: Apply fungicides like Validamycin.",
      ],
      monsoon: [
        "1.  Ascochyta Blight:  Circular or elongated dark brown lesions on leaves, stems, and pods.  TREATMENT:  Use fungicides like Chlorothalonil or Mancozeb during the early stages.",
        "2.  Fusarium Wilt (Fusarium oxysporum):  Yellowing of leaves starting from the base, followed by wilting.  TREATMENT:  Soil drenching with Carbendazim or Captan.",
        "3.  Rust (Uromyces spp.):  Rusty brown pustules on leaves and stems.  TREATMENT:  Spray fungicides like Propiconazole or Tebuconazole.",
        "4.  Powdery Mildew (Erysiphe spp.):  White powdery fungal growth on leaves, stems, and pods.  TREATMENT:  Use fungicides like Sulfur or Tridemorph.",
        "5.  Stem Rot (Sclerotium rolfsii):  Wilting of plants with soft rot at the stem base.  TREATMENT:  Soil application of bio-control agents like Trichoderma viride or spray fungicides such as Carbendazim.",
      ],
      r: [
        "1.  Anthracnose (Colletotrichum gloeosporioides):  Dark brown to black spots on leaves, flowers, and fruits.  TREATMENT:  Apply fungicides like Azoxystrobin or Propiconazole.",
        "2.  Fruit Rot (Phytophthora capsici):  White to grayish patches on fruits.  TREATMENT:  Drench the soil with metalaxyl-based fungicides.",
        "3.  Powdery Mildew:  White fungal growth on leaves and stems. TREATMENT:  Spray with sulfur-based fungicides or systemic fungicides like Myclobutanil.",
        "4.  Downy Mildew (Peronospora spp.):  Yellowing of leaves followed by grayish-blue mold. TREATMENT:  Use systemic fungicides like Dimethomorph.",
        "5.  Sclerotinia Stem Rot:  White fluffy mold growing on infected plant tissue. TREATMENT:  Use fungicides like Carbendazim or Iprodione.",
      ],
      sugarcane: [
        "Pests/Diseases:",
"Issues: Borers, red rot, smut.",
"Solutions: Use resistant varieties, biological controls, and proper pesticides.",
"Water Issues:",

"Issues: Over/under-irrigation.",
"Solutions: Drip irrigation, proper scheduling, and drainage.",
"Soil Fertility:",
"Issues: Nutrient imbalance, poor organic matter.",
"Solutions: Soil testing, balanced fertilizers, crop rotation.",
"Poor Germination:",
"Issues: Low seed quality, poor planting methods.",
"Solutions: Use healthy seed, proper spacing, and timely planting.",
      ],
    };

    setSuggestions(cropSuggestions[selectedCrop]);
    setProducts(cropProducts[selectedCrop]);
  };

  return (
    <div id="crop-suggestions">
      <h3>Suggestions for Your crop</h3>
      <form onSubmit={handleGetSuggestions}>
        <select id="season">
          <option value="summer">Rice</option>
          <option value="winter">Wheat</option>
          <option value="monsoon">paddy</option>
          <option value="sugarcane">sugarcane</option>
          <option value="r">cotton</option>
        </select>
        <button type="submit">Get Suggestions</button>
      </form>

      <h4>Suggested Crop Protection Measures:</h4>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>₹{product.price} ({product.size})</p>
            <p>
              <s>₹{product.originalPrice}</s> 
              <span style={{ color: '#388e3c' }}>Save ₹{product.saved}</span>
            </p>
            <Button variant="contained" color="primary">Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropSuggestionSection;
