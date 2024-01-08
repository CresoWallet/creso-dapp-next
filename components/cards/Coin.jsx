// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Account from "../../assets/Dashboard/account.png";
// import Add from "../../assets/Dashboard/add.png";
// import ETH from "../../assets/Dashboard/ethSelect.png";
// import USDT from "../../assets/Dashboard/usdt.png";
// import DAI from "../../assets/Dashboard/dai.png";
// import BnB from "../../assets/Dashboard/bnb.png";
// import WETH from "../../assets/Dashboard/weth.png";
// import { coinList } from "@/utils/data/coinlist";

// const CoinCard = ({ handleCoinWallet }) => {
//   const [usdRate, setUsdRate] = useState();

//   useEffect(() => {
//     const fetchUsdValue = async () => {
//       try {
//         const res = await getUSDValue();
//         if (res) {
//           setUsdRate({
//             USDT: res?.data?.tether.usd,
//             USDC: res?.data["usd-coin"].usd,
//             WLD: res?.data?.worldcoin.usd,
//             OKB: res?.data?.okb.usd,
//             BNB: res?.data?.binancecoin.usd,
//           });
//         }
//       } catch (error) {
//         console.log("error : ", error);
//       }
//     };

//     fetchUsdValue();
//   }, []);
//   return (
//     <div className="flex gap-2 xl:gap-4 justify-between items-center overflow-x-auto ">
//       {coinList.map((item, index) => {
//         return (
//           <div
//             className="md:flex flex-col space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500 !overflow-hidden "
//             onClick={(e) => {
//               handleCoinWallet({ item: item });
//             }}
//             key={index}
//           >
//             <Image
//               alt=""
//               src={
//                 item.coinName === "ETH"
//                   ? ETH
//                   : item.coinName === "BNB"
//                     ? BnB
//                     : item.coinName === "USDT"
//                       ? USDT
//                       : item.coinName === "DAI"
//                         ? DAI
//                         : item.coinName === "WETH"
//                           ? WETH
//                           : ETH
//               }
//               className="xl:h-14 xl:w-14 md:h-12 md:w-12 w-12 h-12"
//             />
//             <div className="flex flex-col">
//               <p className="text-center xl:text-sm text-xs md:text-xs">
//                 {item.coinName}
//               </p>
//               <p className="text-[#A09FAA] xl:text-sm text-xs md:text-xs">
//                 {item.value}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CoinCard;

/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { WalletContext } from "@/providers/WalletProvider";
import axios from "axios";

const CoinCard = ({ handleCoinWallet }) => {
  const { originalData } = useContext(WalletContext);
  //const [getTokensPrice, setGetTokensPrice] = useState({})
  //console.log("🚀 ~ getTokensPrice:", getTokensPrice)
  // console.log("🚀 ~ CoinCard ~ originalData:", originalData)

  // const sortedData = originalData.slice().sort((a, b) => b.value - a.value);
  const top10Data = originalData.slice(0, 10);

  // const pricedata = top10Data.map(e => e.address)

  //const gettokenprice = async () => {
  //  // const Tokenprice = await axios.get(
  //  //   `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${pricedata}&vs_currencies=usd`
  //  // );
  //  // // console.log("🚀 ~ gettokenprice ~ Tokenprice:", Tokenprice?.data)
  //  // setGetTokensPrice(Tokenprice?.data)
  //  try {
  //    const response = await axios.get(
  //      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
  //    );
  //    console.log("response-----:", response);
  //  } catch (error) {
  //    console.error("gettokenprice--->", error);
  //  }
  //};

  //useEffect(() => {
  //  gettokenprice();
  //}, []);
  //Object.entries(getTokensPrice).map((e) => {
  //  console.log("🚀 ~ e 😂😂😁😁😂😁:", e);
  //  return e;
  //});
  return (
    <div className="flex flex-nowrap gap-2 xl:gap-4 justify-between items-center overflow-x-auto lg:my-0 py-3">
      {top10Data.map((item, index) => {
        {
          /* console.log("🚀 ~ {top10Data.map ~ item:", item) */
        }
        return (
          <div
            className="md:flex flex-col space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500"
            onClick={(e) => {
              handleCoinWallet(item);
            }}
            key={index}
          >
            <img
              alt={item.symbol}
              src={item?.image}
              className="xl:h-12 xl:w-12 w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-center xl:text-sm text-xs md:text-xs">
                {item.symbol}
              </p>
              {/* {Object.entries(coinDataprice).map(([address, data]) => (
                <div key={address}>
                  <p className="text-xs text-[#A09FAA]">$ {data.usd}</p>
                </div>
              ))} */}
              <p className="text-[#A09FAA] xl:text-sm text-xs md:text-xs">
                $ {item?.current_price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinCard;
