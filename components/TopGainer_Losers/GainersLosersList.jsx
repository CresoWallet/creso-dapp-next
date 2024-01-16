// components/CryptoList.js
import { useEffect, useState } from "react";
import axios from "axios";

const GainersLosersList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "0fc337da-5466-4e99-8d83-72b83ae04cb3", // Replace with your actual API key
            },
          }
        );

        // Check the response structure and adjust accordingly
        if (response.data.status.error_code === 0) {
          setCryptoData(response.data.data);
        } else {
          console.error(
            "API request error:",
            response.data.status.error_message
          );
        }
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto List</h1>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>{crypto.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GainersLosersList;
