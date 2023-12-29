import { WalletContext } from "@/providers/WalletProvider";
import { alchemy } from "@/utils/alchemy";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { formatEther } from "viem";

const TokensComponent = () => {
  // const [tokens, setTokens] = useState([]);
  const {
    setAllToken,
    setTotalBalance,
    activeButton,
    setFilteredData,
    setOriginalData,
    eoaWalletAddress,
    secureWalletAddress,
  } = useContext(WalletContext);

  const address =
    activeButton === "AA" ? secureWalletAddress : eoaWalletAddress;

  const baseURL = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const data = {
    jsonrpc: "2.0",
    method: "alchemy_getTokenBalances",
    headers: {
      "Content-Type": "application/json",
    },
    params: [`${address}`],
    id: 42,
  };

  // Config object for making a request with axios
  const config = {
    method: "post",
    url: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  async function getTokens() {
    let response = await axios(config);
    response = response.data;
    // console.log("response", response)

    const balances = response.result;
    //console.log("balances", balances)
    const tokensData = [];
    //console.log("tokensData--->", tokensData)

    const contractAddresses = balances.tokenBalances
      .filter((token) => token.tokenBalance)
      .map((token) => token.contractAddress);
    //console.log("contractAddresses", contractAddresses)

    const metadataPromises = contractAddresses.map(async (contractAddress) => {
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
    });

    // Wait for all metadata requests to complete
    const metadataResponses = await Promise.all(metadataPromises);
    // console.log("metadataResponses", metadataResponses)

    metadataResponses.forEach((metadataResponse, index) => {
      const balance = balances?.tokenBalances[index]?.tokenBalance;

      if (typeof balance !== "undefined") {
        const metadata = metadataResponse.data;
        // console.log("metadata", metadata)

        if (metadata?.result) {
          const balanceValue = balance / Math.pow(10, metadata.result.decimals);
          const formattedBalance = balanceValue.toFixed(6);
          // console.log("formattedBalance", formattedBalance)

          tokensData.push({
            name: metadata.result.name,

            logo: metadata.result.logo,
            balance: `${formattedBalance}`,
          });
        }
      }
    });

    return tokensData;
  }

  const new1 = async () => {
    // const address1 = "0x3cC69915d2CA2E7c4A7C930600A7cDCBda34EB2C"
    // const contract = "0x232e48C3Fcc31Cf977573F1e5D77933D63F4C4cA"

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

    // console.log("totalBalance--->", totalBalance);
  };
  const fetchAllToken = async () => {
    try {
      const response = await axios.get(
        "https://tokens.coingecko.com/uniswap/all.json"
      );
      const data = response?.data?.tokens;
      console.log("🚀 ~ fetchAllToken ~ data:", data);
      setOriginalData(data);
      setFilteredData(data);

      const cache = await caches.open("my-cache");
      cache.put("/api/data", new Response(JSON.stringify(data)));
    } catch (error) {
      console.error("Error fetching and caching data:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const tokenData = await getTokens();
      setAllToken(tokenData);

      console.log("tokenData", tokenData);
    }

    fetchData();
    fetchAllToken();

    new1();
  }, [activeButton]);

  return <div className="hidden">TokensComponent</div>;
};

export default TokensComponent;
