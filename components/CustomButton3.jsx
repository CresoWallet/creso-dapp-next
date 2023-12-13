import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton3 = ({
  title,
  buttonColor,
  titleColor,
  onClick,
  isLoading,
  isDisabled,
}) => {
  return (
    <div
      disabled={isDisabled}
      className={`rounded-full justify-center flex bg-${buttonColor} disabled:opacity-10 xl:px-6 xl:py-4 py-1 px-4 md:px-3 md:py-2 enabled:hover:scale-105 cursor-pointer transition duration-300`}
      onClick={onClick}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
      ) : (
        <button className={`text-xs text-${titleColor} font-semibold`}>
          {title}
        </button>
      )}
    </div>
  );
};

export default CustomButton3;
