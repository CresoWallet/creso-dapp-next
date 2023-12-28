"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Language from "../assets/Dashboard/language.png";
import Dollar from "../assets/Dashboard/dollor2.png";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Disconnect from "../assets/network/disconnect.png";
import { useUser } from "@/providers/UserProvider";
import { logOut } from "@/clientApi/auth";
import { useRouter } from "next/navigation";
import Creso2 from "../assets/Dashboard/creso2.png";
// import UserDetails from "./UserDetails";
// import { AUTH_TOKEN } from "@/constants";
// import User from "../assets/Dashboard/User.png";

const Header = () => {
  const router = useRouter();
  const { user, isAuthenticated, status } = useUser();
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef();

  const handleButton = () => {
    setOpenPopup(true);
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
    <div className="flex flex-row justify-between items-center xl:mx-10 md:mx-2 mb-10 lg:mb-0">
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

      <div  onClick={handleButton} className="cursor-pointer mx-6
       ">
        <div className="absolute top-2 md:-top-7 lg:top-3 sm:right-6 place-items-end bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center md:my-10  lg:mr-7 md:mr-3 mr-10 ">
          <p className=" font-semibold text-xs ">
            {user ? getInitials(user.username) : ""}  
          </p>
        </div>  
      </div>

      {openPopup && (
        <div
          className=" fixed top-0 right-0 w-full h-full flex xl:items-start items-center md:items-start z-10 xl:justify-end md:justify-end justify-center bg-gray-800 bg-opacity-75 "
          ref={popupRef}
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-3xl px-12 py-12 xl:mr-10 mr-0 md:mr-5 md:mt-32 xl:mt-32 mt-0 ">
            <div className="flex flex-col space-y-1 justify-center items-center pb-8">
              {/* <Image alt="" src={User} /> */}
              <div className=" bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center    ">
                <p className=" font-semibold text-xs">
                  {user ? getInitials(user.username) : ""} 
                </p>
              </div>
              <p className="font-bold text-lg">{user?.username}</p>
              <p className="text-xs text-[#A09FAA]">{user?.email}</p>
              <p className="text-xs text-[#A09FAA]"></p>
              Last Backup: 
              <p className="text-xm text-black">28 OCT 2023</p>{" "}
            </div>
            <hr />
            <Link href="/account">
              <div className="flex flex-row items-center justify-between cursor-pointer hover:scale-105 py-4">
                <div className="flex flex-row gap-2 items-center">
                  <AiOutlineUser />
                  <p className="hover:font-bold">Account</p>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </Link>
            <hr />
            <div
              onClick={handleDisconnect}
              className="flex flex-row gap-2 items-center py-4 disconnect"
            >
              <Image alt="" src={Disconnect} />
              <p className="text-[#FF4085]">Disconnect </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
