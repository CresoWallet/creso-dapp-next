/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.okx.com", "www.okx.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
