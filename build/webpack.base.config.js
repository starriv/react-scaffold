var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

const plugins = [
  //文件头部指定的注释信息
  new webpack.BannerPlugin('---------- Author: Starriv Email: Starriv.993@gmail.com ----------')
];
module.exports = {
  debug: true,
  entry: {
    'main': path.join(__dirname, '../src/main.js')
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          "presets": ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".less", ".css"]
  },
  plugins: plugins
};
