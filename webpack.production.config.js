const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractCss = new ExtractTextPlugin('vendor-[hash].css');
const extractStyl = new ExtractTextPlugin('app-[hash].css');

module.exports = {
    entry: [
        path.resolve(__dirname, 'public/Main'),
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: extractCss.extract('style', 'css', 'postcss'),
            },
            {
                test: /\.styl$/,
                loader: extractStyl.extract('style', ['css', 'postcss', 'stylus']),
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff',
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
                loader: 'file',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true,
            },
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false,
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor-[hash].min.js'),
        extractCss,
        extractStyl,
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    postcss: () => [autoprefixer],
};
