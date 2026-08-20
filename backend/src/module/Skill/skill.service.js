import { appDataSource } from "../../../database/data-source.js";
import { SkillSchema } from "../../../database/entities/Skill.js";

export async function getAllSkills() {
  const skills = await appDataSource.getRepository(SkillSchema).find();
  return skills;
}

export async function createSkill(skillData) {
  const skillName = skillData.name;
  const existingSkill = await appDataSource.getRepository(SkillSchema).findOne({ where: { name: skillName } });
  if (existingSkill) {
    throw new Error(`技能名稱 "${skillName}" 已存在`);
  }
  const skill = appDataSource.getRepository(skillSchema).create(skillData);
  await appDataSource.getRepository(SkillSchema).save(skill);
  return skill;
}