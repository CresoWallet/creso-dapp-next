import { Network, Alchemy } from "alchemy-sdk";

export const alchemy = new Alchemy({
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_BASE_ETH,
  network: Network.ETH_MAINNET,
});
