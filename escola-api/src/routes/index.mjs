


// Importar as rotas para os alunos, professores e turmas

import {Router} from 'express';
import alunosRoutes from './aluno.mjs';
import ProfessoresRouter from './professor.mjs';
import TurmaRouter from './turma.mjs';

// Criar a rota raíz para o Express
const router = Router();

// Usar as rotas criadas para os alunos, professores e turmas
router.use('/alunos', alunosRoutes);
router.use('/professores', ProfessoresRouter);
router.use('/turmas', TurmaRouter);

export default router;
