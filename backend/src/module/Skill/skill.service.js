import { appDataSource } from '../../../database/data-source.js';
import { SkillSchema } from '../../../database/entities/Skill.js';
import { AppError } from '../../utils/AppError.js';

/**
 * 取得所有技能列表
 * @returns {Promise<Skill[]>} 技能陣列
 */
export const getAllSkills = async () => {
  const skills = await appDataSource.getRepository(SkillSchema).find();
  return skills;
};

/**
 * 新增技能，若名稱重複則拋出 409 錯誤
 * @param {{ name: string }} skillData - 技能資料
 * @returns {Promise<Skill>} 新增後的技能
 */
export const createSkill = async (skillData) => {
  const skillName = skillData.name;

  // 檢查技能名稱是否已存在
  const existingSkill = await appDataSource
    .getRepository(SkillSchema)
    .findOne({ where: { name: skillName } });

  if (existingSkill) {
    throw new AppError(409, `資料重複`);
  }

  const skill = appDataSource.getRepository(SkillSchema).create(skillData);

  await appDataSource.getRepository(SkillSchema).save(skill);

  return skill;
};

/**
 * 依 ID 刪除技能，若不存在則拋出 400 錯誤
 * @param {string} skillId - 技能 ID
 * @returns {Promise<void>}
 */
export const deleteSkill = async (skillId) => {
  const skillRepo = appDataSource.getRepository(SkillSchema);
  const existingSkill = await skillRepo.findOne({ where: { id: skillId } });

  if (!existingSkill) {
    throw new AppError(400, 'ID錯誤');
  }

  await skillRepo.delete({ id: skillId });
};
