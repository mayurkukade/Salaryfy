import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/app.store";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../../features/api-integration/apiUserSlice/api-integration-user.slice";
import { useGetInterviewScheduleQuery } from "../../../features/api-integration/interview-schedule/interview-schedule-slice";

import { openModel } from "../../../features/reducers/schedule-interview-form/schedule-interview.slice";
export default function BottomPageNavigationBar() {
  const [register] = useRegisterMutation();
const {id} = useParams()
console.log(id)
  const userId = useSelector((state: RootState) => state.authSlice.userId);
  const dispatch = useDispatch();
  const jobId: string = localStorage.getItem("jobId");
  console.log(jobId);
  const { isError: isScheduleInterviewError } = useGetInterviewScheduleQuery({
    userId,
    jobId,
  });
  console.log(isScheduleInterviewError);
  const registerFormData: string[] = useSelector(
    (state: RootState) => state.registerFormSlice.registerFormData
  );
  console.log(registerFormData);

  // to read validation value from redux of screening question form
  const screeningQuestionValidation = useSelector(
    (state: RootState) => state.screeningQuestionSlice.screeningQuestionValue
  );
  //  to read the response from redux  and sent to backend using RTK query
  const screeningQuestionResponse = useSelector(
    (state: RootState) => state.screeningQuestionSlice.screeningQuestionResponse
  );
  console.log(`Secreen question validation is ${screeningQuestionValidation}`);
  console.log("Secreen question Response is ", screeningQuestionResponse);

  const currentRoutee = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  const resSteptwoSelector = useSelector(
    (state: RootState) => state.mainStepsCounter.resStepTwo
  );

  const verifyEmailFlagSelector = useSelector(
    (state: RootState) => state.mainStepsCounter.verifyemailFlag
  );

  const handleClickOpen = () => {
    dispatch(openModel());
  };
  console.log(!verifyEmailFlagSelector);
  console.log(currentRoutee);
  console.log(registerFormData[0]);
  console.log(resSteptwoSelector && verifyEmailFlagSelector);
  console.log(resSteptwoSelector);
  console.log(verifyEmailFlagSelector);
  const currentRoute = window.location.href.slice(22);
  console.log(currentRoute);

  let nextButtonDisabled: boolean;
  if (currentRoute === "questionnaire/"+id) {
    nextButtonDisabled = resSteptwoSelector && verifyEmailFlagSelector;
  } else if (currentRoute === "questionnaire/screening-questions/"+id) {
    nextButtonDisabled = true;
  } else if (currentRoute === "questionnaire/schedule-interview/" + id) {
    nextButtonDisabled = !isScheduleInterviewError;
  }
  console.log(!nextButtonDisabled);
  const navigate = useNavigate();

  const nextHandler = async () => {
    if (currentRoute === "questionnaire/"+id) {
      console.log(true);
     
      try {
        const res = await register(registerFormData[0]);
        console.log(res);

        if (res.data) {
          toast.success("register successfully please login", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,

            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // navigate("/questionnaire/screening-questions");
          navigate("/login/"+id);
        } else {
          return toast.error("error", {
            position: "top-center",
            autoClose: 2000,
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
    } else if (currentRoute === "questionnaire/screening-questions/" +id) {
      // logic to validate and submit
      if (screeningQuestionValidation) {
        navigate("/questionnaire/schedule-interview"+id);
      }
    } else if (currentRoute === "questionnaire/schedule-interview/" +id) {
      // navigate("/questionnaire/fresher-dashboard");
      handleClickOpen();
    }
  };

  const backHandler = () => {
    if (currentRoute === "questionnaire/screening-questions/"+id) {
      navigate("/placementdrive");
    } else if (currentRoute === "questionnaire/schedule-interview/"+id) {
      navigate("/questionnaire/screening-questions/"+id);
    } else if (currentRoute === "questionnaire/fresher-dashboard") {
      navigate("/questionnaire/schedule-interview/"+id);
    }
  };

  return (
    <>
      <div
        className={`flex justify-center mt-6 mb-6 ${
          currentRoute == "questionnaire/fresher-dashboard" ||
          currentRoute == "questionnaire/fresher-profile-upload" ||
          currentRoute == "questionnaire/fresher-roadmap"
            ? "hidden"
            : ""
        } `}
      >
        <div
          className="flex items-center px-[1.5em] py-[0.5m] h-[2.5rem] rounded-xl bg-darkGreen mx-[1em] cursor-pointer"
          onClick={backHandler}
        >
          <span className="ml-[1em]">
            <svg
              width="35"
              height="25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path
                d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z"
                fill="#FECD08"
              />
            </svg>
          </span>
          <span className="text-[18px] w-[5rem] leading-[27px] text-[#FECD08] font-medium mr-[0.5em] ">
           <p className="ml-4">Back</p> 
          </span>
        </div>
        <div
          className="flex items-center px-[1.5em] py-[0.5em] rounded-xl bg-[#FECD08] mx-[1em] cursor-pointer"
          onClick={nextHandler}
        >
          <span className="text-[18px] w-[5rem;] leading-[27px] text-darkGreen font-medium mr-[0.5em] ">
            {" "}
            {currentRoute == "questionnaire/schedule-interview"
              ? "Confirm"
              : "Next"}
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
                fill="#005F59"
              />
            </svg>
          </span>
        </div>
        {/* <button
          className="flex items-center  bg-[#FECD08] px-[1.5em] py-[0.5em] rounded-xl mx-[1em] text-[2em] font-medium mr-[0.5em] text-[#005F59] cursor-pointer  disabled:bg-gray-400 disabled:cursor-not-allowed "
          onClick={nextHandler}
          disabled={!nextButtonDisabled}
        >
          {currentRoute == "questionnaire/schedule-interview"
            ? "Confirm"
            : "Next"}
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
        </button> */}
      </div>
    </>
  );
}
