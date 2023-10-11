import React, { useState,useEffect } from "react";
import { useGetScreeningQuestionQuery,usePostScreeningQuestionSliceMutation } from "../../../features/api-integration/screeningQuestion/screeningQuestionStep2Slice";
import UserJobDetails from "../components/job-details.component";
import SubSteps from "../components/sub-steps.component";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { RootState } from "../../../store/app.store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppStoreStateType } from '../../../store/app.store';
import { SLICE_NAMES } from "../../../features/slice-names.enum";
import { useParams } from "react-router-dom";
export default function ScreeningQuestions() {

  // const cureentSelector = useSelector(
  //   (state: RootState) => state.currentRoute.currentRoute
  // );
  // console.log(cureentSelector);


 
   // selector hook to get all job details
   const jobDetails = useSelector((state: AppStoreStateType) => state.root[SLICE_NAMES.JOB_DETAILS]);
   console.log( jobDetails?.jobId);
   const { id } = useParams();
   console.log(id)
  //  const id = isNaN(jobDetails?.jobId) ? 1 : jobDetails?.jobId;
  //  const id = jobDetails?.jobId;
  

  const navigate = useNavigate();
  // disptach hook
  const [collectResponse, setCollectResponse] = useState([]);
console.log(collectResponse)
  //  RTK query hook to get all question related to job
  const {
    data: responseData,
    isError,
    isLoading,
  } = useGetScreeningQuestionQuery(id);
   console.log("Get all quesation", responseData);
  // used to post the question and answer
  const [postQuestion, postQuestionResponse] = usePostScreeningQuestionSliceMutation();
  // const [postQuestion, postQuestionResponse] = usePostScreeningQuestionSliceMutation(id);

  // Function to sent response to backend 
  const submitResponse = async () => {
    try {
      const filteredResponses = removeDuplicateResponses(collectResponse);
      console.log("filteredResponses length is", filteredResponses)
      console.log("Response Data length is", responseData.response);
      // applied validation to submit all question
      if (filteredResponses.length === responseData?.response.length )  {
        //  console.log("Submitted Data is", filteredResponses);
        console.log('postQuestionResponse is ',postQuestionResponse)
        if (postQuestionResponse.error) {
          toast.error("Error While Submitting Response");
        } else {
          toast.success("Details Submitted Succesfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        // sending data to backend
          postQuestion(filteredResponses);
          console.log('data sent to backend is ', filteredResponses)
          navigate("/questionnaire/schedule-interview/" + id); // Navigate to a Next page
        }
      } else {
        toast.error("Please complete all questions before submitting", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to remove duplicate response from ARRAY of object
function removeDuplicateResponses(responses:any) {
  const uniqueResponses: { [key: string]: { jobFairQ1Id: string } } = {};

  for (const response of responses) {
    uniqueResponses[response.jobFairQ1Id] = response;
  }

  const filteredResponses = Object.values(uniqueResponses);

  return filteredResponses;
}

  // Early Return if Error Occur
  if(isError) return <div><h1 className="text-[2rem] md:text-[5rem]">Oops Something went wrong!</h1></div>

return (
  <>
  {/* teneray opearator added if Loading is true then Loading show else Question show */}
    {isLoading ? (
      <div><h1 className="text-[2rem] md:text-[5rem]">Loading...</h1></div>
    ) : (
      <div className="w-100 flex flex-col items-center h-[100%]">
        <div className="max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]">
          <div className="text-[1.4em]">Job Details</div>
          <UserJobDetails />
          {/* STEPS */}
          <div className="py-[2em] px-[3em] h-[100%]">
            <SubSteps />
            {responseData && (
              <Questions
                responseData={responseData}
                setCollectResponse={setCollectResponse}
              />
            )}
            <button
              className="text-[2em] bg-[#FECD08] w-[100px] font-medium mr-[0.5em] text-[#005F59] cursor-pointer"
              onClick={submitResponse}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);
}

// Main Question components
function Questions({ responseData, setCollectResponse }: any) {
  // console.log("response for question is", responseData);
  const { response } = responseData;
  // console.log("response for question is", response);

  // selector  hook to grab userID from redux state of user
  const userId = useSelector((state: RootState) => state.authSlice.userId);
  // console.log('user id is',userId);

  // const [responseData1, setResponseData] = React.useState([{ question: '', response: '' }]);
  const [responseData1, setResponseData] = React.useState([]);

  function responseOfQuestion(question: string, ans: string) {
    // console.log("Sent question is ", question, "response is ", ans);

    setResponseData((prevData: any[]) => {
      const updatedQuestion = {
        question,
        ans,
        userId,
      };
      const updatedData = [...prevData, updatedQuestion];
      return updatedData;
    });
  }
  // setCollectResponse(responseData1)
  useEffect(() => {
    setCollectResponse(responseData1);
  }, [responseData1, setCollectResponse]);

  // console.log("Updated reposne is ", responseData1);

  return (
    <>
      <div className="font-semibold text-[1.8em] text-[#5B5B5B] mb-[1em]">
      <p className="text-[1.1rem] font-normal leading-[27px]">Fill the details below</p>  
      </div>
      {response.map((question: any, index: number) => {
        if (question.questionType === "Boolean") {
          return (
            <YesNoQuestionSet
              onResponseChange={(response: string) =>
                responseOfQuestion(question, response)
              }
              question={question.question}
              key={index}
            />
          );
        } else if (question.questionType === "Rating") {
          return (
            <RatingResponseSet
              onResponseChange={(response: string) =>
                responseOfQuestion(question, response)
              }
              question={question.question}
              key={index}
            />
          );
        }
        // return <></>
      })}
    </>
  );
}

//  this code is for boolen / Radio button Question
function YesNoQuestionSet({ question, onResponseChange }: any) {
  
  // Storing response of Question into this state variable
  const [response, setResponse] = React.useState("");

  // Function to sent Response to parent component using Lifting the state Feature of Reactjs
  const handleResponseChange = (selectedResponse: string) => {
    setResponse(selectedResponse);
    onResponseChange(selectedResponse);
  };
  return (
    <>
      <Question question={question} />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={response}
        onChange={(e) => {
          handleResponseChange(e.target.value);
        }}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
      <QuestionSeparator className="mb-[2em]" />
    </>
  );
}

// this code is for Rating button Question
function RatingResponseSet({ question, onResponseChange }: any) {
  // Storing response of Question into this state variable
  const [value, setValue] = React.useState<number | null>(0);

   // Function to sent Response to parent component using Lifting the state Feature of Reactjs
  const handleResponseChange = (newValue: number | null) => {
    setValue(newValue);
    const numberToString = newValue !== null ? newValue.toString():null;
    onResponseChange(numberToString);
  };

  return (
    <>
      <Question question={question} />
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(_event, newValue) => handleResponseChange(newValue)}
        />
      </Box>
      <QuestionSeparator className="mb-[2em]" />
    </>
  );
}

// Question components
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

// Line to separate question 
export function QuestionSeparator({ className }: { className?: string }) {
  return (
    <div
      className={"bg-[#0E5F59] h-[1px] opacity-[0.2] w-[100%] " + className}
    ></div>
  );
}