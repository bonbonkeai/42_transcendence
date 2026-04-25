FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run build 

COPY . .

RUN npx prisma generate
RUN npm run build

# CMD ["npm", "start"]

CMD ["node", "server.js"]