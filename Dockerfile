FROM mhart/alpine-node:16.4

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm","run","dev"]