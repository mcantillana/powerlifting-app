FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

from nginx:stable-alpine

COPY  --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]