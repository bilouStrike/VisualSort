FROM node:16-alpine as build-step

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH 

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Stage 2
FROM nginx:1.19.10-alpine

COPY --from=build-step /app/build /usr/share/nginx/html

