"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Language from "../assets/Dashboard/language.png";
import Dollar from "../assets/Dashboard/dollor2.png";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Disconnect from "../assets/network/disconnect.png";
import { useUser } from "@/providers/UserProvider";
import { logOut } from "@/clientApi/auth";
import { useRouter } from "next/navigation";
import Creso2 from "../assets/Dashboard/creso2.svg";
import Wallet from "./Wallet";
import Twitter from "../assets/Dashboard/twitter.png";
import Telegram from "../assets/Dashboard/telegram.png";
import Etherscan from "../assets/Dashboard/etherscan.png";
import Github from "../assets/Dashboard/github.png";
import Discord from "../assets/Dashboard/discord.png";

// import UserDetails from "./UserDetails";
// import { AUTH_TOKEN } from "@/constants";
// import User from "../assets/Dashboard/User.png";

const Header = () => {
  const router = useRouter();

  const { user, isAuthenticated, status } = useUser();
  const [openPopup, setOpenPopup] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const popupRef = useRef();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleButton = () => {
    setOpenPopup(true);
  };

  const handleopenwallet = () => {
    setOpenPopup(false);
    setOpenWallet(true);
  };
  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenPopup(false);
    }
  };

  const handleDisconnect = async () => {
    // localStorage.removeItem(AUTH_TOKEN);
    // window.location.reload();

    try {
      const res = await logOut();
      if (res) {
        window.location.href = "/";
      }
    } catch (err) {
      // console.log(err);
    } finally {
    }
  };

  function getInitials(username) {
    return username.substring(0, 2).toUpperCase();
  }

  return (
    <div className="flex flex-row justify-between items-center xl:mx-10 md:mx-2 mb-10 lg:mb-0 mt-4">
      <div className="flex flex-row items-center gap-4">
        <Image alt="" src={Language} className="h-7 w-7" />
        <div className="flex flex-row gap-1 items-center cursor-pointer group">
          <p className="uppercase text-xs font-semibold group-hover:font-bold">
            ENG
          </p>
          <AiOutlineDown className="w-3 h-3" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 cursor-pointer group">
        <Image alt="" src={Dollar} className="h-7 w-7" />
        <div className="flex flex-row gap-1 items-center">
          <p className="uppercase text-xs font-semibold group-hover:font-bold">
            USD
          </p>
          <AiOutlineDown className="w-3 h-3" />
        </div>
      </div>
      {/* Creso2 image  /> */}
      <div className=" flex absolute left-5 top-3 lg:hidden  place-items-start ">
        <Image alt="" src={Creso2} className="h-10 w-10" />
        <p className="m-2 text-base lg:block ">creso</p>
      </div>

      <div className="cursor-pointer mx-6" onClick={handleButton}>
        <div className="absolute top-2 md:-top-7 lg:top-3 sm:right-6 place-items-end bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center md:my-10  lg:mr-8 lg:my-14 md:mr-3 mr-10 ">
          <p className=" font-semibold text-xs ">
            {user ? getInitials(user.username) : ""}
          </p>
        </div>
      </div>

      {openPopup && (
        <div
          className="fixed top-0 right-0 w-full h-full flex xl:items-start items-center md:items-start z-10 xl:justify-end md:justify-end justify-center bg-gray-800 bg-opacity-75"
          ref={popupRef}
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-3xl px-12 py-12 xl:mr-10 mr-0 md:mr-5 md:mt-32 xl:mt-32 mt-0  w-80">
            <div className="flex flex-col space-y-1 justify-center items-center pb-8">
              {/* <Image alt="" src={User} /> */}
              <div className=" bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <p className=" font-semibold text-xs">
                  {user ? getInitials(user.username) : ""}
                </p>
              </div>
              <p className="font-bold text-lg">{user?.username}</p>
              <p className="text-xs text-[#A09FAA]">{user?.email}</p>
              <p className="text-xs text-[#A09FAA]"></p>
              Last Backup:
              <p className="text-xm text-black">28 OCT 2023 </p>{" "}
            </div>
            <hr />
            <Link href="/account">
              <div className="flex flex-row items-center -between cursor-pointer hover:scale-105 py-4 hover:font-bold">
                <div className="flex flex-row gap-2 pl-2 items-center">
                  <AiOutlineUser />
                  <p className="hover:font-bold">Account </p>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </Link>

            <hr />

            <div
              className="flex flex-row items-center -between cursor-pointer hover:scale-105 py-4 hover:font-bold"
              onClick={handleopenwallet}
            >
              <div className="flex flex-row gap-2 pl-2 items-center">
                <IoWalletOutline />

                <p className="hover:font-bold">Wallet </p>
              </div>
              <MdKeyboardArrowRight />
            </div>

            <hr />
            <div
              onClick={handleDisconnect}
              className="flex flex-row gap-2 pl-2 items-center py-4 disconnect"
            >
              <Image alt="" src={Disconnect} />
              <p className="text-[#FF4085] hover:font-bold">Disconnect </p>
            </div>

            {/* Add social media icons */}
            {isSmallScreen && (
              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="https://twitter.com/cresowallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transform hover:-translate-y-1"
                >
                  <Image
                    alt="Twitter"
                    src={Twitter}
                    className="  w-7 h-7  overflow-hidden"
                  />
                </a>
                <a
                  href="https://t.me/cresowallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transform hover:-translate-y-1"
                >
                  <Image
                    alt="Telegram"
                    src={Telegram}
                    className=" flex w-7 h-7"
                  />
                </a>
                <a
                  href="https://etherscan.io/token/0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transform hover:-translate-y-1"
                >
                  <Image alt="Etherscan" src={Etherscan} className="w-7 h-7" />
                </a>
                <a
                  href="https://discord.com/invite/creso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transform hover:-translate-y-1"
                >
                  <Image alt="Discord" src={Discord} className="w-7 h-7" />
                </a>
                <a
                  href="https://github.com/CresoWallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transform hover:-translate-y-1"
                >
                  <Image alt="Github" src={Github} className="w-7 h-7" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {openWallet && <Wallet setOpenWallet={setOpenWallet} />}
    </div>
  );
};

export default Header;
