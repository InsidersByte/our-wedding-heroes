const environment = process.env.NODE_ENV;

switch (environment) {
    case 'production':
        const express = require('express');
        const logger = require('morgan');
        const path = require('path');

        const app = express();

        app.use(logger('dev'));

        app.set('port', (process.env.PORT || 5000));

        app.use(express.static(path.resolve(__dirname, '../../dist/')));

        app.get('*', express.static('index.html'));

        app.listen(app.get('port'), function logStart() {
            console.log('Node app is running on port', app.get('port')); // eslint-disable-line no-console
        });

        break;
    default:
        const webpack = require('webpack');
        const config = require('../../webpack.config');
        const WebpackDevServer = require('webpack-dev-server');

        new WebpackDevServer(
            webpack(config),
            {
                hot: true,
                stats: {
                    colors: true,
                },
            }
        )
        .listen(
            8080,
            'localhost'
        );

        break;
}
