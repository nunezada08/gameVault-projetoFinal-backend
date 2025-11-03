import { Router } from 'express';
import * as jogosController from '../controllers/jogosController.js';

const router = Router()

router.get("/", jogosController.listarTodosJogos);
router.get("/:id", jogosController.listarUm);
router.post("/", jogosController.criarJogo);
router.delete("/:id", jogosController.apagar);
router.put("/:id", jogosController.atualizarJogo)

export default router;