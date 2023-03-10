const path = require("path")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base.js")

/** @type { import('webpack').Configuration } */
const config = {
  // Tell webpack the root file of our
  // server application
  mode: "development",
  devtool: "source-map",
  entry: "./src/client.tsx",
  target: "web",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
}

module.exports = merge(baseConfig, config)
