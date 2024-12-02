
import {Router} from 'express';
import AlunoCrontroller from '../controllers/AlunoCrontroller.mjs';

const router = Router();

// Rotas para Aluno

router.get('/', AlunoCrontroller.index);
router.post('/', AlunoCrontroller.store);
router.put('/:id', AlunoCrontroller.update);
router.delete('/:id', AlunoCrontroller.delete);



export default router;

