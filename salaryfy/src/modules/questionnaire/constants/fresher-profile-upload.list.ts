import { SkillType } from "../services/fresher-profile-upload.service";

enum HIGHEST_EDUCATION {
  MATRIC = "Class 10 / Matriculation" ,
  INTER = "Class 12 / Intermediate",
  UG = "Undergraduate" ,
  GRAD = "Graduate" ,
  DIP = "Diploma" ,
  TD = "Technical Degree" ,
  PG = "Post Graduation" ,
  PHD = "Ph.D. or Equivalent" ,
}
const HIGHEST_EDUCATION_LIST: Array<Omit<SkillType, 'selected'>> = Object.keys(HIGHEST_EDUCATION).map(code => ({ code, value: HIGHEST_EDUCATION[code as keyof typeof HIGHEST_EDUCATION] }))

enum BOARD {
  CBSE = "CBSE",
  ICSE = "ICSE",
  STATE = "State Board",
  IG = "IG",
  OPEN = "NIOS / Open",
}
const BOARD_LIST: Array<Omit<SkillType, 'selected'>> = Object.keys(BOARD).map(code => ({ code, value: BOARD[code as keyof typeof BOARD] }));

enum STREAM {
  SCI_NM = "Science Non-Medical",
  SCI_M = "Science Medical",
  COMM = "Commerce",
  ARTS = "Arts / Humanities",
}

const STREAM_LIST: Array<Omit<SkillType, 'selected'>> = Object.keys(STREAM).map(code => ({ code, value: STREAM[code as keyof typeof STREAM] }));

enum STREAM_NOBOARD {
  TECH = "Technical",
  NON_TECH = "Non-technical",
  EDU = "Educational",
  PRO = "Professional",
}

const STREAM_NOBOARD_LIST: Array<Omit<SkillType, 'selected'>> = Object.keys(STREAM_NOBOARD).map(code => ({ code, value: STREAM_NOBOARD[code as keyof typeof STREAM_NOBOARD] }));


export { HIGHEST_EDUCATION, HIGHEST_EDUCATION_LIST, BOARD, BOARD_LIST, STREAM, STREAM_LIST, STREAM_NOBOARD, STREAM_NOBOARD_LIST }