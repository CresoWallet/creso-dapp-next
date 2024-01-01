"use client"
import React, { useEffect } from "react";
import MainLayout from "../MainLayout/page";
import { useUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";


const Dashboard = () => {

  return (
    <>
      <MainLayout />
    </>
  );
};

export default Dashboard;
