import React from "react";
import Image from "next/image";
import User from "../assets/security/User.png";
import { useUser } from "@/providers/UserProvider";

const UserDetails = () => {
  const { user, isAuthenticated, status } = useUser();
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image alt="" src={User} />
      <div className="flex flex-col space-y-1">
        <p className="font-bold text-xl">{user?.username}</p>
        <p className="text-sm text-[#A09FAA]">{user?.email}</p>
        <p className="text-xs text-[#A09FAA] mr-xside">
          Last Backup :  <span className="text-sm text-black">28 OCT 2023</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
