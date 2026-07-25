# syntax=docker/dockerfile:1.4

FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy entire project
COPY . .

# Build the application
RUN npm run build

FROM nginx:alpine AS production

# Copy the built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx.conf from builder
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
