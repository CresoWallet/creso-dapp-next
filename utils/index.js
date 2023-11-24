import { ethers } from "ethers";

export const minifyEthereumAddress = (
  address,
  prefixLength = 4,
  suffixLength = 4
) => {
  if (!address) {
    return "";
  }
  if (address.length <= prefixLength + suffixLength) {
    return address; // Address is too short to minify
  }

  const prefix = address.slice(0, prefixLength + 2);
  const suffix = address.slice(-suffixLength);

  return `${prefix}...${suffix}`;
};

// Function to download the file
export function downloadFile(data, filename, mimeType) {
  const blob = new Blob([data], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
}

export const getBalance = async (address) => {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-goerli.publicnode.com"
  );

  const balanceInWei = await provider.getBalance(address);
  const balance = ethers.formatEther(balanceInWei);
  return balance;
};
