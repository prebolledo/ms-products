FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .
RUN npm install

CMD ["npm","start"]