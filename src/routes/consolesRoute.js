import { Router } from 'express';
import * as consolesController from '../controllers/consolesController.js';

const router = Router()

router.get("/", consolesController.listarTodosConsoles);
router.get("/:id", consolesController.ConsoleById);
router.post("/", consolesController.criarConsole);
router.delete("/:id", consolesController.apagar);


export default router;