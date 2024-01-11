FROM mhart/alpine-node:16.4

WORKDIR /app

COPY package.json package.json

COPY ./build .

RUN npm install

CMD ["node","app.js"]