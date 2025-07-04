import express from 'express';
import { listBookings, addBooking } from '../services/bookingService.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
router.use(authMiddleware);

router.get('/', async (req, res) => {
  const bookings = await listBookings(req.userId);
  res.json(bookings);
});

router.post('/', async (req, res) => {
  const booking = await addBooking({
    ...req.body,
    userId: req.userId,
    startTime: new Date(req.body.startTime),
    endTime: new Date(req.body.endTime)
  });
  res.json(booking);
});

export default router;
