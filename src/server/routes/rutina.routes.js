import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'

const router = Router()

router.get('/rutina', authRequired, (req, res) => res.send('rutina'))

export default router