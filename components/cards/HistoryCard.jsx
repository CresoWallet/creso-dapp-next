import React from "react";
import Image from "next/image";
import ETH from "../../assets/Dashboard/eth.png";
import RedArrow from "../../assets/Dashboard/redArrow.png";
import GreenArrow from "../../assets/Dashboard/greenArrow.png";
import Usdt2 from "../../assets/Dashboard/usdt2.png";
import Dai2 from "../../assets/Dashboard/Dai2.png";

import { ethers } from "ethers";
import { ETHERSCAN } from "@/constants";

const HistoryCard = ({
  secureWalletAddress,
  eoaWalletAddress,
  to,
  hash,
  value,
  usd,
}) => {
  const cryptoValue = value?.hex && ethers.formatEther(value.hex);
  const usdValue = Math.round(parseFloat(cryptoValue * usd));
  return (
    <div
      className="flex justify-between cursor-pointer transition duration-300 hover:bg-slate-200 rounded-lg"
      onClick={() =>
        window.open(`${ETHERSCAN}/tx/${hash}`, "_blank", "noopener,noreferrer")
      }
    >
      <div className="flex flex-row items-center justify-start gap-2 p-2 basis-4/6">
        <Image alt="" src={ETH} />

        <p className="uppercase">ETH</p>
      </div>

      <div className="flex flex-row items-center gap-2 p-2 basis-4/6">
        <p className="font-semibold ">{cryptoValue}</p>
        <p className="text-[#A09FAA] text-xs">{`(${usdValue}$)`}</p>
      </div>

      <div className="flex flex-row items-center justify-end  space-x-4 gap-4 basis-4/6">
        <div className="flex flex-row">
          <div className="flex flex-row">
            {to === eoaWalletAddress || to === secureWalletAddress ? (
              <>
                <Image src={GreenArrow} alt="" className="w-5 h-5" />
                <p className="text-xs">Receive</p>
              </>
            ) : (
              <>
                {" "}
                <Image src={RedArrow} alt="" className="w-5 h-5" />
                <p className="text-xs">Send</p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row"></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
