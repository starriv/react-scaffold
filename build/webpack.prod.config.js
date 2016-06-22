var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var config = require('./webpack.base.config');

config.plugins = (config.plugins || []).concat([
  // Webpack压缩代码的时候，React官方提供的代码已经是合并的, 可以通过以下插件优化
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("app.css", {
    allChunks: true,
    disable: false
  }),
  //提交公用的js文件到common.js文件中
  new CommonsChunkPlugin('common.js'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;
