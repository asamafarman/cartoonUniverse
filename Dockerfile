FROM node:18.3.0-alpine3.14 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

COPY --from=build-step /app/build /usr/share/nginx/html
