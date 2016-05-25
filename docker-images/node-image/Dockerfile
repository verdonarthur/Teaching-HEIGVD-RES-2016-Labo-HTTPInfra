FROM node:6.2.0

EXPOSE 8888

COPY src/ /usr/src/app

WORKDIR /usr/src/app

RUN npm install

ENTRYPOINT [ "npm", "start" ]
