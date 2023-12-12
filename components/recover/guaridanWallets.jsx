import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  getGuardedWallets,
  getGuardians,
  removeGuardian,
} from "@/clientApi/wallet";
import {
  getRecoveryConfirmation,
  getRecoveryStatus,
} from "@/services/ethers/wallet";
import AccordionItem from "./userWalletAccordion";
import { WalletContext } from "@/providers/WalletProvider";
import { minifyEthereumAddress } from "@/utils";
import Creso from "../../assets/Dashboard/creso2.png";
import { enqueueSnackbar } from "notistack";
import GuardianWalletAccord from "./guardianWalletAccord";

const GuardianWallets = () => {
  const popupRef = useRef();
  const [open, setOpen] = useState(false);
  const [walletGuardians, setWalletGuardians] = useState([]);
  const [recoveryDetails, setRecoveryDetails] = useState({});
  const [recoveryConfirm, setRecoveryConfirm] = useState([]);
  const [openWalletListRcvry, setOpenWalletListRcvry] = useState(false);
  const [guardedWallets, setGuardedWallets] = useState([]);
  const [selectedRecovery, setSelectedRecovery] = useState({});
  const [network, setNetwork] = useState("");
  const [deleteLoad, setDeleteLoad] = useState(false);

  const toggle = () => {
    if (open) {
      return setOpen(false);
    }

    setOpen(true);
  };

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWalletListRcvry(false);
    }
  };

  const fetchUserWalletRecovery = async (data) => {
    try {
      const promise1 = getGuardians({ walletAddress: data?.wallet });
      const promise2 = getRecoveryStatus(
        data?.wallet,
        data?.smartWallet?.network
      );

      Promise.all([promise1, promise2]).then(function (values) {
        setWalletGuardians(values[0]?.data);
        setRecoveryDetails(values[1]);
      });
    } catch {
      throw Error("Promise failed");
    }
  };

  const handleSelectRecoverWallet = (wallet) => {
    setSelectedRecovery(wallet);
    setNetwork(wallet?.smartWallet?.network);

    fetchUserWalletRecovery(wallet);
    setOpenWalletListRcvry(false);
  };

  useEffect(() => {
    const fetchRecoveryConfirm = async () => {
      console.log("wallet guardians : ", walletGuardians);
      try {
        const res = await getRecoveryConfirmation(
          selectedRecovery?.wallet,
          selectedRecovery?.smartWallet?.network,
          walletGuardians
        );
        if (res) {
          setRecoveryConfirm(res);
        }
      } catch (error) {
        enqueueSnackbar(`Something went wrong`, {
          variant: "error",
        });
      }
    };
    if (
      Object.keys(selectedRecovery).length !== 0 &&
      walletGuardians.length !== 0
    ) {
      fetchRecoveryConfirm();
    }
  }, [walletGuardians]);

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
    <div>
      <div className="flex flex-col space-y-1 mt-2">
        <p className="text-sm">Guardian Wallet Address</p>
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

      {Object.keys(selectedRecovery).length !== 0 && (
        <div className="max-w-[800px] pt-5 pb-20">
          <GuardianWalletAccord
            open={open}
            recovery={recoveryDetails}
            wallet={selectedRecovery}
            guardians={walletGuardians}
            recoveryConfirm={recoveryConfirm}
            toggle={() => toggle()}
            isLoading={deleteLoad}
          />
        </div>
      )}
    </div>
  );
};

export default GuardianWallets;
