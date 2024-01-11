/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Creso3 from "../../assets/Dashboard/creso3.png";
import Wallet from "../../assets/Dashboard/Wallet.png";
import Wallet1 from "../../assets/Dashboard/Wallet1.png";
import Discover from "../../assets/Dashboard/Discover.png";
import Discover1 from "../../assets/Dashboard/Discover1.png";
import Swap from "../../assets/Dashboard/Swap.png";
import Swap1 from "../../assets/Dashboard/Swap1.png";
import Info from "../../assets/Dashboard/info.png";
import Info1 from "../../assets/Dashboard/info1.png";
import Support from "../../assets/Dashboard/Support.png";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import NavItem from "./NavItem";
import Twitter from "../../assets/Dashboard/twitter.png";
import Telegram from "../../assets/Dashboard/telegram.png";
import Etherscan from "../../assets/Dashboard/etherscan.png";
import Github from "../../assets/Dashboard/github.png";
import Discord from "../../assets/Dashboard/discord.png";
import creso from "../../assets/Dashboard/creso_logo_white.svg";
import Setting from "../../assets/Dashboard/setting.png";
import Setting1 from "../../assets/Dashboard/setting1.png";
import Link from "next/link";
import support1 from "../../assets/Dashboard/Support.svg";
// import cresob from "../../assets/Dashboard/creso logo black.svg";

const SideNav = () => {
  const pathName = usePathname();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="bg-[#2100EC] rounded-3xl  min-h-full pb-10">
      <div className="flex flex-col pt-12 lg:h-full items-center lg:items-start">
        <Link href="/dashboard" className="flex flex-row items-center gap-1 px-8 relative Mainlogo text-white">
          <Image alt="creso-logo" src={creso} className="h-10 my-8 mb-14" />

          {/* 
        <p className=" text-4xl hidden lg:block items-center">creso</p>
        <p className="text-sm mt-4 text-[#D0F500]">Beta</p>

         */}
        </Link>
        <div className={`flex flex-col ${isMobile ? "mr-5" : "mr-10"}`}>
          <NavItem
            pathName={pathName}
            href="/dashboard"
            icon={Wallet}
            hoverIcon={Wallet1}
            label="Dashboard"
            active={activeIcon === "dashboard"}
            onClick={() => handleIconClick("dashboard")}
          />
          <NavItem
            pathName={pathName}
            href="/discover"
            icon={Discover}
            hoverIcon={Discover1}
            label="Discover"
            active={activeIcon === "discover"}
            onClick={() => handleIconClick("discover")}
          />
          <NavItem
            pathName={pathName}
            href="/swap"
            icon={Swap}
            hoverIcon={Swap1}
            label="Swap"
            active={activeIcon === "swap"}
            onClick={() => handleIconClick("swap")}
          />

          <div className="">
            <hr className="text-[#B1A6F8]" />
          </div>

          <NavItem
            pathName={pathName}
            href="/about"
            icon={Info}
            hoverIcon={Info1}
            label="About us "
            active={activeIcon === "about"}
            onClick={() => handleIconClick("about")}
          />
          <NavItem
            pathName={pathName}
            href="/support"
            icon={Support}
            hoverIcon={support1}
            label="Support "
            active={activeIcon === "support"}
            onClick={() => handleIconClick("support")}
          />

          <NavItem
            pathName={pathName}
            href="/setting"
            icon={Setting}
            hoverIcon={Setting1}
            label="Setting"
            active={activeIcon === "setting"}
            onClick={() => handleIconClick("setting")}
          />
        </div>
      </div>
      {/* Add social media icons */}
      <div className="flex justify-between item-center gap-2 border-white rounded-full bg-white border border-solid p-2 mt-8 mx-5 ">
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
          <Image alt="Telegram" src={Telegram} className=" flex w-7 h-7" />
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
    </div>
  );
};

export default SideNav;
