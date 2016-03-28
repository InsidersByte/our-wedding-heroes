const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');

const TARGETS = {
    START_DEV: 'start-dev',
    BUILD: 'build',
};
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    PUBLIC: path.join(__dirname, 'PUBLIC'),
    BUILD: path.join(__dirname, 'build'),
    DIST: path.join(__dirname, 'dist'),
    NODE_MODULES: path.join(__dirname, 'node_modules'),
};

const extractCss = new ExtractTextPlugin('vendor-[hash].css');
const extractStyl = new ExtractTextPlugin('app-[hash].css');

const common = {
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: PATHS.PUBLIC,
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
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
};

if (TARGET === TARGETS.START_DEV) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        entry: [
            'webpack-hot-middleware/client?reload=true',
            PATHS.PUBLIC,
        ],
        output: {
            path: PATHS.BUILD,
            filename: '[name].js',
        },
        module: {
            preLoaders: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'eslint',
                    include: PATHS.PUBLIC,
                },
            ],
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                },
                {
                    test: /\.styl$/,
                    loaders: ['style', 'css', 'stylus'],
                    include: PATHS.PUBLIC,
                },
                {
                    test: /\.(js|jsx)$/,
                    loaders: ['react-hot', 'babel'],
                    include: PATHS.PUBLIC,
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
        ],
    });
}

if (TARGET === TARGETS.BUILD) {
    module.exports = merge.smart(common, {
        entry: {
            app: PATHS.PUBLIC,
            vendor: [
                'react', 'moment', 'react-bootstrap', 'react-dom', 'flux', 'react-router', 'react-toastr', 'superagent',
                'classnames', 'jwt-decode',
            ],
        },
        output: {
            path: PATHS.DIST,
            filename: '[name]-[hash].min.js',
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: extractCss.extract('style', ['css', 'postcss']),
                },
                {
                    test: /\.styl$/,
                    loader: extractStyl.extract('style', ['css', 'postcss', 'stylus']),
                },
            ],
        },
        plugins: [
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
            extractCss,
            extractStyl,
        ],
        postcss: () => [autoprefixer],
    });
}
