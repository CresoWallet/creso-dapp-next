const isDev = process.env.NODE_ENV === "development";

export const AUTH_TOKEN = "auth_token";

export const BASE_URL = isDev
  ? "http://localhost:8080"
  : "https://creso-b02eab9f8c40.herokuapp.com";

// export const BASE_URL = "https://creso-b02eab9f8c40.herokuapp.com";

export const RPC_URL_GOERLI =
  "https://goerli.infura.io/v3/a0b74d65173042fabe9639289bd336b5";

export const RPC_URL_ETHEREUM =
  "https://mainnet.infura.io/v3/eea527fad1a6443fad081d744695f3b1";

export const RPC_URL_POLYGON =
  "https://polygon-mainnet.infura.io/v3/eea527fad1a6443fad081d744695f3b1";

export const RPC_URL_BNB = "https://binance.llamarpc.com";

export const CRYPTO_TO_USD =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

export const ETHERSCAN = "https://goerli.etherscan.io";
