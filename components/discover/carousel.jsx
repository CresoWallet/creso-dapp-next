import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function carousel({ slides }) {
  return (
    <Carousel showArrows={true} axis="horizontal" className="rounded-2xl ">
      <div className="h-64 w-full rounded-2xl">
        <Image
          width={580}
          height={270}
          src={slides[0]}
          alt="label"
          className="w-full object-contain rounded-2xl"
        />
      </div>
      <div className="h-64 w-full rounded-2xl">
        <Image
          width={500}
          height={500}
          src={slides[1]}
          alt="label"
          className="w-full object-cover"
        />
      </div>
      <div className="h-64 w-full rounded-2xl">
        <Image
          width={500}
          height={500}
          src={slides[2]}
          alt="label"
          className="w-full object-cover"
        />
      </div>
    </Carousel>
  );
}

export default carousel;
