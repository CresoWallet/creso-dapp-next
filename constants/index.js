const isDev = process.env.NODE_ENV === "development";

export const AUTH_TOKEN = "auth_token";

// export const BASE_URL = isDev
//   ? "https://creso-b02eab9f8c40.herokuapp.com"
//   : "http://localhost:8080"

export const BASE_URL = "https://creso-b02eab9f8c40.herokuapp.com";

export const RPC_URL_GOERLI =
  "https://goerli.infura.io/v3/a0b74d65173042fabe9639289bd336b5";

export const RPC_URL_ETHEREUM =
  "https://mainnet.infura.io/v3/eea527fad1a6443fad081d744695f3b1";

export const RPC_URL_POLYGON =
  "https://polygon-mainnet.infura.io/v3/eea527fad1a6443fad081d744695f3b1";

export const RPC_URL_BNB = "https://bsc-dataseed1.binance.org";

export const CRYPTO_TO_USD =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbinancecoin%2Cmatic-network%2Ctether%2Cusd-coin%2CWorldcoin%2COKB&vs_currencies=usd";

export const ETHERSCAN = "https://goerli.etherscan.io";


// email: crouprotrepressoi-4048@yopmail.com
// pass: 1 to 9