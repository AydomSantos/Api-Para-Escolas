import { Router } from "express";
import CursoController from '../controllers/CursoController.mjs';

const router = Router();

router.get('/', CursoController.index);

router.post('/', CursoController.armazenar);

router.put('/:id', CursoController.update);

router.delete('/:id', CursoController.delete);

export default router;