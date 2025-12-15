# Stage 1: сборка
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build  # ← создаёт папку dist/ или build/

# Stage 2: лёгкий сервер
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# (если CRA → /app/build)

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
