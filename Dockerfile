FROM node:16.20-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependencies on linux for wpp-web qr code be asked on terminal after start
# RUN apt-get update -y
# RUN npm install pm2@latest -g

# Install app dependencies
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000
# CMD npm i && node server.js
# CMD npm i && pm2 start server.js