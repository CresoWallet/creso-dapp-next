import Image from "next/image";
import React from "react";

function CardWithTitle({ image, bgColor, title }) {
  const custoColor = bgColor;
  return (
    <div
      className={`relative bg-${custoColor} w-full border border-solid border-black rounded-3xl`}
    >
      <div className="image-container w-full mx-36 rounded-3xl">
        <Image
          alt=""
          src={image}
          width={286}
          height={170}
          className="rounded-2xl"
        />
      </div>
      <div className="absolute w-10 top-40 bottom-0 left-10 right-0">
        <p className="font-bold text-2xl">{title}</p>
      </div>
    </div>
  );
}

export default CardWithTitle;
