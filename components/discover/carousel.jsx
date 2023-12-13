import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function carousel({ slides }) {
  return (
    <Carousel showArrows={true} axis="horizontal" className="rounded-3xl ">
      {slides.map((slide, index) => (
        <div key={index} className="h-64 w-full rounded-3xl overflow-hidden">
          <Image
            width={580}
            height={270}
            src={slide}
            alt={`label-${index}`}
            className="w-full h-full object-fill rounded-3xl"
          />
        </div>
      ))}
      <style jsx global>{`
        .carousel.carousel-slider .control-arrow:hover {
            background: none !important;
        }
      `}</style>
      {/* <div className="h-64 w-full rounded-3xl">
        <Image
          width={580}
          height={270}
          src={slides[0]}
          alt="label"
          className="w-full object-fill rounded-3xl"
        />
      </div>
      <div className="h-64 w-full rounded-3xl">
        <Image
          width={580}
          height={270}
          src={slides[1]}
          alt="label"
          className="w-full object-fill rounded-3xl"
        />
      </div>
      <div className="h-64 w-full rounded-3xl">
        <Image
          width={580}
          height={270}
          src={slides[2]}
          alt="label"
          className="w-full object-fill rounded-3xl"
        />
      </div> */}
    </Carousel>
  );
}

export default carousel;
