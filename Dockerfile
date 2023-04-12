FROM docker.io/node:18.15-alpine AS nodejs
ADD ./ /sources
WORKDIR /sources
RUN yarn install
RUN yarn build

FROM docker.io/nginx:1.24-alpine
COPY --from=nodejs /sourses/dist /usr/share/nginx/html
