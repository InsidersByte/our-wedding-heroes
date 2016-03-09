'use strict'; // eslint-disable-line strict

const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates').EmailTemplate;
const path = require('path');
const config = require('../config/config');

const templatesDirectory = path.join(__dirname, 'templates');

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

    send(message, templateName) {
        const messageToSend = Object.assign(
            message,
            {
                from: this.from,
            }
        );

        if (!templateName) {
            return this._send(messageToSend);
        }

        const template = new EmailTemplate(path.join(templatesDirectory, templateName));

        return template
            .render(message)
            .then((result) => {
                messageToSend.text = result.text;
                messageToSend.html = result.html;

                return this._send(message);
            });
    }

    _send(message) {
        return this._transport.sendMail(message);
    }
}

module.exports = mailer;
