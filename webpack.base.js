/** @type { import('webpack').Configuration } */
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
}
