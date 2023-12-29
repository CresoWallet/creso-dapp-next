"use client";
// import Image from "next/image";
import Header from "@/components/Header";
import LeftHeader from "@/components/LeftHeader";
// import SideNav from "@/components/navbar/SideNav";
import React, { useState, useEffect, useContext } from "react";
// import { useMediaQuery } from "react-responsive";
import { CiSearch } from "react-icons/ci";
import Ham from "../../assets/Dashboard/ham.png";
import LeftSide from "./LeftSide";
import { useUser } from "@/providers/UserProvider";
import RightSide from "./RightSide";
import { useRouter } from "next/navigation";
import { WalletContext } from "@/providers/WalletProvider";
import SecureWallet from "@/components/SecureWallet";
// import TokenComponent from "@/components/Tokens/TokensComponent";
// import TokensComponent from "@/components/Tokens/TokensComponent";
import CoinWallet from "@/components/CoinWallet";
import CreateWallet from "@/components/CreateWallet";
// import SendETH from "@/components/SendETH";
// import { network } from "@/utils/data/coinlist";

const MainLayout = () => {
  const router = useRouter();
  const [showCreateWallet, setShowCreateWallet] = useState(false);
  const [showCoinWallet, setShowCoinWallet] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [usd, setUsd] = useState(0);
  // const [wallets, setWallets] = useState([]);
  const [walletType, setWalletType] = useState("");
  const [coinData, setCoinData] = useState([]);
  console.log("coinData", coinData);
  const { user, isAuthenticated, status } = useUser();
  const {
    secureWalletBalance,
    eoaWalletBalance,
    wallets,
    secureWalletAddress,
    eoaWalletAddress,
    fetchWallet,
    navbarTrigger,
    setNavbarTrigger,
    isMobile,
    send,
  } = useContext(WalletContext);

  useEffect(() => {
    if (status === "failed") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    fetchWallet();
  }, []);

  const handleCreateWallet = () => {
    setShowCreateWallet(!showCreateWallet);
    // close other models
    setShowCoinWallet(false);
    setShowWallet(false);
  };

  const handleClose = () => {
    setShowCreateWallet(false);
  };

  const handleCoinWallet = (data) => {
    setCoinData(data);
    setShowCoinWallet(true);
    // close other models
    setShowCreateWallet(false);
    setShowWallet(false);
  };

  const handleShowModel = () => {
    if (user?.registrationMethod !== "email" && !user?.isEmailVerified) {
      enqueueSnackbar(
        `Before taking a backup, make sure to verify your email.`,
        {
          variant: "warning",
        }
      );
    } else {
      setShowModal(true);
      // close other models
      setShowCoinWallet(false);
      setShowWallet(false);
      setShowCreateWallet(false);
    }
  };

  const handleCloseCoinWallet = () => {
    setShowCoinWallet(false);
  };

  const handleShowWallet = (data) => {
    setWalletType(data?.walletName);
    setShowWallet(true);
    // close other models
    setShowCoinWallet(false);
    setShowCreateWallet(false);
  };

  const handleCloseShowWallet = () => {
    setShowWallet(false);
  };

  // useEffect(() => {
  //   if (navbarTrigger) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [navbarTrigger]);

  // if (status !== "authenticated") {
  //   return <div>{/* {<Loader/>} */} Loading...</div>;
  // }
  const responsivCompo = showCoinWallet || showWallet || showCreateWallet;
  return (
    <>
      {/* ------------ Popup Main ---------- */}
      {isMobile && (
        <div className="lg:hidden block min-w-max">
          {showWallet && (
            <SecureWallet
              handleClose={handleCloseShowWallet}
              wallets={wallets}
              walletType={walletType}
              secureWalletBalance={secureWalletBalance}
              eoaWalletBalance={eoaWalletBalance}
            />
          )}
          <div className="">
            {showCreateWallet && <CreateWallet handleClose={handleClose} />}
          </div>
          <div className="">
            {showCoinWallet && (
              <CoinWallet
                handleClose={handleCloseCoinWallet}
                wallets={wallets}
                coinData={coinData}
              />
            )}
          </div>
        </div>
      )}
      <div className="grid lg:grid-cols-10 lg:divide-x">
        {/* <TokensComponent /> */}
        {/* ------------ Leftside Main ---------- */}
        {
          <div
            className={`${
              isMobile && responsivCompo
                ? "hidden"
                : "lg:col-span-6 pt-16 px-10"
            }`}
          >
            <div className="">
              <LeftHeader
                title={"Dashboard"}
                descriptionColor={""}
                icon1={<CiSearch />}
                mobileImg={Ham}
                navbarTrigger={navbarTrigger}
                setNavbarTrigger={setNavbarTrigger}
                isMobile={isMobile}
              />

              <LeftSide
                showWallet={showWallet}
                navbarTrigger={navbarTrigger}
                setNavbarTrigger={setNavbarTrigger}
                handleCreateWallet={handleCreateWallet}
                handleCoinWallet={handleCoinWallet}
                handleShowModel={handleShowModel}
                handleShowWallet={handleShowWallet}
              />
            </div>
          </div>
        }

        <hr className="lg:hidden mt-10 lg:mt-0" />

        {/* ------------ Rightside Main ---------- */}
        <div
          className={`${
            responsivCompo ? "px-0  border-l-2 " : " px-10  pt-14"
          } lg:col-span-4`}
        >
          <div className="hidden lg:block">
            <div className="hidden lg:flex">
              {showCreateWallet && <CreateWallet handleClose={handleClose} />}
            </div>
            <div className=" hidden lg:flex">
              {showCoinWallet && (
                <CoinWallet
                  handleClose={handleCloseCoinWallet}
                  wallets={wallets}
                  coinData={coinData}
                />
              )}
            </div>

            <div className="hidden lg:block lg:cols-span-4">
              {showWallet && (
                <SecureWallet
                  handleClose={handleCloseShowWallet}
                  wallets={wallets}
                  walletType={walletType}
                  secureWalletBalance={secureWalletBalance}
                  eoaWalletBalance={eoaWalletBalance}
                />
              )}
            </div>
          </div>
          {responsivCompo ? null : (
            <>
              <Header />
              <RightSide
                showCoinWallet={showCoinWallet}
                showModal={showModal}
                setShowModal={setShowModal}
                walletType={walletType}
                coinData={coinData}
                secureWalletBalance={secureWalletBalance}
                eoaWalletBalance={eoaWalletBalance}
                wallets={wallets}
                showCreateWallet={showCreateWallet}
                handleCloseShowWallet={handleCloseShowWallet}
                handleCloseCoinWallet={handleCloseCoinWallet}
                handleClose={handleClose}
                showWallet={showWallet}
                user={user}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
