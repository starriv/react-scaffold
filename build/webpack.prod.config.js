var webpack = require("webpack");
var path = require("path");
var merge = require("webpack-merge");
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var baseWebpackConfig = require("./webpack.base.config");

var webpackConfig = merge(baseWebpackConfig, {
    entry: {
        "main": path.join(__dirname, "../src/main")
    },
    output: {
        path: path.join(__dirname, "../dist/"),
        chunkFilename: "[id].[chunkhash].js",
        filename: "bundle.[hash].js",
    },
    devtool: "#source-map",
    plugins: [
        //提交公用的js文件
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"],
            filename: "vendor.[hash].js",
            minChunks: Infinity,
        }),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        //提取样式
        new ExtractTextPlugin("styles.[hash].css"),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "../dist/index.html"),
            template: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: "dependency"
        }),
    ]
});

module.exports = webpackConfig;
