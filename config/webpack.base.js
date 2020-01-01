const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: '/\.(js|jsx)$/',
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader?cacheDirectory=true',
      }
    }, {
      test: /.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')({
                overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
              })
            ]
          }
        },
        'less-loader'
      ]
    }, {
      test: /.(png|jpg|bmp|gif)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 5120
        }
      }]
    }]
  }
};

module.exports = baseConfig;