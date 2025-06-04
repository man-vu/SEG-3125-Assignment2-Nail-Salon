import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import serviceCategoryRoutes from './routes/serviceCategoryRoutes.js';
import designerRoutes from './routes/designerRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import customerReviewRoutes from './routes/customerReviewRoutes.js';
import galleryImageRoutes from './routes/galleryImageRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/categories', serviceCategoryRoutes);
app.use('/api/designers', designerRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/reviews', customerReviewRoutes);
app.use('/api/gallery', galleryImageRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
