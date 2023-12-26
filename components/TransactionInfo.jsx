// TransactionItem.js
import React from "react";
import Image from "next/image";
import Redarrow from "../assets/Dashboard/RedArrow.png";
import Greenarrow from "../assets/Dashboard/GreenArrow.png";

const TransactionItem = ({ icon, label, amount, value, send, receive }) => {
  return (
    <div className="flex xl:flex-nowrap flex-wrap justify-between items-center">
      <div className="flex gap-3 items-center my-5">
        <Image alt="" src={icon} className="w-10 h-10" />
        <p className="text-sm text-black item-start">{label}</p>
      </div>

      <div className="flex gap-3 items-center my-5">
        <p className="text-sm text-slate-400">{amount}</p>
        <p className="text-black font-bold">{value}</p>
      </div>

      <div className="border h-5"></div>

      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-3">
          <Image alt="" src={Redarrow} className="w-6 h-6" />
          <p className="text-sm text-black">{send}</p>
        </div>
        <div className="flex items-center gap-3">
          <Image alt="" src={Greenarrow} className="w-6 h-6" />
          <p className="text-sm text-black">{receive}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
