import express from 'express'; 
import routes from './routes/index.mjs'; 

import swaggerUi from 'swagger-ui-express'; 
import swaggerJsDoc from 'swagger-jsdoc'; 

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Escola API',
      version: '1.0.0',
      description: 'API para gestão escolar',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./src/routes/*.js'],
};

const app = express();

app.use(express.json());
app.use('/api', routes);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app; 
