import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../features/api-integration/apiUserSlice/api-integration-user.slice';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { setToken } from '../../../features/reducers/authReducers/auth-slice-reducer';
import { Button } from '@mui/material';

interface LoginSubProps {
    setToggleLoginRegister: (value: boolean) => void;
    toggleLoginRegister: boolean;
  }

  const LoginSub: React.FC<LoginSubProps>  = ({ setToggleLoginRegister, toggleLoginRegister }) => {
    const [userName, setUserName] = useState<string>("");
    const navigate = useNavigate();
    
  const dispatch = useDispatch()
    const [login,{isLoading,isSuccess,isError}] = useLoginMutation();
    console.log(isLoading, isError);
  
    const [password, setpassword] = useState<string>("");
  
  
  
    const LoginSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
  
      try {
        const response = await login({ username: userName, password });
        console.log(response);
        if (response?.data) {
          const token: string = response.data; // Access the actual token data
          console.log(token);
          dispatch(setToken(token));
          Cookies.set("jwtToken", token);
  
          toast.success("Successfully logged in", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
  
          navigate("/questionnaire/screening-questions"); // Make sure your routing is correctly set up
        } else {
          console.error("Login error");
        }
        if (response.error) {
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
       <div className="bg-[#F3FAF9] p-5 flex justify-center items-center">
      <div className="w-[35.5rem] h-auto p-5 rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className=" text-center text-[1.5rem] font-[700] font-Lexend">
          Login
        </h1>
        <div className="text-[0.85rem] font-[400] mt-3 text-center text-grey">
          <h2 className="">Please log in first to explore jobs</h2>
          {/* <h2 className="">send OTP to you</h2> */}
        </div>
        <div className="text-[1rem] font-[400] mt-5 ml-[5rem] ">
          <h2>Enter Email Id</h2>
          <input
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="gm@example.com"
            className="w-[26.5rem] h-[2rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
          />

          <h2 className="mt-5 text-[1]">Enter 4 Digit Password</h2>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="****"
              className="w-[23rem] h-[2rem]  border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder rounded-l-[0.3125rem] border-l"
              style={{borderRight:"None"}}
            />

            <button
              onClick={() => {
                setShowPassword(showPassword ? false : true);
              }}
              className="h-auto border-[1px] border-solid border-darkGreen bg-[#E8F0FE] pr-2  pl-4 absolute mt-[8px] rounded-r-[0.3125rem] border-r"
              
            >
              {showPassword ? <VisibilityOffIcon style={{ fontSize: '30px' }}/> : <VisibilityIcon style={{ fontSize: '30px' }} />}
            </button>


          <div className="text-[1.26544rem] w-[26.5rem] flex justify-end mt-4  text-darkGreen font-medium	 ">
            <Link to={"/"} className="border-b border-darkGreen ">
              {" "}
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-4 w-[26.5rem] h-[2.5rem] bg-darkGreen text-[#fff] rounded-[0.81694rem]"
            onClick={LoginSubmitHandler}
          >
            Login
          </button>
        </div>
        <div className="text-grey text-center mt-1  text-[1.2rem]">
          <h2>
            Didn’t signed up yet?{" "}
            <Button
            onClick={()=>setToggleLoginRegister(!toggleLoginRegister)}
              className="border-b text-darkGreen border-darkGreen font-medium"
            >
              Sign Up
            </Button>{" "}
            now
          </h2>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default LoginSub
