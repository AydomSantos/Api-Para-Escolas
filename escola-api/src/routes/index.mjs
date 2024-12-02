import {Router} from 'express';
import alunosRoutes from './aluno.mjs';

const router = Router();

router.use('/alunos', alunosRoutes);

export default router;
