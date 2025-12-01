import { Router } from 'express';
import * as avaliacoesController from '../controllers/avaliacoesController.js';

const router = Router()

router.get("/", avaliacoesController.listarTodasAvaliacoes);
router.get("/:id", avaliacoesController.avaliacaoById);
router.post("/", avaliacoesController.criarAvaliacao);
router.put("/:id", avaliacoesController.atualizarAvaliacao);
router.delete("/:id", avaliacoesController.apagarAvaliacao);

export default router;