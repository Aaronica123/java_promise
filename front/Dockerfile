FROM node:22.22-slim AS builder

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci

COPY . /app
FROM node:22.22-slim

WORKDIR /app
COPY --from=builder /app /app

CMD ["npm", "start"]