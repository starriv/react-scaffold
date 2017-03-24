import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'ExtractTextPlugin';

module.exports = {
    entry: {
        'main': path.join(__dirname, '../src/main.js')
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel'
            }, {
                test: /\.(png|jpg|gif)$/,
                use: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }, {
                test: /\.less$$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }
        ],
        resolve: {
            extensions: [".js", ".jsx", ".less", ".css"]
        }
    }
};
