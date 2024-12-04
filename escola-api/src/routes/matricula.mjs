import { Router } from 'express';
import MatriculaController from '../controllers/MatriculaController.mjs';

const router = Router();

router.get('/', MatriculaController.index); // Lista todas as matrículas
router.post('/', MatriculaController.store); // Cria nova matrícula
router.put('/:id', MatriculaController.update); // Atualiza matrícula existente
router.delete('/:id', MatriculaController.delete); // Deleta matrícula existente

export default router;
