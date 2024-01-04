import React, { useContext, useEffect, useRef, useState } from "react";
import eth from "../assets/Swap/etherum.png";
import Image from "next/image";
import { MdArrowBack, MdDownloadDone } from "react-icons/md";
import { WalletContext } from "@/providers/WalletProvider";
const Wallet = ({ setOpenWallet }) => {
  const [activeButton1, setActiveButton1] = useState(0);
  const [detailstoken, setDetailstoken] = useState([]);
  const popupRef = useRef();

  const {
    secureWalletAddress,
    eoaWalletAddress,
    allToken,
    activeButton,
    setActiveButton,
  } = useContext(WalletContext);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton1(buttonIndex);
  };

  useEffect(() => {
    setDetailstoken(allToken);
  }, [activeButton, allToken]);

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWallet(false);
    }
  };



  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-[9] bg-gray-800 bg-opacity-75"
      ref={popupRef}
      onClick={handleBackgroundClick}
    >
      <div className="w-96 rounded-3xl border-2 bg-white h-96">
        <div className="p-6">
          {/* Back button (if needed)
          <div className="flex cursor-pointer items-center gap-2 py-2 text-center" onClick={() => setOpenWallet(false)}>
            <div className="flex items-center justify-center rounded-full bg-[#1D39DD] p-1 text-white ">
              <MdArrowBack />
            </div>
            <p> Back </p>
          </div>
          */}
          <div className="bg-[#ffff]">
            <div className="flex items-center justify-center gap-2 py-2 text-lg font-semibold">
              <p className="text-2xl font-bold">Wallets</p>
            </div>
            <div className="flex justify-center items-center gap-2 py-2">
              <div
                className={`flex cursor-pointer gap-2 px-3 py-1 ${
                  activeButton1 === 0
                    ? "bg-[#D0F500] text-black border-black font-bold"
                    : "font-medium"
                } border-2 rounded-md shadow-2xl `}
                onClick={() => {
                  //setActiveButton("AA");
                  handleButtonClick(0);
                }}
              >
                <p>AA: </p>
                <button>
                  {`${
                    secureWalletAddress
                      ? secureWalletAddress.slice(0, 4) +
                        "...." +
                        secureWalletAddress.slice(-4)
                      : ""
                  }`}
                </button>
              </div>
              <div
                className={`flex cursor-pointer gap-2 px-3 py-1 ${
                  activeButton1 === 1
                    ? "bg-[#D0F500] text-black border-black font-bold"
                    : "font-medium"
                } border-2 rounded-md shadow-2xl `}
                onClick={() => {
                  //setActiveButton("");
                  handleButtonClick(1);
                }}
              >
                <p>EOA:</p>
                <button>
                  {`${
                    eoaWalletAddress
                      ? eoaWalletAddress.slice(0, 4) +
                        "...." +
                        eoaWalletAddress.slice(-4)
                      : ""
                  }`}
                </button>
              </div>
            </div>
            <hr className="py-2" />

            {detailstoken ? (
              <div className="custom-scrollbar overflow-y-scroll text-center h-52">
                {detailstoken.map((token, index) => (
                  <div key={index} className="flex gap-5 ">
                    <div className="mb-5">
                      <Image
                        src={token?.logo || eth}
                        alt={`${token.name}`}
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="mb-5 flex flex-col   items-start justify-start">
                      <p className="text-base font-semibold">{`${token.name}`}</p>
                      <p className="text-sm text-[#535353]">{`${token.balance}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Token</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
