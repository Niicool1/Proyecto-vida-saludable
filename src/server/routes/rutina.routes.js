import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'

import {
    getRutina,
    getRutinas,
    deleteRutina,
    createRutina,
    updateRutina,
} from '../controllers/rutina.controller.js';

const router = Router()

router.get('/rutinas', authRequired, getRutinas);
router.get('/rutina/:id', authRequired, getRutina);
router.post('/rutina', authRequired, createRutina);
router.delete('/rutina/:id', authRequired, deleteRutina);
router.put('/rutina/:id', authRequired, updateRutina);


export default router