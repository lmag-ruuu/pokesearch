const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  devServer: {
    static: "./dist",
  },
  devtool: "eval-source-map",
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};

module.exports = merge(common, devConfig);
