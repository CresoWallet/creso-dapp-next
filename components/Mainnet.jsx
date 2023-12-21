import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";

import PinkPlus from "../assets/Dashboard/PinkPlus.png";
import Wallet from "../assets/Dashboard/walletIcon.png";
import Copy from "../assets/Dashboard/Copy.png";
import Copy2 from "../assets/Dashboard/Copy2.png";
import Next2 from "../assets/Dashboard/next2.png";
import Wallet2 from "../assets/Dashboard/WalletIcon2.png";
import ETH from "../assets/Dashboard/eth.png";
import TransactionItem from "./TransactionInfo";
import DAI from "../assets/Dashboard/dai.png";
import USDT from "../assets/Dashboard/usdt.png";
import { copyToClipBoard, minifyEthereumAddress } from "@/utils";

const Mainnet = ({
  handleOpenWallet,
  handleCreateWallet,
  eoaWalletAddress,
  secureWalletAddress,
  showWallet,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    if (!showWallet) {
      setActiveButton("");
    }
  });

  return (
    <div className="flex flex-col xl:space-y-8 md:space-y-8 space-y-2">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">Ethereum Mainnet</p>
          <div className="flex  gap-2 items-center cursor-pointer group">
            <Image src={PinkPlus} alt="" />
            <p
              onClick={handleCreateWallet}
              className="text-[#FF4085] group-hover:font-bold duration-500"
            >
              Create
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex xl:flex-row flex-col items-center xl:gap-4 md:gap-4 gap-2">
          <div
            className={`${
              activeButton === "AA"
                ? "bg-black"
                : "bg-white hover:bg-gray-200 duration-500 "
            } rounded-full px-4 py-4 w-full border-2 border-black cursor-pointer group relative`}
          >
            <div className="flex flex-row justify-between items-center gap-3 group">
              <Image
                src={Wallet}
                alt=""
                className="md:w-14 md:h-14 xl:w-12 xl:h-12"
              />
              <div className="flex flex-col space-y-1">
                <p
                  className={`${
                    activeButton === "AA" ? "text-white" : "text-black"
                  }  font-semibold text-sm md:text-lg xl:text-sm`}
                >
                  Keyless Secure Wallet
                </p>
                <div className="flex flex-row items-center gap-4 z-[1]">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">
                    {minifyEthereumAddress(secureWalletAddress)}
                  </p>
                  <Image
                    src={activeButton ? Copy : Copy2}
                    alt=""
                    onClick={() => {
                      copyToClipBoard(secureWalletAddress);
                      enqueueSnackbar("URL Copied", {
                        variant: "info",
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <Image
                  alt=""
                  src={Next2}
                  className="md:w-10 md:h-10 xl:w-8 xl:h-8 group-hover:translate-x-1 duration-500"
                />
              </div>
              <div
                className="absolute inset-0"
                onClick={() => {
                  setActiveButton("AA");
                  handleOpenWallet({ walletName: "AA" });
                }}
              ></div>
            </div>
          </div>
          <div
            className={`${
              activeButton === "EOA"
                ? "bg-black"
                : "bg-white  hover:bg-gray-200 duration-500 "
            } rounded-full px-4 py-4 w-full border-2 border-black cursor-pointer group relative`}
          >
            <div className="flex flex-row justify-between items-center gap-3">
              <Image
                src={Wallet2}
                alt=""
                className="md:w-14 md:h-14 xl:w-12 xl:h-12"
              />
              <div className="flex flex-col space-y-1">
                <p
                  className={`${
                    activeButton === "EOA" ? "text-white" : "text-black"
                  }  font-semibold text-sm md:text-lg xl:text-sm`}
                >
                  EOA Wallet
                </p>
                <div className="flex flex-row items-center gap-4 z-[1]">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">
                    {minifyEthereumAddress(eoaWalletAddress)}
                  </p>
                  <Image
                    src={activeButton ? Copy : Copy2}
                    alt=""
                    onClick={() => {
                      copyToClipBoard(eoaWalletAddress);
                      enqueueSnackbar("URL Copied", {
                        variant: "info",
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <Image
                  alt=""
                  src={Next2}
                  className="md:w-10 md:h-10 xl:w-8 xl:h-8 group-hover:translate-x-1 duration-500"
                />
              </div>
              <div
                className="absolute inset-0"
                onClick={() => {
                  setActiveButton("EOA");
                  handleOpenWallet({ walletName: "EOA" });
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <TransactionItem
          icon={ETH}
          label="ETH"
          amount="$1,794.28"
          value="0.54"
          send="Send"
          receive="Receive"
        />
        <hr />
        <TransactionItem
          icon={DAI}
          label="DAI"
          amount="$1,794.28"
          value="0.54"
          send="Send"
          receive="Receive"
        />
        <hr />
        <TransactionItem
          icon={USDT}
          label="USDT"
          amount="$1,794.28"
          value="0.54"
          send="Send"
          receive="Receive"
        />
        <hr />
      </div>
    </div>
  );
};

export default Mainnet;
