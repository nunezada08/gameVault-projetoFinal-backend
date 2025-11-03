import { Router } from 'express';
import * as consolesController from '../controllers/consolesController.js';

const router = Router()

router.get("/", consolesController.listarTodosConsoles);

export default router;