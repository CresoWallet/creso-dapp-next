

/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from "react";
import { WalletContext } from "@/providers/WalletProvider";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const CoinCard = ({ handleCoinWallet }) => {
  const { originalData, isMobile } = useContext(WalletContext);
  // const [getTokensPrice, setGetTokensPrice] = useState({})
  const [openPopup, setOpenPopup] = useState(false);
  const [showAllTokens, setShowAllTokens] = useState(false);
  const isLaptop = useMediaQuery({ query: `(max-width: 1024px)` });
  console.log("🚀 ~ CoinCard ~ originalData:", originalData);


  const top10Token = originalData.slice(0, 7);
  const top5Token = originalData.slice(0, 3);

  const topsToken = isMobile ? top5Token : top10Token;
  // const [currentPage, setCurrentPage] = useState(1);

  // const tokensPerPage = 10;
  // const startIndex = 0;
  // const endIndex = showAllTokens ? originalData.length : startIndex + tokensPerPage;
  // const currentData = originalData.slice(startIndex, endIndex);
  const handleSeeMore = () => {
    // setShowAllTokens(true);
    setOpenPopup(true);
  };

  // Object.entries(getTokensPrice).map((e) => {
  //   console.log("🚀 ~ e 😂😂😁😁😂😁:", e)
  //   return e
  // })
  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenPopup(false);
    }
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const popupRef = useRef();

  return (
    <>
      <div className="flex justify-between gap-5 xl:gap-4 py-3">
        {/* <button className="text-[#FF4085]" onClick={() => handleNextPage}>See More</button> */}
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
                  {/* {item.symbol.toUpperCase()} */}
                </p>
                {/* {Object.entries(coinDataprice).map(([address, data]) => (
                <div key={address}>
                  <p className="text-xs text-[#A09FAA]">$ {data.usd}</p>
                </div>
              ))} */}
                <p className="text-[#A09FAA] flex gap-1 xl:text-sm text-xs md:text-xs">
                  <span>$</span> {item?.current_price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}

        {originalData?.length !== 0 ? <div
          className="text-[#FF4085] cursor-pointer hover:font-semibold"
          onClick={handleSeeMore}
        >
          See More 
        </div> : <div
          className="text-[#FF4085] font-semibold w-full text-center"
        >
          Wait few minutes...
        </div>}
      </div>

      {openPopup && (
        <div
          className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
          ref={popupRef}
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-3xl px-16 py-8 max-h-[50vh]  overflow-y-auto">
            <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 items-center ">
              {originalData.map((item, index) => (
                <div
                  className="md:flex flex-col space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500"
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
                    <p className="text-center xl:text-sm text-xs md:text-xs">
                      {item.symbol.toUpperCase()}
                    </p>
                    <p className="text-[#A09FAA] flex gap-1 xl:text-sm text-xs md:text-xs">
                      <span>$</span> {item?.current_price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="text-[#FF4085] cursor-pointer mt-4 top-1 right-1"
              onClick={handleClosePopup}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinCard;
