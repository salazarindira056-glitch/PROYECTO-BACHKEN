
import { Router } from 'express';
import * as recursosController from '../controllers/recursos.controller.js';

// Creamos las rutas de los recursos
const router = Router();

// Ruta para crear un recurso
router.post('/', recursosController.crear);

// Ruta para consultar todos los recursos
router.get('/', recursosController.listar);

// Ruta para consultar un recurso por su ID
router.get('/:id', recursosController.consultarPorId);
// Ruta para actualizar un recurso por su ID
router.put('/:id', recursosController.actualizar);

export default router;

