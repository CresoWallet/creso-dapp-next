"use client";

import React, { useState } from "react";
/* The line `import Link from "next/link";` is importing the `Link` component from the `next/link`
module. This component is used in Next.js to create client-side navigation links. It allows you to
create links between pages in your Next.js application without having to do a full page reload. */
import Link from "next/link";
import Image from "next/image";

const NavItem = ({ pathName, href, icon, hoverIcon, label, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href} className="group relative">
      <div
        className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
          pathName === href ? "bg-white" : ""
        } `}
      ></div>
      <div
        className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
          pathName === href ? "bg-[#2100EC]" : ""
        }`}
      ></div>
      <div
        className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full !py-4 navActiveMenu  ${
          pathName === href ? "bg-white" : ""
        }`}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hover ? (
          <Image
            alt=""
            src={pathName === href ? hoverIcon : icon}
            className={"w-6 h-6 text-[#B1A6F8]"}
          />
        ) : (
          <Image alt="" src={hoverIcon} className={"w-6 h-6 text-[#B1A6F8]"} />
        )}
        <p
          className={`text-[#B1A6F8] text-sm group-hover:text-black font-medium hidden lg:block ${
            pathName === href ? "text-black" : ""
          }`}
        >
          {label}
        </p>
      </div>
      <div
        className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
          pathName === href ? "bg-white" : ""
        }`}
      ></div>
      <div
        className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
          pathName === href ? "bg-[#2100EC]" : ""
        }`}
      ></div>
    </Link>
  );
};

export default NavItem;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const NavItem = ({ pathName, href, icon, label }) => {
//   return (
//     <Link href={href} className="group relative">
//       <div
//         className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
//           pathName === href ? "bg-white" : ""
//         } `}
//       ></div>
//       <div
//         className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//           pathName === href ? "bg-[#2100EC]" : ""
//         }`}
//       ></div>
//       <div
//         className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full !py-4 navActiveMenu  ${
//           pathName === href ? "bg-white" : ""
//         }`}
//       >
//         <Image alt="" src={icon} className="w-6 h-6 text-[#B1A6F8]" />
//         <p
//           className={`text-[#B1A6F8] text-sm group-hover:text-black font-medium hidden lg:block ${
//             pathName === href ? "text-black" : ""
//           }`}
//         >
//           {label}
//         </p>
//       </div>
//       <div
//         className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
//           pathName === href ? "bg-white" : ""
//         }`}
//       ></div>
//       <div
//         className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//           pathName === href ? "bg-[#2100EC]" : ""
//         }`}
//       ></div>
//     </Link>
//   );
// };

// export default NavItem;
