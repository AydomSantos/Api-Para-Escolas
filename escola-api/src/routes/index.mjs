


// Importar as rotas para os alunos, professores e turmas

import {Router} from 'express';
import alunosRoutes from './aluno.mjs';
import professoresRouter from './professor.mjs';
import turmaRouter from './turma.mjs';
import CursoRouter from './curso.mjs';
import MatriculaRouter from './matricula.mjs';

// Criar a rota raíz para o Express
const router = Router();

// Usar as rotas criadas para os alunos, professores e turmas
router.use('/alunos', alunosRoutes);
router.use('/professores', professoresRouter);
router.use('/turmas', turmaRouter);
router.use('/cursos', CursoRouter);
router.use('/matricula', MatriculaRouter);

export default router;
