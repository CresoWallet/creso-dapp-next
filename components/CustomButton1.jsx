import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton1 = ({
  bgColor,
  textColor,
  borderColor,
  name,
  handleClick,
  isDisabled,
  isLoading,
}) => {
  return (
    <div
      className={`bg-${bgColor} rounded-full py-4 border border-solid border-${borderColor} flex justify-center w-full hover:bg-opacity-70 duration-500 cursor-pointer group`}
    >
      {isLoading ? (
        <>
          {" "}
          <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
        </>
      ) : (
        <button
          className={`text-${textColor} font-semibold group-hover:font-bold duration-500`}
          onClick={handleClick}
          disabled={isDisabled}
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default CustomButton1;
