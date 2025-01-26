FROM node:18.19.0-alpine

WORKDIR /synergy-way-test

RUN npm install -g json-server

COPY ../companies-lookup.json ./

EXPOSE 5000

CMD ["json-server", "--watch", "companies-lookup.json", "--host", "0.0.0.0", "--port", "5000"]