/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.okx.com",
      "www.okx.com",
      "assets.coingecko.com",
      "static.alchemyapi.io",
      "creso-b02eab9f8c40.herokuapp.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/dashboard",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
