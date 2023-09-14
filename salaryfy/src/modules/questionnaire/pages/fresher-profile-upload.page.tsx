import { Autocomplete, Button, TextField } from "@mui/material";
import { HavingDoubts } from "../components/having-doubts.component";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FILE_UPLOAD_TYPES } from "../constants/file-upload.enum";
import { useLazyGetUserSkillsQuery, useSetUserSkillsMutation, useUploadFileMutation } from "../../../features/api-integration/user-profile/user-profile.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/app.store";
import { catchError, concatMap, from, of, throwError } from 'rxjs';
import { ErrorType } from "../constants/app-error.type";
import Chip from "../components/chip.component";
import { QuestionnaireHttpClient } from "../services/questionnaire.service";
import { CommonUtilities } from "../../../utils/common.utilities";
import { EducationalSkillsType, FresherProfileUploadService, INITIAL_EDUCATIONAL_SKILLS } from "../services/fresher-profile-upload.service";
import { BOARD_LIST, CHANGED_BY, HIGHEST_EDUCATION, STREAM_LIST, STREAM_NOBOARD_LIST } from "../constants/fresher-profile-upload.list";
import { useLazyGetProfileQuery, useLazyUniversitySuggestionsQuery, useSaveProfileMutation } from "../../../features/api-integration/profile-qualification/profile-qualification.slice";
import _ from 'lodash';
import { EducationalInfoComponent } from "../components/educational-info.component";
import { EducationalSkillsKey, UserEducationSkill } from "../constants/fresher.type";

const initialValue: { value: CHANGED_BY } = {
  value: CHANGED_BY.SERVER
};

export default function FresherProfileUploadPage() {
  return (
    <div className="w-100 flex flex-col items-center h-[100%]">
      <div className="max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]">
        <div className="py-[2em] px-[3em] h-[100%]">
          <FresherProfileUpload />
          {/* <BottomPageNavigationBar /> */}
        </div>
      </div>
    </div>
  );
}

