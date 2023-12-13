import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getGuardians } from "@/clientApi/wallet";
import AccordionItem from "@/components/recover/userWalletAccordion";
import { WalletContext } from "@/providers/WalletProvider";
import { minifyEthereumAddress } from "@/utils";
import Creso from "../../assets/Dashboard/creso2.png";
import { getRecoveryStatus } from "@/services/ethers/wallet";
import UserWalletRecovery from "@/components/recover/userWalletRecovery";
import GuardianWallets from "@/components/recover/guaridanWallets";

const WalletStatus = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between items-center xl:mt-8 md:mt-10 mt-8">
        <p className="text-sm font-semibold">Wallet / Recovery Status</p>
      </div>

      <div className="flex flex-col gap-y-5 mb-10">
        {" "}
        <UserWalletRecovery />
        <GuardianWallets />
      </div>
    </div>
  );
};

export default WalletStatus;
