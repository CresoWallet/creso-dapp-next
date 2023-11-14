import React from "react";
import Image from "next/image";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const User = ({ image, name, description, percentage, amount, icon, iconColor, percentageColor }) => {
  const renderIcon = () => {
    if (icon === "down") {
      return <AiOutlineDown className={`text-${iconColor} h-3 w-4`} />;
    } else if (icon === "up") {
      return <AiOutlineUp className={`text-${iconColor} h-3 w-4`} />;
    } 
  };
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <div>
          <Image alt="" src={image} />
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-sm font-semibold">{name}</p>
          <p className="text-xs text-[#A09FAA]">{description}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-semibold">{amount}</p>
        <div className="flex flex-row items-center">
          {renderIcon()}
          <p className={`text-${percentageColor} text-xs justify-end`}>{percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
