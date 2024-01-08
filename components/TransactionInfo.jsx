import React, { useContext, useState } from "react";
import Image from "next/image";
import Redarrow from "../assets/Dashboard/redArrow.png";
import Greenarrow from "../assets/Dashboard/greenArrow.png";
import SendETH from "./SendETH";
import WalletAddress from "./WalletAddress";
import { network } from "@/utils/data/coinlist";
import { IoIosClose } from "react-icons/io";

// const TransactionItem = ({ icon, label, amount, value, valueName }) => {
//   const displayValueName = valueName || "";
//   const words = displayValueName.split(" ");
//   const firstTwoWords = words.slice(0, 2).join(" ");

//   return (
//     <div className="grid grid-cols-3 gap-6 items-center my-5">
//       <div className="flex gap-3 items-center">
//         <Image alt="" src={icon} width={35} height={35} />
//         <p className="text-base text-black font-semibold">{label}</p>
//       </div>

//       <div className="flex gap-3 items-center">
//         <p className="text-base text-slate-400">$ {amount}</p>
//         <p className="">
//           <span className="font-bold text-lg ">{value}</span>{" "}
//           <span title={valueName}>{firstTwoWords}</span>
//         </p>
//       </div>

//       <div className="flex gap-10 items-center">
//         <div className="flex items-center gap-3 cursor-pointer">
//           <Image alt="" src={Redarrow} className="w-6 h-6" />
//           <p className="text-base text-black">Send</p>
//         </div>
//         <div className="flex items-center gap-3 cursor-pointer">
//           <Image alt="" src={Greenarrow} className="w-6 h-6" />
//           <p className="text-base text-black">Receive</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionItem;

// const TransactionItem = ({ icon, label, amount, value, valueName }) => {
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [popupType, setPopupType] = useState(""); // "send" or "receive"
//   const [mainContentVisible, setMainContentVisible] = useState(true);

//   const handleButtonClick = (type) => {
//     setPopupType(type);
//     setPopupVisible(true);
//     setMainContentVisible(false);
//   };

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//     setMainContentVisible(true);
//   };

//   const displayValueName = valueName || "";
//   const words = displayValueName.split(" ");
//   const firstTwoWords = words.slice(0, 2).join(" ");

//   return (
//     <div className="relative">
//       <IoIosClose
//         className="text-white h-7 w-7 absolute top-2 right-2 cursor-pointer"
//         onClick={handleClosePopup}
//       />
//       {mainContentVisible && (
//         <div className="flex xl:flex-nowrap flex-wrap justify-between items-center">
//           <div className="flex gap-3 items-center my-5">
//             <Image alt="" src={icon} className="w-10 h-10" />
//             <p className="text-sm text-black item-start">{label}</p>
//           </div>

//           <div className="flex gap-3 items-center my-5">
//             <p className="text-sm text-slate-400">{amount}</p>
//             <p className="text-slate-400">
//               {value} <span title={valueName}>{firstTwoWords}</span>
//             </p>
//           </div>

//           <div className="border h-5"></div>

//           <div className="flex gap-10 items-center">
//             <div
//               className="flex items-center gap-3 cursor-pointer"
//               onClick={() => handleButtonClick("send")}
//             >
//               <Image alt="" src={Redarrow} className="w-6 h-6" />
//               <p className="text-sm text-black">Send</p>
//             </div>
//             <div
//               className="flex items-center gap-3 cursor-pointer"
//               onClick={() => handleButtonClick("receive")}
//             >
//               <Image alt="" src={Greenarrow} className="w-6 h-6" />
//               <p className="text-sm text-black">Receive</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {popupVisible && popupType === "send" && (
//         <SendETH handleBackButton={handleClosePopup} networks={network} />
//       )}

//       {popupVisible && popupType === "receive" && (
//         <WalletAddress handleBackButton={handleClosePopup} />
//       )}
//     </div>
//   );
// };

// export default TransactionItem;

const TransactionItem = ({ icon, label, amount, value, valueName }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState(""); // "send" or "receive"
  const [mainContentVisible, setMainContentVisible] = useState(true);

  const handleButtonClick = (type) => {
    setPopupType(type);
    setPopupVisible(true);
    setMainContentVisible(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setMainContentVisible(true);
  };

  const displayValueName = valueName || "";
  const words = displayValueName.split(" ");
  const firstTwoWords = words.slice(0, 2).join(" ");

  return (
    <div className="relative">
      <IoIosClose
        className="text-white h-7 w-7 absolute top-2 right-2 cursor-pointer"
        onClick={handleClosePopup}
      />
      {mainContentVisible && (
        <div className="flex xl:flex-nowrap flex-wrap justify-between items-center">
          <div className="flex gap-3 items-center  my-5">
            <Image alt="" src={icon} width={35} height={35} />
            <p className="text-base item-start text-black font-semibold">
              {label}
            </p>
          </div>

          <div className="flex gap-3 items-center my-5">
            <p className="text-base text-slate-400">$ {amount}</p>
            <p className="">
              <span className="font-bold text-lg ">{value}</span>{" "}
              <span title={valueName}>{firstTwoWords}</span>
            </p>
          </div>

          {/* <div className="border h-5"></div> */}

          <div className="flex gap-10 items-center">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleButtonClick("send")}
            >
              <Image alt="" src={Redarrow} className="w-6 h-6" />
              <p className="text-sm text-black">Send</p>
            </div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleButtonClick("receive")}
            >
              <Image alt="" src={Greenarrow} className="w-6 h-6" />
              <p className="text-sm text-black">Receive</p>
            </div>
          </div>
        </div>
      )}

      {popupVisible && popupType === "send" && (
        <SendETH handleBackButton={handleClosePopup} networks={network} />
      )}

      {popupVisible && popupType === "receive" && (
        <WalletAddress handleBackButton={handleClosePopup} />
      )}
    </div>
  );
};

export default TransactionItem;
