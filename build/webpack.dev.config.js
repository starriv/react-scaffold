let webpack = require("webpack");
let path = require("path");

const plugins = [
    //文件头部指定的注释信息
    new webpack.BannerPlugin({
        banner: '//---------- Author: Starriv Email: Starriv.993@gmail.com ----------//',
        raw: true,
        entryOnly: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    // react代码热加载插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
];
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3002',
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'bundle.js',
        publicPath: "/assert/",
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                use: [
                    {
                        loader: 'react-hot'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /node_modules/,
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css"]
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    plugins: plugins
};
