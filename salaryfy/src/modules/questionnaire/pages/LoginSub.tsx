import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../features/api-integration/apiUserSlice/api-integration-user.slice";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { setToken } from "../../../features/reducers/authReducers/auth-slice-reducer";
//import { RootState } from "../../../store/app.store";


interface LoginSubProps {
  setToggleLoginRegister: (value: boolean) => void;
  toggleLoginRegister: boolean;
}

const LoginSub: React.FC<LoginSubProps> = ({
  setToggleLoginRegister,
  toggleLoginRegister,
}) => {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  // const{jobId} = useParams()

  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  //const currentLocation = window.location.href.slice(22);
  //console.log(currentLocation)

  //console.log(isLoading, isError);

  const [password, setpassword] = useState<string>("");

  const LoginSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await login({ username: userName, password });
      //console.log(response);
      if ('data' in response) {
        const token: object = response.data; // Access the actual token data
        //console.log(token);
        dispatch(setToken(token));
        Cookies.set("jwtToken", JSON.stringify(token));

        toast.success("Successfully logged in", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // if(currentLocation === ''){
        //   (currentLocation)
        //   navigate(currentLocation)
        // }else if(currentLocation === 'placementdrive'){
        //   navigate(currentLocation)
        // }else{
        //   navigate("/questionnaire/screening-questions/"+jobId)
        // }
navigate('/')
        // navigate("/questionnaire/screening-questions"); // Make sure your routing is correctly set up
      } else {
        console.error("Login error");
      }
      if ('error' in response) {
        toast.error("Unsuccesful login", {
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
      console.error("Unexpected error:", error);
    }
  };

  //  Hook for toggling Show and Hide password
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    
    <h1 className="text-center text-sm">
      <span className="text-red-500"> Note*: </span> 
      <span className="text">If you are not registered, please register first</span> 
    </h1>
    <div className="bg-[#F3FAF9] p-5 flex justify-center items-center">
      <div className="w-full md:w-[35.5rem] h-auto p-5 rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className="text-center text-[1.5rem] font-[700] font-Lexend">
          Sign In
        </h1>
        <div className="text-[0.85rem] font-[400] mt-3 text-center text-grey">
          <h2 className="font-normal text-[14px] leading-[20px]">Please log in first to explore jobs</h2>
        </div>
        <div className="text-[1rem] font-[400] mt-5">
          <h2 className="text-[1.1rem] font-medium leading-[27px]" >Enter Email Id</h2>
          <input
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="gm@example.com"
            className="w-full h-[2rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
          />
  
          <h2 className="mt-5 text-[1.1rem] font-medium leading-[27px]">Enter Password</h2>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="****"
              className="w-full h-[2rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder rounded-l-[0.3125rem] border-l"
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="h-[2rem] border-[1px] border-solid border-darkGreen bg-[#E8F0FE] pr-2 pl-4 absolute mt-[8px] rounded-r-[0.3125rem] border-r right-0 top-0"
            >
              {showPassword ? (
                <VisibilityOffIcon style={{ fontSize: "1rem" }} />
              ) : (
                <VisibilityIcon style={{ fontSize: "1rem" }} />
              )}
            </button>
          </div>
  
          <div className="text-[1.26544rem] w-full flex justify-end mt-4 text-darkGreen font-medium	">
            <Link to={"/"} className="border-b border-darkGreen">
             <p className="text-[1.1rem] font-medium leading-[27px]">Forgot Password?</p> 
            </Link>
          </div>
  
          <button
            type="submit"
            className="mt-4 w-full h-[2.5rem] bg-darkGreen text-[#fff] rounded-[0.81694rem]"
            onClick={LoginSubmitHandler}
          >
           <span className="text-[18px] font-medium leading-[27px]">Sign In</span> 
          </button>
        </div>
        <div className="text-grey text-center mt-1 flex justify-center text-[1.2rem] ">
          <h2 className="text-[1.1rem] font-medium leading-[27px]">
            Didn’t sign up yet?{" "}
            <br className="lg:hidden md:hidden "/>
            <span
              onClick={() => setToggleLoginRegister(!toggleLoginRegister)}
              className="border-b text-darkGreen border-darkGreen m-1 cursor-pointer text-[1.1rem] font-medium leading-[27px]"
            >
              Sign Up
            </span>
           <span className="text-[1.1rem] font-medium leading-[27px]">now</span> 
          </h2>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default LoginSub;
// function useRouter(): { query: any; } {
//   throw new Error("Function not implemented.");
// }

