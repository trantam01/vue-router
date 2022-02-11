# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --no-optional
COPY / .
RUN npm run build
RUN npm install -g serve

ENV TZ=Asia/Taipei
ENV PORT=5000
EXPOSE 5000


CMD ["serve", "-s", "dist"]
