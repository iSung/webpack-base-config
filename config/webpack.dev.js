const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: '../src',
    compress: true,
    hot: true,
    hotOnly: true,
    open: true,
    port: 3000,
    stats: "errors-only"
  }
};

module.exports = merge(baseConfig, devConfig);