"use client";
import { AUTH_TOKEN } from "@/constants";
import { setToken } from "@/services/axios";
import { useAuthenticateUserMutation } from "@/store/user";
import React, { createContext, useContext, useEffect, useState } from "react";

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

export const UserProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticate, { data, error }] = useAuthenticateUserMutation();
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    setToken(token)
    if (token) {
      authenticate();
    }
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem(AUTH_TOKEN);
    }
  }, [error]);

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated: !!user, authenticate }}
    >
      {children}
    </UserContext.Provider>
  );
};
