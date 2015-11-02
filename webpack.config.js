const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/public/main.jsx'),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.styl$/,
                loaders: ['style', 'css', 'stylus'],
                exclude: [NODE_MODULES_DIR],
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: [NODE_MODULES_DIR],
            },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff2',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Honeymoon Gift List',
            template: './src/public/index.html', // Load a custom template
            inject: 'body', // Inject all scripts into the body
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
