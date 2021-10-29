FROM node:16

WORKDIR /opt/app

COPY . .

RUN npm i

RUN npm run react:build

EXPOSE 5000

ENTRYPOINT npm run start:server


