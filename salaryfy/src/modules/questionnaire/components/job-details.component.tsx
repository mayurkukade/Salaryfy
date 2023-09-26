import { useSelector } from "react-redux";
import image from "../../../assets/images/job-details-bg.png";
import CalendarVector from "./calendar-vector";
import { AppStoreStateType } from "../../../store/app.store";
import { SLICE_NAMES } from "../../../features/slice-names.enum";
import { useGetJobByIdQuery } from "../../../features/api-integration/jobs-search-slice/jobs-search.slice";
import { useParams } from "react-router-dom";

export default function UserJobDetails() {
  // selector hook to get all job details
  const jobDetails = useSelector(
    (state: AppStoreStateType) => state.root[SLICE_NAMES.JOB_DETAILS]
  );
  console.log(jobDetails);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetJobByIdQuery(id);
  console.log(data);

  let content:any;
  if (data) {
    content = data.object;
  } else if (isLoading) {
    content = <p>Loading</p>;
  } else if (isError) {
    content = <p>Error</p>;
  }
  console.log(content,'data')
  return (
    <>
      {/* This is For Webiste View Components */}
      <div className="hidden md:block z-[-1]">
        <div className="bg-cover-container">
          <img src={image} style={{ width: "100%" }} />
        </div>

        <div
          className="flex"
          style={{
            background:
              "linear-gradient(rgba(254, 205, 8, 0.07), rgb(14, 95, 89, 0.09))",
          }}
        >
          {/* First */}
          <div className="text-[1.8em] font-semibold text-[#0E5F59] px-[2em] flex items-center">
            <div className="relative min-w-[5em]">
              <div className="absolute h-[5em] w-[5em] p-[0.5em] flex items-center justify-center rounded-md bg-[#D7E8F0] -translate-y-full overflow-hidden">
                <img src={content.logo}></img>
              </div>
              <div className="relative text-center">{content.companyName}</div>
            </div>
          </div>

          {/* Second */}
          <div className="px-[1em] py-[1em]">
            <div className="text-[2em]  mb-[0.5em] ">
              <p className="font-medium text-[18px] leading-[27px]">
                {content.postName}
              </p>
            </div>
            <div className="flex text-[1.4em] font-medium">
              <div>
                <span>Location:&nbsp;</span>
                <span className="text-[#0E5F59]"></span>
                {content.location}
              </div>
              <div className="mx-2 w-[1px] h-[1.4em] bg-[#0E5F59]"></div>
              <div>
                <span>Starting Salary:&nbsp;</span>
                <span className="text-[#0E5F59]">{content.startingSalary}</span>
              </div>
            </div>
          </div>

          {/* THIRD */}
          <div className="flex-grow flex justify-end px-[2em] items-center">
            <div className="w-[fit-content] h-[fit-content] bg-white flex items-center border border-[#0E5F59] border-solid py-[0.5em] px-[1em] rounded-[2em]">
              <CalendarVector />
              <div className="ml-[0.5em] text-[1.3em] text-[#0E5F59] font-medium">
                Interview on: {content.interviewStartDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This is for Mobile View Components */}
      <div className="block md:hidden">
        <div className="bg-cover-container min-h-[15em] flex flex-col rounded-[2em,0em] overflow-hidden">
          <div className="w-[100%] h-[100%] absolute flex z-[1] py-[1em] px-[2em]"></div>
          <div className="flex-grow h-[100%] w-[100%] relative flex justify-center overflow-hidden">
            <div className="h-[100%] w-[max-content] absolute flex justify-center">
              <img src={image} className="h-full" />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center p-[2em]"
          style={{
            background:
              "linear-gradient(rgba(254, 205, 8, 0.07), rgb(14, 95, 89, 0.09))",
          }}
        >
          {/* First */}
          <div className="text-[1.8em] font-semibold text-[#0E5F59] px-[2em] flex items-center">
            <div className="relative min-w-[5em] mt-[1em]">
              <div className="absolute h-[5em] w-[5em] p-[0.5em] flex items-center justify-center rounded-md bg-[#D7E8F0] -translate-y-full overflow-hidden">
                <img src="/src/assets/images/lenskart-icon.png"></img>
              </div>
              <div className="relative text-center">
                {content?.companyName}
              </div>
            </div>
          </div>

          {/* Second */}
          <div className="w-[100%] flex flex-col gap-[1em]">
            <div className="text-[1.8em] font-[700]">
              {content?.jobDetails}
            </div>
            <div className="flex bg-white text-[1.1em] gap-[0.5em] text-[#EA4335] w-[max-content] border border-solid rounded-[2em] px-[1em] py-[0.5em]">
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2923 2.70801H9.75065V1.62467C9.75065 1.48102 9.69358 1.34324 9.592 1.24166C9.49042 1.14008 9.35264 1.08301 9.20898 1.08301C9.06532 1.08301 8.92755 1.14008 8.82597 1.24166C8.72439 1.34324 8.66732 1.48102 8.66732 1.62467V2.70801H4.33398V1.62467C4.33398 1.48102 4.27692 1.34324 4.17533 1.24166C4.07375 1.14008 3.93598 1.08301 3.79232 1.08301C3.64866 1.08301 3.51088 1.14008 3.4093 1.24166C3.30772 1.34324 3.25065 1.48102 3.25065 1.62467V2.70801H2.70898C2.27801 2.70801 1.86468 2.87921 1.55994 3.18396C1.25519 3.48871 1.08398 3.90203 1.08398 4.33301V4.87467H11.9173V4.33301C11.9173 3.90203 11.7461 3.48871 11.4414 3.18396C11.1366 2.87921 10.7233 2.70801 10.2923 2.70801ZM1.08398 10.2913C1.08398 10.7223 1.25519 11.1356 1.55994 11.4404C1.86468 11.7451 2.27801 11.9163 2.70898 11.9163H10.2923C10.7233 11.9163 11.1366 11.7451 11.4414 11.4404C11.7461 11.1356 11.9173 10.7223 11.9173 10.2913V5.95801H1.08398V10.2913Z"
                    fill="#EA4335"
                  />
                </svg>
              </span>
              <span>Interview on: {content.interviewStartDate}</span>
            </div>

            <div className="text-[1.4em] font-medium">
              <span className="text-[#5B5B5B]">Location&nbsp;</span>
              <span className="text-[#0E5F59]">{content.location}</span>
            </div>
            <div className="text-[1.4em] font-medium">
              <span className="text-[#5B5B5B]">Starting Salary:&nbsp;</span>
              <span className="text-[#0E5F59]">{content.startingSalary}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
