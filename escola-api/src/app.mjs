import express from 'express';
import routes from './routes/index.mjs';
import sequelize from './database/index.mjs';

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
