
// import React, { useRef } from "react";
// import "./Nextpage.css";

// function Nextpage() {
//   const electronicsRef = useRef(null);
//   const beautyRef = useRef(null);
//   const sportsRef = useRef(null);

//   const scroll = (ref, direction) => {
//     const itemWidth = ref.current.offsetWidth / 6;
//     ref.current.scrollBy({
//       left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div className="orders-container">

//       <h2>Best of Electronics</h2>
//       <div className="product-scroll-container">
//         <button className="scroll-btn left" onClick={() => scroll(electronicsRef, "left")}>&lt;</button>
//         <div className="products" ref={electronicsRef}>
//           <div className="product"><img src="/src/assets/Smart.jpg" alt="Smartwatch" />Smartwatches<h3>From ₹1,049</h3></div>
//           <div className="product"><img src="/src/assets/printer.webp" alt="Printers" />Wireless Printers<h3>Shop now</h3></div>
//           <div className="product"><img src="/src/assets/tv.jpg" alt="Monitors" />Monitors<h3>From ₹9,999</h3></div>
//           <div className="product"><img src="/src/assets/Fasttrack.jpg" alt="Boat" />BOAT Smartwatches<h3>Grab now</h3></div>
//           <div className="product"><img src="/src/assets/sumsun.jpg" alt="Asus" />ASUS Monitors<h3>From ₹14,999</h3></div>
//           <div className="product"><img src="/src/assets/print.jpg" alt="Print" />Printers<h3>From ₹3,999</h3></div>
//           <div className="product"><img src="/src/assets/shav.jpg" alt="Shaver" />Best of Shavers<h3>From ₹1,649</h3></div>
//           <div className="product"><img src="/src/assets/sand.jpg" alt="SSD" />Sandisk SSD<h3>From ₹5,799</h3></div>
//         </div>
//         <button className="scroll-btn right" onClick={() => scroll(electronicsRef, "right")}>&gt;</button>
//       </div>

      
//       <h2>Beauty, Foods, Toys & More</h2>
//       <div className="product-scroll-container">
//         <button className="scroll-btn left" onClick={() => scroll(beautyRef, "left")}>&lt;</button>
//         <div className="products" ref={beautyRef}>
//           <div className="product"><img src="/src/assets/coffe.webp" alt="Coffee" />Coffee Powder<h3>Up to 80% off</h3></div>
//           <div className="product"><img src="/src/assets/station.jpg" alt="Stationery" />Top Stationery<h3>From ₹49</h3></div>
//           <div className="product"><img src="/src/assets/cycle.jpg" alt="Gear cycle" />Gear Cycle<h3>Up to 40% off</h3></div>
//           <div className="product"><img src="/src/electric.webp" alt="Electric cycle" />Electric Cycle<h3>Up to 30% off</h3></div>
//           <div className="product"><img src="/src/assets/Toys.jpg" alt="Action toys" />Action Toys<h3>Up to 70% off</h3></div>
//           <div className="product"><img src="/src/gym.webp" alt="Gym essentials" />Gym Essentials<h3>From ₹139</h3></div>
//          <div className="product"><img src="/src/assets/Puzz.jpg" alt="Puzzles" />Puzzles & Cubes<h3>From ₹99</h3></div>
//          <div className="product"><img src="/src/Dry.jpg" alt="Dry fruits" />Dry Fruits<h3>Up to 70% off</h3></div>
//         </div>
//         <button className="scroll-btn right" onClick={() => scroll(beautyRef, "right")}>&gt;</button>
//       </div>

      
//       <h2>Sports, Healthcare & More</h2>
//       <div className="product-scroll-container">
//         <button className="scroll-btn left" onClick={() => scroll(sportsRef, "left")}>&lt;</button>
//         <div className="products" ref={sportsRef}>
//           <div className="product"><img src="/src/assets/food.jpg" alt="Food Spread" />Food Spread<h3>Up to 50% off</h3></div>
//           <div className="product"><img src="/src/geer.webp" alt="Cycle" />Non-Geared Cycle<h3>From ₹3,999</h3></div>
//           <div className="product"><img src="/src/oaty.webp" alt="Treadmill" />Treadmill<h3>Up to 40% off</h3></div>
//           <div className="product"><img src="/src/toys2.webp" alt="Soft Toys" />Soft Toys<h3>Up to 30% off</h3></div>
//           <div className="product"><img src="/src/Tea.webp" alt="Tea powder" />Tea Powder<h3>Up to 70% off</h3></div>
//           <div className="product"><img src="/src/assets/mat.webp" alt="Yoga mat" />Yoga Mat<h3>From ₹159</h3></div>
//           <div className="product"><img src="/src/shoe.webp" alt="Sports Shoes" />Sports Shoes<h3>Under ₹999</h3></div>
//           <div className="product"><img src="/src/Remote.webp" alt="Remote Car" />Remote Car<h3>Up to 30% off</h3></div>
//         </div>
//         <button className="scroll-btn right" onClick={() => scroll(sportsRef, "right")}>&gt;</button>
//       </div>
//     </div>
//   );
// }

