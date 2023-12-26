"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import HistoryCard from "../cards/HistoryCard";
import { WalletContext } from "@/providers/WalletProvider";
import { getHistory, getUSDValue } from "@/clientApi/wallet";
import HistoryCardSkelton from "../skeleton/HistoryCardSkelton";

function History() {
  const { secureWalletAddress, eoaWalletAddress } = useContext(WalletContext);

  const arr = ["1", "2", "3", "4"];

  const [usd, setUsd] = useState(0);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHistory = async () => {
    setIsLoading(true);
    try {
      const res = await getHistory({
        network: "goerli",
      });

      if (res) {
        setHistory(res?.data);
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
        <>
          {arr.map((e, index) => {
            return <HistoryCardSkelton key={index} />;
          })}
        </>
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
