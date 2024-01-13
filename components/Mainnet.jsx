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
import { alchemy } from "@/utils/alchemy";
import { formatEther } from "viem";
import HistoryCardSkelton from "./skeleton/HistoryCardSkelton";
const Mainnet = ({ handleOpenWallet, handleCreateWallet, showWallet }) => {
  // const [newWalletName, setNewWalletName] = useState("");
  const {
    secureWalletAddress,
    eoaWalletAddress,
    activeButton,
    setActiveButton,
    allToken,
    setAllToken,
    setTotalBalance,
    setFilteredData,
    setOriginalData,
    setSend,
    setMainContentVisible,
    setWalletAddress,
  } = useContext(WalletContext);

  const { enqueueSnackbar } = useSnackbar();
  const [tokenPrices, setTokenPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const handleWalletNameChange = (e) => {
  //   setNewWalletName(e.target.value);
  // };
  //console.log("tokenPrices-->", tokenPrices);
  const arr = ["1", "2", "3"];
  useEffect(() => {
    if (!showWallet) {
      setActiveButton("");
    }
  }, [activeButton]);

  // const handleSaveWalletName = () => {
  //   // Perform any necessary validation on the new wallet name
  //   // Update the wallet name in your state or API
  //   // For example, you can use the setActiveButton function to update the active wallet name
  //   setActiveButton(newWalletName);
  //   // Clear the input field
  //   setNewWalletName("");
  // };

  // Token real value
  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        const ethResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/ethereum?market_data=true"
        );
        const ethPrice = ethResponse.data.market_data.current_price.usd;

        const tokenResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0x5cb3ce6d081fb00d5f6677d196f2d70010ea3f4a%2C0x74232704659ef37c08995e386a2e26cc27a8d7b1%2C0x2b1d36f5b61addaf7da7ebbd11b35fd8cfb0de31%2C0x07e0edf8ce600fb51d44f51e3348d77d67f298ae%2C0x94025780a1ab58868d9b2dbbb775f44b32e8e6e5%2C0x465a5a630482f3abd6d3b84b39b29b07214d19e5%2C0x024b6e7dc26f4d5579bdd936f8d7bc31f2339999%2C0x6982508145454ce325ddbe47a25d4ec3d2311933%2C0xf6650117017ffd48b725b4ec5a00b414097108a7%2C0x569d0e52c3dbe95983bcc2434cb9f69d905be919&vs_currencies=usd`
        );
        //console.log("tokenResponse", tokenResponse?.data);
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

  const baseURL = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ETH;
  const data = {
    jsonrpc: "2.0",
    method: "alchemy_getTokenBalances",
    headers: {
      "Content-Type": "application/json",
    },
    params: [activeButton === "AA" ? secureWalletAddress : eoaWalletAddress],
    id: 42,
  };

  const config = {
    method: "post",
    url: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  const getTokens = async () => {
    try {
      const response = await axios(config);
      const balances = response.data.result;

      const contractAddresses = balances.tokenBalances
        .filter((token) => token.tokenBalance)
        .map((token) => token.contractAddress);

      const metadataPromises = contractAddresses.map(
        async (contractAddress) => {
          const options = {
            method: "POST",
            url: baseURL,
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
            data: {
              id: 1,
              jsonrpc: "2.0",
              method: "alchemy_getTokenMetadata",
              params: [contractAddress],
            },
          };

          return axios.request(options);
        }
      );

      const metadataResponses = await Promise.all(metadataPromises);
      // console.log("metadataResponses-->", metadataResponses);
      // Fetch token prices using CoinGecko API
      const pricePromises = metadataResponses.map(async (metadataResponse) => {
        const data = metadataResponse.data.result.name.toLowerCase();
        const tokenprice = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${data}&vs_currencies=usd`
        );
        return tokenprice.data[data]?.usd || 0;
      });

      const tokenPrices = await Promise.all(pricePromises);

      // Combine metadata and prices
      const tokensData = metadataResponses.map((metadataResponse, index) => {
        const balance = balances?.tokenBalances[index]?.tokenBalance;
        const metadata = metadataResponse.data.result;

        if (typeof balance !== "undefined" && metadata) {
          const balanceValue = balance / Math.pow(10, metadata.decimals);
          const formattedBalance = balanceValue.toFixed(6);

          return {
            name: metadata.name,
            symbol: metadata.symbol,
            logo: metadata.logo,
            balance: `${formattedBalance}`,
            price: tokenPrices[index],
          };
        }

        return null;
      });

      // Remove null entries
      const filteredTokensData = tokensData.filter((token) => token !== null);

      return filteredTokensData;
    } catch (error) {
      console.error("GetTokens function Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllToken = async () => {
    try {
      //const response = await axios.get(
      //  "https://tokens.coingecko.com/uniswap/all.json"
      //);
      const response = await axios.get(
        // "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      );
      const data = response?.data;
      // console.log("🚀 ~ fetchAllToken ~ response:", response?.data?.tokens);
      setOriginalData(data);
      setFilteredData(data);

      const cache = await caches.open("my-cache");
      cache.put("/api/data", new Response(JSON.stringify(data)));
    } catch (error) {
      console.error("Error fetching and caching data:", error);
    }
  };

  const getBalancefatch = async () => {
    // const address1 = "0x3cC69915d2CA2E7c4A7C930600A7cDCBda34EB2C"
    // const contract = "0x232e48C3Fcc31Cf977573F1e5D77933D63F4C4cA"
    const address =
      activeButton === "AA" ? secureWalletAddress : eoaWalletAddress;
    try {
      //if (address) {
      const [rawMaticBalance] = await Promise.all([
        alchemy.core.getBalance(address),
        // alchemy.core.getTokensForOwner(address, contract),
      ]);
      // const rawWethBalance =
      //     tokenBalances.tokens.find(
      //         (token) => token.contractAddress === WETH_TOKEN_ADDRESS,
      //     )?.balance ?? "0"
      const totalBalance = +formatEther(rawMaticBalance.toBigInt());
      setTotalBalance(totalBalance);
      // const wethBalance = +rawWethBalance
      // const totalBalance = maticBalance + wethBalance * 131.62

      //console.log("totalBalance--->", totalBalance);
      //}
    } catch (error) {
      // console.log("getBalancefatch", error);
    }
  };

  useEffect(() => {
    fetchAllToken();
    getBalancefatch();
    const fetchData = async () => {
      const tokenData = await getTokens();
      setAllToken(tokenData);
      // console.log("tokenData", tokenData);
    };
    const delayedFetch = () => {
      setTimeout(() => {
        fetchData();
      }, 5000);
    };
    delayedFetch();
  }, [activeButton]);

  return (
    <div className="flex flex-col xl:space-y-8 md:space-y-8 space-y-2">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl lg:my-0 my-4">
            Beta Version (Testnet){" "}
          </p>
          <div
            className="flex  gap-2 items-center cursor-pointer group"
            onClick={handleCreateWallet}
          >
            <Image src={PinkPlus} alt="" />
            <p className="text-[#FF4085] group-hover:font-bold duration-500">
              Create
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex xl:flex-row flex-col items-center xl:gap-4 md:gap-4 gap-2">
          {/* Keyless Secure Wallet */}
          <div
            className={`${
              activeButton === "AA"
                ? "bg-black"
                : "bg-white hover:bg-gray-200 duration-500 "
            } rounded-full px-4 py-4 w-full border-2 border-black cursor-pointer group relative`}
          >
            <div className="flex flex-row justify-between items-center gap-3 group">
              {/*  <div>
                <input
                  type="text"
                  placeholder="New Wallet Name"
                  className="outline-none border-b-2 border-black text-sm w-20"
                  value={newWalletName}
                  onChange={handleWalletNameChange}
                />
                <button
                  className="text-[#FF4085] hover:font-bold duration-500"
                  onClick={handleSaveWalletName}
                >
                  Save
                </button>
              </div> */}
              <Image
                src={Wallet}
                alt="wallet"
                className="md:w-14 md:h-14 xl:w-12 xl:h-12"
              />
              <div className="flex flex-col space-y-1">
                <p
                  className={`${
                    activeButton === "AA" ? "text-white" : "text-black"
                  }  font-semibold text-sm md:text-lg xl:text-sm`}
                >
                  Keyless Secure Wallet
                </p>
                <div className="flex flex-row items-center gap-4 z-[1]">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">
                    {minifyEthereumAddress(secureWalletAddress)}
                  </p>
                  <Image
                    src={activeButton === "AA" ? Copy : Copy2}
                    className={`${
                      activeButton === "AA" ? "text-white" : "text-black"
                    }`}
                    alt="copy"
                    onClick={() => {
                      copyToClipBoard(secureWalletAddress);
                      enqueueSnackbar("Address Copied", {
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
                  setMainContentVisible(true);
                  setSend(false);
                  setWalletAddress(false);
                }}
              ></div>
            </div>
          </div>

          {/* EOA Wallet */}
          <div
            className={`${
              activeButton === "EOA"
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
              <div className="flex flex-col space -y-1">
                <p
                  className={`${
                    activeButton === "EOA" ? "text-white" : "text-black"
                  }  font-semibold text-sm md:text-lg xl:text-sm`}
                >
                  EOA Wallet
                </p>
                <div className="flex flex-row items-center gap-4 z-[1]">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">
                    {minifyEthereumAddress(eoaWalletAddress)}
                  </p>
                  <Image
                    src={activeButton === "EOA" ? Copy : Copy2}
                    alt=""
                    onClick={() => {
                      copyToClipBoard(eoaWalletAddress);
                      enqueueSnackbar("Address Copied", {
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
                  setMainContentVisible(true);
                  setSend(false);
                  setWalletAddress(false);
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-auto custom-scrollbar h-64">
        {isLoading ? (
          <>
            {arr.map((e, index) => {
              return <HistoryCardSkelton key={index} />;
            })}
          </>
        ) : (
          allToken?.map((e, ind) => (
            <div key={ind} className="">
              <TransactionItem
                icon={e?.logo ? e?.logo : ETH}
                label={e?.name}
                amount={e?.price}
                value={parseFloat(e?.balance).toFixed(3)}
                valueName={e?.symbol}
                send="Send"
                receive="Receive"
              />
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mainnet;
