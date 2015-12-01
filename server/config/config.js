module.exports = {
    port: process.env.PORT || 5000,
    database: process.env.DATABASE_URL || 'mongodb://localhost:27017/honeymoon-gift-list',
    secret: 'ilovetheideaofmyhoneymoon',
};
