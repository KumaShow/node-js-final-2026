import { getAllSkills, createSkill, deleteSkill } from '../Skill/skill.service.js';

// M1
// /api/coaches/skill 取得教練技能列表
export const getCoachSkills = async (req, res, next) => {
  try {
    const skills = await getAllSkills();

    res.status(200).json({ status: 'success', data: skills });
  } catch (err) {
    next(err);
  }
};

// /api/coaches/skill 新增教練技能
export const createCoachSkill = async (req, res, next) => {
  try {
    const skillData = req.body;
    const newSkill = await createSkill(skillData);

    res.status(201).json({ status: 'success', data: newSkill });
  } catch (err) {
    next(err);
  }
};

// /api/coaches/skill/{skillId} 刪除教練技能
export const deleteCoachSkill = async (req, res, next) => {
  try {
    const skillId = req.params.skillId;
    await deleteSkill(skillId);
    res.status(200).json({ status: 'success', message: '技能已刪除' });
  } catch (err) {
    next(err);
  }
};

// M4
// /api/coaches 取得教練分頁列表（公開，不用登入）
// /api/coaches/{coachId} 取得單一教練詳細資料（公開，不用登入）
// /api/coaches/{coachId}/courses 取得指定教練「未結束」的課程列表（公開，不用登入）
