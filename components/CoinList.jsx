import React from "react";
import Image from "next/image";
import Account from "../assets/Dashboard/account.png";
import Add from "../assets/Dashboard/add.png";
import ETH from "../assets/Dashboard/ethSelect.png";
import BnB from "../assets/Dashboard/bnb.png";
import USDT from "../assets/Dashboard/usdt.png";

const CoinList = ({ handleCreateWallet, handleCoinWallet }) => {
  return (
    <div className="flex flex-row justify-start gap-9 ">
      <div
        className="flex flex-col space-y-1 cursor-pointer hover:scale-105 cursor-pointer"
        onClick={handleCreateWallet}
      >
        <Image
          src={Add}
          alt=""
          className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
        />
        <p className="text-center xl:text-sm text-xs md:text-xs">Add</p>
      </div>
      <div className="flex flex-row gap-2 xl:gap-4 md:gap-1 justify-between items-center ">
        <div
          className="flex flex-col space-y-1 items-center hover:scale-105 hover:animate-bounce cursor-pointer"
          onClick={handleCoinWallet}
        >
          <Image
            alt=""
            src={ETH}
            className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
          />
          <div className="flex flex-col">
            <p className="text-center xl:text-sm text-xs md:text-xs">ETH</p>
            <p className="text-[#A09FAA] xl:text-sm text-xs md:text-xs">
              $2,321.79
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 items-center cursor-pointer">
          <Image
            alt=""
            src={BnB}
            className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
          />
          <div className="flex flex-col">
            <p className="text-center xl:text-sm text-xs md:text-xs">BNB</p>
            <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
              $16.32
            </p>
          </div>
        </div>
        <div className="xl:flex hidden flex-col space-y-1 items-center cursor-pointer">
          <Image
            alt=""
            src={USDT}
            className="xl:h-14 xl:w-14 md:h-12 md:w-1 w-12 h-122"
          />
          <div className="flex flex-col">
            <p className="text-center xl:text-sm text-xs md:text-xs">USDT</p>
            <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
              $804.94
            </p>
          </div>
        </div>
        <div className="xl:flex hidden flex-col space-y-1 items-center cursor-pointer">
          <Image
            alt=""
            src={USDT}
            className="xl:h-14 xl:w-14 md:h-12 md:w-12"
          />
          <div className="flex flex-col">
            <p className="text-center xl:text-sm text-xs md:text-xs">USDT</p>
            <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
              $804.94
            </p>
          </div>
        </div>
        <div className="xl:flex hidden flex-col space-y-1 items-center cursor-pointer">
          <Image
            alt=""
            src={USDT}
            className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
          />
          <div className="flex flex-col">
            <p className="text-center xl:text-sm text-xs md:text-xs">USDT</p>
            <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
              $804.94
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 items-center cursor-pointer">
          <Image
            alt=""
            src={USDT}
            className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
          />
          <div className="flex flex-col">
            <p className="text-center xl:text-sm md:text-xs text-xs">USDT</p>
            <p className="text-[#A09FAA] xl:text-sm md:text-xs text-xs">
              $804.94
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinList;
