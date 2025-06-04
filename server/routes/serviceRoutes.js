import express from 'express';
import { listServices } from '../services/serviceService.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  console.log('Fetching all services');
  const services = await listServices();
  res.json(services);
});

export default router;
