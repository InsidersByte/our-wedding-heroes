const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');

const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/public/main.jsx'),
        vendors: [
            'react',
            'react-dom',
            'react-bootstrap',
            'react-router',
            'flux',
            'when',
            'reqwest',
            'react-addons-linked-state-mixin',
            'react-mixin',
            'react-google-maps',
            'history',
            'jwt-decode',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
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
                loaders: ['babel'],
                exclude: [NODE_MODULES_DIR],
            },
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
        new Clean(['dist', 'build']),
    ],
};
