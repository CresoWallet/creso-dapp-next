import React, { useState } from "react";
import Image from "next/image";
import Redarrow from "../assets/Dashboard/RedArrow.png";
import Greenarrow from "../assets/Dashboard/GreenArrow.png";

const TransactionItem = ({ icon, label, amount, value, valueName }) => {
  const [sendPopupVisible, setSendPopupVisible] = useState(false);
  const [receivePopupVisible, setReceivePopupVisible] = useState(false);

  const handleSendClick = () => {
    setSendPopupVisible(true);
  };

  const handleReceiveClick = () => {
    setReceivePopupVisible(true);
  };
  const displayValueName = valueName || '';

  // Split displayValueName into an array of words
  const words = displayValueName.split(' ');

  // Take the first two words
  const firstTwoWords = words.slice(0, 2).join(' ');
  return (
    <div className="flex xl:flex-nowrap flex-wrap justify-between items-center">
      <div className="flex gap-3 items-center my-5">
        <Image alt="" src={icon} className="w-10 h-10" />
        <p className="text-sm text-black item-start">{label}</p>
      </div>

      <div className="flex gap-3 items-center my-5">
        <p className="text-sm text-slate-400">{amount}</p>
        <p className="text-slate-400">{value} <span title={valueName}>{firstTwoWords}</span></p>
      </div>

      <div className="border h-5"></div>

      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleSendClick}>
          <Image alt="" src={Redarrow} className="w-6 h-6" />
          <p className="text-sm text-black">Send</p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleReceiveClick}>
          <Image alt="" src={Greenarrow} className="w-6 h-6" />
          <p className="text-sm text-black">Receive</p>
        </div>
      </div>

      {sendPopupVisible && (
        // Include your SendPopup component here with necessary props
        <div className="popup">
          <p>Send Popup</p>
          <button onClick={() => setSendPopupVisible(false)}>Close Popup</button>
        </div>
      )}

      {receivePopupVisible && (
        // Include your ReceivePopup component here with necessary props
        <div className="popup">
          <p>Receive Popup</p>
          <button onClick={() => setReceivePopupVisible(false)}>Close Popup</button>
        </div>
      )}
    </div>
  );
};

export default TransactionItem;
