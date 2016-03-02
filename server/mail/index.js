'use strict'; // eslint-disable-line strict

const nodemailer = require('nodemailer');
const config = require('../config/config');

class mailer {
    constructor() {
        const options = config.mail && Object.assign({}, config.mail.options) || {};

        this._transport = nodemailer.createTransport(options);
    }

    get from() {
        let from = config.mail && config.mail.from;

        if (config.siteTitle) {
            from = `${config.siteTitle} <${from}>`;
        }

        return from;
    }

    send(message) {
        const messageToSend = Object.assign(
            message,
            {
                from: this.from,
            }
        );

        return new Promise((resolve, reject) => {
            this._transport.sendMail(messageToSend, (error, response) => {
                if (error) {
                    return reject(error);
                }

                return resolve(response);
            });
        });
    }
}

module.exports = mailer;
