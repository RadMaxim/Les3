const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Добавляем плагин для CSS

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
   publicPath: '/',
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
   env.mode === 'production' && new MiniCssExtractPlugin({ // Извлекаем CSS в отдельный файл в production
    filename: 'index.css'
   })
  ],
  module: {
   rules: [
    {
     test: /\.(png|jpg|jpeg|gif)$/i,
     type: 'asset/resource', 
    },
    {
     test: /\.css$/i,
     use: [
      env.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', // Используем MiniCssExtractPlugin.loader в production
      'css-loader',
     ]
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

