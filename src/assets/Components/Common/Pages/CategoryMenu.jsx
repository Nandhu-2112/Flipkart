
import React, { useState } from "react";
import "../pages/CategoryMenu.css";

function CategoryMenu() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (category) => {
    setDropdown(category);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <>
      <div className="category-container">
        <div className="category-item">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="Kilos" />
          <span>Kilos</span>
        </div>
        <div className="category-item">
          <img alt="Mobiles" src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" />
          <span>Mobiles</span>
        </div>

        
        <div 
          className="category-item dropdown" 
          onMouseEnter={() => handleMouseEnter("Fashion")}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="Fashion" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" />
          
          <span>Fashion ✔️</span>
          {/* <span>Fashion ▼</span> */}

          {dropdown === "Fashion" && (
            <div className="dropdown-menu">
              <span>Men's Clothing</span>
              <span>Women's Clothing</span>
              <span>Kids' Fashion</span>
              <span>Footwear</span>
              <span>Watches & Accessories</span>
              <span>Eyewear</span>
              <span>Handbags & Wallets</span>
            </div>
          )}
        </div>

      
        <div 
          className="category-item dropdown" 
          onMouseEnter={() => handleMouseEnter("Electronics")}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="Electronics" src="https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" />
          <span>Electronics ✔️</span>
          {dropdown === "Electronics" && (
            <div className="dropdown-menu">
              <span>Mobiles</span>
              <span>Laptops</span>
              <span>Tablets</span>
              <span>Televisions</span>
              <span>Speakers</span>
              <span>Cameras</span>
              <span>Gaming Consoles</span>
              <span>Smartwatches</span>
            </div>
          )}
        </div>

        
        <div 
          className="category-item dropdown" 
          onMouseEnter={() => handleMouseEnter("HomeFurniture")}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="Home & Furniture" src="https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" />
          <span>Home & Furniture ✔️</span>
          {dropdown === "HomeFurniture" && (
            <div className="dropdown-menu">
              <span>Furniture</span>
              <span>Home Decor</span>
              <span>Kitchen Essentials</span>
              <span>Lighting</span>
              <span>Bedding & Bath</span>
              <span>Storage Solutions</span>
              <span>Cleaning Supplies</span>
            </div>
          )}
        </div>

        <div className="category-item">
          <img alt="Appliances" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" />
          <span>Appliances</span>
        </div>

      
        <div className="category-item">
          <img alt="Flight Booking" src="https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" />
          <span>Flight Booking</span>
        </div>

        
        <div 
          className="category-item dropdown" 
          onMouseEnter={() => handleMouseEnter("Beauty")}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="Beauty, Toys & More" src="https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" />
          <span>Beauty, Toys & More ✔️</span>
          {dropdown === "Beauty" && (
            <div className="dropdown-menu">
              <span>Makeup</span>
              <span>Skincare</span>
              <span>Hair Care</span>
              <span>Fragrances</span>
              <span>Toys</span>
              <span>Sports Equipment</span>
              <span>Health & Wellness</span>
            </div>
          )}
        </div>

        
        <div 
          className="category-item dropdown" 
          onMouseEnter={() => handleMouseEnter("TwoWheelers")}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="Two Wheelers" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" />
          <span>Two Wheelers ✔️</span>
          {dropdown === "TwoWheelers" && (
            <div className="dropdown-menu">
              <span>Electric Scooters</span>
              <span>Motorcycles</span>
              <span>Bicycles</span>
              <span>Helmets & Riding Gear</span>
              <span>Accessories</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;