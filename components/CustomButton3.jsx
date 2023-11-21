import React from "react";

const CustomButton3 = ({ title, buttonColor, titleColor, onClick }) => {
  return (
    <div
      className={`rounded-full justify-center flex bg-${buttonColor} xl:px-6 xl:py-4 py-1 px-4 md:px-3 md:py-2 hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <button className={`text-xs text-${titleColor} font-semibold`}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton3;
