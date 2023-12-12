import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getGuardians, removeGuardian } from "@/clientApi/wallet";
import {
  getRecoveryConfirmation,
  getRecoveryStatus,
} from "@/services/ethers/wallet";
import AccordionItem from "./userWalletAccordion";
import { WalletContext } from "@/providers/WalletProvider";
import { minifyEthereumAddress } from "@/utils";
import Creso from "../../assets/Dashboard/creso2.png";
import { enqueueSnackbar } from "notistack";

const UserWalletRecovery = () => {
  const popupRef = useRef();
  const { smartWallets } = useContext(WalletContext);
  const [open, setOpen] = useState(false);
  const [openUserWallet, setOpenUserWallet] = useState(false);
  const [selectedUserWallet, setSelectedUserWallet] = useState({});
  const [userWalletGuardians, setUserWalletGuardians] = useState([]);
  const [recoveryDetails, setRecoveryDetails] = useState({});
  const [recoveryConfirm, setRecoveryConfirm] = useState([]);
  const [deleteLoad, setDeleteLoad] = useState();

  const toggle = () => {
    if (open) {
      return setOpen(false);
    }

    setOpen(true);
  };

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenUserWallet(false);
    }
  };

  const fetchUserWalletRecovery = async (data) => {
    try {
      const promise1 = getGuardians({ walletAddress: data?.address });
      const promise2 = getRecoveryStatus(data?.address, data?.network);

      Promise.all([promise1, promise2]).then(function (values) {
        setUserWalletGuardians(values[0]?.data);
        setRecoveryDetails(values[1]);
      });
    } catch {
      throw Error("Promise failed");
    }
  };

  const handleSelectUserWallet = (data) => {
    setUserWalletGuardians([]);
    fetchUserWalletRecovery(data);
    setSelectedUserWallet(data);
    setOpenUserWallet(false);
  };

  const handleDeleteGuardians = async (data) => {
    const payload = {
      walletAddress: data.walletAddress,
      guardian: data.guardianAddress,
      network: data.network,
    };

    try {
      setDeleteLoad(data);
      const res = await removeGuardian(payload);
      if (res) {
        await fetchUserWalletRecovery(selectedUserWallet);
        setOpen(false);
        enqueueSnackbar(`Guardian deleted`, {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar(`Couldn't delete the guardian`, {
        variant: "error",
      });
    } finally {
      setDeleteLoad();
    }
  };

  const handleDeleteRecovery = async (data) => {
    const payload = {
      walletAddress: data.walletAddress,
      guardian: data.guardianAddress,
      network: data.network,
    };

    try {
      setDeleteLoad(data);
      const res = await removeGuardian(payload);
      if (res) {
        await fetchUserWalletRecovery(selectedUserWallet);
        setOpen(false);
        enqueueSnackbar(`Guardian deleted`, {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar(`Couldn't delete the guardian`, {
        variant: "error",
      });
    } finally {
      setDeleteLoad();
    }
  };

  useEffect(() => {
    const fetchRecoveryConfirm = async () => {
      try {
        const res = await getRecoveryConfirmation(
          selectedUserWallet?.address,
          selectedUserWallet?.network,
          userWalletGuardians
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
      Object.keys(selectedUserWallet).length !== 0 &&
      userWalletGuardians.length !== 0
    ) {
      fetchRecoveryConfirm();
    }
  }, [userWalletGuardians]);

  return (
    <div>
      <div className="flex flex-col space-y-1 mt-10">
        <p className="text-sm">My Smart Wallet Address</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <button
            disabled={smartWallets.length === 0}
            className="flex flex-row items-center gap-2 w-full justify-between"
            onClick={() => setOpenUserWallet(true)}
          >
            <div className="flex items-center gap-2">
              <>
                {selectedUserWallet ? (
                  <Image alt="" src={Creso} />
                ) : (
                  <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                    Select Wallet
                  </p>
                )}
              </>
              {selectedUserWallet &&
                (minifyEthereumAddress(selectedUserWallet.address) ? (
                  <p className="font-semibold text-sm md:text-xs">
                    {minifyEthereumAddress(selectedUserWallet.address)}
                  </p>
                ) : (
                  <p className="opacity-50 text-sm">wallet address</p>
                ))}
            </div>
          </button>
          {openUserWallet && (
            <>
              <div className="bg-white shadow-xl absolute px-4 py-3 top-[55px]  left-0 flex flex-col  gap-4 min-w-[250px] rounded-[20px] z-[1]">
                {smartWallets.map((wallet, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer gap-4"
                    onClick={() => {
                      handleSelectUserWallet(wallet);
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

      {Object.keys(selectedUserWallet).length !== 0 && (
        <div className="max-w-[800px] pt-5 pb-5">
          <AccordionItem
            open={open}
            recovery={recoveryDetails}
            wallet={selectedUserWallet}
            guardians={userWalletGuardians}
            recoveryConfirm={recoveryConfirm}
            toggle={() => toggle()}
            handleDelete={(data) => handleDeleteGuardians(data)}
            loadingItem={deleteLoad}
          />
        </div>
      )}
    </div>
  );
};

export default UserWalletRecovery;
