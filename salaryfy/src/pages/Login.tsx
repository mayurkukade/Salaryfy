import React, { useState, useEffect } from "react";
import eyelogo from "../../assets/Logos/eyelogo.png";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../features/api-integration/apiUserSlice/api-integration-user.slice";
const EMAIL_REGEX: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [validUserName, setValidUserName] = useState<boolean>(false);

  const [login,{isLoading,isSuccess,isError}] = useLoginMutation()
  console.log(isLoading,isError)

  const [password, setpassword] = useState<string>("");

  const LoginSubmitHandler = async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
  const res =   await login({userName,password})
  console.log(res)
  }

  useEffect(() => {
    setValidUserName(EMAIL_REGEX.test(userName));
  }, [userName]);

  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center">
      <div className="w-[35.5rem] h-[37.625rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className=" text-center text-[3.0rem] font-[700] mt-10 font-Lexend">
          Login
        </h1>
        <div className="text-[1.25rem] font-[400] mt-3 text-center text-grey">
          <h2 className="">Please log in first to explore jobs</h2>
          {/* <h2 className="">send OTP to you</h2> */}
        </div>
        <div className="text-[1.25rem] font-[400] mt-5 ml-[5rem] ">
          <h2>Enter Email Id</h2>
          <input
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="gm@example.com"
            className="w-[26.5rem] h-[3.40669rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
          />

          <h2 className="mt-5">Enter 4 Digit Password</h2>

          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="****"
            className="w-[26.5rem] h-[3.40669rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
            style={{
              backgroundImage: `url(${eyelogo})`,
              backgroundPosition: "10px center", // Adjust the position as needed
              backgroundRepeat: "no-repeat",
              paddingLeft: "40px", // Adjust the padding to make space for the eye logo
            }}
          />
          <div className="text-[1.26544rem] w-[26.5rem] flex justify-end mt-4  text-darkGreen font-medium	 ">
            <Link to={"/"} className="border-b border-darkGreen ">
              {" "}
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-8 w-[26.5rem] h-[3.1875rem] bg-darkGreen text-[#fff] rounded-[0.81694rem]"
              onClick={LoginSubmitHandler}
          >
            Login
          </button>
        </div>
        <div className="text-grey text-center mt-6  text-[1.2rem]">
          <h2>
            Didn’t signed up yet?{" "}
            <Link
              to={"/signup"}
              className="border-b text-darkGreen border-darkGreen font-medium"
            
            >
              Sign Up
            </Link>{" "}
            now
          </h2>
        </div>
      </div>
    </div>
  );
};
