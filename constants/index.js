const isDev = process.env.NODE_ENV === "development";

export const AUTH_TOKEN = "auth_token";

export const BASE_URL = isDev
  ? "http://localhost:8080"
  : "https://creso-b02eab9f8c40.herokuapp.com";
