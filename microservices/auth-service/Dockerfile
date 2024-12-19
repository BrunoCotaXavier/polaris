# Use a imagem oficial do Node.js
FROM node:16

# Define o diretório de trabalho dentro do container
WORKDIR /

# Copia os arquivos de configuração para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta usada pelo serviço
EXPOSE 3001

# Comando para iniciar o serviço
CMD ["node", "server.js"]
