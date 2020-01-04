const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ]
            }
          },
          'less-loader'
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`
    })
  ],
  stats: "errors-only"
};

module.exports = merge(baseConfig, prodConfig);