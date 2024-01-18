"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { WalletContext } from "@/providers/WalletProvider";

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
  isDisabled,
}) => {
  // const { validCaptcha } = useContext(WalletContext);
  return (
    <button
      disabled={isLoading || isDisabled}
      type={type == "submit" ? "submit" : "button"}
      className={`transition duration-500 ease-in-out bg-${bgColor} disabled:opacity-40 xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full enabled:hover:bg-${hoverColor} enabled:hover:font-semibold cursor-pointer border border-solid border-${borderColor} tracking-wider transform hover:-translate-y-1`}
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
