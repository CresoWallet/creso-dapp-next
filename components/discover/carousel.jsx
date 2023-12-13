import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function CarouselComponent({ slides }) {
  return (
    <div className="relative">
      {/* Carousel */}
      <Carousel showArrows axis="horizontal" className="rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-64 w-full rounded-3xl overflow-hidden relative "
          >
            <Image
              width={580}
              height={270}
              src={slide}
              alt={`label-${index}`}
              className="w-full h-full object-fill rounded-3xl "
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

      {/* Slider Dots Container */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center  ">
        <div className=" w-3/5 h-10 bg-white rounded-3xl  rounded-b-none  "></div>
      </div>
    </div>
  );
}

export default CarouselComponent;
