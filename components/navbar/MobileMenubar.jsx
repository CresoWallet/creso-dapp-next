"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Wallet from "../../assets/Dashboard/Wallet.png";
import Discover from "../../assets/Dashboard/Discover.png";
import Swap from "../../assets/Dashboard/Swap.png";
import Profile from "../../assets/Profile.png";
import Link from "next/link";

const MobileMenubar = () => {
  return (
    <div className="bg-[#2100EC] rounded-full grid grid-cols-4 my-5 place-items-center mobileMenu">
      <Link href="/dashboard">
        <Image alt="" src={Wallet} className="w-6 h-6 text-[#B1A6F8]" />
      </Link>
      <Link href="/discover">
        <Image alt="" src={Discover} className="w-6 h-6 text-[#B1A6F8]" />
      </Link>
      <Link href="/swap">
        <Image alt="" src={Swap} className="w-6 h-6 text-[#B1A6F8]" />
      </Link>
      <Link href="/account">
        <Image alt="" src={Profile} className="w-6 h-6 text-[#B1A6F8]" />
      </Link>
    </div>
  );
};

export default MobileMenubar;
