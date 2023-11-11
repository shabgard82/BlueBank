// import React, { useState } from "react";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import style from "./style.module.css";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }
//   console.log(SliderData);
//   return (
//     <section className={style.slider}>
//       <ArrowBackIosNewIcon className={style.leftArrow} onClick={prevSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <img src={slide.image} className={style.image} />
//             )}
//           </div>
//         );
//       })}
//       <ArrowForwardIosIcon className={style.rightArrow} onClick={nextSlide} />
//     </section>
//   );
// };

// export default ImageSlider;
