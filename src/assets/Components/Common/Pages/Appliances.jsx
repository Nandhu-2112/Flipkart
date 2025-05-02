import React, { useRef } from "react";
import "./Appliances.css";

const ProductSection = ({ title, products, scrollRef, scroll }) => (
  <>
    <h2>{title}</h2>
    <div className="product-scroll-container">
      <button className="scroll-btn left" onClick={() => scroll(scrollRef, "left")}>&lt;</button>
      <div className="products" ref={scrollRef}>
        {products.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.img} alt={item.title} />
            <div>{item.title}</div>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll(scrollRef, "right")}>&gt;</button>
    </div>
  </>
);

function Appliances() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);


  const scroll = (ref, direction) => {
    const itemWidth = ref.current.offsetWidth / 6;
    ref.current.scrollBy({
      left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
      behavior: "smooth",
    });
  };

  const homeDecorProducts = [
    { img: "src/assets/matters.jpg", title: "Mattress", price: "From ₹2,990" },
    { img: "src/assets/sofa.jpg", title: "Sofa & Sectional", price: "From ₹7,990" },
    { img: "src/assets/office study.jpg", title: "Chairs", price: "From ₹1,890" },
    { img: "src/assets/Bed.jpg", title: "Beds", price: "From ₹1,790" },
    { img: "src/assets/Tv units.jpg", title: "Tv Units", price: "From ₹1,249" },
    { img: "src/assets/sofabed.jpg", title: "Sofa Beds", price: "From ₹6,099" },
    { img: "src/assets/sofasets.jpg", title: "Sofa Sets", price: "From ₹21,999" },
  ];

  const fashionDealsProducts = [
    { img: "src/assets/Handbags.jpg", title: "Hand Bags", price: " From ₹3,190 " },
    { img: "src/assets/womens shirts.jpg", title: "Women's Fashion", price: "Under ₹299" },
    { img: "src/assets/puma.jpg", title: "Puma Adidas", price: "Under ₹1,209" },
    { img: "src/assets/womens top.jpg", title: "Women's Tops", price: "Under ₹299" },
    { img: "src/assets/babyfashion.jpg", title: "Baby fashions", price: "Under ₹799" },
    { img: "src/assets/womensandel.jpg", title: "Women's Flat Sandel", price: "Under ₹999" },
    { img: "src/assets/women dress.jpg", title: "Women's Shirts", price: "Under ₹799" },
  ];

  const booksToysProducts = [
    { img: "src/assets/gloves.jpg", title: "Riding Gloves", price: "Up to 50% Off" },
    { img: "src/assets/1carlight bulb.jpg", title: "Car Light Bulb", price: "From ₹299" },
    { img: "src/assets/Bikecover.webp", title: "Bike body Covers", price: "From ₹199" },
    { img: "src/assets/Helmet.jpg", title: "Bike Helmets", price: "From ₹499" },
    { img: "src/assets/carcover.jpg", title: "Car Covers", price: "From ₹299" },
    { img: "src/assets/vechi cloth.jpg", title: "Vehicle Cleaning Cloth", price: "From ₹31,099" },
    { img: "src/assets/musical toy.webp", title: "Musical Toys", price: "From ₹299" },
  ];

  const tvsAppliancesProducts = [
    { img: "src/assets/Godrej.jpg", title: "Energy Efficient Refrigerator", price: "From ₹12,999" },
    { img: "src/assets/sumsun fridge.jpg", title: " Godrej Refrigerators", price: "From ₹10,499" },
    { img: "src/assets/marq.jpg", title: "Washing Machines", price: "From ₹30,099" },
    { img: "src/assets/sumsung refi.webp", title: "Samsung Refrigerator", price: "From ₹81,999" },
    { img: "src/assets/tubledom.jpg", title: "Semi Automatic Load Washing Machine", price: "From ₹23,999" },
    { img: "src/assets/Doubledoor.jpg", title: "Double Door Refrigerator", price: "From ₹23,999" },
    { img: "src/assets/Tv units.jpg", title: "Smart Tv", price: "From ₹31,099" },
  ];

  const pickYourStylesProducts = [
    { img: "src/assets/handbagyy2.jpg", title: "Handbags", price: "Up to 50% Off" },
    { img: "src/assets/Trolly.jpg", title: "Bags & Luggages", price: "Up to 60% Off" },
    { img: "src/assets/sweetshirts.jpg", title: "Tshirts Jeans", price: "Up to 70% Off" },
    { img: "src/assets/pant.jpg", title: "Track Pants", price: "Up to 55% Off" },
    { img: "src/assets/snekars.jpg", title: "Sneakers for Men's", price: "Up to 60% Off" },
    { img: "src/assets/clutch.jpg", title: "Casual Clutch", price: "Up to 60% Off" },
    { img: "src/assets/mens footwear.jpg", title: " Men's Footwear", price: "Up to 60% Off" },
  ];

  const recentlyViewedProducts =  [
    { img: "src/assets/sunrise.jpg", title: "Coffee Powder", price: "Up to 80% off" },
    { img: "src/assets/stationary.jpg", title: "Stationery", price: "From ₹49" },
    { img:"src/assets/Gear cycle.jpg", title: "Gear Cycle", price: "Up to 40% off" },
    { img: "src/assets/Electric cycle.jpg", title: "Electric Cycle", price: "Up to 30% off" },
    { img: "src/assets/Action toys.jpg", title: "Action Toys", price: "Up to 70% off" },
    { img: "src/assets/puzz cube.jpg", title: "Puzzles & Cubes", price: "From ₹99" },
    { img: "src/assets/gymming.jpg", title: "Gym Essentials", price: "From ₹139" },
    { img: "src/assets/Dates.jpg", title: "Dry Fruits", price: "Up to 70% off" },
  ];
    

  return (
    <div className="orders-container">
      <ProductSection
        title="Furniture Deals"
        products={homeDecorProducts}
        scrollRef={scrollRef1}
        scroll={scroll}
      />
      <ProductSection
        title="Fashion Top Deals"
        products={fashionDealsProducts}
        scrollRef={scrollRef2}
        scroll={scroll}
      />
      <ProductSection
        title="Top Deals"
        products={booksToysProducts}
        scrollRef={scrollRef3}
        scroll={scroll}
      />
      <ProductSection
        title="Top Deals on TVs & Appliances"
        products={tvsAppliancesProducts}
        scrollRef={scrollRef4}
        scroll={scroll}
      />
      <ProductSection
        title="Pick Your Style"
        products={pickYourStylesProducts}
        scrollRef={scrollRef5}
        scroll={scroll}
      />

<ProductSection
  title="Recently Viewed"
  products={recentlyViewedProducts}
  scrollRef={useRef(null)}
  scroll={scroll}
/>
      
    </div>
  );
}

export default Appliances;