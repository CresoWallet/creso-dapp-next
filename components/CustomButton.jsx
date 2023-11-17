"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton = ({
  img,
  name,
  onClick,
  bgColor,
  nameColor,
  borderColor,
  hoverColor,
  type,
  isLoading,
}) => {
  return (
    <button
      disabled={isLoading}
      type={type == "submit" ? "submit" : "button"}
      className={`bg-${bgColor} xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full hover:bg-${hoverColor} hover:font-bold cursor-pointer border border-solid border-${borderColor}`}
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 items-center">
        {isLoading ? (
          <>
            {" "}
            <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
          </>
        ) : (
          <>
            {" "}
            {img && <Image alt="" src={img} />}
            <p className={`text-sm xl:text-base text-${nameColor}`}>{name}</p>
          </>
        )}
      </div>
    </button>
  );
};

export default CustomButton;
