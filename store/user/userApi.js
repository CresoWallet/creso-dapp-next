"use client";
import { AUTH_TOKEN, BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(AUTH_TOKEN);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    authenticateUser: builder.mutation({
      query: () => ({
        url: "/api/authenticate",
        method: "get",
      }),
    }),
  }),
});

// export const selectUser = (state: RootState) => state[userApi.reducerPath].authenticateUser.data;

export const { useAuthenticateUserMutation } = userApi;
