import { Router } from 'express';
import * as jogosController from '../controllers/jogosController.js';

const router = Router()

router.get("/", jogosController.listarTodosJogos);
router.get("/:id", jogosController.consoleById);
router.post("/", jogosController.criarConsole);
router.delete("/:id", jogosController.deleteConsole);
router.put("/:id", jogosController.atualizarJogo);

export default router;