import { Button } from "@mui/material";

import { HavingDoubts } from "../components/having-doubts.component";
import LenskartImage from "../../../assets/images/lenskart-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreStateType, RootState } from "../../../store/app.store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SLICE_NAMES } from "../../../features/slice-names.enum";
import { CommonUtilities } from "../../../utils/common.utilities";
import { useLazyGetUserByIdQuery } from "../../../features/api-integration/user-profile/user-profile.slice";
import { UserDetailsType } from "../../../features/reducers/user-details/user-details.interface";
import { setUserDetails } from "../../../features/reducers/user-details/user-details.slice";
import { useLazyGetUpcomingInterviewsQuery } from "../../../features/api-integration/upcoming-interviews/upcoming-interviews.slice";
import { useLazyGetJobByIdQuery, useLazyGetRecommendedJobsQuery } from "../../../features/api-integration/jobs-search-slice/jobs-search.slice";
import { JobsDetailsType } from "../../../features/reducers/job-details/job-details.interface";
import _ from 'lodash';
import { QuestionnaireHttpClient } from "../services/questionnaire.service";
import { concatMap } from "rxjs";
import { EducationalSkillsType, FresherProfileUploadService, INITIAL_EDUCATIONAL_SKILLS } from "../services/fresher-profile-upload.service";
import { EducationalSkillsKey, UserEducationSkill } from "../constants/fresher.type";
import { EducationalInfoComponent } from "../components/educational-info.component";
import { BOARD_LIST, CHANGED_BY, HIGHEST_EDUCATION, STREAM_LIST, STREAM_NOBOARD_LIST } from "../constants/fresher-profile-upload.list";
import { useLazyGetProfileQuery, useLazyUniversitySuggestionsQuery, useSaveProfileMutation } from "../../../features/api-integration/profile-qualification/profile-qualification.slice";
import JobCard2 from "../../../components/PlacementPageComponent/JobCard2";
import { Link } from "react-router-dom";

const initialValue: { value: CHANGED_BY } = {
  value: CHANGED_BY.SERVER
};
interface UpcomingInterviewType {
  date: string,
  interviewDate: string,
  interviewScheduleId: number,
  jobId: number,
  location: string,
  status: string,
  time: string,
  userId: number,
}



// Main Page of fresher Dashboard Page
export default function FresherDashboardPage() {

  return (
    <div className="container mx-auto">
      <div className="p-4 flex flex-col items-center ">

        <div className="w-[100%] mb-[2em] flex flex-col h-[100%]">
          {/* STEPS */}
          <div className=" md:py-[2em] md:px-[3em] md:h-[100%]">
            <FresherDashboard />

          </div>
        </div>
      </div>
    </div>
  );
}

