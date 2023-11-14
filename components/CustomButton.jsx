import React from "react";
import Image from "next/image";


const CustomButton = ({img, name, onClick, bgColor, nameColor, borderColor, hoverColor}) => {
  return (
    <div className={`bg-${bgColor} xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full hover:bg-${hoverColor} hover:font-bold cursor-pointer border border-solid border-${borderColor}`} onClick={onClick}>
      <div className="flex flex-row gap-2 items-center">
      <Image alt="" src={img} />
      <p className={`text-sm xl:text-base text-${nameColor}`}>{name}</p>
      </div>
    </div>
  );
};

export default CustomButton;
