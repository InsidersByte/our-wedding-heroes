const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/public/main.jsx'),
        vendors: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
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
                loaders: ['babel'],
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    ],
};
