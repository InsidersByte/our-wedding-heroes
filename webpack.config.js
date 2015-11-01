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
                test: /\.styl$/,
                loaders: ['style', 'css', 'stylus'],
                exclude: [NODE_MODULES_DIR],
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: [NODE_MODULES_DIR],
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
