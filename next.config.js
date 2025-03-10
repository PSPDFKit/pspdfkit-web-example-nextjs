// Exclude pspdfkit from the client-side bundle to optimize performance
// and avoid potential conflicts with the script loaded in layout.js
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        pspdfkit: "@nutrient-sdk/viewer",
      });
    }

    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        pspdfkit: "@nutrient-sdk/viewer",
      },
    },
  },
};

module.exports = nextConfig;
