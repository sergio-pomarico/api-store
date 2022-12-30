FROM node:18-alpine

WORKDIR usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run prepare

CMD ["npm", "run", "dev"]
