const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const validate = require('webpack-validator'); // eslint-disable-line import/no-extraneous-dependencies
const StatsPlugin = require('stats-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer'); // eslint-disable-line import/no-extraneous-dependencies

const PATHS = {
    PUBLIC: path.join(__dirname, 'public'),
    LIB: path.join(__dirname, 'lib'),
    DIST: path.join(__dirname, 'dist'),
    NODE_MODULES: path.join(__dirname, 'node_modules'),
};

const extractCss = new ExtractTextPlugin('vendor-[hash].min.css');
const extractStyl = new ExtractTextPlugin('app-[hash].min.css');

const config = {
    devtool: 'source-map',
    entry: {
        app: PATHS.PUBLIC,
    },
    output: {
        path: PATHS.DIST,
        filename: '[name]-[hash].min.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                include: [PATHS.PUBLIC],
            },
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: [PATHS.PUBLIC, PATHS.LIB],
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: ['transform-decorators-legacy'],
                },
            },
            {
                test: /\.css$/,
                loader: extractCss.extract('style', ['css', 'postcss']),
            },
            {
                test: /\.styl$/,
                loader: extractStyl.extract('style', ['css?modules', 'postcss', 'stylus']),
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
            {
                test: /\/favicon.ico$/,
                include: [PATHS.PUBLIC],
                loader: 'file',
                query: {
                    name: 'favicon.ico?[hash:8]',
                },
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    attrs: ['link:href'],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false,
            },
            mangle: {
                screw_ie8: true,
            },
            output: {
                comments: false,
                screw_ie8: true,
            },
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false,
        }),
        extractCss,
        extractStyl,
    ],
    postcss: () => [
        autoprefixer({
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ],
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
};

module.exports = validate(config);
