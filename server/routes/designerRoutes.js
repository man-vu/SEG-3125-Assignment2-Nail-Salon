import express from 'express';
import { listDesigners, listDesignerServices, listDesignerSlots } from '../services/designerService.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const designers = await listDesigners();
  res.json(designers);
});

router.get('/:id/services', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid designer ID' });
  }
  const services = await listDesignerServices(id);
  res.json(services.map(s => s.Services));
});

router.get('/:id/slots', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid designer ID' });
  }
  const slots = await listDesignerSlots(id);
  res.json(slots);
});

export default router;
