/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

const devServer = {
  contentBase: __dirname + '/src/endpoint',
  colors: true,
  quiet: false,
  noInfo: false,
  publicPath: '/static/',
  port: 8000,
  hot: true,
  stats: 'minimal'
};

module.exports = {
  devtool: 'inline-source-map',
  debug: true,
  devServer,
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'webpack-dev-server/client?http://127.0.0.1:' + devServer.port,
      'webpack/hot/only-dev-server',
      './app'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'src/endpoint/static'),
    filename: '[name].js',
    publicPath: devServer.publicPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.OldWatchingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'react-hot-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        include: path.resolve(__dirname, 'src'),
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
