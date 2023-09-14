type ItemsKeyType = [string | null, React.Dispatch<React.SetStateAction<string | null>>];
export type EducationalSkillsKey = {
  highestLevelEducation:      ItemsKeyType,
  board:                      ItemsKeyType,
  stream:                     ItemsKeyType
}

export type UserEducationSkill = { highestLevelOfEdu: string | undefined, board: string | undefined, stream: string | undefined, percentage: number | undefined, UserId: string | undefined | null }