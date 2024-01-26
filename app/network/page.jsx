"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Language from "../../assets/security/language.png";
import Currency from "../../assets/security/dollor2.png";
import Plus from "../../assets/security/plus.png";
import CustomButton from "@/components/CustomButton";
import Bitcoin from "../../assets/network/bitcoin.png";
import Eth from "../../assets/network/eth.png";
import BSC from "../../assets/network/bsc.png";
import Polygon from "../../assets/network/polygon.png";
import Avalanche from "../../assets/network/avalanche.png";
import Optimism from "../../assets/network/optimism.png";
import { useMediaQuery } from "react-responsive";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";
import { WalletContext } from "@/providers/WalletProvider";
import { IoArrowBackCircle } from "react-icons/io5";

const NetworkPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);

  const { showAccount, setShowAccount } = useContext(WalletContext);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const networks = [
    {
      name: "Bitcoin",
      icon: Bitcoin,
      route: "/networkPage",
      info: "Bitcoin Mainnet",
      shortname: "BTC",
    },
    {
      name: "Ethereum",
      icon: Eth,
      route: "/networkPage",
      info: "Ethereum Mainnet",
      shortname: "ETH",
    },
    {
      name: "BSC",
      icon: BSC,
      route: "/networkPage",
      info: "BNB Smart Chain Mainnet",
      shortname: "BSC",
    },
    {
      name: "Polygon",
      icon: Polygon,
      route: "/networkPage",
      info: "Polygon Mainnet",
      shortname: "Polygon",

      test: true,
    },
    {
      name: "Avalanche C",
      icon: Avalanche,
      route: "/networkPage",
      info: "Avalanche COChain",
      shortname: "Avalanche",
    },
    {
      name: "Optimism",
      icon: Optimism,
      route: "/networkPage",
      info: "OP Mainnet",
      shortname: "Optimism",
    },
  ];
  const renderNetworkLink = (network) => (
    <Link
      href={`${network.route}?network=${encodeURIComponent(
        JSON.stringify(network)
      )}`}
      key={network.name}
    >
      {console.log("TCL: NetworkPage -> network", network)}
      <div className="md:flex items-center justify-between hover:-translate-y-0.5 hover:font-semibold cursor-pointer">
        <div className="flex flex-row items-center gap-2 mb-2 md:mb-0">
          <Image alt="" src={network.icon} />
          <p>{network.name}</p>
          {network.test && (
            <div className="border border-solid px-4 py-1 text-[10px] border-black rounded-3xl  bg-[#D0F500]">
              <p>TEST</p>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between md:justify-start items-center gap-2">
          <p className="text-xs text-[#A09FAA]">{network.info}</p>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </Link>
  );

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
      <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
        <AccountHeader
          isMobile={isMobile}
          navbarTrigger={navbarTrigger}
          setShowModal={setShowModal}
          user={user}
        />
        <div
          className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 hidden lg:block ${
            showAccount ? "!block" : ""
          }`}
        >
          <div
            className={`${
              showAccount ? "lg:hidden block" : "lg:block hidden"
            } flex flex-col space-y-3`}
          ></div>

          <div className="flex flex-row justify-between items-center">
            {/* <p className="text-xl font-semibold">Network Settings </p> */}
            <div className="flex flex-row items-center">
              <IoArrowBackCircle
                className="h-8 w-8 lg:hidden"
                onClick={() => setShowAccount(false)}
              />
              <p className="text-xl font-semibold ml-2">Network Settings </p>
            </div>

            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center  xl:gap-6 md:gap-4 gap-4">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Language} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">ENG</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Currency} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">USD</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex w-64 mt-10">
              <CustomButton name="Add Network" img={Plus} bgColor="black" />
            </div>
          </div>

          <div className="flex flex-col xl:space-y-4 space-y-2 mt-10">
            {networks.map((network) => (
              <React.Fragment key={network.name}>
                {renderNetworkLink(network)}
                <hr className="text-[#A09FAA] py-2 ml-12" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
