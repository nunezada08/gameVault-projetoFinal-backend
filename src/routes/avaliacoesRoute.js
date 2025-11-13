import { Router } from 'express';
import * as avaliacoesController from '../controllers/avaliacoesController.js';

const router = Router()

router.get("/", avaliacoesController.listarTodasAvaliacoes);
router.get("/:id", avaliacoesController.avaliacaoById);

export default router;