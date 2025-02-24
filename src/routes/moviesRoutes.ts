import { Router } from 'express';
import { MoviesController } from '../controllers/moviesController';

const router = Router();

router.get('/', MoviesController.getAll);
router.post('/', MoviesController.create);
export default router;