import React from "react";
import Countdown from "react-countdown";
import { minifyEthereumAddress } from "@/utils";
import Image from "next/image";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Info from "../../assets/informations.png";

const GuardianWalletAccord = ({
  open,
  toggle,
  guardians,
  wallet,
  recovery,
  recoveryConfirm,
}) => {
  console.log("wallet : ", wallet);
  return (
    <div className="pt-[10px]">
      <div
        className={`bg-gray-200 py-[15px] px-[50px] flex justify-between items-center cursor-pointer ${
          open ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={toggle}
      >
        <p className="text-[15px] font-semibold basis-96">{`${wallet?.smartWallet?.walletName}`}</p>
        {recovery?.isRecoveryActive && (
          <div className="flex justify-center items-center font-medium py-1 px-2 bg-[#fcd34d] rounded-md text-yellow-800 border border-[#fcd34d] ">
            <div className="text-xs font-normal leading-none max-w-full flex-initial uppercase">
              recovering
            </div>
          </div>
        )}

        <div className="text-[15px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-gray-100 px-[50px] pb-[20px] rounded-b-lg pt-5">
          <div>
            <div className="grid gap-y-4">
              {guardians.map((guardian, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex">
                      <a className="text-zinc-700 text-sm font-medium">
                        {minifyEthereumAddress(guardian?.guardianAddress, 7, 7)}
                      </a>
                      {recovery?.isRecoveryActive && (
                        <div>
                          {" "}
                          {recoveryConfirm.includes(
                            guardian?.guardianAddress
                          ) ? (
                            <div className="flex justify-center items-center font-medium py-1 px-2 bg-[#86efac] rounded-md text-teal-800 border border-[#86efac] ml-5">
                              <div className="text-xs font-normal leading-none max-w-full flex-initial uppercase">
                                confirmed
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center font-medium py-1 px-2 bg-[#f87171] rounded-md text-red-800 border border-[#f87171] ml-5">
                              <div className="text-xs font-normal leading-none max-w-full flex-initial uppercase">
                                {/* Recovering */}
                                pending
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {recovery?.isRecoveryActive && (
              <div className="flex flex-row items-center mt-5">
                <div className="flex flex-col">
                  <p className="text-xs text-[#A09FAA]">
                    {`We are retrieving this wallet. To be retrieved, this wallet requires a minimum of ${recovery?.requiredConfirmations} confirmations.`}
                  </p>
                  <div className="flex item-center">
                    <p className="text-xs text-[#A09FAA]">{`The recovery process will terminate at `}</p>
                    <div className="text-xs text-red-700 ml-2 mr-0.5">
                      <Countdown
                        date={
                          Number(recovery?.recoveryInitiatedTime) * 1000 +
                          86400000
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default GuardianWalletAccord;
