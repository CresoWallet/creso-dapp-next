"use client";

import React, { useEffect } from "react";
import Backup from "@/components/Backup";
import Mainnet from "@/components/Mainnet";
import AddCoinButton from "@/components/AddCoinButton";
import CoinCard from "@/components/cards/Coin";
import History from "@/components/dashboard/History";
import LeftHeader from "@/components/LeftHeader";
import { useUser } from "@/providers/UserProvider";

const LeftSide = (props) => {
  const {
    showWallet,
    navbarTrigger,
    // setNavbarTrigger,
    // secureWalletAddress,
    // eoaWalletAddress,
    handleCreateWallet,
    handleCoinWallet,
    handleShowModel,
    handleShowWallet,
    // user,
    // status,
  } = props;
  const { user, status } = useUser();

  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  if (status !== "authenticated") {
    return <div>{/* {<Loader/>} */}</div>;
  }

  return (
    <div id="modal-root">
      {/* {navbarTrigger && (
                <div
                    className="navbackdrop"
                    onClick={() => setNavbarTrigger(!navbarTrigger)}
                ></div>
            )} */}

      <div className="divide-x">
        {/* left side */}
        <div className="grid h-full responsivemb-cols">
          <div className="col-span-6 xl:space-y-6 md:space-y-6 space-y-2 xl:py-8 md:py-8">
            <LeftHeader />
            {!user?.isEmailVerified && (
              <Backup onClick={() => handleShowModel()} />
            )}
            <div className="flex gap-5 !col-span-6">
              {/* <AddCoinButton /> */}
              <CoinCard handleCoinWallet={handleCoinWallet} />
            </div>
            <Mainnet
              handleOpenWallet={handleShowWallet}
              handleCreateWallet={handleCreateWallet}
              // secureWalletAddress={secureWalletAddress}
              // eoaWalletAddress={eoaWalletAddress}
              showWallet={showWallet}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
