import { HIGHEST_EDUCATION_LIST } from "../constants/fresher-profile-upload.list"

/** SERVICE **/
class FresherProfileUploadService {
  
  public onHighestLevelEducationChange(educationalSkills: EducationalSkillsType, value: string): EducationalSkillsType {
    return { ...educationalSkills, highestEducationList: educationalSkills.highestEducationList.map((skill: SkillType) => ({ ...skill, selected: skill.value === value })) }
  }

  public onBoardListChange(educationalSkills: EducationalSkillsType, value: string): EducationalSkillsType {
    return { ...educationalSkills, boardList: educationalSkills.boardList.map((skill: SkillType) => ({ ...skill, selected: skill.value === value })) }
  }

  public onStreamListChange(educationalSkills: EducationalSkillsType, value: string): EducationalSkillsType {
    return { ...educationalSkills, streamList: educationalSkills.streamList.map((skill: SkillType) => ({ ...skill, selected: skill.value === value })) }
  }
  
}


/** TYPES **/
type SkillType = { code: string, value: string, selected: boolean }

type EducationalSkillsType = {
  highestEducationList: Array<SkillType>,
  boardList: Array<SkillType>,
  streamList: Array<SkillType>
  percentage: number
}


/** INITIAL VALUES**/
const INITIAL_EDUCATIONAL_SKILLS: EducationalSkillsType = { highestEducationList: HIGHEST_EDUCATION_LIST.map(e => ({ ...e, selected: false  })), boardList: [], streamList: [], percentage: NaN }


/** EXPORTS **/
export { FresherProfileUploadService, INITIAL_EDUCATIONAL_SKILLS };
export type { EducationalSkillsType, SkillType };
