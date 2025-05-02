// import React, { useEffect, useState } from "react";
// import "./Slider.css"; 

// const Slider = () => {
//   const images = [
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/34515a3294c8a8f9.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/a354077c3747d8f6.png?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/57d9b129e302642e.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/86dd5564754e79f3.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/3d7827c92a670177.jpg?q=20"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//    (prevIndex) => (prevIndex - 1 + images.length) % images.length );
//   };
//   useEffect(()=>{
//     const interval = setInterval(()=>{nextSlide()},3000)
//     return ()=>clearInterval(interval)},[])
//   }

//   return (
//     <div className="slider-container">
//       <button className="prev" onClick={prevSlide}>
//         &#10094;
//       </button>
//       <div className="slider">
//         <img src={images[currentIndex]} alt="slider" />
//       </div>
//       <button className="next" onClick={nextSlide}>
//         &#10095;
//       </button>
          
//      </div>
//   );
// };

// export default Slider;


// import React, { useEffect, useState } from "react";
// import "./Slider.css";

// const Slider = () => {
//   const images = [
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/34515a3294c8a8f9.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/a354077c3747d8f6.png?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/57d9b129e302642e.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/86dd5564754e79f3.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/3d7827c92a670177.jpg?q=20"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, );

//   return (
//     <div className="slider-container">
//       <button className="prev" onClick={prevSlide}>
//         &#10094;
//       </button>
//       <div className="slider">
//         <img src={images[currentIndex]} alt="slider" />
//       </div>
//       <button className="next" onClick={nextSlide}>
//         &#10095;
//       </button>
//       <div className="indicator-container">{images.map((-,index)=>(<span key={index}className={'indicator-line ${currentIndex === index ? "active " : ""}'}></span>))}</span>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/34515a3294c8a8f9.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/a354077c3747d8f6.png?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/57d9b129e302642e.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/86dd5564754e79f3.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/3d7827c92a670177.jpg?q=20"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        <img src={images[currentIndex]} alt="slider" />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="indicator-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-line ${currentIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
