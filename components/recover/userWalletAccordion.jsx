import React from "react";
import Countdown from "react-countdown";
import { minifyEthereumAddress } from "@/utils";
import Image from "next/image";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Info from "../../assets/informations.png";

const userWalletAccordion = ({
  open,
  toggle,
  guardians,
  wallet,
  recovery,
  handleDelete,
  recoveryConfirm,
  loadingItem,
}) => {
  return (
    <div className="pt-[10px]">
      <div
        className={`bg-gray-200 py-[15px] px-[50px] flex justify-between items-center cursor-pointer ${
          open ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={toggle}
      >
        <p className="text-[15px] font-semibold basis-96">{`${wallet?.walletName}`}</p>
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
          {guardians?.length === 0 ? (
            <div className="text-zinc-700">
              This wallet has no guardians as of yet.
            </div>
          ) : (
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
                          {minifyEthereumAddress(
                            guardian?.guardianAddress,
                            7,
                            7
                          )}
                        </a>
                        {recovery?.isRecoveryActive && (
                          <div>
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
                                  pending
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {!recovery?.isRecoveryActive && (
                        <div
                          onClick={() =>
                            handleDelete({
                              walletAddress: wallet.address,
                              guardianAddress: guardian.guardianAddress,
                              network: wallet.network,
                            })
                          }
                          className="text-sm font-semibold leading-none text-red-600 tracking-wide uppercase cursor-pointer hover:opacity-90"
                        >
                          {loadingItem &&
                          loadingItem?.guardianAddress ===
                            guardian.guardianAddress ? (
                            <div>
                              <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
                            </div>
                          ) : (
                            "Delete"
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {recovery?.isRecoveryActive && (
                <div className="mt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Cancel Recovery
                    </button>
                  </div>

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
                </div>
              )}
            </div>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default userWalletAccordion;
