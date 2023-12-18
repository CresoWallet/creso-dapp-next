import Image from 'next/image'
import React from 'react'

const LeftHeader = (props) => {
	const { title, descriptionColor, icon1, icon2, mobileImg, navbarTrigger, setNavbarTrigger, isMobile } = props
	return (
		<div className="flex flex-row items-center justify-between w-full">
			{/* Leftside Title */}
			<div>
				{title && <p className="xl:text-4xl md:text-md text-black font-bold text-xl space-y-1">
					{title}
				</p>}
				{descriptionColor && <p className="text-[#6F6E7A] text-xs">
					Last Backup:
					<span className="uppercase text-[#2100EC]">
						{descriptionColor}
					</span>
				</p>}

			</div>
			{/* Right Icon List */}
			<div className="flex flex-row items-center justify-between text-3xl gap-4">
				{icon1 && <div className="icon-set-1">
					{icon1}
				</div>}
				{icon2 && <div className="icon-set-2">
					{icon2}
				</div>}

				{isMobile && (
					<Image
						alt=""
						className="navico"
						src={mobileImg}
						onClick={() => setNavbarTrigger(!navbarTrigger)}
					/>
				)}
			</div>
		</div>
	)
}

export default LeftHeader