import express from 'express';
import cors from 'cors';
import moviesRoutes from './routes/moviesRoutes';
import roomsRoutes from './routes/roomsRoutes';
import reservationsRoutes from './routes/reservationsRoutes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/movies', moviesRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/reservations', reservationsRoutes);

export default app;