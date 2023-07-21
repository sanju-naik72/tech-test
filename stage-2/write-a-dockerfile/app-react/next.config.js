const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  ...(myEnv && {
    webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
      return config;
    },
  }),
  bastPath: "/docs",
  swcMinify: false,
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
