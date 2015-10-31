const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'public/app.jsx'),
        vendors: ['react', 'react-dom', 'react-intl', 'exports?componentHandler&MaterialRipple!material-design-lite/material.js'],
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
            title: 'Smart Mortgage Calculator - React',
            template: './public/index.html', // Load a custom template
            inject: 'body', // Inject all scripts into the body
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    ],
};
