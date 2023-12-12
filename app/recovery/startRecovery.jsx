import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
import CustomButton3 from "@/components/CustomButton3";
import Creso from "../../assets/Dashboard/creso2.png";
import Info from "../../assets/informations.png";
import { minifyEthereumAddress } from "@/utils";
import { enqueueSnackbar } from "notistack";
import {
  addGuardian,
  confirmRecovery,
  getGuardedWallets,
  getGuardians,
  startRecovery,
} from "@/clientApi/wallet";
import { WalletContext } from "@/providers/WalletProvider";
import Ethereum from "../../assets/Dashboard/etherum.png";
import BNB from "../../assets/Dashboard/bnb2.png";
import Polygon from "../../assets/Dashboard/polygon.png";
import {
  getRecoveryConfirmation,
  getRecoveryStatus,
} from "@/services/ethers/wallet";

function StartRecovery() {
  const popupRef = useRef();

  const [openWalletListRcvry, setOpenWalletListRcvry] = useState(false);
  const [selectedRecovery, setSelectedRecovery] = useState({});
  const [guardedWallets, setGuardedWallets] = useState([]);
  const [guardianAddress, setGuardianAddress] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [recoveryLoader, setRecoveryLoader] = useState(false);
  const [network, setNetwork] = useState("");
  const [recoveryDetails, setRecoveryDetails] = useState({});

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWalletListRcvry(false);
    }
  };

  const fetchRecoveryStatus = async (wallet) => {
    try {
      const res = await getRecoveryStatus(
        wallet.wallet,
        wallet?.smartWallet?.network,
        wallet?.guardianAddress
      );
      if (res) {
        setRecoveryDetails(res);
      }
    } catch (error) {}
  };

  const handleSelectRecoverWallet = (wallet) => {
    setGuardianAddress(wallet?.guardianAddress);
    fetchRecoveryStatus(wallet);
    setSelectedRecovery(wallet);
    setNetwork(wallet?.smartWallet?.network);

    setOpenWalletListRcvry(false);
  };

  const handleStartRecovery = async () => {
    if (Object.keys(selectedRecovery).length === 0 || newOwner === "") {
      enqueueSnackbar(`Missed fields`, {
        variant: "error",
      });
    } else {
      const payload = {
        walletAddress: selectedRecovery?.wallet,
        guardian: guardianAddress,
        newOwner: newOwner,
        network: network,
      };
      setRecoveryLoader(true);
      try {
        const res = await startRecovery(payload);
        if (res) {
          await fetchRecoveryStatus(selectedRecovery);
          setNewOwner("");
          enqueueSnackbar(`Recovery started`, {
            variant: "success",
          });
        }
      } catch (error) {
        enqueueSnackbar(`Couldn't recover`, {
          variant: "error",
        });
      }
      setRecoveryLoader(false);
    }
  };

  const handleConfirmRecovery = async () => {
    const payload = {
      guardian: guardianAddress,
      walletAddress: selectedRecovery?.wallet,
      network: network,
    };
    console.log("payload : ", payload);
    setRecoveryLoader(true);
    try {
      const res = await confirmRecovery(payload);
      if (res) {
        await fetchRecoveryStatus(selectedRecovery);
        setNewOwner("");
        enqueueSnackbar(`Confirmed recover`, {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar(`Couldn't confirm`, {
        variant: "error",
      });
    }
    setRecoveryLoader(false);
  };

  useEffect(() => {
    const fetchGuardedWallets = async () => {
      try {
        const res = await getGuardedWallets();
        if (res) {
          setGuardedWallets(res?.data);
        }
      } catch (error) {}
    };

    fetchGuardedWallets();
  }, []);

  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between items-center xl:mt-8 md:mt-10 mt-8">
        <p className="text-sm font-semibold">Start Recovery</p>
      </div>

      <div className="flex flex-col space-y-1 mt-10">
        <p className="text-sm">Wallet Address</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <button
            disabled={guardedWallets.length === 0}
            className="flex flex-row items-center gap-2 w-full justify-between"
            onClick={() => setOpenWalletListRcvry(true)}
          >
            <div className="flex items-center gap-2">
              <>
                {selectedRecovery ? (
                  <Image alt="" src={Creso} />
                ) : (
                  <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                    Select Wallet
                  </p>
                )}
              </>
              {selectedRecovery &&
                (minifyEthereumAddress(
                  selectedRecovery?.smartWallet?.address
                ) ? (
                  <p className="font-semibold text-sm md:text-xs">
                    {minifyEthereumAddress(
                      selectedRecovery?.smartWallet?.address
                    )}
                  </p>
                ) : (
                  <p className="opacity-50 text-sm">wallet address</p>
                ))}
            </div>
          </button>
          {openWalletListRcvry && (
            <>
              <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col  gap-4 min-w-[350px] rounded-[20px] z-[1]">
                {guardedWallets.map((wallet, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer gap-4"
                    onClick={() => handleSelectRecoverWallet(wallet)}
                  >
                    <div className="flex flex-row items-center justify-between  min-h-[60px]">
                      <div className="flex flex-row gap-4">
                        <div>
                          <Image alt="" src={Creso} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <p className="text-base md:text-sm font-semibold">
                            {wallet ? wallet.smartWallet?.walletName : ""}
                          </p>
                          <div className="flex gap-x-5 flex-wrap gap-y-1.5">
                            <p className="text-xs">
                              {wallet
                                ? minifyEthereumAddress(
                                    wallet.smartWallet?.address
                                  )
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
        {guardianAddress && (
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1 w-full">
              <p className="text-sm">Guardian Address</p>
              <input
                disabled={true}
                type={"text"}
                placeholder={guardianAddress}
                className="bg-white placeholder:text-[#A09FAA] text-sm xl:px-4 xl:py-3 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
              />
            </div>
          </div>
        )}

        {network && (
          <div className="flex flex-col space-y-1 mt-5">
            <div className="flex flex-col space-y-1">
              <p className="text-sm">Network</p>
              <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
                <div className="flex flex-row items-center gap-2 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Image
                      // className="w-6 h-6"
                      alt=""
                      src={
                        network === "goerli"
                          ? Ethereum
                          : network === "ethereum"
                          ? Ethereum
                          : network === "polygon"
                          ? Polygon
                          : network === "bnb"
                          ? BNB
                          : Ethereum
                      }
                      width={20}
                      height={20}
                    />

                    <p className="opacity-50"> {network.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!recoveryDetails?.isRecoveryActive && (
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1 w-full">
              <p className="text-sm">New Owner</p>
              <input
                type={"text"}
                onChange={(e) => {
                  setNewOwner(e.target.value);
                }}
                placeholder="0x0000000000000000000000000000000000000000"
                className="placeholder:text-[#A09FAA] text-sm xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
              />
            </div>
          </div>
        )}

        {recoveryDetails?.isRecoveryActive &&
          recoveryDetails?.recoveryConfirmation && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-orange-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">
                    You already confirmed this recovery
                  </p>
                  <div className="flex item-center">
                    <p className="text-sm">{`The recovery process will terminate at `}</p>
                    <div className="text-sm ml-2 mr-1">
                      <Countdown
                        date={
                          Number(recoveryDetails?.recoveryInitiatedTime) *
                            1000 +
                          86400000
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {recoveryDetails?.isRecoveryActive &&
          !recoveryDetails?.recoveryConfirmation && (
            <div
              className="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">This wallet is being recovered</p>
                  <div className="flex item-center">
                    <p className="text-sm">{`The recovery process will terminate at `}</p>
                    <div className="text-sm ml-2 mr-1">
                      <Countdown
                        date={
                          Number(recoveryDetails?.recoveryInitiatedTime) *
                            1000 +
                          86400000
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        <div className="flex justify-end gap-5 pt-5">
          {" "}
          {!recoveryDetails?.isRecoveryActive && (
            <CustomButton3
              isLoading={recoveryLoader}
              title="Start Recovery"
              titleColor="black"
              buttonColor="[#D0F500]"
              onClick={handleStartRecovery}
            />
          )}
          {recoveryDetails?.isRecoveryActive &&
            !recoveryDetails?.recoveryConfirmation && (
              <CustomButton3
                isLoading={recoveryLoader}
                title="Confirm Recovery"
                titleColor="black"
                buttonColor="[#D0F500]"
                onClick={handleConfirmRecovery}
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default StartRecovery;
