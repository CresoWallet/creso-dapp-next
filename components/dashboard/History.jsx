"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import HistoryCard from "../cards/HistoryCard";
import { WalletContext } from "@/providers/WalletProvider";
import { getHistory, getUSDValue } from "@/clientApi/wallet";
import HistoryCardSkelton from "../skeleton/HistoryCardSkelton";

function History() {
  const { secureWalletAddress, eoaWalletAddress } = useContext(WalletContext);

  // console.log("his : ", history);

  const [usd, setUsd] = useState(0);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHistory = async () => {
    setIsLoading(true);
    try {
      const res = await Promise.all([
        await getHistory({
          address: eoaWalletAddress,
          network: "goerli",
        }),
        await getHistory({
          address: secureWalletAddress,
          network: "goerli",
        }),
      ]);

      if (res) {
        const history = [...res[0].data, ...res[1].data];

        let sortedArray = history.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        let result = sortedArray.filter((e, i) => {
          return (
            sortedArray.findIndex((x) => {
              return x.hash == e.hash;
            }) == i
          );
        });

        setHistory(result);
      }
    } catch (error) {
      console.log("error : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (eoaWalletAddress && secureWalletAddress) {
      fetchHistory();
    }
  }, [eoaWalletAddress, secureWalletAddress]);
  useEffect(() => {
    fetchUsdValue();
  }, []);

  const fetchUsdValue = async () => {
    try {
      const res = await getUSDValue();
      if (res) {
        setUsd(res?.data?.ethereum?.usd);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="flex flex-col mt-4 space-y-4">
      {isLoading ? (
        <HistoryCardSkelton />
      ) : (
        <>
          {history?.slice(0, 5)?.map((item, i) => {
            return (
              <HistoryCard
                key={`history_${i}`}
                secureWalletAddress={secureWalletAddress}
                eoaWalletAddress={eoaWalletAddress}
                to={item?.to}
                hash={item?.hash}
                value={item.value}
                usd={0}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default History;
