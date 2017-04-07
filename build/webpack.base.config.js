var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        rules: [{
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: "url"
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: "file-loader"
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css"]
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
};
