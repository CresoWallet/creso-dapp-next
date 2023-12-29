import React, { useContext, useState } from "react";
import Image from "next/image";
import Redarrow from "../assets/Dashboard/RedArrow.png";
import Greenarrow from "../assets/Dashboard/GreenArrow.png";
import SendETH from "./SendETH"; 
import WalletAddress from "./WalletAddress";
import { network } from "@/utils/data/coinlist";
import { WalletContext } from "@/providers/WalletProvider";

const TransactionItem = ({ icon, label, amount, value, valueName }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState(""); // "send" or "receive"

  

  // const {
  //   send, setSend,
  //   totalBalance
  // } = useContext(WalletContext);
  // const [mainContentVisible, setMainContentVisible] = useState(true);
  // const handleWalletClick = () => {
  //   setWalletAddress(true);
  //   setMainContentVisible(false);
  // };

  // const handleClick = () => {
  //   setSend(true);
  //   setMainContentVisible(false);
  // };

  const handleButtonClick = (type) => {
    setPopupType(type);
    setPopupVisible(true);
    setMainContentVisible(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  
  const displayValueName = valueName || '';
  const words = displayValueName.split(' ');
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
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleButtonClick("send")}>
          <Image alt="" src={Redarrow} className="w-6 h-6" />
          <p className="text-sm text-black">Send</p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleButtonClick("receive")}>
          <Image alt="" src={Greenarrow} className="w-6 h-6" />
          <p className="text-sm text-black">Receive</p>
        </div>
      </div>

      {popupVisible && popupType === "send" && (
        <SendETH
          handleBackButton={handleClosePopup}         
          // walletArr={wallets.filter((e) => e.type === walletType)}
          networks={network}
          // handleClose={handleClose}
        />
      )}
      

      {popupVisible && popupType === "receive" && (
        <WalletAddress
        // wallet={wallets.filter(
        //   (e, index) => e.type === walletType && index === 0
        // )}
          handleBackButton={handleClosePopup}
        />
      )}
    </div>
  );
};

export default TransactionItem;
