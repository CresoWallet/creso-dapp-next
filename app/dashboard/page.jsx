"use client";
import React, { useEffect } from "react";
import MainLayout from "../MainLayout/page";
import { useUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";
import { VscFeedback } from "react-icons/vsc";

const Dashboard = () => {
  return (
    <>
      <MainLayout />
      {/* <div className="fixed bottom-3 right-3 bg-blue-500 h-96 w-96 rounded-full ">
        <VscFeedback />;
      </div> */}
    </>
  );
};

export default Dashboard;
