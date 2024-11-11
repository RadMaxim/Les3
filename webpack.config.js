const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  return {
    devtool: false,
    // devtool: 'source-map',
    mode: env.mode ?? "production",
    entry: {
      filename: path.resolve(__dirname, "./les5/src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist_les5"),
      filename: "index.js",
      clean: true,
    },

    devServer: {
      static: path.join(__dirname, "dist_les5"),
      open: true,
      port: 8080,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./les5/src/index.html"),
        filename: "index.html",
        minify: true,
      }),
      env.mode && new CleanWebpackPlugin(),
      new Dotenv(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  };
};
