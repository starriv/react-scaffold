import webpack from 'webpack';

import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import WebpackChunkHash from 'webpack-chunk-hash';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = require('./webpack.base.config');
config.devtool = "source-map";
config.output = {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    sourceMapFilename: "[name].[chunkhash].map"
};
config.plugins = (config.plugins || []).concat([
    //提交公用的js文件
    new webpack.optimize.CommonsChunkPlugin({
        name: ["vendor", "manifest"], // vendor libs + extracted manifest
        minChunks: Infinity,
    }),
    new ChunkManifestPlugin({
        filename: "chunk-manifest.json",
        manifestVariable: "webpackManifest"
    }),
    //提取样式
    new ExtractTextPlugin({
        filename: 'build.min.css',
        allChunks: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
]);

module.exports = config;
