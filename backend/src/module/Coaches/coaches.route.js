import { Router } from 'express';
import { getCoachSkills, createCoachSkill, deleteCoachSkill } from './coaches.controller.js';
import { validateSkillInput } from '../../middleware/validation.js';

const router = Router();

router.get('/skill', getCoachSkills);
router.post('/skill', validateSkillInput, createCoachSkill);
router.delete('/skill/:skillId', deleteCoachSkill);

export default router;
