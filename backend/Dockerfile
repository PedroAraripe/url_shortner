FROM node:16.20-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY . .

RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm ci --omit=dev
EXPOSE 3000
CMD node dist/index.js
# CMD npm i && pm2 start server.js