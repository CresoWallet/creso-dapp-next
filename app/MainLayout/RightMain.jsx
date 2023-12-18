"use client"

import React, { useContext, useEffect, useState } from 'react'
import RightSide from './RightSide'
import { useRouter } from 'next/navigation';
import { useUser } from '@/providers/UserProvider';
import { WalletContext } from '@/providers/WalletProvider';

const RightMain = () => {
    const router = useRouter();
    const [navbarTrigger, setNavbarTrigger] = useState(false);
    // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    // const [showCreateWallet, setShowCreateWallet] = useState(false);
    const [showCoinWallet, setShowCoinWallet] = useState(false);
    // const [showWallet, setShowWallet] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [usd, setUsd] = useState(0);
    // const [wallets, setWallets] = useState([]);
    const [walletType, setWalletType] = useState("");
    const [coinData, setCoinData] = useState("");
    const { user, isAuthenticated, status } = useUser();
    const {
        secureWalletBalance,
        eoaWalletBalance,
        wallets,
        fetchWallet,
    } = useContext(WalletContext);

    useEffect(() => {
        if (status === "failed") {
            router.push("/login");
        }
    }, [status]);

    useEffect(() => {
        fetchWallet();
    }, []);

    const handleClose = () => {
        setShowCreateWallet(false);
    };

    const handleCloseCoinWallet = () => {
        setShowCoinWallet(false);
    };

    const handleCloseShowWallet = () => {
        setShowWallet(false);
    };

    useEffect(() => {
        if (navbarTrigger) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [navbarTrigger]);
    return (
        <>
            <RightSide
                showCoinWallet={showCoinWallet}
                setShowCoinWallet={setShowCoinWallet}
                showModal={showModal}
                setShowModal={setShowModal}
                usd={usd}
                setUsd={setUsd}
                walletType={walletType}
                setWalletType={setWalletType}
                coinData={coinData}
                setCoinData={setCoinData}
                isAuthenticated={isAuthenticated}
                secureWalletBalance={secureWalletBalance}
                eoaWalletBalance={eoaWalletBalance}
                wallets={wallets}
                WalletContext={WalletContext}
                router={router}
                handleCloseShowWallet={handleCloseShowWallet}
                handleCloseCoinWallet={handleCloseCoinWallet}
                handleClose={handleClose}
                user={user}
            />
        </>
    )
}

export default RightMain