// NetworkSelection.js
import React, { useRef } from "react";
import Image from "next/image";
import Ethereum from "../assets/Dashboard/etherum.png";
import BNB from "../assets/Dashboard/bnb2.png";
import Polygon from "../assets/Dashboard/polygon.png";
import Creso from "../assets/Dashboard/creso2.png";

const NetworkSelection = ({
  networks,
  selectedNetwork,
  handleSelectNetwork,
  handleBackgroundClick,
  openNetworkList,
}) => {
  const popupRef = useRef();

  return (
    <>
      {openNetworkList && (
        <>
          <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col gap-4 min-w-[350px] max-h-[${maxHeight}px] overflow-y-auto rounded-[20px] z-[1]">
            {networks.map((item, key) => (
              <div
                key={key}
                className={`${
                  item.key === "Goerli Testnet" && "cursor-pointer"
                } flex flex-col gap-4`}
                onClick={() =>
                  item.key === "Goerli Testnet" && handleSelectNetwork(item)
                }
              >
                <div className="flex flex-row items-center justify-between min-h-[50px]">
                  <div className="flex flex-row gap-4 items-center">
                    <div>
                      <Image
                        alt=""
                        src={
                          item.value === "ethereum"
                            ? Ethereum
                            : item.value === "bnb"
                            ? BNB
                            : item.value === "polygon"
                            ? Polygon
                            : Creso
                        }
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <p
                        className={`${
                          item.key === "Goerli Testnet"
                            ? "text-black"
                            : "text-sm text-gray-500"
                        } `}
                      >
                        {item.key}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={popupRef}
            onClick={handleBackgroundClick}
            className="fixed top-0 right-0 w-full h-full bg-black/20 cursor-pointer"
          ></div>
        </>
      )}
    </>
  );
};

export default NetworkSelection;
