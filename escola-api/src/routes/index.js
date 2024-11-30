const { Router } = require('express');
const alunoRoutes = require('./aluno');

const routes = Router();

routes.use('/alunos', alunoRoutes);

module.exports = routes;
