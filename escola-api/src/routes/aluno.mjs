
import {Router} from 'express';
import AlunoCrontroller from '../controllers/AlunoCrontroller.mjs';

const router = Router();

// Rotas para Aluno

router.get('/alunos', AlunoCrontroller.index);
router.post('/alunos', AlunoCrontroller.store);
router.put('/:id', AlunoCrontroller.update);
router.delete('/:id', AlunoCrontroller.delete);



export default router;

