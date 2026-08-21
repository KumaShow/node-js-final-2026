import {Router} from 'express';
import coachesRouter from '../module/Coaches/coaches.route.js';
import creditPackageRouter from '../module/CreditPackage/creditPackage.route.js';

const router = Router();

router.use('/coaches', coachesRouter);
router.use('/credit-packages', creditPackageRouter);

export default router;