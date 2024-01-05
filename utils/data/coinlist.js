import Ethereum from "../../assets/Dashboard/etherum.png";
import BNB from "../../assets/Dashboard/bnb2.png";
import Polygon from "../../assets/Dashboard/polygon.png";

export const coinList = [
  {
    coinName: "USDC",
    tokenAddress: "0x7966Eb9c617062f396Bc798515134f30b701af44",
    value: "$2,321.79",
    network: "goerli",
    standard: "stable",
  },
  {
    coinName: "USDT",
    tokenAddress: "0x2227E4764be4c858E534405019488D9E5890Ff9E",
    value: "$2,321.79",
    network: "goerli",
    standard: "stable",
  },
  {
    coinName: "WIDE",
    tokenAddress: "0x80920B48664b45c8FD9C2f4201AcFf6249c72768",
    value: "$2,321.79",
    network: "goerli",
    standard: "stable",
  },
  {
    coinName: "ALPHA",
    tokenAddress: "0xef2B9E1495ee88d9940077a0210a43cd1B9CBB8c",
    value: "$2,321.79",
    network: "goerli",
    standard: "stable",
  },
  {
    coinName: "WETH",
    tokenAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    value: "$2,321.79",
    network: "goerli",
    standard: "stable",
  },
  {
    coinName: "BNB",
    tokenAddress: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    value: "$16.32",
    network: "ethereum",
    standard: "stable",
  },
  // {
  //   coinName: "WETH",
  //   tokenAddress: "0x2c7d002fa0b01206f10bf926a312be3cd5ef969e",
  //   value: "$804.94",
  //   network: "ethereum",
  //   standard: "stable",
  // },
  // {
  //   coinName: "USDT",
  //   tokenAddress: "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
  //   value: "$5,123.79",
  //   network: "ethereum",
  //   standard: "stable",
  // },
  // {
  //   coinName: "DAI",
  //   tokenAddress: "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
  //   value: "$1,009.79",
  //   network: "ethereum",
  //   standard: "stable",
  // },
];

export const tokenList = {
  goerli: [
    {
      tokenSymbol: "USDC",
      tokenName: "USD Coin",
      tokenContractAddress: "0x7966Eb9c617062f396Bc798515134f30b701af44",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/USDC.png",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
    {
      tokenSymbol: "USDT",
      tokenName: "Tether",
      tokenContractAddress: "0x2227E4764be4c858E534405019488D9E5890Ff9E",
      tokenLogoUrl:
        "https://static.okx.com/cdn/wallet/logo/USDT-991ffed9-e495-4d1b-80c2-a4c5f96ce22d.png",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
    {
      tokenSymbol: "USDC",
      tokenName: "USD Coin",
      tokenContractAddress: "0x62bD2A599664D421132d7C54AB4DbE3233f4f0Ae",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/USDC.png",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
    {
      tokenSymbol: "ALPHA",
      tokenName: "Stella",
      tokenContractAddress: "0xef2B9E1495ee88d9940077a0210a43cd1B9CBB8c",
      tokenLogoUrl:
        "https://www.okx.com/cdn/wallet/logo/alpha-20220328.png?x-oss-process=image/format,webp/resize,w_88,h_88/format,webp",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
    {
      tokenSymbol: "WETH",
      tokenName: "Wrapped Ether",
      tokenContractAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      tokenLogoUrl:
        "https://www.okx.com/cdn/wallet/logo/WETH-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png?x-oss-process=image/format,webp",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
  ],
  ethereum: [
    {
      decimals: "6",
      tokenContractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      tokenLogoUrl:
        "https://static.okx.com/cdn/wallet/logo/USDT-991ffed9-e495-4d1b-80c2-a4c5f96ce22d.png",
      tokenName: "Tether",
      tokenSymbol: "USDT",
    },
    {
      decimals: "6",
      tokenContractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/USDC.png",
      tokenName: "USDC",
      tokenSymbol: "USDC",
    },
    {
      decimals: "18",
      tokenContractAddress: "0x163f8c2467924be0ae7b5347228cabf260318753",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/WLD-20230726.png",
      tokenName: "Worldcoin",
      tokenSymbol: "WLD",
    },
    {
      decimals: "18",
      tokenContractAddress: "0x75231f58b43240c9718dd58b4967c5114342a86c",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/okb.png",
      tokenName: "OKB",
      tokenSymbol: "OKB",
    },
    {
      decimals: "18",
      tokenContractAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/BNB-20220308.png",
      tokenName: "Binance Coin",
      tokenSymbol: "BNB",
    },
  ],
  bnb: [
    {
      tokenSymbol: "BUSD",
      tokenName: "Binance-Peg BUSD Token",
      tokenContractAddress: "0x9196C2f1c4f3AAe9bf72495EA9e4E59566916683",
      tokenLogoUrl:
        "https://www.okx.com/cdn/wallet/logo/BUSD-20220308.png?x-oss-process=image/format,webp",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
    {
      tokenSymbol: "BTCB",
      tokenName: "Bitcoin Black",
      tokenContractAddress: "0x29E57c3918d38AE7cB4c567a4112dfe0fcb9c893",
      tokenLogoUrl:
        "https://www.okx.com/cdn/wallet/logo/BTCB-20220308.png?x-oss-process=image/format,webp",
      value: "$2,321.79",
      network: "goerli",
      standard: "stable",
    },
  ],
  polygon: [
    {
      decimals: "18",
      tokenContractAddress: "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/BNB-20220308.png",
      tokenName: "BNB",
      tokenSymbol: "BNB",
    },
    {
      decimals: "18",
      tokenContractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      tokenLogoUrl:
        "https://static.okx.com/cdn/wallet/logo/USDT-991ffed9-e495-4d1b-80c2-a4c5f96ce22d.png",
      tokenName: "Tether",
      tokenSymbol: "USDT",
    },
    {
      tokenSymbol: "USDC",
      tokenName: "USD Coin",
      tokenContractAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      tokenLogoUrl: "https://static.okx.com/cdn/wallet/logo/USDC.png",
      value: "$2,321.79",
    },
  ],
};

export const network = [
  {
    key: "Goerli Testnet",
    value: "goerli",
    symbol: "ETH",
    logoUrl: Ethereum,
  },
  {
    key: "Ethereum Mainnet",
    value: "ethereum",
    symbol: "ETH",
    logoUrl: Ethereum,
  },
  {
    key: "BNB Smart Chain",
    value: "bnb",
    symbol: "BNB",
    logoUrl: BNB,
  },
  {
    key: "Polygon",
    value: "polygon",
    symbol: "MATIC",
    logoUrl: Polygon,
  },
];
