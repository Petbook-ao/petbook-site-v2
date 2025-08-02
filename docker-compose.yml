version: '3.8'

services:
  petbook:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: petbook-web
    restart: unless-stopped
    ports:
      - "8080:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./dist:/usr/share/nginx/html
    environment:
      - NODE_ENV=production
    networks:
      - petbook-network

  # Serviço opcional para desenvolvimento (descomente se necessário)
  # petbook-dev:
  #   build:
  #     context: .
  #     dockerfile: Dockerfile.dev
  #   container_name: petbook-dev
  #   ports:
  #     - "3000:3000"
  #   volumes:
  #     - .:/app
  #     - /app/node_modules
  #   environment:
  #     - NODE_ENV=development
  #   networks:
  #     - petbook-network

networks:
  petbook-network:
    driver: bridge