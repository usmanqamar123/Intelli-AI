const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/affiliate/become-an-affiliate",
        destination: "/become-an-affiliate",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.midjourney.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "**",
      },
    ],
    domains: [
      "frontend.iamscientist.ai",
      "res.cloudinary.com", // Image Enhancer
      "replicate.delivery", // Thumbnail Generator
      "oaidalleapiprodscus.blob.core.windows.net", //AI Visionary
    ],
  },
  // Uncomment if additional Webpack customizations are needed
  /*
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production"),
        })
      );
    }

    return config;
  },
  */
};

module.exports = nextConfig;
