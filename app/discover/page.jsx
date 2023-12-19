"use client";

import React, { useContext, useEffect, useState } from "react";

import SideNav from "@/components/SideNav";

import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";

import Carousel from "@/components/discover/carousel";
import RoundedNftAvatar from "@/components/discover/RoundedNftAvatar";
import IconButton from "@/components/discover/IconButton";
import Header from "@/components/Header";
import CapCard from "@/components/CapCard";
import CustomButton2 from "@/components/CustomButton2";
import User from "@/components/User";
import CardWithTitle from "@/components/discover/CardWithTitle";

import Degods from "../../assets/discover/degods.png";
import AzukiRed from "../../assets/discover/azuki-red.png";
import Potatoz from "../../assets/discover/potatoz.png";
import Hvmtl from "../../assets/discover/hvmtl.png";
import AzukiGray from "../../assets/discover/azuki-gray.png";
import CryptoNewsBGImage from "../../assets/discover/crypo-news-img.png";
import DiscoverAppsBGImage from "../../assets/discover/discover-apps.png";
import GameButtonImage from "../../assets/discover/Joystick.png";
import MarketPlaceImage from "../../assets/discover/Shop.png";
import Defi from "../../assets/discover/doller.png";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import PEPE from "../../assets/discover/pepe.png";
import Card1 from "../../assets/discover/poster-card/card-1.png";
import Card2 from "../../assets/discover/poster-card/card2.png";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import RightMain from "../MainLayout/RightMain";
import LeftHeader from "@/components/LeftHeader";
import { CiSearch } from "react-icons/ci";
import { WalletContext } from "@/providers/WalletProvider";

