import Bitcoin from "../assets/network/bitcoin.png";
import Eth from "../assets/network/eth.png";
import BSC from "../assets/network/bsc.png";
import Polygon from "../assets/network/polygon.png";
import Avalanche from "../assets/network/avalanche.png";
import Optimism from "../assets/network/optimism.png";

const networks = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    description: "Bitcoin Mainnet",
    icon: Bitcoin,
  },
  {
    id: "eth",
    name: "Etherum",
    description: "Etherum Mainnet",
    icon: Eth,
  },
  {
    id: "bsc",
    name: "BSC",
    description: "BNB Smart Chain Mainnet",
    icon: BSC,
  },
  {
    id: "polygon",
    name: "Polygon",
    description: "Polygon Mainnet",
    icon: Polygon,
  },
  {
    id: "avalanche",
    name: "Avalanche C",
    description: "Avalanche COChain",
    icon: Avalanche,
  },
  {
    id: "optimism",
    name: "Optimism",
    description: "OP Mainnet",
    icon: Optimism,
  },
];

export default networks;
