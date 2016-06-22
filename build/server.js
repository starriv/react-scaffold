var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('./webpack.dev.config.js');

var host = '127.0.0.1';
var port = '3002';
new WebpackDevServer(webpack(devConfig), {
  publicPath: devConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('服务已启动,请打开' + 'http://' + host + ':' + port);
});
