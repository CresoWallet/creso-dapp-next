import React, { useState } from "react";
import Link from "next/link";
import UserDetails from "./UserDetails";
import CustomButton3 from "./CustomButton3";
import { FiUser } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { BiWifi2 } from "react-icons/bi";
import { GiAerialSignal } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

const links = [
  { id: "account", label: "Account", icon: FiUser },
  { id: "recovery", label: "Recovery Key", icon: GoKey },
  { id: "security", label: "Security", icon: RiComputerLine },
  { id: "session", label: "V1 Sessions", icon: BiWifi2 },
  { id: "session2", label: "V2 Sessions", icon: BiWifi2 },
  { id: "network", label: "Network Settings", icon: GiAerialSignal },
  { id: "advance", label: "Advanced", icon: LuSettings2 },
];

const Account = ({ setShowModal }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleClick = (link) => {
    setClickedLink(link);
  };

  return (
    <>
      <div className="flex flex-col space-y-3">
        <UserDetails />

        <CustomButton3
          title="Backup"
          titleColor="[#FF4085]"
          buttonColor="[#FFC8DC]"
          onClick={() => setShowModal(true)}
        />

        <div className="flex flex-col xl:space-y-4  space-y-4 xl:pt-6 md:pt-3  pt-2 ">
          {links.map(({ id, label, icon: Icon }) => (
            <Link href={`/${id}`} key={id}>
              <div
                className={`flex flex-row justify-between items-center cursor-pointer mx-4 pt-8 ${
                  hoveredLink === id ? "text-purple-800 font-bold" : ""
                } ${clickedLink === id ? "text-purple-800 font-bold" : ""}`}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(id)}
              >
                <div className="flex flex-row gap-2 items-center ">
                  <Icon />
                  <p className="text-sm">{label}</p>
                </div>
                <MdKeyboardArrowRight />
              </div>
              <hr className="my-4" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import UserDetails from "./UserDetails";
// import CustomButton3 from "./CustomButton3";
// import { FiUser } from "react-icons/fi";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { GoKey } from "react-icons/go";
// import { RiComputerLine } from "react-icons/ri";
// import { BiWifi2 } from "react-icons/bi";
// import { GiAerialSignal } from "react-icons/gi";
// import { LuSettings2 } from "react-icons/lu";

// const Account = ({ user, setShowModal }) => {
//   return (
//     <>
//       <div className="flex flex-col space-y-3">
//         <UserDetails />

//         {user ? getInitials(user.username) : ""}
//         {/* {user && !user?.isEmailVerified && (
//           <CustomButton3
//             title="Backup"
//             titleColor="[#FF4085]"
//             buttonColor="[#FFC8DC]"
//             onClick={() => setShowModal(true)}
//           />
//         )} */}

//         {
//           <CustomButton3
//             title="Backup"
//             titleColor="[#FF4085]"
//             buttonColor="[#FFC8DC]"
//             onClick={() => setShowModal(true)}
//           />
//         }
//         <div className="flex flex-col xl:space-y-4  space-y-4 xl:pt-6 md:pt-3  pt-2 ">
//           <Link href="/account">
//             <div className="flex flex-row justify-between items-center  cursor-pointer mx-4 pt-8">
//               <div className="flex flex-row gap-2 items-center ">
//                 <FiUser />
//                 <p className="text-sm">Account</p>
//               </div>

//               <MdKeyboardArrowRight />
//             </div>
//             <hr className="my-4" />
//           </Link>

//           <Link href="/recovery">
//             <div className="flex flex-row justify-between items-center  cursor-pointer mx-4">
//               <div className="flex flex-row gap-2 items-center">
//                 <GoKey />
//                 <p className="text-sm">Recovery Key</p>
//               </div>
//               <MdKeyboardArrowRight />
//             </div>
//             <hr className="my-4" />
//           </Link>

//           <Link href="/security">
//             <div className="flex flex-row justify-between items-center  cursor-pointer mx-4">
//               <div className="flex flex-row gap-2 items-center">
//                 <RiComputerLine />
//                 <p className="text-sm">Security</p>
//               </div>
//               <MdKeyboardArrowRight />
//             </div>
//             <hr className="my-4" />
//           </Link>

//           <Link href="/session">
//             <div className="flex flex-row justify-between items-center  cursor-pointer mx-4 ">
//               <div className="flex flex-row gap-2 items-center">
//                 <BiWifi2 />
//                 <p className="text-sm">V1 Sessions</p>
//               </div>
//               <MdKeyboardArrowRight />
//             </div>
//             <hr className="my-4" />
//           </Link>

//           <div className="flex flex-row justify-between items-center  cursor-pointer mx-4 pt-0">
//             <div className="flex flex-row gap-2 items-center">
//               <BiWifi2 />
//               <p className="text-sm">V2 Sessions</p>
//             </div>
//             <div>
//               <MdKeyboardArrowRight />
//             </div>
//           </div>
//           <hr className="my-4" />

//           <Link href="/network">
//             <div className="flex flex-row justify-between items-center  cursor-pointer mx-4 pt-3">
//               <div className="flex flex-row gap-2 items-center">
//                 <GiAerialSignal />
//                 <p className="text-sm">Network Settings</p>
//               </div>
//               <MdKeyboardArrowRight />
//             </div>
//             <hr className="my-4" />
//           </Link>

//           <Link href="/advance">
//             <div className="flex flex-row justify-between items-center  cursor-pointer mx-4">
//               <div className="flex flex-row gap-2 items-center">
//                 <LuSettings2 />
//                 <p className="text-sm">Advanced</p>
//               </div>
//               <MdKeyboardArrowRight />
//             </div>
//             <hr className="my-4" />
//           </Link>
//         </div>
//       </div>

//       {/* <div className="h-96 ml-96 border-l border-solid border-black"></div> */}
//     </>
//   );
// };

// export default Account;
