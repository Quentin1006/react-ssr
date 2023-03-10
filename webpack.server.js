const path = require("path")
const { merge } = require("webpack-merge")
const nodeExternals = require("webpack-node-externals")
const baseConfig = require("./webpack.base.js")

/** @type { import('webpack').Configuration } */
const config = {
  mode: "development",
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: "node",

  // Tell webpack the root file of our
  // server application
  entry: "./src/server.tsx",

  // Tell webpack where to put the output file
  // that is generated
  externals: [nodeExternals()],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
}

module.exports = merge(baseConfig, config)
