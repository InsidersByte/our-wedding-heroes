module.exports = {
    port: process.env.PORT || 8080,
    database: process.env.DATABASE_URL || 'mongodb://localhost:27017/honeymoon-gift-list',
    secret: process.env.SECRET || 'ilovetheideaofmyhoneymoon',
    mail: {
        transport: 'SMTP',
        options: {
            service: process.env.EMAIL_SERVICE, // https://www.npmjs.com/package/nodemailer#using-well-known-services
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        },
    },
};
