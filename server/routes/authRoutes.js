import express from 'express';
import { register, login } from '../services/authService.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await register(req.body);
    res.json(user);
  } catch {
    res.status(400).json({ error: 'User already exists' });
  }
});

router.post('/login', async (req, res) => {
  const { identifier, password } = req.body;
  const result = await login(identifier, password);
  if (!result) return res.status(401).json({ error: 'Invalid credentials' });
  res.json(result);
});

export default router;
