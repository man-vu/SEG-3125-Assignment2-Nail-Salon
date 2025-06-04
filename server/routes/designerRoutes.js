import express from 'express';
import { listDesigners } from '../services/designerService.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const designers = await listDesigners();
  res.json(designers);
});

export default router;
