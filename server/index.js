import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Route imports
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

// --- CORS Setup ---
// For dev, allow all. For production, specify your frontend domain.
app.use(cors({
  origin: 'http://localhost:5173', // Or use '*' for all, but not recommended for production
  credentials: true // If you need to send cookies/auth
}));

app.use(express.json());

// --- API Routes ---
app.use('/api', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/categories', serviceCategoryRoutes);
app.use('/api/designers', designerRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/reviews', customerReviewRoutes);
app.use('/api/gallery', galleryImageRoutes);

// --- Start Server ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
