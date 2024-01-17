import axios from "axios";

export const getTopGainersLosers = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      }
    );

    // // Process the response data as needed
    // const topGainers = response.data.slice(0, 5);
    // const topLosers = response.data.slice(-5);

    // Process the response data as needed
    let topGainers, topLosers;

    if (isGainersOnly) {
      topGainers = response.data.slice(0, 5);
      topLosers = [];
    } else {
      topGainers = response.data.slice(0, 5);
      topLosers = response.data.slice(-5);
    }

    return { topGainers, topLosers };
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error);
    return { topGainers: [], topLosers: [] };
  }
};
