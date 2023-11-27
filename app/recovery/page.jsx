"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import Account from "@/components/Account";
import { MdKeyboardArrowDown } from "react-icons/md";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import CustomButton from "@/components/CustomButton";
import Plus from "../../assets/security/plus.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Disconnect from "../../assets/network/disconnect.png";
import Info from "../../assets/informations.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import { useRouter } from "next/navigation";
import { AUTH_TOKEN } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import Modal from "@/components/modal/Modal";
import Creso from "../../assets/Dashboard/creso2.png";
import { minifyEthereumAddress } from "@/utils";
import { WalletContext } from "@/providers/WalletProvider";
import { addGuardian, backupWallet } from "@/clientApi/wallet";
import { enqueueSnackbar } from "notistack";
import FileSaver from "file-saver";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RecoveryPage = () => {
  const router = useRouter();
  const popupRef = useRef();
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  const {
    secureWalletBalance,
    eoaWalletBalance,
    wallets,
    secureWalletAddress,
    eoaWalletAddress,
    fetchWallet,
    smartWallets,
    eoaWallets,
  } = useContext(WalletContext);

  const [selectedSWallet, setSelectedSWallet] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [guardian, setGuardian] = useState("");
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  const handleBackupWallet = async () => {
    if (!secretKey) {
      enqueueSnackbar(`Please enter secret key`, {
        variant: "error",
      });
    } else {
      try {
        const res = await backupWallet({
          passkey: secretKey,
        });
        if (res) {
          // var blob = new Blob([btoa(JSON.stringify(res?.data))], {
          //   type: "text/plain;charset=utf-8",
          // }); //application/json
          const blob = new Blob([JSON.stringify(res.data)], {
            type: "application/json",
          });
          FileSaver.saveAs(blob, `${user?.email}_credential.creso.json`, {
            type: "application/json",
          });
          // setEncryptedKey(res?.data?.data);
          setStep((step % 7) + 1);
        } else {
          enqueueSnackbar(`Couldn't backup`, {
            variant: "error",
          });
        }
      } catch (error) {}
    }
  };

  const handleAddGuardian = async () => {
    if (guardian !== "") {
      const payload = {
        walletAddress: selectedSWallet
          ? selectedSWallet
          : smartWallets[0].address,
        guardian: guardian,
        network: "goerli",
      };

      setLoading(true);
      try {
        const res = await addGuardian(payload);
        if (res) {
          enqueueSnackbar(`Guardian added successful`, {
            variant: "success",
          });
        }
      } catch (error) {
        console.log("error : ", error);
        enqueueSnackbar(`Couldn't add guardian`, {
          variant: "error",
        });
      }
    }

    setLoading(false);
  };

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 px-2 xl:pt-2 md:pt-2 mb-2">
        <div className="col-span-1">
          <div
            className={`grid h-full ${
              isMobile ? "grid-cols-1" : "grid-cols-3"
            }`}
          >
            {isMobile && navbarTrigger && (
              <div className={`col-span-1 h-full responsivemb-nav `}>
                <SideNav />
              </div>
            )}

            {!isMobile && (
              <div className={`col-span-1 h-full`}>
                <SideNav />
              </div>
            )}

            {isMobile && (
              <div className="account-navs">
                <Image
                  alt=""
                  className="navico"
                  src={Ham}
                  onClick={() => setNavbarTrigger(!navbarTrigger)}
                />{" "}
              </div>
            )}

            <div
              className={`col-span-2 ${
                isMobile ? "mt-2" : "mt-16"
              } xl:mx-8 md:mx-4 mx-2`}
            >
              <Account user={user} setShowModal={setShowModal} />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-xl font-semibold">Recovery</p>
          </div>

          <div className="divide-y">
            <div>
              <div className="flex flex-row justify-between items-center xl:mt-8 md:mt-10 mt-8">
                <p className="text-sm font-semibold">Smart Recovery</p>
              </div>

              <div className="flex flex-col xl:mt-5 md:mt-7 mt-5 xl:space-y-4 space-y-2">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-1 w-full">
                    <p className="text-sm">Enter Backup key</p>
                    <input
                      onChange={(e) => {
                        setSecretKey(e.target.value);
                      }}
                      type={"text"}
                      placeholder="secret key"
                      className="placeholder:text-[#A09FAA] text-sm xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
                    />
                  </div>
                </div>

                <button
                  onClick={handleBackupWallet}
                  className="bg-[#D0F500] xl:py-2  hover:font-bold cursor-pointer xl:px-2 md:py-2 px-1 py-1 md:px-2 border border-solid rounded-full border-black text-sm items-center justify-center"
                >
                  BackUp
                </button>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex flex-row justify-between items-center xl:mt-8 md:mt-10 mt-8">
                <p className="text-sm font-semibold">Social Recovery</p>
              </div>

              <div className="flex flex-col xl:mt-5 md:mt-7 mt-5 xl:space-y-4 space-y-2">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm">Select a smart wallet</p>
                  <select
                    onChange={(e) => {
                      setSelectedSWallet(e.target.value);
                    }}
                    className="border border-gray-300 rounded-full text-[#A09FAA] h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none text-sm"
                  >
                    {smartWallets.map((item) => {
                      return (
                        <option
                          key={item.address}
                          value={item.address}
                        >{`${item.walletName} (${item.address})`}</option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="flex flex-col xl:mt-8 md:mt-10 mt-8 xl:space-y-4 space-y-2">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-1 w-full">
                    <p className="text-sm">Enter Guardian</p>
                    <input
                      type={"text"}
                      onChange={(e) => {
                        setGuardian(e.target.value);
                      }}
                      placeholder="guardian"
                      className="placeholder:text-[#A09FAA] text-sm xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAddGuardian}
                  className="bg-[#D0F500] xl:py-2  hover:font-bold cursor-pointer xl:px-2 md:py-2 px-1 py-1 md:px-2 border border-solid rounded-full border-black text-sm items-center justify-center"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
                  ) : (
                    "Add Guardian"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPage;
