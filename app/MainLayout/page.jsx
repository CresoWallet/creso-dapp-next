"use client";

import Header from '@/components/Header';
import LeftHeader from '@/components/LeftHeader';
import SideNav from '@/components/SideNav'
import React, { useState, useEffect, useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import { CiSearch } from "react-icons/ci";
import Ham from "../../assets/Dashboard/ham.png";
import LeftSide from './LeftSide';
import { useUser } from '@/providers/UserProvider';
import RightSide from './RightSide';
import { useRouter } from 'next/navigation';
import { WalletContext } from '@/providers/WalletProvider';

const MainLayout = () => {
	const router = useRouter();
	const [navbarTrigger, setNavbarTrigger] = useState(false);
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
	const [showCreateWallet, setShowCreateWallet] = useState(false);
	const [showCoinWallet, setShowCoinWallet] = useState(false);
	const [showWallet, setShowWallet] = useState(false);
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
		secureWalletAddress,
		eoaWalletAddress,
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

	const handleCreateWallet = () => {
		setShowCreateWallet(!showCreateWallet);
		// close other models
		setShowCoinWallet(false);
		setShowWallet(false);
	};

	const handleClose = () => {
		setShowCreateWallet(false);
	};

	const handleCoinWallet = (data) => {
		setCoinData(data?.item);
		setShowCoinWallet(true);
		// close other models
		setShowCreateWallet(false);
		setShowWallet(false);
	};

	const handleShowModel = () => {
		setShowModal(true);
		// close other models
		setShowCoinWallet(false);
		setShowWallet(false);
		setShowCreateWallet(false);
	};

	const handleCloseCoinWallet = () => {
		setShowCoinWallet(false);
	};

	const handleShowWallet = (data) => {
		setWalletType(data?.walletName);
		setShowWallet(true);
		// close other models
		setShowCoinWallet(false);
		setShowCreateWallet(false);
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
			<div className='grid lg:grid-cols-12  px-2 my-2 divide-x'>
				{/* ------------Sidebar---------- */}

				{/* ------------ Leftside Main ---------- */}
				<div className='col-span-8 pt-16 px-12'>
					<div className="">
						<LeftHeader
							title={"Dashboard"}
							descriptionColor={"28 OCT 2023"}
							icon1={<CiSearch />}
							mobileImg={Ham}
							navbarTrigger={navbarTrigger}
							setNavbarTrigger={setNavbarTrigger}
							isMobile={isMobile}
						/>

						<LeftSide
							showCreateWallet={showCreateWallet}
							setShowCreateWallet={setShowCreateWallet}
							showWallet={showWallet}
							setShowWallet={setShowWallet}
							navbarTrigger={navbarTrigger}
							setNavbarTrigger={setNavbarTrigger}
							secureWalletAddress={secureWalletAddress}
							eoaWalletAddress={eoaWalletAddress}
							fetchWallet={fetchWallet}
							WalletContext={WalletContext}
							handleCreateWallet={handleCreateWallet}
							handleCoinWallet={handleCoinWallet}
							handleShowModel={handleShowModel}
							handleShowWallet={handleShowWallet}
							user={user}
							status={user}
							router={router}
						/>
					</div>
				</div>

				{/* ------------ Rightside Main ---------- */}
				<div className="hidden xl:block md:block pt-16 col-span-4" >
					<Header />
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
					/>
				</div>
			</div>
		</>
	)
}

export default MainLayout