function FresherProfileUpload() {

  const userDocEduUploadFileRef = useRef<HTMLInputElement | null>(null);
  const userDocSkillUploadFileRef = useRef<HTMLInputElement | null>(null);

  const [educationDocs, setEducationDocs] = useState<Array<{  docType: FILE_UPLOAD_TYPES.EDUCATION | FILE_UPLOAD_TYPES.SKILL_CERTIFICATION, file: File }>>([]);

  const educationalSkillsChangedByRef = useRef(initialValue);
  const [educationalSkills, setEducationalSkills] = useState<EducationalSkillsType>(INITIAL_EDUCATIONAL_SKILLS);
  const fresherProfileUploadService = new FresherProfileUploadService();

  const skillTextFieldRef = useRef<HTMLInputElement | null>(null);
  const [fileUploadPost] = useUploadFileMutation();
  const [getUserSkills] = useLazyGetUserSkillsQuery();
  const [setUserSkills] = useSetUserSkillsMutation();
  const [getUniversities] = useLazyUniversitySuggestionsQuery();
  const [saveProfile] = useSaveProfileMutation();
  const [getProfileEducationalSkills] = useLazyGetProfileQuery();
  const userId = useSelector((state: RootState) => state.authSlice.userId);
  const [skills, setSkills] = useState<Set<string>>(new Set([]));
  const httpClient: QuestionnaireHttpClient = new QuestionnaireHttpClient();

  const educationalSkillsKey: EducationalSkillsKey = {
    highestLevelEducation: useState<string | null>(null),
    board: useState<string | null>(null),
    stream: useState<string | null>(null),
  }

  const payloadEducationalSkills: EducationalSkillsKey = {
    highestLevelEducation: useState<string | null>(null),
    board: useState<string | null>(null),
    stream: useState<string | null>(null),
  }

  useEffect(() => {
    if (!userId) { return; }
    fetchUserSkills(userId);
    fetchEducationalSkills(userId);
  }, [userId]);

  useEffect(() => {
    if (educationalSkillsChangedByRef.current.value === CHANGED_BY.USER) {
      const selectedHighestEducation = educationalSkills.highestEducationList.find(e => e.selected);
      switch (selectedHighestEducation?.value) {

        case HIGHEST_EDUCATION.MATRIC:
          educationalSkillsKey.stream[1](() => null);
          educationalSkillsKey.board[1](() => null);
          setEducationalSkills((educationalSkills) => ({ ...educationalSkills, boardList: BOARD_LIST.map(board => ({ ...board, selected: false })), streamList: [] })); break;

        case HIGHEST_EDUCATION.INTER:
          educationalSkillsKey.stream[1](() => null);
          educationalSkillsKey.board[1](() => null);
          setEducationalSkills((educationalSkills) => ({ ...educationalSkills, boardList: BOARD_LIST.map(board => ({ ...board, selected: false })), streamList: STREAM_LIST.map(stream => ({ ...stream, selected: false })) })); break;

        default:
          setEducationalSkills((educationalSkills) => ({ ...educationalSkills, boardList: [], streamList: STREAM_NOBOARD_LIST.map(stream => ({ ...stream, selected: false })) })); break;

      }
    }

  }, [educationalSkills.highestEducationList]);

  useEffect(() => {
    const payload = {
      highestEducation: educationalSkills.highestEducationList.find((entity) => entity.selected)?.value,
      board: educationalSkills.boardList.find((entity) => entity.selected)?.value,
      stream: educationalSkills.streamList.find((entity) => entity.selected)?.value,
      percentage: educationalSkills.percentage
    }

    if (!payload.highestEducation) { /** **/ }
    if (!payload.board) { /** **/ }
    if (!payload.stream) { /** **/ }

  }, [educationalSkills.highestEducationList.find((entity) => entity.selected)?.value, educationalSkills.boardList.find((entity) => entity.selected)?.value, educationalSkills.streamList.find((entity) => entity.selected)?.value, educationalSkills.percentage]);

  function onUserUploadEduDoc(event: ChangeEvent<HTMLInputElement>) {
    if (!event?.target.files && !event?.target.files?.length) { return }
    const file = event?.target?.files[0];
    setEducationDocs((eduDocs) => [ ...eduDocs, { docType: FILE_UPLOAD_TYPES.EDUCATION, file }]);
    event.target.value = '';
  }

  function onUserUploadSkillDoc(event: ChangeEvent<HTMLInputElement>) {
    if (!event?.target.files && !event?.target.files?.length) { return }
    const file = event?.target?.files[0];
    setEducationDocs((eduDocs) => [ ...eduDocs, { docType: FILE_UPLOAD_TYPES.SKILL_CERTIFICATION, file }]);
    event.target.value = '';
  }

  function addUserEducationDoc(docType: FILE_UPLOAD_TYPES) {
    if (docType === FILE_UPLOAD_TYPES.EDUCATION) {
      userDocEduUploadFileRef?.current?.click();
    }
    else if (docType === FILE_UPLOAD_TYPES.SKILL_CERTIFICATION) {
      userDocSkillUploadFileRef?.current?.click();
    }

    else {
      console.log('unhandled')
    }
  }

  function fetchEducationalSkills(userId: string) {
    httpClient.request(getProfileEducationalSkills(userId))
      .pipe(
        concatMap(async ({ data: { response } }) => response)
      )
      .subscribe((response: UserEducationSkill) => {
        educationalSkillsChangedByRef.current.value = CHANGED_BY.SERVER;
        if (response?.highestLevelOfEdu) {
          onHighestLevelEducationChangeHandler(response.highestLevelOfEdu, CHANGED_BY.SERVER);


          educationalSkillsKey.highestLevelEducation[1](() => response.highestLevelOfEdu || null);
          payloadEducationalSkills.highestLevelEducation[1](() => response.highestLevelOfEdu || null);
        }
        if (response?.board) {
          onBoardUniversityChangeHandler(response.board)
          educationalSkillsKey.board[1](() => response.board || null);
          payloadEducationalSkills.board[1](() => response.board || null);
        }

        if (response?.stream) {
          onStreamChangeHandler(response.stream);
          educationalSkillsKey.stream[1](() => response.stream || null);
          payloadEducationalSkills.stream[1](() => response.stream || null);
        }

        if (response?.percentage) {
          onPercentageChangeHandler$(response.percentage.toString());
        }

        console.log(response);
      })
  }

  function onBoardUniversityFieldInput(value: string) {
    const selectedHighestEducation = educationalSkills.highestEducationList.find(e => e.selected);
    if (selectedHighestEducation?.value !== HIGHEST_EDUCATION.MATRIC && selectedHighestEducation?.value !== HIGHEST_EDUCATION.INTER) {

      httpClient.request(getUniversities(value))
        .pipe(
          concatMap(async ({ data: { list: response } }) => (response?.map((entity: Record<string, string>) => entity.board_University) || [])),
        )
        .subscribe(
          (universitiesList: string[]) => setEducationalSkills((educationalSkills) => ({ ...educationalSkills, boardList: universitiesList.map((university: string) => ({ code: university, value: university, selected: false })) }))
        )
    }
  }

  async function onDocumentUploadEvent(documentType: FILE_UPLOAD_TYPES, documentFile: File) {
    if (!userId) { return; }
    const formData = new FormData()
    formData.append('image', documentFile);
    formData.append('documentType', documentType);
    formData.append('userId', userId);


    from(fileUploadPost(formData))
      .pipe(
        concatMap((response$) => {
          if ((response$ as ErrorType)?.error?.status >= 400 && (response$ as ErrorType)?.error?.status <= 499) { return throwError('Server error'); }
          return of(response$);
        }),
        catchError(error => throwError(error))
      ).subscribe(
        (response) => {
          console.log('File upload success: ', response);
          alert('File ' + documentType + ' has been uploaded successfully');
        },
        (error: ErrorType) => {
          console.error('Got An Error while upoading: ', error);
        }
      );
  }

  function addSkillHandler() {
    const skillValue = skillTextFieldRef.current?.value;
    if (!skillValue || !skillValue.length || !userId) { return; }

    updateSkills(JSON.stringify(Array.from(new Set([...Array.from(skills), skillValue]))), userId);

  }

  function removeSkillHandler(skill: string) {
    const updatedSkills = skills;
    updatedSkills.delete(skill);
    if (!userId) { return; }
    updateSkills(JSON.stringify(Array.from(updatedSkills)), userId);
  }

  function updateSkills(userSkill: string, userId: string) {
    httpClient.request(setUserSkills({ userSkill, userId }))
      .subscribe(() => {
        if (skillTextFieldRef && skillTextFieldRef?.current) { skillTextFieldRef.current.value = ''; }
        fetchUserSkills(userId);
      });
  }

  function fetchUserSkills(userId: string) {
    httpClient.request(getUserSkills(userId))
      .pipe(concatMap(async ({ data: { response: { userSkill } } }) => (JSON.parse(userSkill))))
      .subscribe((skills) => { if (Array.isArray(skills)) setSkills(() => new Set(skills)) }, (error) => console.error(error))
  }

  function unHandledEvent() {
    console.log('event not handled');
  }

  function onHighestLevelEducationChangeHandler(value: string | null, changedBy: CHANGED_BY) {
    educationalSkillsChangedByRef.current.value = changedBy;
    if (value) {
      educationalSkillsKey.highestLevelEducation[1](() => value);
      payloadEducationalSkills.highestLevelEducation[1](() => value);
      setEducationalSkills((educationalSkills) => fresherProfileUploadService.onHighestLevelEducationChange(educationalSkills, value));
    }

  }

  function onBoardUniversityChangeHandler(value: string | null) {
    if (value) {
      educationalSkillsKey.board[1](() => value);
      payloadEducationalSkills.board[1](() => value);
      setEducationalSkills((educationalSkills) => fresherProfileUploadService.onBoardListChange(educationalSkills, value));
    }
  }

  function onStreamChangeHandler(value: string | null) {
    if (value) {
      educationalSkillsKey.stream[1](() => value);
      payloadEducationalSkills.stream[1](() => value);
      setEducationalSkills((educationalSkills) => fresherProfileUploadService.onStreamListChange(educationalSkills, value));
    }
  }

  function onPercentageChangeHandler({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    if (!/^[0-9]{0,3}$/gi.test(value)) { return; }
    onPercentageChangeHandler$(value)
    setEducationalSkills((educationalSkills) => ({ ...educationalSkills, percentage: Number(value) }))
  }

  function onPercentageChangeHandler$(value: string) {
    setEducationalSkills((educationalSkills) => ({ ...educationalSkills, percentage: Number(value) }))
  }

  async function saveEducationalProfile() {
    const payload: UserEducationSkill = {
      highestLevelOfEdu: educationalSkillsKey.highestLevelEducation[0] || undefined,
      board: educationalSkillsKey.board[0] || undefined,
      stream: educationalSkillsKey.stream[0] || undefined,
      percentage: (_.inRange(educationalSkills.percentage, 0, 101)) ? educationalSkills.percentage : undefined,
      UserId: userId
    }

    if (payload.highestLevelOfEdu === HIGHEST_EDUCATION.MATRIC) { payload.stream = null; }
    else { if (Object.values(payload).includes(undefined)) { return; } }

    console.log(payload);

    httpClient.request(saveProfile(payload)).subscribe((response) => console.log({ response }))
  }

  async function uploadUserEducationSkillCertificate(){
    console.log(educationDocs);
    educationDocs.map(({ docType, file }) => {
      onDocumentUploadEvent(docType, file);
    })
  }

  async function onSaveFresherInfo() {
    saveEducationalProfile();
    uploadUserEducationSkillCertificate();    
  }



  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <div>
            <div className="flex mb-[2em]">
              <div className="flex flex-col p-[1em] h-[20em] w-[18em] bg-[#F2F2F2] rounded-lg">
                <div className="flex-grow flex justify-center items-center">
                  <svg height="6em" width="6em">
                    <rect height="100%" width="1px" x="50%" fill="#5B5B5B" />
                    <rect height="1px" width="100%" y="50%" fill="#5B5B5B" />
                  </svg>
                </div>
                <div className="w-full bg-[#FFFFFF] md:bg-[#F2F2F2] text-[#5B5B5B] text-[0.8rem] md:text-[1.8em] text-center">Upload your Passport Photo</div>
              </div>
              <div className="p-5 md:pl-10">
                <div className="font-bold text-[#005F59] text-[2rem] md:text-[4em]">Hi Rahul,</div>
                <div className="text-[#5B5B5B] text-[1.052rem]  pr-[0px] md:text-[2.4em] md:pr-[120px]">Please complete your profile and more subtext here</div>
              </div>
            </div>

            <div className=" w-full md:my-[3em]">
              <div className="text-[#005F59] text-[1.3rem]  font-bold mb-[1em] md:text-[3.2em]">Skills</div>

              <div className="flex md:w-[50em] mb-[2em]">
                <div className="flex-grow flex flex-col pr-[2em]">
                  <TextField inputRef={skillTextFieldRef} size="small" />
                </div>
                <div className="flex">
                  <Button variant="contained" onClick={addSkillHandler}>Add</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-[1em] mb-[3em]">
                {Array.from(skills).map(skill => <Chip onClick={() => removeSkillHandler(skill)} className="text-[1.5em]" key={CommonUtilities.generateRandomString(100)} label={skill} />)}
              </div>
            </div>

            <EducationalInfoComponent educationalSkills={educationalSkills} educationalSkillsKey={educationalSkillsKey} onHighestLevelEducationChangeHandler={onHighestLevelEducationChangeHandler} onBoardUniversityFieldInput={onBoardUniversityFieldInput} onBoardUniversityChangeHandler={onBoardUniversityChangeHandler} onStreamChangeHandler={onStreamChangeHandler} onPercentageChangeHandler={onPercentageChangeHandler} />

            { /* Upload Documents section */}
            <div className="my-[3em]">
              <div className="text-[#005F59] text-[1.375rem] md:text-[3.2em] font-bold mb-[1em]">Upload Documents</div>

              { /*Identification documents section  */}
              <div className="text-[#5B5B5B] text-[0.875rem] md:text-[2.4em] font-bold mb-[1em]">Identification documents*</div>
              <div className="flex flex-col gap-[2em] md:grid md:grid-cols-[repeat(2,1fr)] md:gap-[2em] md:mb-[2em]">
                <DocUploader onDocUpload={(file: File) => onDocumentUploadEvent(FILE_UPLOAD_TYPES.AADHAR_CARD, file)} label="Upload Aadhar" uploading={false} />
                <DocUploader onDocUpload={(file: File) => onDocumentUploadEvent(FILE_UPLOAD_TYPES.PAN_CARD, file)} label="Upload PAN" uploading={false} />
                <DocUploader onDocUpload={(file: File) => onDocumentUploadEvent(FILE_UPLOAD_TYPES.CANCELLED_CHEQUE, file)} label="Cancelled Cheque" uploading={false} />
                <DocUploader onDocUpload={(file: File) => onDocumentUploadEvent(FILE_UPLOAD_TYPES.BANK_PASS_BOOK, file)} label="Front page of bank Passbook" uploading={false} />
              </div>

              {/* Education Section */}

              <div className="text-[#5B5B5B] text-[2.4em] font-bold my-[2em]">
                Education*
              </div>
              <div className=" flex  flex-col gap-5 md:grid md:grid-cols-[1fr,1fr] md:gap-[2em] md:mb-[2em]">
                { /* <DocUploader
                  label="12th_standard.png"
                  uploading={true}
                  progress={100}
                  onDocUpload={unHandledEvent}
                />
                <DocUploader
                  label="graduate.png"
                  uploading={true}
                  progress={10}
                  onDocUpload={unHandledEvent}
                /> */ }
                {
                  educationDocs.filter((doc) => doc.docType === FILE_UPLOAD_TYPES.EDUCATION).map(({ file: educationDoc}) => <DocUploader label={educationDoc.name} uploading={true} progress={100} onDocUpload={unHandledEvent} key={CommonUtilities.generateRandomString(10)} />)
                }
              </div>
              <div className="mt-[20px] md:mt-[0px]">
                <Button variant="contained" onClick={() => addUserEducationDoc(FILE_UPLOAD_TYPES.EDUCATION)}>Add</Button>
              </div>

              { /*Skills/Certification Section */}
              <div className="text-[#5B5B5B] text-[2.4em] font-bold my-[2em]">
                <h1>Skills/Certification*</h1>
                {/* <DocUploader label="MERN stack course.p..." className="w-full text-[0.5rem] md:w-[50%]" uploading={true} progress={100} onDocUpload={unHandledEvent} /> */}
                {
                  educationDocs.filter((doc) => doc.docType === FILE_UPLOAD_TYPES.SKILL_CERTIFICATION).map(({ file: educationDoc}) => <DocUploader label={educationDoc.name} className="w-full text-[0.5rem] md:w-[50%]" uploading={true} progress={100} onDocUpload={unHandledEvent} key={CommonUtilities.generateRandomString(20)} />)
                }
                <div>
                  {" "}
                  <Button variant="contained" className="mt-[20px]" onClick={() => addUserEducationDoc(FILE_UPLOAD_TYPES.SKILL_CERTIFICATION)} style={{ marginTop: "20px" }}>Add</Button>
                </div>
              </div>
            </div>

            <div className="flex gap-[2em] my-[2em] mt-[5em]">
              <Button style={{ minWidth: "10em" }} size="large" variant="outlined" >Cancel</Button>
              <Button style={{ minWidth: "10em" }} size="large" variant="contained" onClick={onSaveFresherInfo} >Save</Button>
            </div>
          </div>
        </div>

        <div >
          <HavingDoubts />
        </div>
        <input className="hidden" ref={userDocEduUploadFileRef} onChange={onUserUploadEduDoc} type="file" />
        <input className="hidden" ref={userDocSkillUploadFileRef} onChange={onUserUploadSkillDoc} type="file" />
      </div>
    </>
  );
}

