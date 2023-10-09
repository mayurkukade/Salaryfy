import { Box } from "@mui/material";

import { ReactNode } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/app.store";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

export default function QuestionnaireTopBarStep() {
  const phoneNumberCounterStep2 = useSelector(
    (state: RootState) => state.mainStepsCounter.phoneNumberCounter
  );
  const passwordCounterStep2 = useSelector(
    (state: RootState) => state.mainStepsCounter.passwordCounter
  );
  const emailCounterStep2 = useSelector(
    (state: RootState) => state.mainStepsCounter.emailCounter
  );
  const nameCounterStep2 = useSelector(
    (state: RootState) => state.mainStepsCounter.fullNameCounter
  );
  const confirmPasswordCounterStep2 = useSelector(
    (state: RootState) => state.mainStepsCounter.confirmPasswordCounter
  );

  const currentRoute = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  const {id} = useParams()
  console.log(id)
  console.log(currentRoute);
  let stepTwoTotal: number;
  let stepThreeTotal:number;
  if (currentRoute == "questionnaire/screening-questions/"+id) {
    stepTwoTotal = 25;
    stepThreeTotal = 0
  }else if(currentRoute == 'questionnaire/fresher-dashboard'){
    stepTwoTotal = 100;
    stepThreeTotal = 40
  } else if(currentRoute == 'questionnaire/schedule-interview/'+id){
    stepTwoTotal = 70;
    stepThreeTotal = 0
  }else if(currentRoute == 'questionnaire/fresher-profile-upload'){
    stepTwoTotal = 100;
    stepThreeTotal = 60
  }else if(currentRoute == 'questionnaire/fresher-roadmap'){
    stepTwoTotal = 100;
    stepThreeTotal = 100
  }
  else {
    stepTwoTotal =
      phoneNumberCounterStep2 +
      passwordCounterStep2 +
      emailCounterStep2 +
      nameCounterStep2 +
      confirmPasswordCounterStep2;
      stepThreeTotal = 0
  }



  return (
    <div className={ "flex w-[100%] md:w-[88.9%] container p-[3em] "}>
      {/* Code for Desktop view  */}
      <Box
        className="flex-grow justify-center w-[80%]  "
        sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
      >
        <div className="flex flex-grow w-[100%]    mb-[2em] gap-[2em]">
          <StepDesktop
            progress={currentRoute === "placementdrive" ? 50 :100 }
            active={false}
            no={1}
            title="Select the job"
          />
          <StepDesktop
            progress={stepTwoTotal}
            active={true}
            no={2}
            title="Upload your Resume"
          />
          <StepDesktop progress={stepThreeTotal} active={true} no={3} title="Get hired!" />
        </div>
      </Box>

      {/* code for mobile and tablet  devices */}
      <Box
        className="px-2 flex-grow justify-center w-[80%] h-[21.5vh]"
        sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
        // style={{ border: "2px solid black" }}
      >
        <div className="flex-grow   flex mb-[2em] gap-[2em] ">
          <StepMobile
            className="text-[0.5rem]"
            progress={currentRoute === "placementdrive" ? 50 :100 }
            active={true}
            no={1}
            title="Select the job"
          />
          <StepMobile
            className="text-[0.5rem]"
            progress={stepTwoTotal}
            active={stepTwoTotal > 0?true:false}
            no={2}
            title="Upload your Resume"
          />
          <StepMobile
            className="text-[0.5rem]"
            progress={stepThreeTotal}
            active={stepThreeTotal>0?true:false}
            no={3}
            title="Get hired!"
          />
        </div>
      </Box>
    </div>
  );
}

function StepMobile({
  className,
  title,
  no,
  active,
  progress,
}: {
  className?: string;
  title: string;
  no: number;
  active: boolean;
  progress: number;
}) {
  if (progress > 100 || progress < 0)
    throw new Error("Progress value must be between 0 and 100");
  return (
    <div
      className={
        "flex flex-grow flex-col  justify-start items-center " +
        (className || "")
      }
    >
      <div className="text-[1.5em] text-[#005F59] mb-[0.5em]">STEP</div>
      <div className="">
        <CircularProgressBarSVG
          color="#0E5F59"
          bgColor={active ? "#FECD08" : "white"}
          value={progress}
        >
          <div className="h-[100%] w-[100%] text-[#0E5F59] font-semibold text-[2.5em] flex items-center justify-center">
            {no}
          </div>
        </CircularProgressBarSVG>
      </div>
      <div className="text-[2em] text-[#0E5F59] font-semibold w-[7em] flex-grow">
        {title}
      </div>
    </div>
  );
}

function StepDesktop({
  className,
  title,
  no,
  active,
  progress,
}: {
  className?: string;
  title: string;
  no: number;
  active: boolean;
  progress: number;
}) {
  if (progress > 100 || progress < 0)
    throw new Error("Progress value must be between 0 and 100");
  const currentRoute = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  console.log(currentRoute);
  console.log(currentRoute == "questionnaire/fresher-dashboard" || "questionnaire/fresher-profile-upload");
  return (
    <div className={"flex flex-grow " + (className || "")}>
      <div className="flex flex-col items-center mr-[1.5em]">
        <div className="text-[1.5em] text-[#005F59] mb-[0.5em]">STEP</div>

        <div
          className={`w-[6.5em] h-[6.5em] rounded-[50%]  ${
            active ? "bg-[#FECD08] " : "bg-[#005F59] "
          } ${
            active ? "text-[#005F59]" : "text-[#fff]"
          } flex justify-center items-center ${
            no == 3 ? "bg-[#9ca3af] text-black" : null
          } ${
            no == 3 && currentRoute == "questionnaire/fresher-dashboard" 
              ? "!bg-[#FECD08] text-black"
              : null
          } ${
            no == 2 && currentRoute == "questionnaire/fresher-dashboard" || currentRoute == "questionnaire/fresher-profile-upload"  || currentRoute == "questionnaire/fresher-roadmap"
              ? "!bg-[#005F59] text-white"
              : null
          } `}
        >
          <span className="text-[2em]">{no}</span>
        </div>
      </div>
      <div className="flex-grow flex items-center flex-col justify-center">
        <div className="text-[1.8em] font-medium text-[#005F59] mb-[0.5em] w-[100%]">
          {title}
        </div>
        <div className="border rounded-[0.5em] w-[100%] h-[1em] bg-[#DFEAE9] relative">
          <div
            className="h-[1em] rounded-[0.5em] bg-[#005F59] absolute"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

const CircularProgressBarSVG = ({
  value,
  bgColor,
  color,
  children,
}: {
  value: number;
  bgColor: string;
  color: string;
  children: ReactNode;
}) => {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - value) * circumference) / 100;
  const currentRoute = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  console.log(currentRoute);
  return (
    <svg
      width="100%"
      height="80%"
      viewBox="0 0 100 100"
      style={{
        transform: "rotate(0deg)",
        maxHeight: "100px",
        maxWidth: "100px",
      }}
    >
      <g transform={`rotate(90 50 50)`}>
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill={bgColor}
          stroke={"#DFEAE9"}
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
      </g>
      {children && (
        <foreignObject x="20" y="20" width="60" height="60">
          {children}
        </foreignObject>
      )}
    </svg>
  );
};
