import React from "react";

const CustomButton2 = ({
  bgColor,
  textColor,
  borderColor,
  name,
  handleClick,
  isDisabled,
}) => {
  return (
    <div
      className={`bg-${bgColor} rounded-full py-4 border border-solid border-${borderColor} flex justify-center w-full hover:bg-opacity-70 duration-500 cursor-pointer group`}
    >
      <button
        className={`text-${textColor} font-semibold group-hover:font-bold duration-500`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {name}
      </button>
    </div>
  );
};

export default CustomButton2;
