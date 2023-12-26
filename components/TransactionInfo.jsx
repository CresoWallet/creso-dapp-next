import React, { useState } from "react";
import Image from "next/image";
import Redarrow from "../assets/Dashboard/RedArrow.png";
import Greenarrow from "../assets/Dashboard/GreenArrow.png";
import CoinWallet from "./CoinWallet";

const TransactionItem = ({ icon, label, amount, value }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState(""); // "send" or "receive"

  const handleButtonClick = (type) => {
    setPopupType(type);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="flex xl:flex-nowrap flex-wrap justify-between items-center">
      <div className="flex gap-3 items-center my-5">
        <Image alt="" src={icon} className="w-10 h-10" />
        <p className="text-sm text-black item-start">{label}</p>
      </div>

      <div className="flex gap-3 items-center my-5">
        <p className="text-sm text-slate-400">{amount}</p>
        <p className="text-black font-bold">{value} ETH</p>
      </div>

      <div className="border h-5"></div>

      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleButtonClick("send")}>
          <Image alt="" src={Redarrow} className="w-6 h-6" />
          <p className="text-sm text-black">Send</p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleButtonClick("receive")}>
          <Image alt="" src={Greenarrow} className="w-6 h-6" />
          <p className="text-sm text-black">Receive</p>
        </div>
      </div>

      {popupVisible && (
        // Include your Popup component here with necessary props
        <div className="popup">
          <p>{popupType === "send" ? "Send" : "Receive"} Popup</p>
          <button onClick={handleClosePopup}>Close Popup</button>
        </div>
      )}
    </div>
  );
};

export default TransactionItem;
