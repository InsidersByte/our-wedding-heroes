FROM node:6.9.5-slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install --global yarn
COPY package.json yarn.lock /usr/src/app/
RUN yarn --production

# Bundle app source
COPY . /usr/src/app/

EXPOSE 8080
CMD [ "yarn", "start" ]
