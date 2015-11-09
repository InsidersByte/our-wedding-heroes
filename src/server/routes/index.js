module.exports = (app, express, config) => {
    const apiRoutes = require('./api')(app, express, config);

    app.use('/api', apiRoutes);

    app.get('*', (req, res) => {
        res.sendFile('src/public/index.html', { root: './'});
    });
};
