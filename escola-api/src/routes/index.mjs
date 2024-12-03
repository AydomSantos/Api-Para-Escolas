

// Importar rotas de alunos e professores

import {Router} from 'express';
import alunosRoutes from './aluno.mjs';
import ProfessoresRouter from './professor.mjs';

// Criar a rota raíz para o Express
const router = Router();

// Utilizar rotas para alunos e professores
router.use('/alunos', alunosRoutes);
router.use('/professores', ProfessoresRouter);

export default router;
