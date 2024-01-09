"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoWalletOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Disconnect from "../assets/network/disconnect.png";
import { useUser } from "@/providers/UserProvider";
import { logOut } from "@/clientApi/auth";
import { useRouter } from "next/navigation";
import Wallet from "./Wallet";
import Twitter from "../assets/Dashboard/twitter.png";
import Telegram from "../assets/Dashboard/telegram.png";
import Etherscan from "../assets/Dashboard/etherscan.png";
import Github from "../assets/Dashboard/github.png";
import Discord from "../assets/Dashboard/discord.png";

const UserDetails = () => {
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
      console.log(err);
    } finally {
    }
  };

  function getInitials(username) {
    return username.substring(0, 2).toUpperCase();
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        className=" top-1 right-1 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        onClick={handleButton}
      >
        <p className=" font-semibold text-xs  " onClick={handleButton}>
          {user ? getInitials(user.username) : ""}
        </p>
      </div>

      {openPopup && (
        <div
          className="fixed top-0 right-0 w-full h-full flex xl:items-start items-center  z-10 xl:justify-center md:justify-center justify-center bg-gray-800 bg-opacity-75"
          ref={popupRef}
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-3xl px-12 py-12 xl:mr-10 mr-0 md:mr-5 md:mt-32 xl:mt-32 mt-0  w-80">
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

      {/* <Image alt="" src={User} /> */}
      <div className="flex flex-col space-y-1">
        <p className="font-bold text-xl">{user?.username}</p>
        <p className="text-sm text-[#A09FAA]">{user?.email}</p>
        <p className="text-xs text-[#A09FAA] mr-xside">
          Last Backup test:{" "}
          <span className="text-sm text-black">28 OCT 2023</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
