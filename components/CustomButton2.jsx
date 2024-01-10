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
  const [isClicked, setIsClicked] = useState(false);

  const handleClickWithEffect = () => {
    setIsClicked(true);
    handleClick();
  };

  return (
    <div
      className={`${
        active || isClicked ? `bg-[#D0F500]` : `hover:bg-[#D0F500]`
      } rounded-full py-4 border border-solid border-${
        active || isClicked ? "black" : borderColor
      } flex justify-center w-full hover:bg-opacity-70 duration-500 cursor-pointer group`}
    >
      {isLoading ? (
        <>
          {" "}
          <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
        </>
      ) : (
        <button
          className={`text-${textColor} font-semibold group-hover:font-bold duration-500`}
          onClick={handleClickWithEffect}
          disabled={isDisabled}
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default CustomButton2;
