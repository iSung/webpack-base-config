const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const baseConfig = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader?cacheDirectory=true',
      }
    },
     {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /.less$/,
      use: [
        'style-loader',
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
    }, {
      test: /.(png|jpg|bmp|gif)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 5120
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
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
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", "less", ".css"],
  }
};

module.exports = baseConfig;