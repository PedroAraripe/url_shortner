FROM node:lts-alpine

# instala um servidor http simples para servir conteúdo estático
RUN npm install -g http-server

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD http-server dist