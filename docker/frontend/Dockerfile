FROM node:18.19.0-alpine as build

WORKDIR /synergy-way-test

COPY ../package.json ./
COPY ../package-lock.json ./
RUN npm install

COPY ../tsconfig.json ./
COPY ../tsconfig.node.json ./
COPY ../vite.config.ts ./
COPY ../public ./public/
COPY ../src ./src/
COPY ../index.html ./

RUN npm run build

FROM nginx:1.22.1

COPY --from=build /synergy-way-test/dist /usr/share/nginx/html

EXPOSE 80