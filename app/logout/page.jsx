"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { AUTH_TOKEN } from "@/constants";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem(AUTH_TOKEN);
    router.push("/login");
  }, []);

  return <div></div>;
};

export default LoginPage;
