"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import Account from "@/components/Account";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import { useRouter } from "next/navigation";
import { AUTH_TOKEN } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import Modal from "@/components/modal/Modal";
import Creso from "../../assets/Dashboard/creso2.png";
import { getRecoveryStatus } from "@/clientApi/wallet";
import BackUp from "./backUp";
import SocialRecovery from "./socialRecovery";
import StartRecovery from "./startRecovery";
import WalletStatus from "./walletStatus";

const RecoveryPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  const fetchRecoveryStatus = async (data) => {
    console.log("data : ", data);
    try {
      const payload = {
        walletAddress: data.wallet,
        network: "goerli",
      };
      const res = await getRecoveryStatus(payload);
      console.log("res : ", res);
    } catch (error) {}
  };

  // const handleConfirmGuardian = async () => {
  //   if (!selectedWallet || guardian === "") {
  //     enqueueSnackbar(`Missed Fields`, {
  //       variant: "error",
  //     });
  //   } else {
  //     const payload = {
  //       walletAddress: selectedWallet.address,
  //       guardian: guardian,
  //       network: selectedNetwork
  //         ? selectedNetwork?.value
  //         : networkFirstValue?.value,
  //     };
  //     setCGuardianLoader(true);
  //     try {
  //       const res = await confirmRecovery(payload);
  //       if (res) {
  //         enqueueSnackbar(`Recovery confirmed`, {
  //           variant: "success",
  //         });
  //       }
  //     } catch (error) {
  //       console.log("error : ", error);
  //       if (error?.response?.data?.message === "no wallet") {
  //         enqueueSnackbar(`${error?.response?.data?.message}`, {
  //           variant: "error",
  //         });
  //       } else {
  //         enqueueSnackbar(`Couldn't confirm recovery`, {
  //           variant: "error",
  //         });
  //       }
  //     }

  //     setCGuardianLoader(false);
  //   }
  // };

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
            <BackUp />
            <SocialRecovery />
            <StartRecovery />
            <WalletStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPage;
