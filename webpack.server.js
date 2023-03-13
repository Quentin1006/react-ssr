const path = require("path")
const { merge } = require("webpack-merge")
const nodeExternals = require("webpack-node-externals")
const baseConfig = require("./webpack.base.js")

/** @type { import('webpack').Configuration } */
const config = {
  mode: "development",
  target: "node",
  entry: "./src/server.tsx",
  externals: [nodeExternals()],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
}

module.exports = merge(baseConfig, config)
