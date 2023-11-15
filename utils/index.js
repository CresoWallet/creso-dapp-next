
function minifyEthereumAddress(address, prefixLength = 4, suffixLength = 4) {
    if (address.length <= prefixLength + suffixLength) {
        return address; // Address is too short to minify
    }
  
    const prefix = address.slice(0, prefixLength + 2);
    const suffix = address.slice(-suffixLength);
  
    return `${prefix}...${suffix}`;
  }
  
  export default minifyEthereumAddress;