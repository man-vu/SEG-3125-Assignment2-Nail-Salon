import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import designerRoutes from './routes/designerRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/designers', designerRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
