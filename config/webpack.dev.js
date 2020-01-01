const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    contentBase: '../src',
    compress: true,
    hot: true,
    hotOnly: true,
    open: true,
    port: 3000
  }
};

module.exports = merge(baseConfig, devConfig);