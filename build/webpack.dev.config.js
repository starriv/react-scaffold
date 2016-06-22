var config = require('./webpack.base.config');
var webpack = require('webpack');

config.devtool = 'eval-source-map';
config.entry = [
  'webpack-dev-server/client?http://127.0.0.1:3002',  // 热加载访问服务地址
  'webpack/hot/only-dev-server',
  './src/main.js'
];

config.module.loaders = [
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
    loader: "style-loader!css-loader!postcss-loader"
  },
  {
    test: /\.less$/,
    loader: "style!css!less?strictMath&noIeCompat"
  }
];

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    __DEVCLIENT__: true,
    __DEVSERVER__: false,
    __DEVTOOLS__: false,
    __DEVLOGGER__: true,
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  }),
  // react代码热加载插件
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