const DiscoverPage = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [show, setShow] = useState(false);
  const {
    navbarTrigger,
    setNavbarTrigger,
    isMobile
  } = useContext(WalletContext);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const handleShow = () => {
    setShow(!setShow);
  };

  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  let slides = [
    "https://i.ibb.co/bmbrTJ1/wallpaperflare-com-wallpaper-3.jpg",
    "https://i.ibb.co/FVLhDR7/wallpaperflare-com-wallpaper-2.jpg",
    "https://i.ibb.co/xmB7ty3/wallpaperflare-com-wallpaper-1.jpg",
    "https://i.ibb.co/jkM7SL7/wallpaperflare-com-wallpaper.jpg",
  ];

  let coins = [
    {
      imagePath: Degods,
      title: "Dogods",
      value: "3141 ETH",
    },
    {
      imagePath: AzukiRed,
      title: "Azuki",
      value: "3141 ETH",
    },
    {
      imagePath: Potatoz,
      title: "The Potatoz",
      value: "3141 ETH",
    },
    {
      imagePath: Hvmtl,
      title: "HV-MTL",
      value: "3141 ETH",
    },
    {
      imagePath: AzukiGray,
      title: "Azuki",
      value: "3141 ETH",
    },
    {
      imagePath: Degods,
      title: "Dogods",
      value: "3141 ETH",
    },
  ];

  let Cards = [
    {
      imgPath: CryptoNewsBGImage,
      title: "Crypto News",
      color: "#FFEDED",
    },
    {
      imgPath: DiscoverAppsBGImage,
      title: "Discover Dapps",
      color: "#FFF2D0",
    },
  ];

  let IconButtonList = [
    {
      imgPath: GameButtonImage,
      title: "Games",
    },
    {
      imgPath: MarketPlaceImage,
      title: "MarketPlace",
    },
    {
      imgPath: Defi,
      title: "DEFI",
    },
  ];

  return (
    <>
      <div className="grid  grid-cols-10 px-2 divide-x">
        {/* sidebar and discover content */}
        {/* <div className="col-span-6 "> */}
        {/* <div className="grid responsivemb-cols h-full"> */}
        <div className="col-span-6 space-y-6 xl:mx-4 md:px-2 px-2 pt-[72px]">
          {/* <div className="block md:hidden">
              <Header />
            </div> */}
          {/* title with trailing icons */}
          <div>
            <LeftHeader
              title={"Discover"}
              icon1={<AiOutlineStar />}
              icon2={<AiOutlineClockCircle />}
              mobileImg={Ham}
              navbarTrigger={navbarTrigger}
              setNavbarTrigger={setNavbarTrigger}
              isMobile={isMobile}
            />
          </div>
          <div className="col-span-6 space-y-6">

            {/* carousel component */}
            <div className="w-full py-4">
              <Carousel slides={slides} />
            </div>
            {/* top nft section */}
            <div className="flex flex-row items-center justify-between ">
              <div className="flex items-center flex-row gap-1">
                <p className="font-semibold xl:text-2xl md:text-2xl text-xl text-black">
                  Top NFTs
                </p>
                <p className="text-xs text-[#A09FAA]">(24h)</p>
              </div>
              <div
                className="text-[#FF4085] cursor-pointer rounded-xl"
                onClick={handleShow}
              >
                <p className="">{show ? "See less" : "See more"}</p>
              </div>
            </div>
            {/* nft details list */}
            {/* <div className="flex flex-row  my-1 items-center justify-between">
              {coins.map((coin, index) => {
                return (
                  <div key={index}>
                    <RoundedNftAvatar
                      coinType={coin["title"]}
                      image={coin["imagePath"]}
                      value={coin["value"]}
                    />
                  </div>
                );
              })}
            </div> */}
            <div className="flex flex-row gap-2 xl:gap-4 overflow-x-auto">
              <div className="flex flex-col space-y-1 items-center">
                <Image
                  alt=""
                  src={Degods}
                  className="xl:h-14 xl:w-14 md:h-12 md:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-center xl:text-sm md:text-xs text-xs">
                    Degods
                  </p>
                  <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
                    3,141 ETH
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <Image
                  alt=""
                  src={AzukiRed}
                  className="xl:h-14 xl:w-14 md:h-12 md:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-center xl:text-sm text-xs md:text-xs">
                    Azuki
                  </p>
                  <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
                    3,141 ETH
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <Image
                  alt=""
                  src={Potatoz}
                  className="xl:h-14 xl:w-14 md:h-12 md:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-center xl:text-sm text-xs md:text-xs">
                    The Potatoz
                  </p>
                  <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
                    3,141 ETH
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <Image
                  alt=""
                  src={Hvmtl}
                  className="xl:h-14 xl:w-14 md:h-12 md:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-center xl:text-sm  text-xs md:text-xs">
                    HV-MTL
                  </p>
                  <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
                    3,141 ETH
                  </p>
                </div>
              </div>
              <div className="xl:flex flex-col space-y-1 items-center hidden">
                <Image
                  alt=""
                  src={AzukiGray}
                  className="xl:h-14 xl:w-14 md:h-12 md:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-center xl:text-sm  text-xs md:text-xs">
                    Azuki
                  </p>
                  <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
                    3,141 ETH
                  </p>
                </div>
              </div>
              <div className="xl:flex hidden flex-col space-y-1 items-center">
                <Image
                  alt=""
                  src={Degods}
                  className="xl:h-14 xl:w-14 md:h-12 md:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-center xl:text-sm  text-xs md:text-xs">
                    Degods
                  </p>
                  <p className="text-[#A09FAA] text-xs xl:text-sm md:text-xs">
                    3,141 ETH
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row xl:gap-2 space-y-2 xl:space-y-0 md:space-y-0">
              <Image src={Card1} alt="" className="w-full" />
              <Image src={Card2} alt="" className="w-full" />
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
              <div className="flex justify-center items-center w-full py-8 rounded-3xl border border-solid border-[#E5E5F0] cursor-pointer hover:scale-105 hover:bg-slate-100">
                <div className="flex flex-col space-y-2 items-center">
                  <Image alt="" src={GameButtonImage} />
                  <p>Games</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full py-8 rounded-3xl border border-solid border-[#E5E5F0] cursor-pointer hover:scale-105 hover:bg-slate-100">
                <div className="flex flex-col space-y-2 items-center">
                  <Image alt="" src={MarketPlaceImage} />
                  <p>MarketPlace</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full py-8 rounded-3xl border border-solid border-[#E5E5F0] cursor-pointer hover:scale-105 hover:bg-slate-100">
                <div className="flex flex-col space-y-2 items-center">
                  <Image alt="" src={Defi} />
                  <p>DEFI</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* Right Side */}
        <div className="hidden xl:block md:block pt-16 col-span-4" >
          <Header />
          <RightMain />
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;
