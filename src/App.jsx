// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Fliper from './assets/Components/Common/Fliper'
// import CategoryMenu from './assets/Components/Common/Pages/CategoryMenu'

// import Slider from './assets/Components/Common/Pages/Slider'

// import Nextpage from './assets/Components/Common/Pages/NextPage'
// import Product from './assets/Components/Common/Pages/Product'
// import Productsection from './assets/Components/Common/Pages/Productsection'

// import Homesection from './assets/Components/Common/Pages/Homesection'
// import Appliances from './assets/Components/Common/Pages/Appliances'
// import Loginpage from './assets/Components/Common/Pages/Loginpage'









// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//     <Router>
//      <Routes>
//       <Route path ="/" element = {
//         <>
//    <Fliper/>
//    <CategoryMenu/>
//    <Slider/>
//    <Nextpage/>
//    <Product/>
//    <Productsection/>
//    <Homesection/>
//    <Appliances/>
   
//    </>
//       }/>
//       <Route path ="/login" element ={<Loginpage/>}/>
//       </Routes>
//       </Router>









import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Fliper from './assets/Components/Common/Fliper'
import CategoryMenu from './assets/Components/Common/Pages/CategoryMenu'

import Slider from './assets/Components/Common/Pages/Slider'

import Nextpage from './assets/Components/Common/Pages/NextPage'
import Product from './assets/Components/Common/Pages/Product'
import Productsection from './assets/Components/Common/Pages/Productsection'

import Homesection from './assets/Components/Common/Pages/Homesection'
import Appliances from './assets/Components/Common/Pages/Appliances'
import Loginpage from './assets/Components/Common/Pages/Loginpage'
function App(){
  return(
         <Router>
     <Routes>
      <Route path ="/" element = {
        <>
   <Fliper/>
   <CategoryMenu/>
   <Slider/>
   <Nextpage/>
   <Product/>
   <Productsection/>
   <Homesection/>
   <Appliances/>
   
   </>
      }/>
      <Route path ="/login" element ={<Loginpage/>}/>
      </Routes>
      </Router>
  )
}
export default App

   
   
   
   
   
   
    
    
  
//   )
// }

// export default App
