import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton2 = ({
  active,
  bgColor,
  textColor,
  borderColor,
  name,
  handleClick,
  isDisabled,
  isLoading,
  hoverBorderColor,
}) => {
  const handleClickWithEffect = () => {
    handleClick();
  };

  return (
    <div
      className={`${
        active
          ? `bg-[#D0F500] border-black`
          : `hover:bg-[#D0F500] border-${borderColor}`
      } rounded-full py-4 border border-solid flex justify-center w-full hover:bg-opacity-70 duration-500 cursor-pointer group`}
      onClick={handleClickWithEffect}
    >
      {isLoading ? (
        <>
          {" "}
          <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
        </>
      ) : (
        <button
          className={`text-${textColor} font-semibold group-hover:font-bold duration-500`}
          disabled={isDisabled}
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default CustomButton2;
