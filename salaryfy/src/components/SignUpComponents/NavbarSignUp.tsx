import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/app.store";
import { CSSProperties, ChangeEvent, useEffect, useRef, useState } from "react";
import { useUploadFileMutation } from "../../features/api-integration/user-profile/user-profile.slice";

import {
  useRegisterMutation,
  useSendEmailMutation,
  useVerifyOTPMutation,
} from "../../features/api-integration/apiUserSlice/api-integration-user.slice";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  emailStepsCounterDecrement,
  emailStepsCounterIncrement,
  nameStepsCounterDecrement,
  nameStepsCounterIncrement,
  passwordStepsCounterDecrement,
  passwordStepsCounterIncrement,
  phoneNumberStepsCounterDecrement,
  phoneNumberStepsCounterIncrement,
  
  verifyEmailFlagSelector,
} from "../../features/reducers/main-steps-counter/main-steps-counter.reducer";
import OTPInput from "react-otp-input";
import { useAppDispatch } from "../../store/app.hook";
import LoginSub from "../../modules/questionnaire/pages/LoginSub";
import { FILE_UPLOAD_TYPES } from "../../modules/questionnaire/constants/file-upload.enum";
const USER_REGEX: RegExp = /^[a-zA-Z]{4,}$/;
const INDIAN_MOBILE_REGEX: RegExp = /^(\+91|0)?[6789]\d{9}$/;
const EMAIL_REGEX: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const password_REGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function NavbarSignUp() {
  const userId = useSelector((state: RootState) => state.authSlice.userId);
  // const [register] = useRegisterMutation();
  const { id } = useParams();
  // const navigator = useNavigate()
  console.log(id);
  
  /* SEEMS USELESS CODE BLOCK 
   Developer: sandwich */
  // const [submitRegister, setSubmitRegister] = useState<SubmitRegister>({
  //   email: "",
  //   password: "",
  //   mobile_no: "",
  //   role: "",
  //   fullName: "",
  //   date: "",
  //   userProfileType: "",
  // });
  // console.log(submitRegister);

  const [imageUploadApi] = useUploadFileMutation();

  function onResumeUpload(imageFile: File) {
    if (!userId) {
      return;
    }
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("documentType", FILE_UPLOAD_TYPES.USER_RESUME);
    formData.append("userId", userId);

    imageUploadApi(formData);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <PersonalDetails
          onResumeUpload={onResumeUpload}
        />
        {/* <BottomPageNavigationBar /> */}
      </div>
    </div>
  );
}

