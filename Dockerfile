# Dependencies for development
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Test and build
FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Dependencies for production
FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

# Production
FROM node:19-alpine3.15 as runner
EXPOSE 3000
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD [ "node","dist/main.js"]









