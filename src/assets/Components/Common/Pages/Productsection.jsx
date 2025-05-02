import React from "react";
import './Productsection.css'

const sectionsData = [
  {
    title: "Make Your Home Stylish",
    products: [
      {
        img: "src/assets/Wallclock.jpg",
        alt: "wall clock",
        name: "Wall Clock",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/Keyholder.jpg",
        alt: "key holder",
        name: "Key Holder",
        offer: "Special Offer",
      },
      {
        img: "src/assets/Plants.jpg",
        alt: "plants saplings",
        name: "Plants & Saplings",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/Bathroom.jpg",
        alt: "bathroom racks",
        name: "Bathroom Racks",
        offer: "Top Collection",
      },
    ],
  },
  
  {
    title: "Travel Essential Picks",
    products: [
      {
        img: "src/assets/Trimerss.webp",
        alt: "trimmer",
        name: "Trimmer",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/Shirtssrose.jpg",
        alt: "casual shirt",
        name: "Casual Shirt",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/Mens Tshirt.jpg",
        alt: "tshirt",
        name: "Men's T-Shirt",
        offer: "Special Off",
      },
      {
        img: "src/assets/Boxers.jpg",
        alt: "boxers",
        name: "Boxers",
        offer: "Best Picks",
      },
    ],
  },
  {
    title: "Home Decor & Furnishings",
    products: [
      {
        img: "src/assets/Bottle.jpg",
        alt: "water bottle & flask",
        name: "Water Bottle & Flask",
        offer: "Special Offer",
      },
      {
        img: "src/assets/Plant saplings.webp",
        alt: "plants saplings",
        name: "Plants & Saplings",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/Kitchen.jpg",
        alt: "kitchen container",
        name: "Kitchen Container",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/Pillow.jpg",
        alt: "bathroom racks",
        name: "Pillows",
        offer: "Min 50% Off",
      },
    ],
  },
  
];

function Productsection() {
  return (
    <div className="section-wrapper">
      {sectionsData.map((section, sectionIndex) => (
        <div className="section-box" key={sectionIndex}>
          <h3>{section.title}</h3>
          <div className="grid-2x2">
            {section.products.map((product, productIndex) => (
              <div className="product-card" key={productIndex}>
                <img src={product.img} alt={product.alt} />
                <p className="product-name">{product.name}</p>
                <p className="product-offer">{product.offer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productsection;