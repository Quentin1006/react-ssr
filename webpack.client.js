const path = require("path")
const { merge } = require("webpack-merge")
const CopyPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base.js")

/** @type { import('webpack').Configuration } */
const config = {
  // Tell webpack the root file of our
  // server application
  mode: "development",
  devtool: "source-map",
  entry: "./src/client.tsx",
  target: "web",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "assets", to: "." }],
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
}

module.exports = merge(baseConfig, config)
