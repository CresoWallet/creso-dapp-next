"use client";
import React, { useEffect } from "react";

import { AUTH_TOKEN } from "@/constants";

const LoginPage = () => {
  -useEffect(() => {
    localStorage.removeItem(AUTH_TOKEN);
    window.location.href = "/";
    // router.push("/login");
  }, []);

  return <div></div>;
};

export default LoginPage;
