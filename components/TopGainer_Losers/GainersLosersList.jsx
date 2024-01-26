// import axios from "axios";

// export const getTopGainersLosers = async () => {
//   try {
//     const response = await axios.get(
//       "https://api.coingecko.com/api/v3/coins/markets",
//       {
//         params: {
//           vs_currency: "usd",
//           order: "market_cap_desc",
//           per_page: 10,
//           page: 1,
//           sparkline: false,
//         },
//       }
//     );

//     // // Process the response data as needed
//     // const topGainers = response.data.slice(0, 5);
//     // const topLosers = response.data.slice(-5);

//     // Process the response data as needed
//     let topGainers, topLosers;

//     if (isGainersOnly) {
//       topGainers = response.data.slice(0, 5);
//       topLosers = [];
//     } else {
//       topGainers = response.data.slice(0, 5);
//       topLosers = response.data.slice(-5);
//     }

//     return { topGainers, topLosers };
//   } catch (error) {
//     console.error("Error fetching data from CoinGecko:", error);
//     return { topGainers: [], topLosers: [] };
//   }
// };

import axios from "axios";
// const API_KEY = "10b2cbbe-ac8e-46cf-8576-fd3e06654e99";

// const API_KEY = "CG-Ke4onzuXJM5AeUNWKxnQt7KB";
// const BASE_URL = "https://api.coingecko.com/api/v3";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en

// Function to fetch top gainers
export const fetchTopGainers = async () => {
  // try {
  //   const response = await axios.get(`${BASE_URL}/coins/markets`, {
  //     params: {
  //       vs_currency: "usd",
  //       order: "market_cap_desc",
  //       per_page: 5,
  //       page: 1,
  //       sparkline: false,
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CoinGecko-ApiKey": API_KEY,
  //     },
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching top gainers:", error);
  //   return null;
  // }
  // const fetchAllToken = async () => {
  try {
    const response = await axios.get(
      // "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en"
    );
    // const data = response?.data;
    // console.log("🚀 ~ fetchAllToken ~ response:", response?.data?.tokens);
    // setOriginalData(data);
    // setFilteredData(data);
    return response.data;
    // const cache = await caches.open("my-cache");
    // cache.put("/api/data", new Response(JSON.stringify(data)));
  } catch (error) {
    console.error("Error fetching and caching data:", error);
  }
};
// };

// Function to fetch top losers
export const fetchTopLosers = async () => {
  // try {
  //   const response = await axios.get(`${BASE_URL}/coins/markets`, {
  //     params: {
  //       vs_currency: "usd",
  //       order: "market_cap_asc", // Corrected: Sorting by market cap in ascending order
  //       per_page: 5,
  //       page: 1,
  //       sparkline: false,
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CoinGecko-ApiKey": API_KEY,
  //     },
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching top losers:", error);
  //   return null;
  // }
  try {
    const response = await axios.get(
      // "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_asc&per_page=5&page=1&sparkline=false&locale=en"
    );
    // const data = response?.data;
    // console.log("🚀 ~ fetchAllToken ~ response:", response?.data?.tokens);
    // setOriginalData(data);
    // setFilteredData(data);
    return response.data;
    // const cache = await caches.open("my-cache");
    // cache.put("/api/data", new Response(JSON.stringify(data)));
  } catch (error) {
    console.error("Error fetching and caching data:", error);
  }
};
