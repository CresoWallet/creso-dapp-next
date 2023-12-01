const isDev = process.env.NODE_ENV === "development";

export const AUTH_TOKEN = "auth_token";

export const BASE_URL = isDev
  ? "http://localhost:8080"
  : "https://creso-b02eab9f8c40.herokuapp.com";

// export const BASE_URL = "https://creso-b02eab9f8c40.herokuapp.com";

export const RPC_URL =
  "https://goerli.infura.io/v3/a0b74d65173042fabe9639289bd336b5";
