import { Router } from 'express';
import { ReservationsController } from '../controllers/reservationsController';

const router = Router();

router.get('/', ReservationsController.getAll);
router.post('/', ReservationsController.create);
export default router;