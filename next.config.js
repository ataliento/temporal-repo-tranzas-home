/* eslint-disable prettier/prettier */
const path = require("path");

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = async (_phase, { _defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          filename: "static/chunks/remoteEntry.js",
          remotes: {},
          extraOptions: {},
          exposes: {
            "./HomePage": "./src/pages/index",
          },
          shared: {},
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
