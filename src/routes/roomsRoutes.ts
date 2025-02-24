import { Router } from 'express';
import { RoomsController } from '../controllers/roomsController';

const router = Router();

router.get('/', RoomsController.getAll);
router.post('/', RoomsController.create);
export default router;