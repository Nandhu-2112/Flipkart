import React, { useState } from "react";
import {Link} from "react-router-dom"
import './Fliper.css'
function Flipy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const searchSuggestions = ["Mobiles", "Laptops", "Shoes", "Watches", "Cameras"];

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            width="160"
            height="40"
            title="Flipkart"
            alt="Flipkart Logo"
          />
        </div>

        <div className="search-container">

        {/* <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
          <input
            type="text"
            placeholder="  🔍Searchfor Products, Brands and More"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSearchDropdown(e.target.value.length > 0);
            }}
          />
          {showSearchDropdown && (
            <div className="search-dropdown">
              {searchSuggestions
                .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((suggestion, index) => (
                  <div key={index} className="dropdown-item">
                    {suggestion}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="header-option" onClick={() => setShowLoginDropdown(!showLoginDropdown)}>
          <div className="icon-text">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              alt="Login"
              width="24"
              height="24"
            />
            {/* <span>Login</span> */}
            <Link to ='/login'>Login</Link>

            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" class="-dOa_b XdYXbi" width="12" height="12"></img>
          </div>
          {showLoginDropdown && (
            <div className="login-dropdown">

<div className="dropdown-item">New Customer?  Sign Up </div>

<div>-------------------------------------</div>
              <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="My Profile" width="24" height="24"></img>
              <div className="dropdown-item">My Profile</div>

<img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="24" height="24"></img>
              <div className="dropdown-item">Flipkart plus Zone</div>

              <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24"></img>
              <div className="dropdown-item">Orders</div>

              <img class="SFnind" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist" width="24" height="24"></img>
              <div className="dropdown-item">Wishlist</div>

               <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" alt="Rewards" width="24" height="24"></img>
              <div className="dropdown-item">Rewards</div>

              <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="Gift Cards" width="24" height="24"></img>
              <div className="dropdown-item">Gift Cards</div>
            </div>
          )}
        </div>

        <div className="header-option">
          <div className="icon-text">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt="Cart"
              width="24"
              height="24"
            />
            <span>Cart</span>
            {/* <Link to ='/cart'>cart</Link> */}
          </div>
        </div>

        <div className="header-option">
          <div className="icon-text">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt="Become a Seller"
              width="24"
              height="24"
            />
            <span>Become a Seller</span>
            {/* <Link to ='/Become a Seller'>Become a seller</Link> */}
          </div>
        </div>

        <div className="header-option more-options" onClick={() => setShowMoreOptions(!showMoreOptions)}>
          <div className="icon-text">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
              width="24"
              height="24"
              alt="More options"
            />
          </div>
          {showMoreOptions && (
            <div className="more-dropdown">

<img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="Notification Preferences" width="24" height="24"></img>
              <div className="dropdown-item">Notification Preferences</div>

              <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" alt="24x7 Customer Care" width="24" height="24"></img>
              <div className="dropdown-item">24*7 Customer Care</div>

              <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" alt="Advertise" width="24" height="24"></img>
              <div className="dropdown-item">Advertise</div>

              <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" alt="Download App" width="24" height="24"></img>
              <div className="dropdown-item">Download App</div>
            </div>
          )}
        </div>
      </header>
       {/* <nav className="navbar">
        <a href="#">Electronics</a>
        <a href="#">Fashion</a>
        <a href="#">Home</a>
        <a href="#">Grocery</a>
        <a href="#">Mobiles</a>
        <a href="#">Appliances</a>
      </nav>  */}
    </div>
  );
}

export default Flipy;

     
