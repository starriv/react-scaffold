let webpack = require("webpack");
let WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.config.js');

const compiler = webpack(webpackConfig);
const host = '127.0.0.1';
const port = '3002';

const server = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
});

server.listen(port, host, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('服务已启动,请打开' + 'http://' + host + ':' + port);
});
