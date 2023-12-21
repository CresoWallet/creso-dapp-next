// TransactionItem.js
import React from "react";
import Image from "next/image";
import Redarrow from "../assets/Dashboard/RedArrow.png";
import Greenarrow from "../assets/Dashboard/GreenArrow.png";

const TransactionItem = ({ icon, label, amount, value, send, receive }) => {
  return (
    <div className="flex items-center">
      <Image alt="" src={icon} className="w-10 h-10" />
      <p className="text-sm text-black item-start">{label}</p>
      <div className="flex">
        <p className="text-sm text-slate-400">{amount}</p>
        <p className="text-black font-bold">{value}</p>
        <div className="border flex flex-col space-y-1 mx-auto"></div>
        <Image alt="" src={Redarrow} className="w-6 h-6" />
        <p className="text-sm text-black">{send}</p>
        <Image alt="" src={Greenarrow} className="w-6 h-6" />
        <p className="text-sm text-black">{receive}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
