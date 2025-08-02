# Estágio de construção
FROM node:18-alpine as builder

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./
COPY *.config.js ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Construir a aplicação
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copiar os arquivos construídos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]