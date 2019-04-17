const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: [
      "./src/scripts/index.js",
      "./src/style/all.scss",
      "./src/style/header.scss",
      "./src/style/main.scss",
      "./src/style/mediaQuery.scss"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    compress: true,
    port: 8080
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      minify: true,
      inject: "head", //ради интереса
      chunks: ["bundle"],
      template: "./src/index.html",
      favicon: "./src/images/unnamed.png"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
