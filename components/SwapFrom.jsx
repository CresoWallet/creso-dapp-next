/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from "react";
import { WalletContext } from "@/providers/WalletProvider";
import { useMediaQuery } from "react-responsive";
import { IoIosClose } from "react-icons/io";
// import Image from "next/image";
// import ETH from "../assets/Dashboard/ethSelect.png";
// import BnB from "../assets/Dashboard/bnb.png";
// import USDT from "../assets/Dashboard/usdt.png";
import { CiSearch } from "react-icons/ci";
import User from "./User";
import Sure from "../assets/Dashboard/gainers/sure.png";
import Eth from "../assets/gainers/Eth.png";
import EWeth from "../assets/gainers/mina.png";
import Pepe from "../assets/gainers/pepe.png";
// import CoinCard from "./cards/Coin";
import { VscFeedback } from "react-icons/vsc";
import Image from "next/image";
<VscFeedback />;

const SwapFrom = ({ handleClose }) => {
  const [hover, setHover] = useState(false);
  const style = { color: "white" };
  const hoverStyle = { color: "black" };
  const { originalData, isMobile } = useContext(WalletContext);
  const [openPopup, setOpenPopup] = useState(false);
  const isLaptop = useMediaQuery({ query: `(max-width: 1024px)` });
  const isXL = useMediaQuery({ query: `(max-width: 1440px)` });

  const top6Token = originalData.slice(0, 6);
  const top5Token = originalData.slice(0, 5);
  const top3Token = originalData.slice(0, 3);

  const topsToken =
    isLaptop || isMobile ? top3Token : isXL ? top5Token : top6Token;
  const handleSeeMore = () => {
    setOpenPopup(true);
  };
  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenPopup(false);
    }
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const popupRef = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = originalData.filter((item) =>
    item.symbol.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <div className="lg:block ">
      {/* <div className="flex rounded-full bg-black h-8 w-8 items-center justify-center xl:-ml-4 md:-ml-4 mt-10 absolute">
        <IoIosClose className="text-white h-4 w-4" onClick={handleClose} /> */}
      <div className="grid place-items-center rounded-full bg-black h-8 w-8 absolute cursor-pointer md:-ml-4 ml-2 lg:mt-0 z-[99]">
        <IoIosClose
          className="text-white h-7 w-7 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="flex flex-col mt-10 md:mx-2 mx-2 space-y-8">
        <p className="text-black font-bold text-xl px-10 ">Swap From</p>
        <div className="flex flex-row items-center justify-between px-10">
          {/* coins added */}
          <div className="flex justify-between gap-5 xl:gap-4 sm:gap-3 md:gap-4 py-3">
            {topsToken.map((item, index) => {
              return (
                <div
                  className="md:flex flex-col space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500"
                  onClick={(e) => {
                    handleCoinWallet(item);
                  }}
                  key={index}
                >
                  <div className="grid place-items-center w-full md:w-auto">
                    <img
                      alt={item.symbol}
                      src={item?.image}
                      className="xl:h-12 xl:w-12 w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-center xl:text-sm text-xs md:text-xs">
                      {item.symbol.toUpperCase()}
                    </p>

                    <p className="text-[#A09FAA] flex gap-1 xl:text-sm text-xs md:text-xs">
                      <span>$</span> {item?.current_price.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}

            {originalData?.length !== 0 ? (
              <div
                className="text-[#FF4085] cursor-pointer hover:font-semibold"
                onClick={handleSeeMore}
              >
                See More
              </div>
            ) : (
              <div className="text-[#FF4085] font-semibold w-full text-center">
                Loading...
              </div>
            )}
          </div>

          {openPopup && (
            <div
              className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
              ref={popupRef}
              onClick={handleBackgroundClick}
            >
              <div className="bg-white rounded-3xl p-5 relative ">
                <div className="absolute top-2 right-2 bg-black rounded-full h-6 w-6  flex items-center justify-center cursor-pointer z-[99]">
                  <IoIosClose
                    className="text-white h-7 w-7 cursor-pointer"
                    onClick={handleClosePopup}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search by Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="my-5 px-4 md:px-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                />

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 space-y-4 items-center max-h-[50vh] overflow-y-auto">
                  {filteredData.map((item, index) => (
                    <div
                      className="flex md:flex-col gap-2 md:gap-0 space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500"
                      onClick={() => {
                        handleCoinWallet(item);
                        setOpenPopup(false);
                      }}
                      key={index}
                    >
                      <div className="grid place-items-center">
                        <img
                          alt={item.symbol}
                          src={item?.image}
                          className="xl:h-12 xl:w-12 w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="md:text-center xl:text-sm text-xs md:text-xs">
                          {item.symbol.toUpperCase()}
                        </p>
                        <p className="text-[#A09FAA] flex gap-1 xl:text-sm text-xs md:text-xs">
                          <span>$</span> {item?.current_price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* <CoinCard /> */}
          {/* <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={ETH} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">ETH</p>
              <p className="text-[#A09FAA] text-sm">$2,321.79</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={BnB} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">BNB</p>
              <p className="text-[#A09FAA] text-sm">$16.32</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={USDT} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">USDT</p>
              <p className="text-[#A09FAA] text-sm">$804.94</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={BnB} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">BNB</p>
              <p className="text-[#A09FAA] text-sm">$16.32</p>
            </div>
          </div> */}
        </div>
        <div className="rounded-full border border-solid flex px-4 py-1 flex-row items-center justify-between ">
          <input
            required={true}
            type="text"
            placeholder="Search by token name or address"
            className="placeholder:text-xs placeholder:text-[#6F6E7A] focus:outline-none"
          />
          <div className="bg-black rounded-full xl:h-12 xl:w-12 md:w-6 md:h-6 w-12 h-12 flex justify-center items-center">
            <CiSearch className="text-white w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col px-3">
          <User
            name="BV3A"
            description="Buccaneer V3"
            image={Sure}
            amount="$0,0041.66"
          />
          <hr className="my-4" />
          <User
            name="ETH"
            description="Ethereum"
            image={Eth}
            amount="$0.159046"
          />
          <hr className="my-4" />
          <User name="WETH" description="WETH" image={EWeth} />
          <hr className="my-4" />
          <User name="USDC" description="USD Coin" image={Pepe} />
        </div>
        <div className="relative">
          <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href="https://forms.gle/GBEKLjSH7hxQiuPv8"
            target="_blank"
            className={`${
              hover ? "bg-white border border-[#2100EC] " : "bg-[#2100EC]"
            } fixed bottom-24 lg:bottom-12 right-12 cursor-pointer shadow-2xl z-50 h-20 w-20 grid place-items-center rounded-full `}
          >
            <div className="absolute grid place-items-center">
              <VscFeedback style={hover ? hoverStyle : style} size={30} />
            </div>
            {hover && (
              <p className="absolute p-2 rounded-lg font-semibold  -top-12 bg-black text-white ">
                {" "}
                Feedback
              </p>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SwapFrom;
