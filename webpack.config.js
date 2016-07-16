const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./app.jsx'],
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'mqtt-react.bundle.js',
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.jade$/,
        loader: 'jade',
        exclude: [/node_modules/],
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
    }),
    new HtmlWebpackPlugin({
      title: 'MQTT Chart Config Form',
      filename: 'index.html',
      template: 'index.jade',
    }),
  ],
};
