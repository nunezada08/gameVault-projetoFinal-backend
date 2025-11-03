import { Router } from 'express';
import * as consolesControllerController from '../controllers/consolesController.js';

const router = Router()


router.get("/:id", consolesController.listarUm);
router.post("/", consolesController.criarConsole);
router.delete("/:id", consolesController.apagar);
router.put("/:id", consolesController.atualizarJogo);

export default router;