const NameComponent = (props) => {
  useEffect(() => {
    props.userRef.current.focus();
  }, []);
  console.log(props);
  return (
    <>
      <div className="flex flex-col flex-grow text-[#005F59] font-medium text-[1.8em]">
        <div className="flex gap-2">
          Name{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={
              props.validName || props.fullName.length == ""
                ? "currentColor"
                : "red"
            }
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div>
          <input
            type="text"
            ref={props.userRef}
            autoComplete="off"
            value={props.fullName}
            onChange={(e) => props.setfullName(e.target.value)}
            aria-invalid={props.validName ? "false" : "true"}
            placeholder="Your Name"
            className="w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none"
            aria-describedby="uidnote"
            onFocus={() => props.setUserFocus(true)}
            onBlur={() => props.setUserFocus(false)}
            required
          />
        </div>
        {props.userFocus && props.fullName && !props.validName ? (
          <p className="text-[#fe4a08]">
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens not allowed.
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const PhoneComponent = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex flex-col flex-grow text-[#005F59] font-medium text-[1.8em]">
        <div className="flex gap-2">
          <div>Phone number</div>
          {props.mobile_no && !props.validMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          )}
        </div>

        <div>
          <input
            type="number"
            value={props.mobile_no}
            autoComplete="off"
            maxLength={10}
            onChange={(e) => props.setmobile_no(e.target.value)}
            placeholder="+91"
            onFocus={() => props.setPhoneFocus(true)}
            onBlur={() => props.setPhoneFocus(false)}
            className="w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none"
          />
          {props.phoneFocus && !props.validMobile ? (
            <p className="text-[#fe4a08] ">
              mobile number must be 10 characters
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

const EmailComponent = (props) => {
  // const [loading, setLoading] = useState(false);
  const toggleContent = () => {
    props.setShowVerifyedOTP(true);
  };

  const [email] = useSendEmailMutation();

  const handleSubmitEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const res = await email(props.email);
console.log(res)
      if ('error' in res) {
        toast.error('User is already exists ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // setLoading(false);
      } else {
        toast.success('OTP is send to your email address', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // setLoading(false);
        toggleContent();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const content =
    !props.validEmail && props.email ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="red"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    );

  return (
     <div className="flex flex-col flex-grow text-[#005F59] font-medium text-[1.8em] md:max-w-[50%]">
      <div className="flex gap-2">
        <div>Email</div>

        <div>{content}</div>
      </div>

      <div className="flex flex-col md:flex-row gap-[1em]">
        <div className="flex-grow">
          <input
            type="email"
            placeholder="Email"
            value={props.email}
            onChange={(e) => props.setemail(e.target.value)}
            onFocus={() => props.setEmailFocus(true)}
            onBlur={() => props.setEmailFocus(false)}
            autoComplete="off"
            className="border border-[#005F59] border-solid rounded-md outline-none w-full  px-[0.5em] "
          />
          {props.emailFocus && !props.validEmail ? (
            <p className="text-[#fe4a08]">Fill in a valid email</p>
          ) : null}
        </div>

        <button
          disabled={!props.validEmail}
          onClick={handleSubmitEmail}
          className="w-full md:w-auto"
        >
          <span className="bg-[#005F59] text-[#FECD08] lg:text-[0.5rem]  rounded-md font-medium p-[0.25em] h-[2rem] xs:text-[1em] cursor-default disabled:bg-gray-400 disabled:cursor-not-allowed block md:inline-block w-full md:w-auto">
            Send OTP
          </span>
        </button>

        {/* {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
           
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

const PasswordComponent = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col flex-grow text-[#005F59] font-medium text-[1.8em] md:max-w-[50%]">
      <div>Password</div>
      <div className="flex gap-[1em] relative">
        <input
          type={showPassword ? "text" : "password"}
          value={props.password}
          onChange={(e) => props.setpassword(e.target.value)}
          placeholder="Password"
          autoComplete="new-password"
          onFocus={() => props.setpasswordFocus(true)}
          onBlur={() => props.setpasswordFocus(false)}
          className="flex-grow border border-[#005F59] border-solid rounded-md pl-2 outline-none"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
        >
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </div>
      <div>
        {props.password && props.passwordFocus && !props.validpassword ? (
          <p className="text-[#fe4a08]">
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const ComfirmPassword = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const content = props.matchpassword ? (
    <svg
      xmlns="http:www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  return (
    <div className="flex flex-col flex-grow text-[#005F59] font-medium text-[1.8em] md:max-w-[50%]  ">
      <div>Confirm Password</div>
      <div className="flex w-full items-center">
        <div className="flex gap-[1em] relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => props.setConfirmpassword(e.target.value)}
            value={props.confirmpassword}
            placeholder="Confirmpassword"
            autoComplete="off"
            onFocus={() => props.setConfirmFocus(true)}
            onBlur={() => props.setConfirmFocus(false)}
            className="flex-grow border border-[#005F59] border-solid rounded-md outline-none  px-[0.5em]"
          />
          <button
            onClick={() => setShowPassword(showPassword ? false : true)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
        <div className="ml-1">{content}</div>
      </div>
    </div>
  );
};

function UploadResumeComponent({
  onResumeUpload,
}: {
  onResumeUpload: (i: File) => void;
}) {
  const uploadFileRef = useRef<HTMLInputElement | null>(null);

  // function onClicked() {
  //   console.log("clicked");
  //   uploadFileRef.current?.click();
  // }

  function onFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files && event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      onResumeUpload(selectedFile);
      toast.success("pdf is selected", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (uploadFileRef.current) {
        uploadFileRef.current.value = "";
      } else {
        toast.error("pdf is not selected", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  return (
    <div className="flex items-center flex-grow text-[#005F59] font-semibold text-[1.8em]  p-2 mt-5 mb-4">
      <div
        className="flex flex-row items-center flex-grow h-[100%] px-[2em] py-[0.5em] justify-center rounded-[1em]"
        style={{
          boxShadow: "0 0 5px rgb(0, 0, 0, 0.2)",
          backgroundColor: "white",
          cursor: "pointer", // Add cursor pointer for click interaction
        }}
        onClick={() => document.getElementById("resume-upload").click()}
      >
        <div className="mr-[0.5em]">
          <label htmlFor="resume-upload">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.625 27.625V17.875L11.375 21.125M14.625 17.875L17.875 21.125"
                stroke="#005F59"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75"
                stroke="#005F59"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z"
                stroke="#005F59"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
          <input
            type="file"
            id="resume-upload"
            accept="application/pdf,application/vnd.ms-excel"
            style={{ display: "none" }}
            onChange={onFileUpload}
            ref={uploadFileRef}
          />
        </div>
        <div>
          <p className=" text-[#005F59] font-semibold">
            Upload Resume (PDF only)*
          </p>
        </div>
      </div>
    </div>
  );
}

type PropT = { email: string };

const Verified = (props: PropT): JSX.Element => {
  const [otp, setOtp] = useState<string>("");

  const [verifyOTP] = useVerifyOTPMutation();
  const dispatch = useDispatch();
  console.log(otp);
  console.log(props.email);
  const email = props.email;
  console.log(otp, email);
  const handleSubmitVerify = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await verifyOTP({ otp, email });
      console.log(response);
      // Assuming the response structure doesn't have an "error" property

      if (response) {
        if ('error' in response) {
          dispatch(verifyEmailFlagSelector(false));
          toast.error("OTP is not verified", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if ('data' in response) {
          toast.success("otp verified successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          dispatch(verifyEmailFlagSelector(true));
        }
      } else {
        toast.error("OTP is not verified", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(verifyEmailFlagSelector(false));
      }
    } catch (error) {
      console.log("API call error:", error);
      dispatch(verifyEmailFlagSelector(false));
    }
  };
  const inputStyle: CSSProperties = {
    width: "1.8rem", // Set your desired width
    height: "1.8rem", // Set your desired height
    textAlign: "center",
    fontSize: "1.3rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "5px", // Add some spacing between inputs
    marginBottom: "5px", // Add some spacing between inputs
  };

  return (
    <div className="lg:flex lg:mb-[2em] justify-center md:justify-start ">
      <div className="flex  md:flex-col max-w-[50%] md:flex-grow text-[#005F59] font-semibold text-[1.8em]  ">
        <div className=" xs:text-start xs:font-medium xs:mr-3">OTP</div>
        <div className="lg:flex lg:justify-between ">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className="lg:mx-5 xs:mx-3">-</span>}
            renderInput={(props, index) => (
              <input
                {...props}
                style={inputStyle}
                key={index} // Important to add a unique key to each input
              />
            )}
          />
          <div className="flex items-center lg:flex-row xs:flex-col">
            {otp.length == 4 ? (
              <button
                className=" bg-[#005F59] text-[#FECD08]    rounded-md font-medium  lg:text-[1em] cursor-default disabled:bg-gray-400 disabled:cursor-not-allowed lg:ml-6 lg:mt-0 xs:mt-4 xs:text-[1.2rem] xs:p-2 "
                onClick={handleSubmitVerify}
              >
                Verified
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalDetails = ({
  onResumeUpload,
}: {
  onResumeUpload: (i: File) => void;
}): JSX.Element => {
  const [register, {  isError, isSuccess }] = useRegisterMutation();

  const userRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const token = localStorage.getItem("userToken");
  console.log(token);
const navigator = useNavigate()
  const currentRoute = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  console.log(currentRoute)

  const [fullName, setfullName] = useState<string>("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [mobile_no, setmobile_no] = useState<string>(" ");
  const [validMobile, setValidMobile] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [email, setemail] = useState<string>("");

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setpassword] = useState<string>("");
  const [validpassword, setValidpassword] = useState<boolean>(false);
  const [passwordFocus, setpasswordFocus] = useState<boolean>(false);

  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const [matchpassword, setMatchpassword] = useState<boolean>(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  const [showVerifyedOTP, setShowVerifyedOTP] = useState(false);
  const [toggleLoginRegister, setToggleLoginRegister] = useState(true);
  const role = "USER";
  const userProfileType = "fresher";

  console.log(password);
  console.log(isError);
  console.log(isSuccess);
  console.log(matchpassword);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  const date = `${year}-${month}-${day}`;

  const resSubmitStatus = useSelector(
    (state: RootState) => state.mainStepsCounter.resStepTwo
  );

  console.log(resSubmitStatus);
  const contentDisabled =
    !validName ||
    !validMobile ||
    !validEmail ||
    !validpassword ||
    !role ||
    !userProfileType ||
    !date ||
    !matchpassword;

  console.log(!contentDisabled);

  const registerHandler = async () => {

   const res =   await register({
      fullName,
      mobile_no,
      email,
      password,
      role,
      userProfileType,
      date,
    }) as unknown as any;
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
        navigator('/')
       
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
  };

//   useEffect(() => {
//     if (!contentDisabled) {
//       console.log("dispatch");
//       dispatch(
//         registerFormQuestionnaire({
//           fullName,
//           mobile_no,
//           email,
//           password,
//           role,
//           userProfileType,
//           date,
//         })
//       );
//       dispatch(resSteptwoSelector(true));
//     }
//   }, [contentDisabled, date, dispatch, email, fullName, mobile_no, password]);

  useEffect(() => {
    setValidName(USER_REGEX.test(fullName));
    if (validName) {
      dispatch(nameStepsCounterIncrement());
    } else {
      dispatch(nameStepsCounterDecrement());
    }
  }, [fullName, validName, dispatch]);

  useEffect(() => {
    setValidMobile(INDIAN_MOBILE_REGEX.test(mobile_no));
    if (validMobile) {
      dispatch(phoneNumberStepsCounterIncrement());
    } else {
      dispatch(phoneNumberStepsCounterDecrement());
    }
  }, [mobile_no, validMobile, dispatch]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    if (validEmail) {
      dispatch(emailStepsCounterIncrement());
    } else {
      dispatch(emailStepsCounterDecrement);
    }
  }, [email, validEmail, dispatch]);

  useEffect(() => {
    if (password === "") {
      setMatchpassword(password == !confirmpassword);
    } else {
      setMatchpassword(password === confirmpassword);
    }
  }, [password, confirmpassword]);

  useEffect(() => {
    setValidpassword(password_REGEX.test(password));
    if (validpassword) {
      dispatch(passwordStepsCounterIncrement());
    } else {
      dispatch(passwordStepsCounterDecrement());
    }
  }, [password, validpassword, dispatch]);

  useEffect(() => {
    if (contentDisabled) {
      console.log(contentDisabled);
    }
  }, [contentDisabled]);
  console.log(contentDisabled);

  console.log(validpassword);
  console.log(matchpassword);
  console.log(toggleLoginRegister);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[2em] md:px-[10em]">
        {/* <div className="font-medium text-[1.8em] text-[#5B5B5B] mt-3">
        Fill the details below
      </div> */}

        <div className="bg-[#F3FAF9] rounded-md py-[3em] px-[2em] md:px-[7em] gap-[2em]  flex flex-col">
          <div className={toggleLoginRegister ? "hidden" : undefined}>
            <LoginSub
              setToggleLoginRegister={setToggleLoginRegister}
              toggleLoginRegister={toggleLoginRegister}
            />
          </div>
          <div className={!toggleLoginRegister ? "hidden" : undefined}>
            <div className="flex flex-col md:flex-row gap-[2em] p-2">
              <NameComponent
                userRef={userRef}
                fullName={fullName}
                setfullName={setfullName}
                validName={validName}
                setValidEmail={setValidName}
                userFocus={userFocus}
                setUserFocus={setUserFocus}
              />
              <PhoneComponent
                mobile_no={mobile_no}
                setmobile_no={setmobile_no}
                validMobile={validMobile}
                phoneFocus={phoneFocus}
                setPhoneFocus={setPhoneFocus}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-[2em] p-2">
              <EmailComponent
                email={email}
                setemail={setemail}
                validEmail={validEmail}
                setValidEmail={setValidEmail}
                emailFocus={emailFocus}
                setEmailFocus={setEmailFocus}
                setShowVerifyedOTP={setShowVerifyedOTP}
                showVerifyedOTP={showVerifyedOTP}
              />
              {showVerifyedOTP && validEmail ? <Verified email={email} /> : ""}
            </div>
            <div className="flex flex-col md:flex-row gap-[2em] p-2">
              <PasswordComponent
                password={password}
                setpassword={setpassword}
                passwordFocus={passwordFocus}
                setpasswordFocus={setpasswordFocus}
                validpassword={validpassword}
                setValidpassword={setValidpassword}
              />
              <ComfirmPassword
                confirmpassword={confirmpassword}
                setConfirmpassword={setConfirmpassword}
                matchpassword={matchpassword}
                setConfirmFocus={setConfirmFocus}
                confirmFocus={confirmFocus}
              />
            </div>
            <UploadResumeComponent onResumeUpload={onResumeUpload} />
            <div className="text-grey text-center mt-1  text-[1.2rem]">
              <div className="flex text-center justify-center align-middle gap-2">
                <h2 className="ml-1 font-medium">Already User?</h2>
                <span
                  onClick={() => setToggleLoginRegister(!toggleLoginRegister)}
                  className="border-b text-darkGreen border-darkGreen font-medium cursor-pointer"
                >
                  Sign In
                </span>
                <h2 className="font-medium">Now</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-darkGreen w-[8rem] p-2 text-yellow text-[1rem]" onClick={registerHandler}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export function SubStepArrow() {
  return (
    <div className="mx-[3em] flex items-center">
      <svg
        width="11"
        height="26"
        viewBox="0 0 11 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 13L0.499999 25.1244L0.5 0.875644L11 13Z" fill="#0E5F59" />
      </svg>
    </div>
  );
}
