import React from "react";
import Image from "next/image";
import Account from "../../assets/Dashboard/account.png";
import Add from "../../assets/Dashboard/add.png";
import ETH from "../../assets/Dashboard/ethSelect.png";
import BnB from "../../assets/Dashboard/bnb.png";
import USDT from "../../assets/Dashboard/usdt.png";
import { coinList } from "@/utils/data/coinlist";

const CoinCard = ({ handleCoinWallet }) => {
  return (
    <div className="flex flex-row gap-2 xl:gap-4 md:gap-1 justify-between items-center ">
      {coinList.map((item, index) => {
        return (
          <div
            className="xl:flex hidden flex-col space-y-1 items-center cursor-pointer hover:animate-bounce"
            onClick={(e) => {
              handleCoinWallet({ item: item });
            }}
            key={index}
          >
            <Image
              alt=""
              src={
                item.coinName === "ETH"
                  ? ETH
                  : item.coinName === "BNB"
                  ? BnB
                  : item.coinName === "USDT"
                  ? USDT
                  : ETH
              }
              className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
            />
            <div className="flex flex-col">
              <p className="text-center xl:text-sm text-xs md:text-xs">
                {item.coinName}
              </p>
              <p className="text-[#A09FAA] xl:text-sm text-xs md:text-xs">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinCard;
