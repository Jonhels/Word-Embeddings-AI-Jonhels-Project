FROM node:20

WORKDIR /app

COPY package.json package_lock.json ./

RUN npm install

COPY . .

EXPOSE 6000

CMD ["node", "server.js"]
