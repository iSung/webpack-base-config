const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `../public/index.html`),
      filename: '../dist/index.html',
      inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyJS: true,
          minifyCSS: true,
          removeComments: false
        }
    })
  ]
};

module.exports = merge(baseConfig, prodConfig);