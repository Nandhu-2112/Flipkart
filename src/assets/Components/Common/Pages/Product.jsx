// import React from 'react';
// import './Box.css';

// function Boxs() {
//   return (
//     <>
//       {/* Summer Fashion Section */}
//       <div className="box-container">
//         <h1>Summer Fashion</h1>
//         <div className="product-grid">
//           <div className="product-card">
//             <img src="src/assets/shoes.webp" alt="Shoes" />
//             <p>Min. 40% off | Casual Shoes</p>
//           </div>
//           <div className="product-card">
//             <img src="src/assets/Bag.webp" alt="Backpack" />
//             <p>Min. 40% off | Trendy Backpacks</p>
//           </div>
//           <div className="product-card">
//             <img src="src/assets/chappel.webp" alt="Slippers" />
//             <p>Min. 40% off | Summer Slippers</p>
//           </div>
//           <div className="product-card">
//             <img src="src/assets/menshoe.webp" alt="Formal Shoes" />
//             <p>Min. 40% off | Formal Shoes</p>
//           </div>
//         </div>
//       </div>

//       {/* Appliance Collection Section */}
//       <div className="box-container">
//         <h1>Appliance Collection</h1>
//         <div className="product-grid">
//           <div className="product-card">
//             <img src="src/assets/Homethet.webp" alt="Shoes" />
//             <p>Min. 40% off | Casual Shoes</p>
//           </div>
//           <div className="product-card">
//             <img src="src/assets/Speaker.webp" alt="Backpack" />
//             <p>Min. 40% off | Trendy Backpacks</p>
//           </div>
//           <div className="product-card">
//             <img src="src/assets/Fan.webp" alt="Slippers" />
//             <p>Min. 40% off | Summer Slippers</p>
//           </div>
//           <div className="product-card">
//             <img src="src/assets/kCamera.webp" alt="Formal Shoes" />
//             <p>Min. 40% off | Formal Shoes</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Boxs;
import React from "react";
import "./Product.css";

const sectionsData = [
  {
    title: "Summer Fashion",
    products: [
      {
        img: "src/assets/shoes.webp",
        alt: "casual shoes",
        name: "Men's Casual Shoes",
        offer: "Min 70% Off",
      },
      {
        img: "src/assets/Bag.webp",
        alt: "backpack",
        name: "Backpacks",
        offer: "Min 70% Off",
      },
      {
        img: "src/assets/Sliper.webp",
        alt: "slippers",
        name: "Men's Slippers",
        offer: "From ₹199",
      },
      {
        img: "src/assets/menshoe.webp",
        alt: "sports shoes",
        name: "Men's Sports Shoes",
        offer: "Min 60% Off",
      },
    ],
  },
  {
    title: "Festive Must Haves",
    products: [
      {
        img: "src/assets/casualshirt.jpg",
        alt: "casual shirt",
        name: "Men's Casual Shirt",
        offer: "Min 50% Off",
      },
      {
        img: "src/assets/T-shirt.jpg",
        alt: "tshirt",
        name: "Men's T-Shirts",
        offer: "Special Offer",
      },
      {
        img: "src/assets/Womenssearee.jpg",
        alt: "saree",
        name: "Women Saree",
        offer: "Min 40% Off",
      },
      {
        img: "src/assets/Speakerss.jpg",
        alt: "speaker",
        name: "Bluetooth Speaker",
        offer: "Special Offer",
      },
    ],
  },
  {
    title: "Appliances for Cool Summer",
    products: [
      {
        img: "src/assets/Homethet.webp",
        alt: "home theatre",
        name: "Home Theatre System",
        offer: "Top Sellers",
      },
      {
        img: "src/assets/Speaker.webp",
        alt: "smart speaker",
        name: "Smart Speaker",
        offer: "Special Offer",
      },
      {
        img: "src/assets/kCamera.webp",
        alt: "air cooler",
        name: "Camera",
        offer: "From ₹29,000",
      },
      {
        img: "src/assets/Fan.webp",
        alt: "fan",
        name: "Ceiling Fans",
        offer: "Some Offer",
      },
      
    ],
  },
 
     

];

function Product() {
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

export default Product;


 