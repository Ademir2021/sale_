# Usando a imagem oficial do Node.js
FROM node:18

# Definindo o diretório de trabalho no container
WORKDIR /build

# Copiar o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar as dependências do Node.js
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 3001

# start na aplicação
CMD ["npm","start"]

