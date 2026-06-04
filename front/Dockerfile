FROM node:22.22-bookworm-slim AS builder

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci

COPY . /app
FROM node:22.22-bookworm-slim

WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3001
CMD ["npm", "start"]