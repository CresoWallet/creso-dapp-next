import Image from "next/image";
import React from "react";

function IconButton({ image, title }) {
  return (
    <div className="flex px-24 h-28 rounded-xl flex-col items-center hover:bg-slate-100 cursor-pointer border border-[#E5E5F0] ">
      <div className="image-container my-2">
        <Image width={42} height={42} alt="" src={image} />
      </div>
      <div className="title">
        <p className="font-semibold text-lg">{title}</p>
      </div>
    </div>
  );
}

export default IconButton;
