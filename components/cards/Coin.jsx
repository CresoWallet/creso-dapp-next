import React, { useEffect, useState } from "react";
import Image from "next/image";
import Account from "../../assets/Dashboard/account.png";
import Add from "../../assets/Dashboard/add.png";
import ETH from "../../assets/Dashboard/ethSelect.png";
import USDT from "../../assets/Dashboard/usdt.png";
import DAI from "../../assets/Dashboard/dai.png";
import BnB from "../../assets/Dashboard/bnb.png";
import WETH from "../../assets/Dashboard/weth.png";
import { coinList, tokenList } from "@/utils/data/coinlist";
import { getUSDValue } from "@/clientApi/wallet";

const CoinCard = ({ handleCoinWallet }) => {
  const [usdRate, setUsdRate] = useState();

  useEffect(() => {
    const fetchUsdValue = async () => {
      try {
        const res = await getUSDValue();
        if (res) {
          setUsdRate({
            USDT: res?.data?.tether.usd,
            USDC: res?.data["usd-coin"].usd,
            WLD: res?.data?.worldcoin.usd,
            OKB: res?.data?.okb.usd,
            BNB: res?.data?.binancecoin.usd,
          });
        }
      } catch (error) {
        console.log("error : ", error);
      }
    };

    fetchUsdValue();
  }, []);
  return (
    <div className="flex flex-row gap-2 xl:gap-7 md:gap-1 justify-between items-center ">
      {tokenList.ethereum.map((item, index) => {
        return (
          <div
            className="xl:flex hidden flex-col gap-2 space-y-1 items-center cursor-pointer hover:animate-bounce"
            onClick={(e) => {
              handleCoinWallet({ item: item });
            }}
            key={index}
          >
            <Image
              alt=""
              src={item.tokenLogoUrl}
              className="xl:h-15 xl:w-15 md:h-12 md:w-12 w-12 h-12"
              width={40}
              height={40}
            />
            <div className="flex flex-col items-center">
              <p className="text-center xl:text-sm text-xs md:text-xs">
                {item.tokenSymbol}
              </p>
              {usdRate && (
                <p className="text-[#A09FAA] xl:text-sm text-xs md:text-xs">
                  {`${usdRate[item.tokenSymbol].toFixed(2)} $`}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinCard;
