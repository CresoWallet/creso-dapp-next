import React from "react";
import Image from "next/image";
import ETH from "../../assets/Dashboard/eth.png";
import RedArrow from "../../assets/Dashboard/redArrow.png";
import GreenArrow from "../../assets/Dashboard/greenArrow.png";
import Usdt2 from "../../assets/Dashboard/usdt2.png";
import Dai2 from "../../assets/Dashboard/Dai2.png";

import { ethers } from "ethers";

const HistoryCard = ({
  secureWalletAddress,
  eoaWalletAddress,
  to,
  hash,
  value,
}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-2">
        <Image alt="" src={ETH} />

        <p className="uppercase">ETH</p>
      </div>
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-row gap-4 items-center">
          <p className="text-[#A09FAA] text-xs">$1,794.28</p>
          <p className="font-semibold">
            {value?.hex && ethers.formatEther(value.hex)}
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://etherscan.com/tx/${hash}`}
          >
            view
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-be space-x-4 gap-4">
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
