"use client";
import { authenticateUser } from "@/clientApi/auth";
import { AUTH_TOKEN } from "@/constants";
import { setToken } from "@/services/axios";
import { useAuthenticateUserMutation } from "@/store/user";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// interface IUser {
//   _id: string;
//   username: string;
//   walletAddress: string;
//   avatar: string;
//   email: string;
// }

// interface UserContextType {
//   user: IUser | null;
//   isAuthenticated: boolean;
//   authenticate: () => void;
// }
// interface UserProviderProps {
//   children: React.ReactNode;
// }

const UserContext = createContext(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authenticate, { data, error }] = useAuthenticateUserMutation();
  const [status, setStatus] = useState("idle");

  const handleAuthentication = async () => {
    try {
      const res = await authenticateUser();
      if (res) {
        setUser(res.data.user);
        setStatus("authenticated");
      }
    } catch (error) {
      setStatus("failed");
    }
  };
  useEffect(() => {
    // const token = localStorage.getItem(AUTH_TOKEN);
    // setToken(token);
    //if (token) {

    ///api/authenticate if user
    handleAuthentication();
    //} else {
    //setStatus("failed");
    // }
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     setUser(data.user);
  //     setStatus("authenticated");
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (error) {
  //     // localStorage.removeItem(AUTH_TOKEN);
  //     setStatus("failed");
  //   }
  // }, [error]);

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated: !!user, handleAuthentication, status }}
    >
      {children}
    </UserContext.Provider>
  );
};
