import {Router} from 'express';
import coachesRouter from '../module/Coaches/coaches.route.js';

const router = Router();

router.use('/coaches', coachesRouter);

export default router;