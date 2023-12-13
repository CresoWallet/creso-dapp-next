import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function carousel({ slides }) {
  return (
    <Carousel showArrows={true} axis="horizontal" className="rounded-3xl ">
      <div className="h-64 w-full rounded-3xl">
        <Image
          width={580}
          height={270}
          src={slides[0]}
          alt="label"
          className="w-full object-contain rounded-3xl"
        />
      </div>
      <div className="h-64 w-full rounded-3xl">
        <Image
          width={580}
          height={270}
          src={slides[1]}
          alt="label"
          className="w-full object-contain rounded-3xl"
        />
      </div>
      <div className="h-64 w-full rounded-3xl">
        <Image
          width={580}
          height={270}
          src={slides[2]}
          alt="label"
          className="w-full object-contain rounded-3xl"
        />
      </div>
    </Carousel>
  );
}

export default carousel;
