import { AppError } from '../utils/AppError.js';

export const validateSkillInput = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return next(new AppError(400, '欄位未填寫正確'));
  }
  
  next();
}