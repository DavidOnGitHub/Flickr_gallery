var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src');

var config = {
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:4]',
                sourceMap: true,
                importLoaders: 1
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=20000&name=assets/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=assets/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};

module.exports = config;
