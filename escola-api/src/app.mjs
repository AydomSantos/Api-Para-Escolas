// Adcionando a biblioteca Express

import express from 'express';

// ================================

// Importando as Rotas da Aplicação

import routes from './routes/index.mjs';

// =================================================

// importando o database da aplicação

import sequelize from './database/index.mjs';

// =================================================

const app = express();

app.use(express.json());
app.use('/api', routes);

sequelize.sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default app;