{ /* Freshser Dashboard Section */ }
export function FresherDashboard() {

  const userId = useSelector((state: RootState) => state.authSlice.userId);
  const userProfile = useSelector((state: AppStoreStateType) => state.root[SLICE_NAMES.USER_DETAILS]);
  const [getLazyUserProfile] = useLazyGetUserByIdQuery();
  const [getLazyUpcomingInterviews] = useLazyGetUpcomingInterviewsQuery();
  const [getRecommendedJobs] = useLazyGetRecommendedJobsQuery();
  const [saveProfile] = useSaveProfileMutation();
  const dispatch = useDispatch();

  const [educationalSkills, setEducationalSkills] = useState<EducationalSkillsType>(INITIAL_EDUCATIONAL_SKILLS);
  const [getUniversities] = useLazyUniversitySuggestionsQuery();
  const [getProfileEducationalSkills] = useLazyGetProfileQuery();

  const httpClient: QuestionnaireHttpClient = new QuestionnaireHttpClient();
  const [listUpcomingInterviews, setListUpcomingInterviews] = useState<Array<UpcomingInterviewType>>([]);
  const [recommendJobsState, setRecommendJobsState] = useState<Array<JobsDetailsType>>([]);

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

  const educationalSkillsChangedByRef = useRef(initialValue);

  const fresherProfileUploadService = new FresherProfileUploadService();

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

  async function userIdUpdated() {
    if (!userId) { return; }

    const { data: { response: responseData } } = await getLazyUserProfile(userId.toString());
    const userProfile = responseData as UserDetailsType;

    console.log(userProfile);
    if (userProfile) {
      dispatch(setUserDetails(userProfile));

      // const { data: { list: responseData } } = await getLazyUpcomingInterviews(userId);

      httpClient.request(getLazyUpcomingInterviews(userId))
        .pipe(concatMap(async ({ data: { list: response } }) => response))
        .subscribe((response) => {
          const listUpcomingInterviewsResponse = response as Array<UpcomingInterviewType>;
          setListUpcomingInterviews(() => listUpcomingInterviewsResponse);
        });
    }

    // const { data: { response: profileResponseData } } = await getLazyProfile(userId);

    // const { data: { list: responseRecommendJobs } } = await getRecommendedJobs('');

    httpClient.request(getRecommendedJobs(''))
      .pipe(concatMap(async ({ data: { list: response } }) => response))
      .subscribe((response) => setRecommendJobsState(() => response))

  }

  useEffect(() => {
    userIdUpdated();
    if (!userId) { return; }
    fetchEducationalSkills(userId);
  }, [userId]);

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

  function onHighestLevelEducationChangeHandler(value: string | null, changedBy: CHANGED_BY) {
    educationalSkillsChangedByRef.current.value = changedBy;
    if (value) {
      educationalSkillsKey.highestLevelEducation[1](() => value);
      payloadEducationalSkills.highestLevelEducation[1](() => value);
      setEducationalSkills((educationalSkills) => fresherProfileUploadService.onHighestLevelEducationChange(educationalSkills, value));
    }
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

  async function onSaveFresherInfo() {

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

  return (
    <div className="container mx-auto">
      <div className=" flex flex-col gap-5 md:flex-row ">
        {/* Left Card Section */}
        <div className="flex flex-col">
          <div className="text-[1.5rem] text-[#005F59] font-bold mb-[1em] md:text-[4em]">
            Hi {userProfile.fullName},
          </div>
          <div className="mb-[2em]">
            <span className="text-[0.9rem] md:text-[2.2em] text-[#5B5B5B]">
              Our placement manager will get in touch with you within 24 hours,
              meanwhile please check and complete your profile.
            </span>
          </div>

          {/* Candidate Table */}
          <div
            style={{ boxShadow: "0 0 10px rgb(0, 0, 0, 0.2)", fontWeight: '500' }}
            className="mb-[2em] text-[1.8em] rounded-xl overflow-hidden grid grid-cols-[max-content,auto] grid-cols-auto [&>*]:whitespace-nowrap [&>*]:px-[1.5em] [&>*]:py-[0.5em] [&>*]:border-b [&>*]:border-solid [&>*]:border-b-[#0E5F591A] [&>*:nth-child(odd)]:bg-[#0E5F5919] [&>*:nth-child(odd)]:text-[#5b5b5b] [&>*:nth-child(odd)]:w-[10em] [&>*:nth-child(even)]:w-[100%] [&>*:nth-child(even)]:break-all"
          >
            <div>Full Name</div>
            <div>{userProfile.fullName}</div>
            <div>Phone</div>
            <div>{userProfile.mobile_no}</div>
            <div>Email</div>
            <div className="text-wrap">{userProfile.email}</div>
            <div>Status</div>
            <div>
              { true && <span className="bg-[yellow] rounded-[1em] text-[green] px-[0.5em] py-[0.25em]">
                In Progress
              </span> }
            </div>
            <div>Plan Opted</div>
            <div>Job Fair</div>
            <div>Sign Up Date</div>
            <div>{userProfile?.date && CommonUtilities.date.formatDate(userProfile?.date)}</div>
            <div>Payment Method</div>
            <div>-</div>
          </div>

          {/* Education Details Section*/}
          <div style={{ boxShadow: "0 0 10px rgb(0, 0, 0, 0.2)" }} className="rounded-xl lg:mb-[2em] xs:mb-[2em] p-3">
            {/* <div className="p-2 md:grid md:grid-cols-[1fr,1fr] md:[&>*]:mx-[2em] md:[&>*]:my-[1em] md:p-[1.5em] [&>*]:flex [&>*]:flex-col [&>*]:justify-between">
              <div>
                <div className="mb-[0.5em] text-[2em] text-[#005F59] font-semibold">Highest Level of Education</div><DropdownMenu label={profileLevel.highestLevelOfEdu[0] || ''} options={profileLevel.highestLevelOfEdu} endIcon={<KeyboardArrowDownIcon />} />
              </div>
              <div>
                <div className="mb-[0.5em] text-[2em] text-[#005F59] font-semibold">Board/University</div><DropdownMenu label={profileLevel.board[0] || ''} options={profileLevel.board} endIcon={<KeyboardArrowDownIcon />} />
              </div>
              <div>
                <div className="mb-[0.5em] text-[2em] text-[#005F59] font-semibold">Stream</div><DropdownMenu label={profileLevel.stream[0] || ''} options={profileLevel.stream} endIcon={<KeyboardArrowDownIcon />} />
              </div>
              <div>
                <div className="mb-[0.5em] text-[2em] text-[#005F59] font-semibold">Percentage secured</div>
                <TextField inputRef={percentageTextfieldRef} type="number" onChange={(e) => handlePercentageChange(e.target.value)} defaultValue={profileLevel.percentage} size="small" />
              </div>
            </div>
            <div className="mr-[50px] ms-[3.5em] mb-[3em] flex justify-center md:justify-start">
              <Button variant="contained" onClick={onUpdate} sx={{ padding: "0.5em 2em" }}>Update</Button>
            </div> */}

            {/* <EducationalInfoComponent   /> */}
            <EducationalInfoComponent educationalSkills={educationalSkills} educationalSkillsKey={educationalSkillsKey} onHighestLevelEducationChangeHandler={onHighestLevelEducationChangeHandler} onBoardUniversityFieldInput={onBoardUniversityFieldInput} onBoardUniversityChangeHandler={onBoardUniversityChangeHandler} onStreamChangeHandler={onStreamChangeHandler} onPercentageChangeHandler={onPercentageChangeHandler} />
            <Button style={{ minWidth: "10em", lineHeight: '27px', fontSize: '18px'}} size="large" variant="contained" onClick={onSaveFresherInfo}  >Update</Button>

          </div>

          {/* Recommended Jobs Section Heading*/}
          <div className="text-[2.6em] font-[500] my-[1em]">Recommended jobs</div>

          {/* Recommended Jobs Card section*/}

          <div className="flex flex-col gap-6">
            {
              // recommendJobsState.map((details: JobsDetailsType) => <RecommendJobsCard key={CommonUtilities.generateRandomString(100)} details={details} />)
              recommendJobsState.map((details: JobsDetailsType) => <JobCard2 key={CommonUtilities.generateRandomString(100)} details={details} />)
            }
          </div>
        </div>

        {/* Right Section of Card*/}
        <div className="flex flex-col pr-[1em] md:pl-[5em] pt-[1.5rem]">
          <div className="flex flex-col mb-[1em]">
            <Link to='/questionnaire/fresher-profile-upload'>
            <Button variant="contained">
              <span className="text-[18px] mr-[1em]" style={{ lineHeight: '27px' }}>
                Upload joining documents
              </span>
              <span className="" style={{ transform: "scaleX(-1)" }}>
                <svg
                  width="35"
                  height="25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z"
                    fill="#fff"
                  />
                </svg>
              </span>
            </Button></Link>
          </div>

          {/* Upcoming interviews section */}
          <div className="mx-[1em] whitespace-nowrap my-[1em]   font-medium text-[2.6em] text-[#0E5F59]">
            Upcoming Interviews
          </div>
          <div className="p-4 app-scrollbar h-[50em] flex flex-col gap-[2em]">
            {
              listUpcomingInterviews.map((upcomingInterview: UpcomingInterviewType) => <UpcomingInterviewCard details={upcomingInterview} key={CommonUtilities.generateRandomString(20)} />)
            }

          </div>

          {/* Having Doubts section */}
          <HavingDoubts />
        </div>
      </div>
    </div>
  );
}

// function RecommendJobsCard({ details }: { details: JobsDetailsType }) {

//   console.log('fresher: ', { date: CommonUtilities.date.formatDate(details.interviewStartDate) })

//   return (
//     <div className="rounded-[2em] px-[2.5em] py-[2em] app-box-shadow">
//       <div className="flex mb-[1em]">
//         <div
//           className="rounded-md border border-solid border-[#D7E8F0] p-[1em] h-[7.7em] w-[7.7em] flex items-center justify-center"
//           style={{
//             background: "linear-gradient(to right, #D7E8F0, #F1FAFB)",
//           }}
//         >
//           <img src={LenskartImage} />
//         </div>
//         <div className="flex flex-col justify-center flex-grow px-[1em]">
//           <div className="text-[#005F59] app-theme-text" style={{ fontWeight: '500 !important' }}>
//             {details.postName}
//           </div>
//           <div className="text-[1.8em] text-[#5b5b5b] app-theme-text">
//             {details.companyName}
//           </div>
//         </div>
//         <div className="text-[#5B5B5B] flex app-theme-text">
//           <div className="mr-[0.5em]">Status</div>
//           <div className="border border-solid h-[max-content] border-[#5B5B5B] px-[0.5em] rounded-[1em]">
//             Application Sent
//           </div>
//         </div>
//       </div>
//       <div className="mb-[0.5em] flex app-theme-text">
//         <div className="mr-[0.5em] text-[#5B5B5B]">Location:</div>
//         <div className="text-[#005F59]">{details.location}</div>
//       </div>
//       <div className="flex flex-row app-theme-text">
//         <div className="mr-[0.5em] text-[#5B5B5B]">Job-Type:</div>
//         <div className="text-[#005F59]">{details.jobType}</div>
//         <div className="bg-[#00595F4C] mx-[2em] flex-grow max-w-[1px]"></div>
//         <div className="mr-[0.5em] text-[#5B5B5B]">No of Posts:</div>
//         <div className="text-[#005F59]">{details.noOfPosts}</div>
//       </div>
//     </div>
//   );
// }

// Upcoming Card Interview Section
function UpcomingInterviewCard({ className, details }: { className?: string, details: UpcomingInterviewType }) {
  const [getLazyJobById] = useLazyGetJobByIdQuery();
  const [jobDetails, setJobDetails] = useState<JobsDetailsType>();

  useEffect(() => {
    async function init() {
      const { data: { object: jobDetailsResponse } } = await getLazyJobById(details.jobId.toString());
      setJobDetails(() => jobDetailsResponse);
      console.log('dash1: ', details);
    }
  
    init(); // Call the init function immediately within the effect
  
  }, [details, getLazyJobById]); 

  return (
    <div
      className={"p-[1.5em] rounded-[1em] " + className}
      style={{
        boxShadow: "0 0 10px rgb(210, 210, 210)",
        background: "linear-gradient(to right, #FECD080A, #0E5F591C)",
      }}
    >
      <div className="flex flex-col max-w-[32em]">
        <div className="flex mb-[1em]">
          <div
            className="mr-[1em] rounded-md border border-solid border-[#D7E8F0] p-[1em] h-[5em] w-[5em] flex items-center justify-center"
            style={{
              background: "linear-gradient(to right, #D7E8F0, #F1FAFB)",
            }}
          >
            <img src={LenskartImage} />
          </div>
          <div className="text-[1.5em] font-semibold">
            <div className="text-[#0E5F59]">
              {jobDetails?.postName}
            </div>
            <div className="text-[#5B5B5B]">{jobDetails?.companyName}</div>
          </div>
        </div>
        <div className="flex pb-[1em]">
          <div>
            <div className="text-[1.4em] flex mb-[1em]">
              <div className="mr-[0.5em] whitespace-nowrap">Interview on:</div>
              <div className="bg-[#0E5F59] text-[#FECD08] px-[1em] rounded-[2em] whitespace-nowrap">
                {details?.interviewDate && CommonUtilities.date.formatDate(details.interviewDate)}
              </div>
            </div>
            <div className="text-[1.4em] flex mb-[1em]">
              <div className="mr-[0.5em]">Status:</div>
              <div className="border border-solid border-[#1877F2] text-[#1877F2] px-[1em] rounded-[2em]">
                {details.status}
              </div>
            </div>
            <div className="text-[1.4em] flex">
              <div className="mr-[0.5em]">Location:</div>
              <div className="text-[#0E5F59]">{details?.location}</div>
            </div>
          </div>
          <div className="px-[1em] flex flex-row items-end">
            <div className="border border-solid border-[#0E5F59] text-[#0E5F59] bg-white px-[0.5em] py-[0.25em] rounded-[0.5em] font-semibold whitespace-nowrap">
              View More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