// export default Nextpage;


import React, { useRef } from "react";
import "./Nextpage.css";

function Nextpage() {
  // const electronicsRef = useRef(null);
  // const beautyRef = useRef(null);
  // const sportsRef = useRef(null);
const scrollRefs = useRef([]);
  const scroll = (index, direction) => {
    const container = scrollRefs.current[index]
    const itemWidth = container.offsetWidth / 6;
    container.scrollBy({
      left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
      behavior: "smooth"
    });
  };

  const sections = [
    {
      title: "Best of Electronics",
      
      products: [
        
        { src: "/src/assets/Smart.jpg", alt: "Smartwatch", title: "Smartwatches", price: "From ₹1,049" },
        { src: "/src/assets/printer.webp", alt: "Printers", title: "Wireless Printers", price: "Shop now" },
        { src: "/src/assets/tv.jpg", alt: "Monitors", title: "Monitors", price: "From ₹9,999" },
        { src: "/src/assets/Fasttrack.jpg", alt: "Boat", title: "BOAT Smartwatches", price: "Grab now" },
        { src: "/src/assets/sumsun.jpg", alt: "Asus", title: "ASUS Monitors", price: "From ₹14,999" },
        { src: "/src/assets/print.jpg", alt: "Print", title: "Printers", price: "From ₹3,999" },
        { src: "/src/assets/shav.jpg", alt: "Shaver", title: "Best of Shavers", price: "From ₹1,649" },
        { src: "/src/assets/sand.jpg", alt: "SSD", title: "Sandisk SSD", price: "From ₹5,799" }
      ]
    },
    {
      title: "Beauty, Foods, Toys & More",
      
      products: [
        { src: "/src/assets/coffe.webp", alt: "Coffee", title: "Coffee Powder", price: "Up to 80% off" },
        { src: "/src/assets/station.jpg", alt: "Stationery", title: "Top Stationery", price: "From ₹49" },
        { src: "/src/assets/cycle.jpg", alt: "Gear cycle", title: "Gear Cycle", price: "Up to 40% off" },
        { src: "/src/electric.webp", alt: "Electric cycle", title: "Electric Cycle", price: "Up to 30% off" },
        { src: "/src/assets/Toys.jpg", alt: "Action toys", title: "Action Toys", price: "Up to 70% off" },
        { src: "/src/gym.webp", alt: "Gym essentials", title: "Gym Essentials", price: "From ₹139" },
        { src: "/src/assets/Puzz.jpg", alt: "Puzzles", title: "Puzzles & Cubes", price: "From ₹99" },
        { src: "/src/Dry.jpg", alt: "Dry fruits", title: "Dry Fruits", price: "Up to 70% off" }
      ]
    },
    {
      title: "Sports, Healthcare & More",
      
      products: [
        { src: "/src/assets/food.jpg", alt: "Food Spread", title: "Food Spread", price: "Up to 50% off" },
        { src: "/src/geer.webp", alt: "Cycle", title: "Non-Geared Cycle", price: "From ₹3,999" },
        { src: "/src/oaty.webp", alt: "Treadmill", title: "Treadmill", price: "Up to 40% off" },
        { src: "/src/toys2.webp", alt: "Soft Toys", title: "Soft Toys", price: "Up to 30% off" },
        { src: "/src/Tea.webp", alt: "Tea powder", title: "Tea Powder", price: "Up to 70% off" },
        { src: "/src/assets/mat.webp", alt: "Yoga mat", title: "Yoga Mat", price: "From ₹159" },
        { src: "/src/shoe.webp", alt: "Sports Shoes", title: "Sports Shoes", price: "Under ₹999" },
        { src: "/src/Remote.webp", alt: "Remote Car", title: "Remote Car", price: "Up to 30% off" }
      ]
    }
  ];
  

  return (
    <div className="orders-container">
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <div className="product-scroll-wrapper">
            <div className="product-scroll-container">
              <button className="scroll-btn left" onClick={() => scroll(index, "left")}>&lt;</button>
              <div
                className="products"
                ref={(el) => (scrollRefs.current[index] = el)}
              >
                {section.products.map((product, pIndex) => (
                  <div className="product" key={pIndex}>
                    <img src={product.src} alt={product.alt} />
                    {product.title}
                    <h3>{product.price}</h3>
                  </div>
                ))}
              </div>
              <button className="scroll-btn right" onClick={() => scroll(index, "right")}>&gt;</button>
            </div>

            
            {index === 0 && (
              <a
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="booking-outside"
              >
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/470/720/image/ce3cf81edb760559.jpg?q=20"
                  alt="Booking"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Nextpage;