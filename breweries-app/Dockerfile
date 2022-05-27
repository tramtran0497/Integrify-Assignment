# choose base 1
FROM node:16-alpine3.14 AS build-env

# where it works
WORKDIR "/app"

# copy package.json at the same folder
COPY package*.json .
# install all dependencies
RUN npm install
# copy all in container 
COPY . .
# Build
RUN npm run build

# choose base 2
FROM nginx:1.21.6

WORKDIR /usr/share/nginx/html/

COPY --from=build-env /app/build/. .

EXPOSE 80

