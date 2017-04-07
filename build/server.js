var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.dev.config.js");

var compiler = webpack(webpackConfig);
var host = "127.0.0.1";
var port = "3002";

var server = new WebpackDevServer(compiler, {
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
    console.log("服务已启动,请打开" + "http://" + host + ":" + port);
});
