/* eslint-disable prettier/prettier */
const path = require("path");

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const {createDelegatedModule} = require("@module-federation/utilities");

const remotes = isServer => {
  const location = isServer ? "ssr" : "chunks";

  return {
    "transaccional-home": createDelegatedModule(require.resolve("./remote-delegate.js"), {
      remote: `transaccional-home@http://localhost:3005/_next/static/${location}/remoteEntry.js`
    }),
  };
};

module.exports = {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./src"));
    config.plugins.push(
      new NextFederationPlugin({
        name: "transaccional-home",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./home": "./src/pages/index.tsx",
          "./pages-map": "./pages-map.js",
        },
        remotes: remotes(options.isServer),
        shared: {
          lodash: {}
        },
        extraOptions: {
          automaticAsyncBoundary: true
        }
      }),
    );

    return config;
  },
};
