import { useSelector } from "react-redux";
import { SUB_STEP_STATUS } from "../constants/sub-step.enum";
import { SubStepArrow } from "../pages/personal-details.page";
import SubStep from "./sub-step.component";
import { RootState } from "../../../store/app.store";
import { useParams } from "react-router-dom";

export default function SubSteps() {
  const currentRoute = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  console.log(currentRoute);
  const {id} = useParams()
  let subStepContent;
  if (currentRoute == "questionnaire/screening-questions/" +id) {
    subStepContent = (
      <>
        <SubStep
          status={SUB_STEP_STATUS.PENDING}
          no={1}
          title="Upload your Resume"
        />
        <SubStepArrow />
        <SubStep
          status={SUB_STEP_STATUS.COMPLETED}
          no={2}
          title="Screening Quesions"
        />
        <SubStepArrow />
        <SubStep
          status={SUB_STEP_STATUS.REMAINING}
          no={3}
          title="Confirming Interview Slot"
        />
      </>
    );
  }else if(currentRoute == "questionnaire/schedule-interview/"+id){
    subStepContent = (
      <>
        <SubStep
          status={SUB_STEP_STATUS.PENDING}
          no={1}
          title="Upload your Resume"
        />
        <SubStepArrow />
        <SubStep
          status={SUB_STEP_STATUS.COMPLETED}
          no={2}
          title="Screening Quesions"
        />
        <SubStepArrow />
        <SubStep
          status={SUB_STEP_STATUS.REMAINING}
          no={3}
          title="Confirming Interview Slot"
        />
      </>
    );
  } else {
    subStepContent = (
      <>
        <SubStep
          status={SUB_STEP_STATUS.PENDING}
          no={1}
          title="Upload your Resume"
        />
        <SubStepArrow />
        <SubStep
          status={SUB_STEP_STATUS.REMAINING}
          no={2}
          title="Screening Quesions"
        />
        <SubStepArrow />
        <SubStep
          status={SUB_STEP_STATUS.REMAINING}
          no={3}
          title="Confirming Interview Slot"
        />
      </>
    );
  }
  return (
    <>
      <div className="hidden md:flex flex-col">
        <div
          style={{
            background: "linear-gradient(45deg, #FFCE09 50%, transparent)",
          }}
          className="mb-[1em] text-[#0E5F59] text-[1.5em] px-[1em] rounded-[1em] py-[0.25em]"
        >
          <span className="text-[15px] font-normal leading-[27px]">3 steps selection process for&nbsp;</span>
          <span className="font-medium leading-[27px] text-[15px]">Lenskart</span>
        </div>
        <div className="flex justify-between mb-[2em]">{subStepContent}</div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex md:hidden flex-col w-[max-content] rounded-[1.5em]"
          style={{
            background:
              "linear-gradient(to bottom, #FECD08 1%, #fff 30%, #fff 50%, #fff 100%)",
          }}
        >
          <div className="text-[#0E5F59] text-[1.4em] px-[1em] pt-[0.5em] mb-2">
            <span>3 Steps selection process for&nbsp;</span>
            <span className="font-medium leading-[27px] text-[15px]">Lenskart</span>
          </div>
          <div className="flex items-center gap-[0.5em] bg-[#0E5F59] p-[1em] rounded-[1.5em]">
            <div className="h-[4.5em] w-[4.5em] bg-[white] rounded-[50%]"></div>
            <div>
              <div className="text-[white] text-[15px] leading-[27px] font-normal">Step-1</div>
              <div className="text-[#FECD08] text-[1.9em] font-[500]">
                Upload your resume
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}