/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.okx.com", "themoviedb.org"],
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
