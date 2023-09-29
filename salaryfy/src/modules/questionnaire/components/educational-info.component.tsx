import { TextField } from "@mui/material";
import { TextFieldDropDown } from "../../../components/textfield-dropdown.component";
import { CHANGED_BY } from "../constants/fresher-profile-upload.list";
import { EducationalSkillsKey } from "../constants/fresher.type";
import { EducationalSkillsType } from "../services/fresher-profile-upload.service";
import { ChangeEvent } from "react";

export function EducationalInfoComponent({ educationalSkillsKey, educationalSkills, onHighestLevelEducationChangeHandler, onBoardUniversityFieldInput, onBoardUniversityChangeHandler, onStreamChangeHandler, onPercentageChangeHandler }: { educationalSkillsKey: EducationalSkillsKey, educationalSkills: EducationalSkillsType, onHighestLevelEducationChangeHandler: (v0: string | null, v2: CHANGED_BY) => void, onBoardUniversityFieldInput: (v: string) => void, onBoardUniversityChangeHandler: (v: string | null) => void, onStreamChangeHandler: (value: string | null) => void, onPercentageChangeHandler: (v: ChangeEvent<HTMLInputElement>) => void }) {
  return(
    <div className=" flex flex-col gap-3   md:grid md:grid-cols-[1fr,1fr] md:gap-[2em] md:my-[2em] xs:my-[2em]">
              <div>
                <div className="text-[#005F59] text-[1.8em] font-semibold">Highest level of education</div>
                <div className="" style={{ fontWeight: 500 }}>
                  <TextFieldDropDown
                    value={educationalSkillsKey.highestLevelEducation[0]}
                    options={educationalSkills.highestEducationList.map(e => e.value)}
                    onOptionClick={(value) => onHighestLevelEducationChangeHandler(value, CHANGED_BY.USER)}
                  />
                </div>
              </div>
              <div>
                <div className="text-[#005F59] text-[1.8em] font-semibold">Board/University/Open University</div>
                <div>
                  <TextFieldDropDown
                    value={educationalSkillsKey.board[0]}
                    options={educationalSkills.boardList.map(e => e.value)}
                    onTextInput={onBoardUniversityFieldInput}
                    onOptionClick={onBoardUniversityChangeHandler}
                  />
                </div>
              </div>
              <div>
                <div className="text-[#005F59] text-[1.8em] font-semibold">Stream</div>
                <div>
                  <TextFieldDropDown
                    value={educationalSkillsKey.stream[0]}
                    options={educationalSkills.streamList.map(e => e.value)}
                    onOptionClick={onStreamChangeHandler}
                  />
                </div>
              </div>
              <div>
                <div className="text-[#005F59] text-[1.8em] font-semibold">Percentage</div>
                <div className="flex flex-col">
                  <TextField value={educationalSkills.percentage || ''} InputProps={{ sx: { fontFamily: 'Lexend', fontWeight: '500', fontSize: '18px' } }} onChange={onPercentageChangeHandler} size="small" />
                </div>
              </div>
            </div>
  );
}