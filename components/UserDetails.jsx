import React from "react";
import Image from "next/image";
import User from "../assets/security/User.png";
import { useUser } from "@/providers/UserProvider";

const UserDetails = () => {
  const { user, isAuthenticated, status } = useUser();

  function getInitials(username) {
    return username.substring(0, 2).toUpperCase();
  }
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className=" top-1 right-1 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
        <p className=" font-semibold text-xs">
          {user ? getInitials(user.username) : ""}
        </p>
      </div>
      {/* <Image alt="" src={User} /> */}
      <div className="flex flex-col space-y-1">
        <p className="font-bold text-xl">{user?.username}</p>
        <p className="text-sm text-[#A09FAA]">{user?.email}</p>
        <p className="text-xs text-[#A09FAA] mr-xside">
          Last Backup test:{" "}
          <span className="text-sm text-black">28 OCT 2023</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
