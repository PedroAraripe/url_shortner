FROM node:16.20-alpine3.17

# Create backend directory
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

COPY package*.json ./

ENV NODE_ENV=production
RUN npm install --production

RUN npm install --global typescript nodemon concurrently

COPY . .

RUN npm run build

EXPOSE 3000
CMD npm start