function DocUploader({ className, label, uploading, progress, onDocUpload }: { className?: string; label: string; uploading?: boolean; progress?: number; onDocUpload: (file: File) => void }) {
  const uploadFileRef = useRef<HTMLInputElement | null>(null);

  function onClicked() {
    console.log('clicked');
    uploadFileRef.current?.click();
  }

  function onFileUploadEvent(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      onDocUpload(selectedFile);
      if (uploadFileRef.current) {
        uploadFileRef.current.value = '';
      }
    }
  }

  return (
    <>
      {uploading && <div className={"flex justify-between items-center shadow-lg px-[2em] py-[1.5em] rounded-[1em] " + (className || "")} >
        <div className="flex items-center gap-[1em] flex-grow">
          <div>
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-[0.25em] text-[#005F59] text-[2em] font-semibold flex-grow pr-[1em]">
            <div>{label}</div>
            {progress !== 100 && (
              <div className="h-[4px] w-[100%] bg-[#D9D9D9] relative">
                <div className="absolute h-[4px] bg-[#0E5F59]" style={{ width: (progress?.toString() || 0) + "%" }}></div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[max-content]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M16.0009 30.7206C24.1304 30.7206 30.7206 24.1304 30.7206 16.0009C30.7206 7.87147 24.1304 1.28125 16.0009 1.28125C7.87147 1.28125 1.28125 7.87147 1.28125 16.0009C1.28125 24.1304 7.87147 30.7206 16.0009 30.7206Z" fill="#005F59" />
            <path d="M21.4025 19.3397C21.6054 19.5433 21.7434 19.8028 21.7989 20.0852C21.8545 20.3676 21.8251 20.6603 21.7144 20.9259C21.6038 21.1915 21.4169 21.4182 21.1776 21.5771C20.9382 21.736 20.6571 21.82 20.37 21.8185C19.992 21.8185 19.6284 21.6727 19.3376 21.3956L16.0076 18.0565L12.6776 21.3956C12.3868 21.6872 12.0233 21.8185 11.6452 21.8185C11.2671 21.8185 10.9036 21.6727 10.6128 21.3956C10.478 21.2607 10.371 21.1005 10.298 20.9241C10.2251 20.7477 10.1875 20.5586 10.1875 20.3676C10.1875 20.1767 10.2251 19.9876 10.298 19.8112C10.371 19.6348 10.478 19.4746 10.6128 19.3397L13.9427 16.0005L10.6128 12.6614C10.4781 12.5264 10.3713 12.3662 10.2985 12.1898C10.2256 12.0134 10.1881 11.8244 10.1881 11.6335C10.1881 11.4426 10.2256 11.2535 10.2985 11.0771C10.3713 10.9007 10.4781 10.7405 10.6128 10.6055C10.7474 10.4705 10.9072 10.3634 11.0831 10.2903C11.259 10.2173 11.4475 10.1797 11.6379 10.1797C11.8283 10.1797 12.0168 10.2173 12.1927 10.2903C12.3686 10.3634 12.5285 10.4705 12.6631 10.6055L15.9931 13.9446L19.3231 10.6055C19.4577 10.4705 19.6175 10.3634 19.7934 10.2903C19.9693 10.2173 20.1578 10.1797 20.3482 10.1797C20.5386 10.1797 20.7271 10.2173 20.903 10.2903C21.0789 10.3634 21.2388 10.4705 21.3734 10.6055C21.508 10.7405 21.6148 10.9007 21.6877 11.0771C21.7605 11.2535 21.798 11.4426 21.798 11.6335C21.798 11.8244 21.7605 12.0134 21.6877 12.1898C21.6148 12.3662 21.508 12.5264 21.3734 12.6614L18.0434 16.0005L21.3734 19.3397H21.4025Z" fill="white" stroke="#0E5F59" />
          </svg>
        </div>
      </div>
      }
      {!uploading && <div onClick={onClicked} className={"cursor-pointer flex items-center gap-[1em] shadow-lg px-[2em] py-[1.5em] rounded-[1em] " + (className || "")}>
        <div>
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.625 27.625V17.875L11.375 21.125M14.625 17.875L17.875 21.125" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="text-[#005F59] text-[2em] font-semibold">{label}</div>
      </div>
      }
      <input ref={uploadFileRef} onChange={onFileUploadEvent} accept="image/jpeg" type="file" className="hidden" />
    </>
  );
}
