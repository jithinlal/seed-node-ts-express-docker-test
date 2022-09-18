FROM node:16

WORKDIR /app

COPY package.json .

COPY prisma ./prisma/

COPY .env .

COPY tsconfig.json .

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
