FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm install typescript ts-node
# CMD ["npx", "ts-node", "server.ts"]

CMD ["node", "server.js"]