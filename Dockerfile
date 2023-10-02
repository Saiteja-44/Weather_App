# Base stage
FROM node:16-alpine as builder
WORKDIR /app
COPY package* .
RUN npm i
COPY . .
RUN npm run build

# nginx
FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]