const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const validate = require('webpack-validator'); // eslint-disable-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer'); // eslint-disable-line import/no-extraneous-dependencies
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const PATHS = {
    PUBLIC: path.join(__dirname, 'public'),
    LIB: path.join(__dirname, 'lib'),
    BUILD: path.join(__dirname, 'build'),
    NODE_MODULES: path.join(__dirname, 'node_modules'),
};

const config = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        PATHS.PUBLIC,
    ],
    output: {
        path: PATHS.BUILD,
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: [PATHS.PUBLIC, PATHS.LIB],
                query: {
                    presets: ['react', 'es2015', 'stage-1', 'react-hmre'],
                    plugins: ['transform-decorators-legacy', 'flow-react-proptypes'],
                },
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
            },
            {
                test: /\.styl$/,
                loaders: ['style', 'css?modules', 'postcss', 'stylus'],
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
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new webpack.NoErrorsPlugin(),
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
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};

module.exports = validate(config);
