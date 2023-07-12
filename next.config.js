/* eslint-disable prettier/prettier */
const path = require("path");

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const DEFAULT_SHARE_SCOPE = {
  "react": {
    eager: true,
    requiredVersion: false,
    singleton: true,
  },
  "@architecture-it/stylesystem": {
    eager: true,
    requiredVersion: false,
    singleton: true,
  },
  "@mui/material": {
    eager: true,
    requiredVersion: false,
    singleton: true,
  },
};

/** @type {import('next').NextConfig} */
module.exports = async (_phase, { _defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, options) => {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          filename: "static/chunks/remoteEntry.js",
          remotes: {},
          // extraOptions: {
          //   automaticAsyncBoundary: true,
          // },
          exposes: {
            "./HomePage": "./src/pages/index",
            "./HomeSkeleton": "./src/components/Skeleton/index",
          },
          shared: DEFAULT_SHARE_SCOPE,
        })
      );
      config.resolve.modules.push(path.resolve("./src"));
      return config;
    },
    output: "standalone",
    images: {
      domains: ["componentesui.blob.core.windows.net"],
    },
  };

  return withBundleAnalyzer(nextConfig);
};
