import { Router } from 'express';
import { getCreditPackages } from './creditPackage.controller.js';

const router = Router();

router.get('/', getCreditPackages);

export default router;