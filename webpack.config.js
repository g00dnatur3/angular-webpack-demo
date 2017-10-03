//const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test';

const config = {}

config.entry = {
  app: './src/app/app.module.js'
};

/**
 * Should be an empty object if it's generating a test build
 * Karma will set this when it's a test build
 */
config.output = isTest ? {} : {
  path: __dirname + '/dist',
  publicPath: 'http://localhost:8080/',
  filename: '[name].bundle.js',
  chunkFilename: '[name].bundle.js'
}

config.module = {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    },
    {
      test: /\.(png|svg|jpg|gif|eot|ttf|svg|woff|woff2)$/,
      use: ['file-loader']
    },
    {
      test: /\.html$/,
      use: ['raw-loader']
    }
  ]
}

config.plugins = [new CleanWebpackPlugin(['dist'])]

// Skip rendering index.html in test mode
if (!isTest) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    })
  )
}

if (isTest) {
  config.devtool = 'inline-source-map';
}
else {
  config.devtool = 'eval-source-map';
}

config.devServer = {
  contentBase: './src/public',
  stats: 'minimal'
}

module.exports = config;

