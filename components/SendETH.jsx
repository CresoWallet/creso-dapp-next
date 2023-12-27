"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import Image from "next/image";
import { minifyEthereumAddress } from "@/utils";
import CustomButton3 from "./CustomButton3";
import Ethereum from "../assets/Dashboard/etherum.png";
import BNB from "../assets/Dashboard/bnb2.png";
import Polygon from "../assets/Dashboard/polygon.png";
import Weth from "../assets/Dashboard/weth.png";
import Usdc from "../assets/Dashboard/usdc.png";
import Dai from "../assets/Dashboard/dai4.png";
import Send from "../assets/Dashboard/send.png";
import Creso from "../assets/Dashboard/creso2.png";
import CustomButton from "./CustomButton";
import { transferEthAPI } from "@/clientApi/wallet";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { WalletContext } from "@/providers/WalletProvider";
import { tokenList } from "@/utils/data/coinlist";
import { getTokenBalance } from "@/services/ethers/wallet";

const SendETH = ({ handleBackButton, walletArr, networks, handleClose }) => {
  const popupRef = useRef();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isLoading },
  } = useForm();
  const [openWalletList, setOpenWalletList] = useState(false);
  const [openNetowrkList, setOpenNetworkList] = useState(false);
  const [openCoinList, setOpenCoinList] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({});
  const [loading, setLoading] = useState(false);
  const { fetchWallet } = useContext(WalletContext);
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [selectedCoin, setSelectedCoin] = useState();
  const [standard, setStandard] = useState("native");
  const [tokenBalance, setTokenBalance] = useState(0);
  const [networkFirstValue] = networks.values();
  const [initialToken, setInitialToken] = useState({});

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenWalletList(false);
      setOpenNetworkList(false);
      setOpenCoinList(false);
    }
  };

  const walletHandleClick = () => {
    setOpenWalletList(true);
  };

  const handleSelectWallet = (wallet) => {
    setOpenWalletList(false);
    setSelectedWallet(wallet);
  };

  const handleSelectNetwork = (item) => {
    setSelectedCoin();
    setInitialToken();
    setSelectedNetwork(item);
    setOpenNetworkList(false);
  };

  const handleSelectCoin = (item) => {
    setSelectedCoin(item);
    setOpenCoinList(false);
  };
  const handleToggle = () => {
    if (standard === "native") {
      setStandard("stable");
    } else {
      setStandard("native");
    }
  };

  const onSubmit = async (data) => {
    const transferPayload = {
      type: selectedWallet.type,
      sendTo: data.to,
      amount: data.amount,
      from: selectedWallet.address,
      // network: "goerli",
      network: selectedNetwork
        ? selectedNetwork?.value
        : networkFirstValue.value,
      standard: standard,
      tokenAddress:
        standard === "stable"
          ? selectedCoin
            ? selectedCoin?.tokenContractAddress
            : initialToken?.tokenContractAddress
          : "",
    };

    // console.log(transferPayload);

    try {
      setLoading(true);
      const res = await transferEthAPI(transferPayload);
      if (res) {
        await fetchWallet();
        enqueueSnackbar(`Transaction successful`, {
          variant: "success",
        });
        setLoading(false);
        handleClose();
      }
    } catch (error) {
      console.log("error : ", error);
      enqueueSnackbar(`Transaction failed`, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTokenBalance = async () => {
    if (
      Object.keys(selectedWallet).length !== 0 &&
      (selectedCoin || initialToken)
    ) {
      try {
        const tokenAddress = selectedCoin?.tokenContractAddress
          ? selectedCoin?.tokenContractAddress
          : initialToken?.tokenContractAddress;

        const network = selectedNetwork
          ? selectedNetwork.value
          : networkFirstValue.value;

        const blnce = await getTokenBalance(
          tokenAddress,
          selectedWallet?.address,
          network
        );

        setTokenBalance(blnce);
      } catch (error) {
        console.log("error : ", error);
        enqueueSnackbar(`Something went wrong`, {
          variant: "error",
        });
      }
    }
  };

  useEffect(() => {
    let coinFirstValue = "";
    if (selectedNetwork) {
      [coinFirstValue] = tokenList[selectedNetwork?.value].values();
    } else {
      [coinFirstValue] = tokenList[networkFirstValue?.value].values();
    }

    setInitialToken(coinFirstValue);
  }, [selectedNetwork, selectedCoin]);

  useEffect(() => {
    fetchTokenBalance();
  }, [selectedWallet, selectedCoin, initialToken]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
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

      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">Network</p>
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
              <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col  gap-4 min-w-[350px] rounded-[20px] z-[1]">
                {networks.map((item, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer gap-4"
                    onClick={() => handleSelectNetwork(item)}
                  >
                    <div className="flex flex-row items-center justify-between  min-h-[50px]">
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
                          <p className="text-sm">{item.key}</p>
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
        {/* <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 min-h-[66px] text-[13px] text-[#a09faa]">
          <input
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Enter wallet address or ENS,NNS"
          ></input>
          0x7Cb6cAfa1fB1eAf283C1857897296866b3b6829B
        </div> */}
      </div>

      <div className="flex justify-between pt-2">
        <p className="text-sm mx-4">{`Switch To ${standard === "native" ? "Stable" : "Native"
          }`}</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={standard === "stable" ? "checked" : ""}
            onChange={handleToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {standard === "stable" && (
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm mx-4">Token</p>
            <div className="flex items-center gap-1">
              {tokenBalance && selectedCoin !== "native" && (
                <p className="text-sm">{`Balance : ${tokenBalance} `}</p>
              )}
              <p className="text-sm">{` ${selectedCoin?.tokenSymbol
                ? selectedCoin?.tokenSymbol
                : initialToken?.tokenSymbol
                }`}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
            <div
              className="flex flex-row items-center gap-2 w-full justify-between cursor-pointer"
              onClick={() => setOpenCoinList(true)}
            >
              <div className="flex items-center gap-2">
                <>
                  {selectedCoin ? (
                    <Image
                      // className="w-6 h-6"
                      alt=""
                      src={selectedCoin?.tokenLogoUrl}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      // className="w-6 h-6"
                      alt=""
                      src={initialToken?.tokenLogoUrl || Creso}
                      width={20}
                      height={20}
                    />
                  )}
                </>
                {selectedCoin?.tokenName ? (
                  selectedCoin.tokenName
                ) : (
                  <p className="opacity-50">{initialToken?.tokenName}</p>
                )}
              </div>
            </div>
            {openCoinList && (
              <>
                <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col  gap-4 min-w-[350px] rounded-[20px] z-[1]">
                  {tokenList[
                    selectedNetwork
                      ? selectedNetwork.value
                      : networkFirstValue.value
                  ].map((item, key) => (
                    <div
                      key={key}
                      className="flex flex-col cursor-pointer gap-4"
                      onClick={async () => {
                        handleSelectCoin(item);
                      }}
                    >
                      <div className="flex flex-row items-center justify-between  min-h-[50px]">
                        <div className="flex flex-row gap-4 items-center">
                          <div>
                            <Image
                              alt=""
                              src={item.tokenLogoUrl}
                              // className="w-8 h-8"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            <p className="text-sm">{item.tokenName}</p>
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
          {/* <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 min-h-[66px] text-[13px] text-[#a09faa]">
          <input
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Enter wallet address or ENS,NNS"
          ></input>
          0x7Cb6cAfa1fB1eAf283C1857897296866b3b6829B
        </div> */}
        </div>
      )}

      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">From</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <div
            className="flex flex-row items-center gap-2 w-full justify-between cursor-pointer"
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
                  <p className="opacity-50 text-sm">wallet address</p>
                ))}
            </div>
            <div className="flex w-full max-w-[150px]">
              <div className="flex flex-row gap-1">
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
                  <span className="text-sm md:text-xs font-semibold whitespace-nowrap align-middle w-full flex items-center justify-center">
                    {selectedWallet.walletName || (
                      <p className="hover:font-bold">Select Wallet</p>
                    )}
                  </span>
                </>
              ) : (
                <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                  Select Wallet
                </p>
              )}
            </div>
          </div>
          {openWalletList && (
            <>
              <div className="bg-white shadow-xl absolute px-4 py-6 top-[55px] w-full left-0 flex flex-col  gap-4 min-w-[350px] rounded-[20px] z-[2]">
                {walletArr.map((wallet, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer gap-4"
                    onClick={() => handleSelectWallet(wallet)}
                  >
                    <div className="flex flex-row items-center justify-between  min-h-[60px]">
                      <div className="flex flex-row gap-4">
                        <div>
                          <Image alt="" src={Creso} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <p className="text-base md:text-sm font-semibold">
                            {wallet ? wallet.walletName : ""}
                          </p>
                          <div className="flex gap-x-5 flex-wrap gap-y-1.5">
                            <p className="text-xs">
                              {wallet
                                ? minifyEthereumAddress(wallet.address)
                                : ""}
                            </p>

                            <p className="text-xs opacity-50">{`(${wallet.balance[
                              selectedNetwork
                                ? selectedNetwork?.value
                                : networkFirstValue?.value
                            ]
                              } ${selectedNetwork ? selectedNetwork?.symbol : "ETH"
                              })`}</p>
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
              <div
                ref={popupRef}
                onClick={handleBackgroundClick}
                className="fixed top-0 right-0 w-full h-full bg-black/30 cursor-pointer z-[1]"
              ></div>
            </>
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
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 cursor-pointer">
          <input
            {...register("to", {
              required: "Required",
            })}
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none w-3/4"
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

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm mx-4">Amount</p>
            {Object.keys(selectedWallet).length === 0 ? (
              <span></span>
            ) : (
              // <p className="text-sm">Balance : {selectedWallet.balance} ETH</p>
              <p className="text-sm">{`Balance : ${selectedWallet.balance[
                selectedNetwork
                  ? selectedNetwork?.value
                  : networkFirstValue?.value
              ]
                } ${selectedNetwork ? selectedNetwork?.symbol : "ETH"}`}</p>
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
      </div>
    </form>
  );
};

export default SendETH;
