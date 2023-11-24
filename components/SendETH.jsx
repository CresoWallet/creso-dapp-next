"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import Image from "next/image";
import { getBalance, minifyEthereumAddress } from "@/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import CustomButton3 from "./CustomButton3";
import Ethereum from "../assets/Dashboard/etherum.png";
import Creso from "../assets/Dashboard/creso2.png";
import Send from "../assets/Dashboard/send.png";
import CustomButton from "./CustomButton";
import { getUserWallets, transferEthAPI } from "@/clientApi/wallet";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { WalletContext } from "@/providers/WalletProvider";
import { coinList } from "@/utils/data/coinlist";

const SendETH = ({ handleBackButton, walletArr, network }) => {
  const popupRef = useRef();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isLoading },
  } = useForm();
  const [openWalletList, setOpenWalletList] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({});
  const [loading, setLoading] = useState(false);
  const { fetchWallet } = useContext(WalletContext);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedToken, setSelectedToken] = useState("native");
  const [tokenBalance, setTokenBalance] = useState(0);

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWalletList(false);
    }
  };

  const walletHandleClick = () => {
    setOpenWalletList(true);
  };

  const handleSelectWallet = (wallet) => {
    setOpenWalletList(false);
    setSelectedWallet(wallet);
  };

  const onSubmit = async (data) => {
    const transferPayload = {
      type: selectedWallet.type,
      sendTo: data.to,
      amount: data.amount,
      from: selectedWallet.address,
      // network: "goerli",
      network: network,
      standard: selectedToken === "native" ? "native" : "standard",
      tokenAddress: selectedToken,
    };

    try {
      setLoading(true);
      const res = await transferEthAPI(transferPayload);
      console.log(res);
      if (res) {
        await fetchWallet();
        enqueueSnackbar(`Transaction successful`, {
          variant: "success",
        });
        setLoading(false);
      }
    } catch (error) {
      enqueueSnackbar(`Transaction failed`, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
    // console.log(selectedWallet);
    // console.log(data);
    console.log(transferPayload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute bg-white flex flex-col xl:mx-8 md:mx-4 mx-0 px-2 xl:px-0 md:px-2 mt-10 w-full xl:pr-10 pr-2 space-y-4 h-screen z-20"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">Send ETH</p>

        <CustomButton3
          title="Back"
          buttonColor="[#FFC8DC]"
          titleColor="[#FF4085]"
          onClick={handleBackButton}
        />
      </div>
      {/* <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">Network</p>
        <div className="flex flex-row items-center gap-2 border border-solid rounded-full px-4 py-2">
          <Image alt="" src={Ethereum} />
          <p className="text-sm">Ethereum Mainnet</p>
        </div>
      </div> */}
      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">Network</p>
        <select
          onChange={(e) => {
            setSelectedNetwork(e.target.value);
          }}
          className="border border-gray-300 rounded-full  h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none text-sm"
        >
          {network.map((item, index) => {
            return (
              <option key={item.key} value={item.value}>
                {item.key}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm mx-4">Coin</p>
          {tokenBalance && selectedToken !== "native" && (
            <p className="text-sm">Balance : {tokenBalance} ETH</p>
          )}
        </div>

        <select
          onChange={async (e) => {
            setSelectedToken(e.target.value);
            if (e.target.value !== "native") {
              const blnce = await getBalance(e.target.value);
              setTokenBalance(blnce);
            }
          }}
          className="border border-gray-300 rounded-full  h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none text-sm"
        >
          <option value="native">Native</option>
          {coinList
            .filter((e) => e.standard === "stable")
            .map((item) => {
              return (
                <option key={item.tokenAddress} value={item.tokenAddress}>
                  {item.coinName}
                </option>
              );
            })}
        </select>
      </div>

      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">From</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <button
            className="flex flex-row items-center gap-2 w-full justify-between"
            onClick={walletHandleClick}
          >
            <div className="flex items-center gap-2">
              <>
                {selectedWallet ? (
                  <Image alt="" src={selectedWallet.walletImage || Creso} />
                ) : (
                  <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                    Select Wallet
                  </p>
                )}
              </>
              {selectedWallet &&
                (minifyEthereumAddress(selectedWallet.address) ? (
                  <p className="font-semibold text-sm md:text-xs">
                    {minifyEthereumAddress(selectedWallet.address)}
                  </p>
                ) : (
                  <p className="opacity-50">wallet address</p>
                ))}
            </div>
            <div className="flex w-full max-w-[150px]">
              <div className="flex flex-row gap-1">
                {/* <CustomButton3
              title="EQA"
              buttonColor="[#EEEEF1]"
              titleColor="black"
            /> */}
                <div>
                  {selectedWallet && (
                    <button className="bg-[#EEEEF1] py-2 px-2 rounded-full border border-solid">
                      <p className="text-xs font-medium">
                        {selectedWallet.type || "Type"}
                      </p>
                    </button>
                  )}
                </div>
              </div>
              {selectedWallet ? (
                <>
                  <p className="text-sm md:text-xs font-semibold whitespace-nowrap align-middle w-full flex items-center justify-center">
                    {selectedWallet.walletName || (
                      <p className="hover:font-bold">Select Wallet</p>
                    )}
                  </p>
                </>
              ) : (
                <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                  Select Wallet
                </p>
              )}
            </div>
          </button>
          {openWalletList && (
            <div
              ref={popupRef}
              onClick={handleBackgroundClick}
              className="fixed top-0 right-0 w-full h-full flex xl:justify-end md:justify-end cursor-pointer"
            >
              <div className="bg-white shadow-xl absolute mt-[300px]  mr-[120px] px-4 py-4 flex flex-col space-y-4 gap-4 min-w-[350px] rounded-md">
                {walletArr.map((wallet, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer gap-4"
                    onClick={() => handleSelectWallet(wallet)}
                  >
                    <div className="flex flex-row items-center justify-between  h-10">
                      <div className="flex flex-row gap-4">
                        <div>
                          <Image alt="" src={Creso} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <p className="text-base md:text-sm font-semibold">
                            {wallet ? wallet.walletName : ""}
                          </p>
                          <div className="flex gap-x-5">
                            <p className="text-xs">
                              {wallet
                                ? minifyEthereumAddress(wallet.address)
                                : ""}
                            </p>
                            <p className="text-xs opacity-50">
                              {`(${wallet.balance})`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="bg-[#EEEEF1] py-2 px-2 rounded-full border border-solid">
                          <p className="text-xs font-medium">
                            {wallet ? wallet.type : "Type"}
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 min-h-[66px] text-[13px] text-[#a09faa]">
          <input
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Enter wallet address or ENS,NNS"
          ></input>
          0x7Cb6cAfa1fB1eAf283C1857897296866b3b6829B
        </div> */}
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">To</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2">
          <input
            {...register("to", {
              required: "Required",
            })}
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Enter wallet address or ENS,NNS"
          ></input>
          <CustomButton3
            title="Paste"
            buttonColor="[#2100EC]"
            titleColor="white"
          />
        </div>
        {errors.to && (
          <p className="text-red-500 font-semibold text-xs pt-1 pl-5">
            {errors.to.message}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm mx-4">Amount</p>
          {/* {selectedWallet && (<span></span>) || (
            <p className="text-sm">Balance : 0 ETH</p>
          )} */}
          {Object.keys(selectedWallet).length === 0 ? (
            <span></span>
          ) : (
            <p className="text-sm">Balance : {selectedWallet.balance} ETH</p>
          )}
        </div>

        <div className="flex flex-row items-center gap-2 border border-solid rounded-full px-4 py-4">
          <input
            {...register("amount", {
              required: "Required",
            })}
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none w-full"
            placeholder="Input amount"
          ></input>
        </div>
        {errors.amount && (
          <p className="text-red-500 font-semibold text-xs pt-1 pl-5">
            {errors.amount.message}
          </p>
        )}
      </div>

      <CustomButton
        isLoading={loading}
        img={Send}
        name="Send"
        bgColor="black"
        type={"submit"}
      />
    </form>
  );
};

export default SendETH;
