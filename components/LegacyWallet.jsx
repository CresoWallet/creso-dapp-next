"use client";

import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import CustomButton3 from "./CustomButton3";
import Ethereum from "../assets/Dashboard/etherum.png";
import CustomButton1 from "./CustomButton1";
import CreateWallet from "./CreateWallet";
import { createEOAWalletAPI, createSmartWalletAPI } from "@/clientApi/wallet";
import { enqueueSnackbar } from "notistack";
import { WalletContext } from "@/providers/WalletProvider";
import { FiInfo } from "react-icons/fi";
import Sucess from "../assets/Dashboard/Sucess.svg";
import BNB from "../assets/Dashboard/bnb2.png";
import Polygon from "../assets/Dashboard/polygon.png";

const LegacyWallet = ({ handleBackButton, type, handleClose, networks }) => {
  const [wallet, setWallet] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fetchWallet } = useContext(WalletContext);
  const [networkFirstValue] = networks.values();
  const [openWalletList, setOpenWalletList] = useState(false);
  const [openNetowrkList, setOpenNetworkList] = useState(false);

  const [selectedNetwork, setSelectedNetwork] = useState();

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWalletList(false);
      setOpenNetworkList(false);
      setOpenCoinList(false);
    }
  };

  const popupRef = useRef();

  const handleChange = (e) => {
    const newText = e.target.value;

    // Check if the input text exceeds the limit (40 characters)
    if (newText.length <= 40) {
      setInputText(newText);
      setError(false); // Reset error state if within the limit
    } else {
      setError(true); // Set error state if exceeding the limit
    }
  };

  const handleCreateEOAWallet = async () => {
    setLoading(true);

    // Check if the inputText (name field) is empty
    if (inputText.trim() === "") {
      setError(true); // Set error state to true to indicate an issue
      setLoading(false);
      enqueueSnackbar(`Please fill in the name field.`, {
        variant: "error",
      });
      return; // Exit the function early if the name field is empty
    }

    //   if (type === "EOA") {
    //     try {
    //       const payload = {
    //         walletName: inputText,
    //       };
    //       const res = await createEOAWalletAPI(payload);
    //       if (res) {
    //         await fetchWallet();
    //         enqueueSnackbar(`Successful wallet creation`, {
    //           variant: "success",
    //         });
    //         setLoading(false);
    //         handleClose();
    //       }

    //       console.log(res);
    //     } catch (error) {
    //       console.log(error);
    //       enqueueSnackbar(`Something went wrong`, {
    //         variant: "error",
    //       });
    //     }
    //   } else if ((type = "AAA")) {
    //     try {
    //       const payload = {
    //         walletName: inputText,
    //         network: "goerli",
    //       };
    //       const res = await createSmartWalletAPI(payload);
    //       if (res) {
    //         await fetchWallet();
    //         enqueueSnackbar(`Successful wallet creation`, {
    //           variant: "success",
    //         });
    //         setLoading(false);
    //         handleClose();
    //       }

    //       console.log(res);
    //     } catch (error) {
    //       console.log(error);
    //       enqueueSnackbar(`Something went wrong`, {
    //         variant: "error",
    //       });
    //     }
    //   }
    // };
    try {
      let res;

      if (type === "EOA") {
        const payload = {
          walletName: inputText,
        };
        res = await createEOAWalletAPI(payload);
      } else if (type === "AAA") {
        const payload = {
          walletName: inputText,
          network: "",
        };
        res = await createSmartWalletAPI(payload);
      }

      if (res) {
        await fetchWallet();
        enqueueSnackbar(`Successful wallet creation`, {
          variant: "success",
        });
        handleClose();
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar(`Something went wrong`, {
        variant: "error",
      });
    } finally {
      setLoading(false); // Close loading button in both success and error scenarios
    }
  };

  const handleSelectNetwork = (item) => {
    setSelectedNetwork(item);
    setOpenNetworkList(false);
  };

  return (
    <div className="absolute bg-white flex flex-col xl:mx-8 md:mx-4 mx-0 mt-10 xl:px-0 px-2 md:px-2 space-y-8 h-full">
      {wallet && <CreateWallet handleBackButton={() => setWallet(false)} />}
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">
          {type === "EOA" ? "Legacy Wallet" : "Smart Wallet"}
        </p>
        <div>
          <CustomButton3
            title="Back"
            buttonColor="[#FFC8DC]"
            titleColor="[#FF4085]"
            onClick={handleBackButton}
          />
        </div>
      </div>

      {/* <div className="flex flex-row items-center gap-2">
        <Image alt="" src={Ethereum} className="w-10 h-10" />
        <p className="font-semibold">Goreli Testnet</p>
      </div> */}

      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">Send ETH</p>

        <CustomButton3
          title="Back"
          buttonColor="[#FFC8DC]"
          titleColor="[#FF4085]"
          onClick={handleBackButton}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">Network </p>

        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <div
            className="flex flex-row items-center gap-2 w-full justify-between cursor-pointer"
            onClick={() => setOpenNetworkList(true)}
          >
            <div className="flex items-center gap-2">
              <>
                {selectedNetwork ? (
                  <Image
                    className="w-6 h-6"
                    alt=""
                    src={
                      selectedNetwork.value === "ethereum" ||
                      selectedNetwork.value === "goerli"
                        ? Ethereum
                        : selectedNetwork.value === "bnb"
                        ? BNB
                        : selectedNetwork.value === "polygon"
                        ? Polygon
                        : Creso
                    }
                  />
                ) : (
                  <Image
                    className="w-6 h-6"
                    alt=""
                    src={
                      networkFirstValue?.value === "ethereum" ||
                      networkFirstValue?.value === "goerli"
                        ? Ethereum
                        : networkFirstValue.value === "bnb"
                        ? BNB
                        : networkFirstValue.value === "polygon"
                        ? Polygon
                        : Creso
                    }
                  />
                )}
              </>
              {/* {selectedNetwork?.key ? (
                selectedNetwork.key
              ) : (
                <p className="opacity-50">Select Network</p>
              )} */}
              {selectedNetwork?.key ? (
                selectedNetwork.key
              ) : (
                <p className="opacity-50"> {networkFirstValue.key}</p>
              )}
            </div>
          </div>

          {openNetowrkList && (
            <>
              <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col  gap-4 min-w-[350px] max-h-[${maxHeight}px] overflow-y-auto rounded-[20px] z-[1]">
                {networks.map((item, key) => (
                  <div
                    key={key}
                    className={`${
                      item.key === "Goerli Testnet" && "cursor-pointer"
                    } flex flex-col gap-4`}
                    onClick={() =>
                      item.key === "Goerli Testnet" && handleSelectNetwork(item)
                    }
                  >
                    <div className="flex flex-row items-center justify-between min-h-[50px]">
                      <div className="flex flex-row gap-4 items-center">
                        <div>
                          <Image
                            alt=""
                            src={
                              item.value === "ethereum"
                                ? Ethereum
                                : item.value === "bnb"
                                ? BNB
                                : item.value === "polygon"
                                ? Polygon
                                : Ethereum
                            }
                            className="w-8 h-8"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <p
                            className={`${
                              item.key === "Goerli Testnet"
                                ? "text-black"
                                : "text-sm text-gray-500"
                            } `}
                          >
                            {item.key}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={popupRef}
                onClick={handleBackgroundClick}
                className="fixed top-0 right-0 w-full h-full bg-black/20 cursor-pointer"
              ></div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-2 text-[#A09FAA]">
        <FiInfo size={35} />
        <p className="text-xs ">
          Compatible with all Dapps; lower Gas fees; only supports paying gas
          with native token; does not support advanced features.
          <span className="text-[#FF4085] px-1 font-bold">Learn More</span>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between py-2 px-4 font-bold">
          <p className="px-4">Name Wallet</p>
          <p className="px-4">{inputText.length}/40</p>
        </div>
        <div className="border border-solid border-[#E5E5F0] rounded-full mx-3 py-3">
          <div className="flex flex-row items-center justify-between">
            <input
              required={true}
              type="text"
              placeholder="E.g. My Wallet"
              className="placeholder:text-xs placeholder:text-black placeholder:font-bold  px-5 focus:outline-none w-full"
              value={inputText}
              onChange={handleChange}
              maxLength={40} // Adjust the max length to 40 characters
              style={{ flex: 1 }}
            />
            <div className="px-2">
              <CustomButton3
                title={type}
                buttonColor="[#EEEEF1]"
                titleColor="black"
              />
            </div>
          </div>
        </div>
        {error && (
          <p className="text-red-500 font-semibold text-xs pt-1 pl-5">
            Max length is 40 characters
          </p>
        )}
      </div>

      <div className="flex flex-row justify-center items-center gap-2">
        <Image alt="" src={Sucess} className="w-8 h-8" />
        <p className="text-sm font-bold">
          Same address on other EVM compatible chains will be created
          automatically.
          <span className="text-[#FF4085] px-1">Networks Supported</span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <CustomButton1
          name="Cancel"
          borderColor="black"
          bgColor="white"
          handleClick={handleBackButton}
          isDisabled={false}
        />
        {error ? (
          <CustomButton1
            name="Confirm"
            bgColor="black"
            textColor="white"
            isDisabled={true}
          />
        ) : (
          <CustomButton1
            isLoading={loading}
            name="Confirm"
            bgColor="black"
            textColor="white"
            handleClick={handleCreateEOAWallet}
            isDisabled={false}
          />
        )}
      </div>
    </div>
  );
};

export default LegacyWallet;
