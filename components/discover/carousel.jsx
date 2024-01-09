// import Image from "next/image";
// import React from "react";
// import { Carousel } from "react-responsive-carousel";

// function CarouselComponent({ slides }) {
//   const maxSlidesToShow = slides.length;
//   // console.log('Number of slides:', maxSlidesToShow);
//   // console.log('Slides array:', slides);

//   return (
//     <div className="relative">
//       {/* Carousel */}
//       <Carousel showArrows axis="horizontal" className="rounded-3xl">
//         {slides
//           .map((slide, index) => (
//             <div
//               key={index}
//               className="h-64 w-full rounded-3xl overflow-hidden relative"
//             >
//               <Image
//                 width={580}
//                 height={270}
//                 src={slide.src} // Assuming the source is stored in 'src'
//                 alt={`label-${index}`}
//                 className="w-full h-full object-fill rounded-3xl"
//               />
//             </div>
//           ))
//           .slice(0, maxSlidesToShow)}
//         <style jsx global>{`
//           .carousel.carousel-slider .control-arrow:hover {
//             background: none !important;
//           }
//         `}</style>
//         {/* <div className="h-64 w-full rounded-3xl">
//         <Image
//           width={580}
//           height={270}
//           src={slides[0]}
//           alt="label"
//           className="w-full object-fill rounded-3xl"
//         />
//       </div>
//       <div className="h-64 w-full rounded-3xl">
//         <Image
//           width={580}
//           height={270}
//           src={slides[1]}
//           alt="label"
//           className="w-full object-fill rounded-3xl"
//         />
//       </div>
//       <div className="h-64 w-full rounded-3xl">
//         <Image
//           width={580}
//           height={270}
//           src={slides[2]}
//           alt="label"
//           className="w-full object-fill rounded-3xl"
//         />
//       </div> */}
//       </Carousel>

//       {/* Slider Dots Container */}
//       {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center  ">
//         <div className=" w-2/5 h-10 bg-white rounded-3xl  rounded-b-none ">
//         </div>
//     </div>*/}
//     </div>
//   );
// }

// export default CarouselComponent;

// ----------------------------------------------------------------

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 3000); // Adjust the interval as needed
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="relative">
      <div className="h-64 w-full rounded-3xl overflow-hidden relative">
        <Image
          width={580}
          height={270}
          src={slides[curr].src} // Assuming each slide has a 'src' property
          alt={`label-${curr}`}
          className="w-full h-full object-fill rounded-3xl"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
