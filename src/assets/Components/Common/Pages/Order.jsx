import React, { useRef } from "react";
import "./Orders.css";

const electronicsProducts = [
  { img: "src/assets/watchh.jpg", title: "Smartwatches", price: "From ₹1,049" },
  { img: "src/assets/printer.jpg", title: "Wireless Printers", price: "Shop now" },
  { img: "src/assets/monitor.jpg", title: "Monitors", price: "From ₹9,999" },
  { img: "src/assets/boat.jpg", title: "BOAT Airdopes", price: "From ₹999" },
  { img: "src/assets/bennomonitor.jpg", title: "ASUS Monitors", price: "From ₹14,999" },
  { img: "src/assets/projectot.jpg", title: "Projector", price: "From ₹9,999" },
  { img: "src/assets/shaver.jpg", title: "Shavers", price: "From ₹1,649" },
  { img: "src/assets/sandisk.jpg", title: "Sandisk SSD", price: "From ₹5,799" },
];

const beautyProducts = [
  { img: "src/assets/coffee.jpg", title: "Coffee Powder", price: "Up to 80% off" },
  { img: "src/assets/stationary.jpg", title: "Stationery", price: "From ₹49" },
  { img: "src/assets/cycle.jpg", title: "Gear Cycle", price: "Up to 40% off" },
  { img: "src/assets/electriccycle.jpg", title: "Electric Cycle", price: "Up to 30% off" },
  { img: "src/assets/toys.jpg", title: "Action Toys", price: "Up to 70% off" },
  { img: "src/assets/puzzles.jpg", title: "Puzzles & Cubes", price: "From ₹99" },
  { img: "src/assets/gym.jpg", title: "Gym Essentials", price: "From ₹139" },
  { img: "src/assets/fruits.jpg", title: "Dry Fruits", price: "Up to 70% off" },
];

const sportsProducts = [
  { img: "src/assets/oats.jpg", title: "Protein Oats", price: "From ₹268" },
  { img: "src/assets/nongear.jpg", title: "Non-Geared Cycle", price: "From ₹3,999" },
  { img: "src/assets/excercise.jpg", title: "FITKIT", price: "Up to 60% off" },
  { img: "src/assets/toys.jpg", title: "Soft Toys", price: "Up to 30% off" },
  { img: "src/assets/tea.jpg", title: "Tea Powder", price: "Up to 70% off" },
  { img: "src/assets/mat.jpg", title: "Yoga Mat", price: "From ₹159" },
  { img: "src/assets/shoes.jpg", title: "Sports Shoes", price: "Under ₹999" },
  { img: "src/assets/remotecar.jpg", title: "Remote Car", price: "Up to 30% off" }
];

const ProductSection = ({ title, products, scrollRef, scroll, extraImage }) => (
  <>
    <h2 className="section-title">{title}</h2>
    <div className="product-section-row">
    
      <div className="scroll-area">
        <button className="scroll-btn left" onClick={() => scroll(scrollRef, "left")}>&lt;</button>
        
        <div className="products" ref={scrollRef}>
          {products.map((item, index) => (
            <div className="product" key={index}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
        
        <button className="scroll-btn right" onClick={() => scroll(scrollRef, "right")}>&gt;</button>
      </div>

      {extraImage && (
        <div className="extra-image">
          <img src={extraImage} alt="Promo" />
        </div>
      )}
    </div>
  </>
);

function Orders() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const scroll = (ref, direction) => {
    const itemWidth = ref.current.offsetWidth / 6;
    ref.current.scrollBy({
      left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
      behavior: "smooth",
    });
  };

  return (
    <div className="orders-container">
      <ProductSection
        title="Best of Electronics"
        products={electronicsProducts}
        scrollRef={scrollRef1}
        scroll={scroll}
        extraImage="src/assets/flight.jpg"
      />
      <ProductSection
        title="Beauty, Foods, Toys & More"
        products={beautyProducts}
        scrollRef={scrollRef2}
        scroll={scroll}
      />
      <ProductSection
        title="Sports, Healthcare & More"
        products={sportsProducts}
        scrollRef={scrollRef3}
        scroll={scroll}
      />
    </div>
  );
}

export default Orders;