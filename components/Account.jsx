"use client";

import React, { useState } from "react";
import Link from "next/link";
import UserDetails from "./UserDetails";
import CustomButton3 from "./CustomButton3";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoKey } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { BiWifi2 } from "react-icons/bi";
import { GiAerialSignal } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";

const Account = ({ user, setShowModal }) => {
  return (
    <div className="flex flex-col space-y-4">
      <UserDetails />
      {user && !user?.isEmailVerified && (
        <CustomButton3
          title="Backup"
          titleColor="[#FF4085]"
          buttonColor="[#FFC8DC]"
          onClick={() => setShowModal(true)}
        />
      )}

      <div className="flex flex-col xl:space-y-10 space-y-6 xl:pt-10 md:pt-6 pt-4">
        <Link href="/account">
          <div className="flex flex-row justify-between items-center  cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <FiUser />
              <p className="text-sm">Account</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        </Link>
        <Link href="/recovery">
          <div className="flex flex-row justify-between items-center  cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <GoKey />
              <p className="text-sm">Recovery Key</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        </Link>
        <Link href="/security">
          <div className="flex flex-row justify-between items-center  cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <RiComputerLine />
              <p className="text-sm">Security</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        </Link>

        <Link href="/session">
          <div className="flex flex-row justify-between items-center  cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <BiWifi2 />
              <p className="text-sm">V1 Sessions</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        </Link>

        <div className="flex flex-row justify-between items-center  cursor-pointer">
          <div className="flex flex-row gap-2 items-center">
            <BiWifi2 />
            <p className="text-sm">V2 Sessions</p>
          </div>
          <MdKeyboardArrowRight />
        </div>
        <Link href="/network">
          <div className="flex flex-row justify-between items-center  cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <GiAerialSignal />
              <p className="text-sm">Network Settings</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        </Link>

        <Link href="/advance">
          <div className="flex flex-row justify-between items-center  cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <LuSettings2 />
              <p className="text-sm">Advanced</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Account;
