import React from "react";
import Image from "next/image";
import WhiteIcon from "../assets/Dashboard/whiteIcon.png";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const CapCard = ({
  name,
  amount,
  icon,
  iconColor,
  percentage,
  percentageColor,
}) => {
  const renderIcon = () => {
    if (icon === "down") {
      return <AiOutlineDown className={`text-${iconColor} h-3 w-4`} />;
    } else if (icon === "up") {
      return <AiOutlineUp className={`text-${iconColor} h-3 w-4`} />;
    } else {
      // return <p>Invalid icon</p>;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="h-2/5 bg-black text-white xl:py-3 md:py-1.5 py-2 rounded-t-3xl text-sm">
        <div className="flex flex-row items-center justify-between relative">
          <p className="text-xs md:py-2 px-4 mb-4 ">{name}</p>
          <div className="absolute right-1 top-0">
            <Image alt="" src={WhiteIcon} className="xl:h-8 xl:w-8 h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="h-3/5 bg-white rounded-b-3xl border-2 pt-2  xl:px-4 md:px-2 px-2">
        <div className="flex flex-col space-y-1">
          <p className="font-semibold xl:text-2xl md:text-xl">{amount}</p>
          <div className="flex flex-row items-center gap-1">
            {renderIcon()}
            <p className={`text-xs text-${percentageColor}`}>{percentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapCard;
