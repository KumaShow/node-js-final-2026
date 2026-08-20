import {Router} from 'express';
import { getCoachSkills } from './coaches.controller.js';

const router = Router();

router.get('/skill', getCoachSkills);

export default router;
