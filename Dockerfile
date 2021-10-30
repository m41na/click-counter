FROM node:12.18.1

ENV NODE_ENV=production

WORKDIR /opt/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i --production

RUN mkdir src, public, server

COPY public ./public

COPY src ./src

COPY server ./server

RUN npm run react:build

EXPOSE 5000

USER 1001 

ENTRYPOINT [ "npm", "run" ]

CMD ["start:server"]
