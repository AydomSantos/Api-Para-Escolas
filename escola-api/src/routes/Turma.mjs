import { Router } from 'express';
import TurmaController from '../controllers/TurmaController.mjs';

const router = Router();

router.get('/', TurmaController.index);
router.post('/', TurmaController.armazenar);
router.put('/:id', TurmaController.update);
router.delete('/:id', TurmaController.delete);

export default router;

