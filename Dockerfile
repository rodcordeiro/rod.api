FROM node:20 AS builder

WORKDIR /rod

COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

CMD [ "npm", "run start:prod" ]
