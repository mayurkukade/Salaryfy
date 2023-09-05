import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/app.store";

import { toast } from "react-toastify";
import { useRegisterMutation } from "../../../features/api-integration/apiUserSlice/api-integration-user.slice";
import { verifyEmailFlagSelector } from "../../../features/reducers/main-steps-counter/main-steps-counter.reducer";
// // For Accepting Props
// interface BottomPageNavigationBarProps {
//   currentPage
// }

export default function BottomPageNavigationBar() {
  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation();

  const registerFormData = useSelector(
    (state: RootState) => state.registerFormSlice.registerFormData
  );
  console.log(registerFormData);
  const currentRoutee = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  const resSteptwoSelector = useSelector(
    (state: RootState) => state.mainStepsCounter.resStepTwo
  );

  const verifyEmailFlagSelector = useSelector((state:RootState)=>state.mainStepsCounter.verifyemailFlag)
  console.log(!verifyEmailFlagSelector)
  console.log(currentRoutee);
  console.log(registerFormData[0]);
  console.log(resSteptwoSelector && verifyEmailFlagSelector);
  const currentRoute = window.location.href.slice(22);
  console.log(currentRoute);

  let nextButtonDisabled
  if(currentRoute === 'questionnaire'){
    nextButtonDisabled = resSteptwoSelector && verifyEmailFlagSelector
  }
console.log(!nextButtonDisabled)
  const navigate = useNavigate();

  const nextHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentRoute === "questionnaire") {
      console.log(true);
      e.preventDefault();
      try {
        const res = await register(registerFormData[0]);
        console.log(res);

        if (res.data) {
          toast.success("register success", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,

            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/questionnaire/screening-questions");
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
    } else if (currentRoute === "questionnaire/screening-questions") {

      // logic to validate and submit 
      // if () {
        
      // }else{

      // }

      navigate("/questionnaire/schedule-interview");
    }else if(currentRoute === "questionnaire/schedule-interview"){
      navigate("/questionnaire/fresher-dashboard")
    }
  };

  const backHandler = () => {
    if (currentRoute === "questionnaire/screening-questions") {
      navigate("/questionnaire");
    } else if (currentRoute === "questionnaire/schedule-interview") {
      navigate("/questionnaire/screening-questions");
    }
  };

  return (
    <div className="flex justify-center mt-6 mb-6">
      <div
        className="flex items-center px-[1.5em] py-[0.5em] rounded-xl bg-[#B3B3B3] mx-[1em]"
        onClick={backHandler}
      >
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
      <button
        className="flex items-center bg-[#FECD08] px-[1.5em] py-[0.5em] rounded-xl mx-[1em] text-[2em] font-medium mr-[0.5em] text-[#005F59] cursor-pointer  disabled:bg-gray-400 disabled:cursor-not-allowed "
        onClick={nextHandler}
        disabled={!nextButtonDisabled}
      >
        Next
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
      </button>
    </div>
  );
}
