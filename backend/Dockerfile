FROM node:16.20-alpine3.17

# Create backend directory
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

COPY package*.json ./

# If you are building your code for production
# RUN npm ci --omit=dev
RUN npm install
RUN npm install --global typescript nodemon concurrently

COPY . .

RUN npm run build

EXPOSE 3000
CMD npm start