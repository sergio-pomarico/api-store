FROM node:18-alpine

WORKDIR usr/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run prepare

EXPOSE 3000

CMD ["npm", "start"]
