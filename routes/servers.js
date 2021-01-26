import { create, getAll, remove } from '../controllers/servers.js';

import express from 'express';

const router = express.Router();

router.get('/api/server', getAll);
router.post('/api/server', create);
router.delete('/api/server/:id', remove)

export default router;
