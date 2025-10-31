import { Router } from 'express';
import * as jogosController from '../controllers/jogosController.js';

const router = Router()

router.get("/", jogosController.listarTodosJogos);

export default router;