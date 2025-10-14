// index.js

// 1. Carregar as variáveis de ambiente ANTES DE TUDO
require('dotenv').config();

// 2. Importar os pacotes necessários
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// 3. Conectar à base de dados
connectDB();

// 4. Criar a aplicação Express
const app = express();

// 5. Configurar os middlewares
app.use(cors());
app.use(express.json());

// 6. Definir uma rota de teste
app.get('/', (req, res) => {
  res.send('API do Waves-Music está no ar!');
});

// 7. Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});