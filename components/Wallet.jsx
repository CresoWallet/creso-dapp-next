import React, { useContext, useEffect, useRef, useState } from "react";
import eth from "../assets/Swap/etherum.png";
import Image from "next/image";
import { MdArrowBack, MdDownloadDone } from "react-icons/md";
import { WalletContext } from "@/providers/WalletProvider";
const Wallet = ({ setOpenWallet }) => {
  const [activeButton1, setActiveButton1] = useState(0);
  const [detailstoken, setdDetailstoken] = useState([]);
  const popupRef = useRef();

  const { secureWalletAddress, eoaWalletAddress, allToken, activeButton } =
    useContext(WalletContext);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton1(buttonIndex);
  };
  useEffect(() => {
    const tokendetails = allToken;
    setdDetailstoken(tokendetails);
  }, [activeButton, allToken]);
  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWallet(false);
    }
  };
  return (
    <div
      className="absolute inset-0  right-0 z-50 flex w-full items-end justify-center md:items-center bg-gray-800 bg-opacity-75 "
      ref={popupRef}
      onClick={handleBackgroundClick}
    >
      <div className="w-auto rounded-3xl border-2 bg-white">
        <div className=" p-6">
          {/*<div
            className="flex cursor-pointer items-center gap-2 py-2 text-center"
            onClick={() => {
              setOpenWallet(false);
            }}
          >
            <div className="flex items-center justify-center rounded-full bg-[#1D39DD] p-1 text-white ">
              <MdArrowBack />
            </div>

            <p> Back </p>
          </div>*/}
          <div className="bg-[#ffff] ">
            {/*<hr className="" />*/}
            <div className="flex items-center justify-center gap-2 py-2 text-lg font-semibold">
              <p>Wallets</p>
            </div>
            <div className="flex gap-2 py-2">
              <div
                className={`flex gap-2 px-5 py-1 ${
                  activeButton1 === 0 ? "border-green-500" : "border-[#3d45b9]"
                } border rounded-md`}
                onClick={() => handleButtonClick(0)}
              >
                <p>AA: </p>
                <button>
                  {`${
                    secureWalletAddress
                      ? secureWalletAddress.slice(0, 5) +
                        "...." +
                        secureWalletAddress.slice(-5)
                      : ""
                  }`}
                </button>
              </div>
              <div
                className={`flex gap-2 px-5 py-1 ${
                  activeButton1 === 1 ? "border-green-500" : "border-[#3d45b9]"
                } border rounded-md`}
                onClick={() => handleButtonClick(1)}
              >
                <p>EOA:</p>
                <button>
                  {`${
                    eoaWalletAddress
                      ? eoaWalletAddress.slice(0, 5) +
                        "...." +
                        eoaWalletAddress.slice(-5)
                      : ""
                  }`}
                </button>
              </div>
            </div>
            <hr className="py-2" />

            {detailstoken ? (
              <div className="custom-scrollbar overflow-y-scroll text-center">
                {detailstoken.map((token, index) => (
                  <div key={index} className="flex gap-5 ">
                    <div className="mb-5 ">
                      <Image
                        src={token?.logo || eth}
                        alt={`${token.name}`}
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="mb-5 flex flex-col items-start justify-start">
                      <p className="text-base font-semibold">{`${token.name}`}</p>
                      <p className="text-sm text-[#535353]">{`${token.balance}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center">Loding...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
