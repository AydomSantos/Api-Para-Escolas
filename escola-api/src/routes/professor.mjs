import {Router} from 'express';

import ProfessoresController from '../controllers/ProfessoresController.mjs';
const router = Router()

router.get('/', ProfessoresController.index);
router.post('/', ProfessoresController)