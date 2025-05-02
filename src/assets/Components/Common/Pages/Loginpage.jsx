 import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import './Loginpage.css'
 
 
 const LoginPage = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
 
   const handleLogin = () => {
     if (username && password) {
       navigate('/home'); 
     } else {
       alert('Please enter valid credentials!');
     }
   };
 
   return (
     <div className="login-page">
       {/* Top Header */}
       <header className="header">
         <div className="header-left">
           <img
             // src="<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart">"
             
             src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"></img>
             {/* alt="Flipkart Logo"
             className="logo" */}
           
           <input
             type="text"
             className="search-bar"
             placeholder="Search for products, brands and more"
           />
         </div>
         <div className="header-right">
           <button className="login-btn">Login</button>
           <button className="seller-btn">Become a Seller</button>
           <button className="cart-btn">Cart</button>
         </div>
       </header>
 
       
       <div className="login-box">
         <div className="login-left">
           <h2>Login</h2>
           <p>Get access to your Orders, Wishlist and Recommendations</p>
           <img
             src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
             alt="Login Illustration"
           />




         </div>
         <div className="login-right">
           <div className="input-field">
             <label>Username</label>
             <input
               type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder="Enter your username"
             />
           </div>
           <div className="input-field">
             <label>Password</label>
             <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter your password"
             />
           </div>
           <button className="submit-btn" onClick={handleLogin}>
             Login
           </button>
         </div>
       </div>
     </div>
   );
 };
 
 export default LoginPage;