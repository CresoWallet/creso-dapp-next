import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import CustomButton3 from "@/components/CustomButton3";
import Creso from "../../assets/Dashboard/creso2.png";
import { network } from "@/utils/data/coinlist";
import { minifyEthereumAddress } from "@/utils";
import { enqueueSnackbar } from "notistack";
import { addGuardian } from "@/clientApi/wallet";
import { WalletContext } from "@/providers/WalletProvider";
import Ethereum from "../../assets/Dashboard/etherum.png";
import BNB from "../../assets/Dashboard/bnb2.png";
import Polygon from "../../assets/Dashboard/polygon.png";

function SocialRecovery() {
  const popupRef = useRef();
  const [openWalletList, setOpenWalletList] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({});
  const [guardian, setGuardian] = useState("");
  const [aGuardianLoader, setAGuardianLoader] = useState(false);
  const { smartWallets } = useContext(WalletContext);

  const handleSelectWallet = (data) => {
    setOpenWalletList(false);
    setSelectedWallet(data);
  };

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWalletList(false);
    }
  };

  const handleAddGuardian = async () => {
    if (!selectedWallet || guardian === "") {
      enqueueSnackbar(`Missed Fields`, {
        variant: "error",
      });
    } else {
      const payload = {
        walletAddress: selectedWallet.address,
        guardian: guardian,
        network: selectedWallet.network,
      };

      setAGuardianLoader(true);
      try {
        const res = await addGuardian(payload);
        if (res) {
          enqueueSnackbar(`Guardian added successful`, {
            variant: "success",
          });
        }
      } catch (error) {
        console.log("error : ", error);
        if (error?.response?.data?.message.startsWith("cannot estimate gas")) {
          enqueueSnackbar(`Insufficient gas for the transaction`, {
            variant: "error",
          });
        } else {
          enqueueSnackbar(`Couldn't add guardian`, {
            variant: "error",
          });
        }
      }

      setAGuardianLoader(false);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between items-center xl:mt-8 md:mt-10 mt-8">
        <p className="text-sm font-semibold">Social Recovery</p>
      </div>

      <div className="flex flex-col space-y-1 mt-10">
        <p className="text-sm">Wallet Address</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <button
            disabled={smartWallets.length === 0}
            className="flex flex-row items-center gap-2 w-full justify-between"
            onClick={() => setOpenWalletList(true)}
          >
            <div className="flex items-center gap-2">
              <>
                {selectedWallet ? (
                  <Image alt="" src={Creso} />
                ) : (
                  <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                    Select Wallet
                  </p>
                )}
              </>
              {selectedWallet &&
                (minifyEthereumAddress(selectedWallet.address) ? (
                  <p className="font-semibold text-sm md:text-xs">
                    {minifyEthereumAddress(selectedWallet.address)}
                  </p>
                ) : (
                  <p className="opacity-50 text-sm">wallet address</p>
                ))}
            </div>
          </button>
          {openWalletList && (
            <>
              <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col  gap-4 min-w-[350px] rounded-[20px] z-[1]">
                {smartWallets.map((wallet, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer gap-4"
                    onClick={() => {
                      handleSelectWallet(wallet);
                    }}
                  >
                    <div className="flex flex-row items-center justify-between  min-h-[60px]">
                      <div className="flex flex-row gap-4">
                        <div>
                          <Image alt="" src={Creso} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <p className="text-base md:text-sm font-semibold">
                            {wallet ? wallet.walletName : ""}
                          </p>
                          <div className="flex gap-x-5 flex-wrap gap-y-1.5">
                            <p className="text-xs">
                              {wallet
                                ? minifyEthereumAddress(wallet.address)
                                : ""}
                            </p>
                          </div>
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
        </div>
      </div>

      <div className="flex flex-col xl:mt-6 md:mt-10 mt-8 xl:space-y-4 space-y-2">
        {Object.keys(selectedWallet).length !== 0 && (
          <div className="flex flex-col space-y-1">
            <p className="text-sm">Network</p>
            <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
              <div className="flex flex-row items-center gap-2 w-full justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Image
                    // className="w-6 h-6"
                    alt=""
                    src={
                      selectedWallet?.network === "goerli"
                        ? Ethereum
                        : selectedWallet?.network === "ethereum"
                        ? Ethereum
                        : selectedWallet?.network === "polygon"
                        ? Polygon
                        : selectedWallet?.network === "bnb"
                        ? BNB
                        : Ethereum
                    }
                    width={20}
                    height={20}
                  />

                  <p className="opacity-50">
                    {" "}
                    {selectedWallet?.network.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-2 pt-2">
          <div className="flex flex-col space-y-1 w-full">
            <p className="text-sm">New Guardian</p>
            <input
              type={"text"}
              onChange={(e) => {
                setGuardian(e.target.value);
              }}
              placeholder="0x0000000000000000000000000000000000000000"
              className="placeholder:text-[#A09FAA] text-sm xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid w-full"
            />
          </div>
        </div>

        <div className="flex flex-row justify-end gap-8 pt-4">
          {" "}
          <CustomButton3
            isLoading={aGuardianLoader}
            title="Add Guardian"
            titleColor="black"
            buttonColor="[#D0F500]"
            onClick={handleAddGuardian}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialRecovery;
