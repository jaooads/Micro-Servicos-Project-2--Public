// Importa o módulo Express, que é um framework web para Node.js
import express from "express";

// Importa a função json do módulo body-parser, que é um middleware para analisar corpos de solicitação como JSON
import { json } from "body-parser";

// Cria uma instância do aplicativo Express
const app = express();

// Usa o middleware json do body-parser para analisar corpos de solicitação como JSON
app.use(json());

// Inicia o servidor Express e o faz escutar na porta 3000
app.listen(3000, () => {
  // Quando o servidor é iniciado, exibe uma mensagem no console
  console.log("Servidor online na porta:3000!");
});

