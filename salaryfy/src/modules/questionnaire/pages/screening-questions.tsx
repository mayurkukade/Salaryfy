
import { AppRadioButton } from "../../../components/app-radio.button.component";
import { useGetScreeningQuestionQuery } from "../../../features/api-integration/screeningQuestion/screeningQuestionStep2Slice";

import UserJobDetails from "../components/job-details.component";
import QuestionnaireTopBarStep from "../components/questionnaire-topbar-step.component";

import SubSteps from "../components/sub-steps.component";


export default function ScreeningQuestions() {
  const {
    data: responseData,
    isError,
    isLoading,
  } = useGetScreeningQuestionQuery();
  
  console.log(responseData);
  console.log(isError);
  console.log(isLoading);

  // type QuestionType = Array<{ ques: string, type: 'Boolean' | 'Rating' | 'String', ans: string }>;
  // const initQuestions: QuestionType = [
    
  // ];

  // const [questions, setQuestions] = React.useState<QuestionType>(initQuestions);

  return (
    <div className="w-100 flex flex-col items-center h-[100%]">
      <QuestionnaireTopBarStep />
      <div className="max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]">
        <div className="text-[1.4em]">Job Details</div>
        <UserJobDetails />

        {/* STEPS */}
        <div className="py-[2em] px-[3em] h-[100%]">
          <SubSteps />

          {responseData && <Questions responseData={responseData} />}

          {/* <BottomPageNavigationBar currentPageParent={setCurrentPage}/> */}

          <div className="flex justify-center mt-6">
            <div className="flex items-center px-[1.5em] py-[0.5em] rounded-xl bg-[#B3B3B3] mx-[1em]">
              <span className="mr-[1em]">
                <svg
                  width="35"
                  height="25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
              <span className="text-[2em] text-[#5B5B5B] font-medium mr-[0.5em] cursor-pointer">
                Back
              </span>
            </div>
            <div className="flex items-center bg-[#FECD08] px-[1.5em] py-[0.5em] rounded-xl mx-[1em]">
              <button className="text-[2em] font-medium mr-[0.5em] text-[#005F59] cursor-pointer">
                Next
              </button>
              <span className="" style={{ transform: "scaleX(-1)" }}>
                <svg
                  width="35"
                  height="25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z"
                    fill="#005F59"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function Questions({ responseData }: any) {
  console.log("response for question is", responseData);
  const { response } = responseData;
  console.log("response for question is", response);

  function changedFor(qId: string, response: string) {
    console.log({ qId, response });
  }

  return (
    <>
      <div className="font-semibold text-[1.8em] text-[#5B5B5B] mb-[1em]">
        Fill the details below
      </div>
      {response.map((question:any, index:number) => {
        if (question.questionType === "Boolean") {
          return (
            <YesNoQuestionSet onResponseChange={(response: string) => changedFor(question.jobFairQ1Id, response)} question={question.question} key={index} />      
          );
        }else if(question.questionType === "Rating"){
          return(
              <RatingResponseSet onResponseChange={(response: string) => changedFor(question.jobFairQ1Id, response)} question={question.question} key={index}/>
          )
        }
        // return <></>
      })}

      {/* <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <YesNoResponse className="text-[1.5em] ml-[1.5em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" />

      <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <YesNoResponse className="text-[1.5em] ml-[1.5em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" />

      <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <YesNoResponse className="text-[1.5em] ml-[1.5em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" />

      <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <RatingResponse className="ml-[2em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" />

      <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <RatingResponse className="ml-[2em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" />

      <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <RatingResponse className="ml-[2em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" />

      <Question question="Do you currently live in the city for which you want to apply the job for?" />
      <RatingResponse className="ml-[2em] mb-[1em]" />
      <QuestionSeparator className="mb-[2em]" /> */}
    </>
  );
}

//  this code is for boolen / Radio button
function YesNoQuestionSet({question, onResponseChange }: any) {
  const [response, setResponse] = React.useState("Yes");

  const handleResponseChange = (selectedResponse:string)=>{
    setResponse(selectedResponse);
    onResponseChange(selectedResponse);
  }
  return (
  <>
    <Question question={question} />
    {/* <YesNoResponse className="text-[1.5em] ml-[1.5em] mb-[1em]" /> */}
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={response}
        onChange={(e)=>{
          handleResponseChange(e.target.value)
        }}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    <QuestionSeparator className="mb-[2em]" />
  </>
  );
}

// this code is for Rating button
function RatingResponseSet({ question, onResponseChange }: any) {
  const [value, setValue] = React.useState<number | null>(1);

  const handleResponseChange = (newValue: number | null) => {
    setValue(newValue);
    onResponseChange(newValue);
  };

  return (
    <>
      <Question question={question} />
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => handleResponseChange(newValue)}
        />
      </Box>
      <QuestionSeparator className="mb-[2em]" />
    </>
  );
}


// function RatingResponseSet({question, onResponseChange}: any) {
//   const [value, setValue] = React.useState<number | null >(1);
//   const handleResponseChange = (selectedResponse:Number)=>{
//     setValue(selectedResponse);
//     onResponseChange(selectedResponse);
//   }
//   return (
//   <>
//      <Question question={question}/>
//       {/* <RatingResponse className="ml-[2em] mb-[1em]" /> */}
//       <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
     
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(e, newValue) => {
//           setValue(newValue);
//           handleResponseChange(e.target.newValue)
//         }}
//       />
//     </Box>
//       <QuestionSeparator className="mb-[2em]" />
//   </>
//   );
// }

export function Question({ question }: { question: string }) {
  return (
    <div className="flex">
      <div className="mt-[0.25em] mr-[1em] h-[100%]">
        <svg
          width="15"
          height="18"
          viewBox="0 0 15 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.273438"
            width="12.2727"
            height="12.2727"
            rx="2"
            fill="#FECD08"
          />
          <path
            d="M15 11.1815L4.77273 17.0862L4.77273 5.27674L15 11.1815Z"
            fill="#0E5F59"
          />
        </svg>
      </div>
      <div className="text-[1.5em] font-medium">
        <div className="mb-[0.5em]">{question}</div>
      </div>
    </div>
  );
}

export function QuestionSeparator({ className }: { className?: string }) {
  return (
    <div
      className={"bg-[#0E5F59] h-[1px] opacity-[0.2] w-[100%] " + className}
    ></div>
  );
}

// export function RatingResponse({ className }: { className?: string }) {
//   function Star({
//     className,
//     active,
//   }: {
//     className?: string;
//     active?: boolean;
//   }) {
//     return (
//       <>
//         {active && (
//           <div className={className}>
//             <svg
//               width="19"
//               height="18"
//               viewBox="0 0 19 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9.5 0L12.7945 4.96546L18.535 6.56434L14.8307 11.232L15.084 17.1857L9.5 15.105L3.91604 17.1857L4.16933 11.232L0.464963 6.56434L6.20546 4.96546L9.5 0Z"
//                 fill="#FECD08"
//               />
//             </svg>
//           </div>
//         )}

//         {!active && (
//           <div className={className}>
//             <svg
//               width="19"
//               height="18"
//               viewBox="0 0 19 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9.5 0L12.7945 4.96546L18.535 6.56434L14.8307 11.232L15.084 17.1857L9.5 15.105L3.91604 17.1857L4.16933 11.232L0.464963 6.56434L6.20546 4.96546L9.5 0Z"
//                 fill="#D7E8F0"
//               />
//             </svg>
//           </div>
//         )}
//       </>
//     );
//   }
//   return (
//     <div className={"flex " + className}>
//       <Star className="mr-[1em]" active={true} />
//       <Star className="mr-[1em]" active={true} />
//       <Star className="mr-[1em]" active={true} />
//       <Star className="mr-[1em]" active={true} />
//       <Star className="" active={false} />
//     </div>
//   );
// }



// export function YesNoResponse({ className }: { className?: string }) {
//   return (
//     <div className={"flex " + className}>
//       <div className="flex items-center mr-[0.5em]">
//         <span className="mr-[0.5em]">
//           <AppRadioButton active={true} />
//         </span>
//         <span>Yes</span>
//       </div>
//       <div className="flex items-center">
//         <span className="mr-[0.5em]">
//           <AppRadioButton active={false} />
//         </span>
//         <span>No</span>
//       </div>
//     </div>
//   );
// }
