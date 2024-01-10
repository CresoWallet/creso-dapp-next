"use clinet";

import React, { useContext, useState } from "react";
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

const LegacyWallet = ({ handleBackButton, type, handleClose }) => {
  const [wallet, setWallet] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fetchWallet } = useContext(WalletContext);

  const handleChange = (e) => {
    const newText = e.target.value;

    // Check if the input text exceeds the limit (20 characters)
    if (newText.length <= 20) {
      setInputText(newText);
      setError(false); // Reset error state if within the limit
    } else {
      setError(true); // Set error state if exceeding the limit
    }
  };

  const handleCreateEOAWallet = async () => {
    setLoading(true);

    if (type === "EOA") {
      try {
        const payload = {
          walletName: inputText,
        };
        const res = await createEOAWalletAPI(payload);
        if (res) {
          await fetchWallet();
          enqueueSnackbar(`Successful wallet creation`, {
            variant: "success",
          });
          setLoading(false);
          handleClose();
        }

        console.log(res);
      } catch (error) {
        console.log(error);
        enqueueSnackbar(`Something went wrong`, {
          variant: "error",
        });
      }
    } else if ((type = "AAA")) {
      try {
        const payload = {
          walletName: inputText,
          network: "goerli",
        };
        const res = await createSmartWalletAPI(payload);
        if (res) {
          await fetchWallet();
          enqueueSnackbar(`Successful wallet creation`, {
            variant: "success",
          });
          setLoading(false);
          handleClose();
        }

        console.log(res);
      } catch (error) {
        console.log(error);
        enqueueSnackbar(`Something went wrong`, {
          variant: "error",
        });
      }
    }
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
      <div className="flex flex-row items-center gap-2">
        <Image alt="" src={Ethereum} className="w-10 h-10" />
        <p className="font-semibold">Ethereum Mainnet</p>
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
          <p className="px-4">{inputText.length}/20</p>
        </div>
        <div className="border border-solid border-[#E5E5F0] rounded-full mx-3 py-3">
          <div className="flex flex-row items-center justify-between">
            <input
              required={true}
              type="text"
              placeholder="E.g. My Wallet"
              className="placeholder:text-sm placeholder:text-black placeholder:font-bold  px-5 focus:outline-none"
              value={inputText}
              onChange={handleChange}
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
            Max length is 20 characters
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
