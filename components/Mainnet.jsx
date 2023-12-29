import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";
import axios from "axios";
import PinkPlus from "../assets/Dashboard/PinkPlus.png";
import Wallet from "../assets/Dashboard/walletIcon.png";
import Copy from "../assets/Dashboard/Copy.png";
import Copy2 from "../assets/Dashboard/Copy2.png";
import Next2 from "../assets/Dashboard/next2.png";
import Wallet2 from "../assets/Dashboard/WalletIcon2.png";
import ETH from "../assets/Dashboard/eth.png";
import TransactionItem from "./TransactionInfo";
import DAI from "../assets/Dashboard/dai.png";
import USDT from "../assets/Dashboard/usdt.png";
import { copyToClipBoard, minifyEthereumAddress } from "@/utils";
import { WalletContext } from "@/providers/WalletProvider";
import History from "./dashboard/History";

const Mainnet = ({
  handleOpenWallet,
  handleCreateWallet,
  // eoaWalletAddress,
  // secureWalletAddress,
  showWallet,
}) => {
  const {
    secureWalletAddress,
    eoaWalletAddress,
    activeButton,
    setActiveButton,
    allToken,
  } = useContext(WalletContext);
  const { enqueueSnackbar } = useSnackbar();
  const [tokenPrices, setTokenPrices] = useState([]);
  console.log("tokenPrices-->", tokenPrices);
  useEffect(() => {
    if (!showWallet) {
      setActiveButton("AA");
    }
  }, [activeButton]);


  // Token real value 
  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        const ethResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/ethereum?market_data=true"
        );
        const ethPrice = ethResponse.data.market_data.current_price.usd;
        //setEthPrice(ethPrice);
        console.log("ethPrice", ethPrice);

        const tokenResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0x5cb3ce6d081fb00d5f6677d196f2d70010ea3f4a%2C0x74232704659ef37c08995e386a2e26cc27a8d7b1%2C0x2b1d36f5b61addaf7da7ebbd11b35fd8cfb0de31%2C0x07e0edf8ce600fb51d44f51e3348d77d67f298ae%2C0x94025780a1ab58868d9b2dbbb775f44b32e8e6e5%2C0x465a5a630482f3abd6d3b84b39b29b07214d19e5%2C0x024b6e7dc26f4d5579bdd936f8d7bc31f2339999%2C0x6982508145454ce325ddbe47a25d4ec3d2311933%2C0xf6650117017ffd48b725b4ec5a00b414097108a7%2C0x569d0e52c3dbe95983bcc2434cb9f69d905be919&vs_currencies=usd`
        );
        console.log("tokenResponse", tokenResponse?.data);
        const tokenArray = Object.keys(tokenResponse.data).map((address) => ({
          [address]: {
            usd: tokenResponse.data[address].usd * ethPrice,
          },
        }));

        setTokenPrices(tokenArray);
      } catch (error) {
        console.error("Error fetching token prices:", error);
      }
    };

    fetchTokenPrices();
  }, []);
  return (
    <div className="flex flex-col xl:space-y-8 md:space-y-8 space-y-2">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl lg:my-0 my-4">Ethereum Mainnet </p>
          <div className="flex  gap-2 items-center cursor-pointer group">
            <Image src={PinkPlus} alt="" />
            <p
              onClick={handleCreateWallet}
              className="text-[#FF4085] group-hover:font-bold duration-500"
            >
              Create
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex xl:flex-row flex-col items-center xl:gap-4 md:gap-4 gap-2">
          <div
            className={`${activeButton === "AA"
              ? "bg-black"
              : "bg-white hover:bg-gray-200 duration-500 "
              } rounded-full px-4 py-4 w-full border-2 border-black cursor-pointer group relative`}
          >
            <div className="flex flex-row justify-between items-center gap-3 group">
              <Image
                src={Wallet}
                alt="wallet"
                className="md:w-14 md:h-14 xl:w-12 xl:h-12"
              />
              <div className="flex flex-col space-y-1">
                <p
                  className={`${activeButton === "AA" ? "text-white" : "text-black"
                    }  font-semibold text-sm md:text-lg xl:text-sm`}
                >
                  Keyless Secure Wallet
                </p>
                <div className="flex flex-row items-center gap-4 z-[1]">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">
                    {minifyEthereumAddress(secureWalletAddress)}
                  </p>
                  <Image
                    src={activeButton ? Copy : Copy2}
                    alt="copy"
                    onClick={() => {
                      copyToClipBoard(secureWalletAddress);
                      enqueueSnackbar("URL Copied", {
                        variant: "info",
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <Image
                  alt=""
                  src={Next2}
                  className="md:w-10 md:h-10 xl:w-8 xl:h-8 group-hover:translate-x-1 duration-500"
                />
              </div>
              <div
                className="absolute inset-0"
                onClick={() => {
                  setActiveButton("AA");
                  handleOpenWallet({ walletName: "AA" });
                }}
              ></div>
            </div>
          </div>
          <div
            className={`${activeButton === "EOA"
              ? "bg-black"
              : "bg-white  hover:bg-gray-200 duration-500 "
              } rounded-full px-4 py-4 w-full border-2 border-black cursor-pointer group relative`}
          >
            <div className="flex flex-row justify-between items-center gap-3">
              <Image
                src={Wallet2}
                alt=""
                className="md:w-14 md:h-14 xl:w-12 xl:h-12"
              />
              <div className="flex flex-col space-y-1">
                <p
                  className={`${activeButton === "EOA" ? "text-white" : "text-black"
                    }  font-semibold text-sm md:text-lg xl:text-sm`}
                >
                  EOA Wallet
                </p>
                <div className="flex flex-row items-center gap-4 z-[1]">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">
                    {minifyEthereumAddress(eoaWalletAddress)}
                  </p>
                  <Image
                    src={activeButton ? Copy : Copy2}
                    alt=""
                    onClick={() => {
                      copyToClipBoard(eoaWalletAddress);
                      enqueueSnackbar("URL Copied", {
                        variant: "info",
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <Image
                  alt=""
                  src={Next2}
                  className="md:w-10 md:h-10 xl:w-8 xl:h-8 group-hover:translate-x-1 duration-500"
                />
              </div>
              <div
                className="absolute inset-0"
                onClick={() => {
                  setActiveButton("EOA");
                  handleOpenWallet({ walletName: "EOA" });
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto custom-scrollbar h-64">

        {allToken ? (
          allToken?.map((e, ind) => (
            <div key={ind} className="">
              <TransactionItem
                icon={e?.logo ? e?.logo : ETH}
                label={e?.name}
                amount="$1,794.28"
                value={e?.balance}
                valueName={e?.name}
                send="Send"
                receive="Receive"
              />
              <hr />
            </div>
          ))
        ) : (
          <History />
        )}
      </div>

    </div>
  );
};

export default Mainnet;
