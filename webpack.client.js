const path = require("path")
const { merge } = require("webpack-merge")
const CopyPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base.js")

/** @type { import('webpack').Configuration } */
const config = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/client.tsx",
  experiments: {
    outputModule: true,
  },
  target: "web",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "assets", to: "./" }],
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/client"),
    libraryTarget: "module",
  },
}

module.exports = merge(baseConfig, config)
