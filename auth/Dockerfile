# Define a imagem base como node:alpine, que é uma imagem leve do node

# Define o diretório de trabalho dentro do contêiner como /app
WORKDIR /app

# Copia o arquivo package.json do diretório local para o diretório /app no contêiner
COPY package.json .

# Executa o comando npm install para instalar as dependências da aplicação
RUN npm install

# Copia todos os arquivos do diretório local para o diretório /app no contêiner
COPY . .

# Define o comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "start"]
