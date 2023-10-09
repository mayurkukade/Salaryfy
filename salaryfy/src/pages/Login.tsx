import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLoginMutation } from "../features/api-integration/apiUserSlice/api-integration-user.slice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../features/reducers/authReducers/auth-slice-reducer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, isError }] = useLoginMutation();
  console.log(isLoading, isError);

  const [password, setpassword] = useState<string>("");

  const currentRoute = useSelector(
    (state: any) => state.currentRoute.currentRoute
  );
  console.log(currentRoute)
const jobId = localStorage.getItem('jobId')
console.log(jobId)
  const LoginSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await login({ username: userName, password }) as unknown as any;
      console.log(response);
      if (response?.data) {
        const token: object = response.data; // Access the actual token data
        console.log(token);
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

        if (token && currentRoute == `questionnaire/${jobId}`) {
          navigate(`/questionnaire/screening-questions/${jobId}`);
        } else {
          navigate(-1);
        }
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
    
    <div className="bg-darkGreen min-h-screen flex flex-col justify-center items-center p-4 ">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-md text-darkGreen">
        <h1 className="text-center text-3xl font-bold mt-10 font-Lexend">
          Login
        </h1>
        <div className="text-lg font-normal mt-3 text-center text-grey">
          <h2>Please log in first to explore jobs</h2>
        </div>
        <div className="text-lg font-normal px-8 py-2 md:py-5">
          <h2>Enter Email Id</h2>
          <input
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="gm@example.com"
            className="w-full h-12 rounded border border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
          />

          <h2 className="mt-5">Enter Password</h2>
          <div className="relative rounded border border-solid border-darkGreen mt-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="****"
              className="w-full h-12 pl-4 pr-12 placeholder-green-500::placeholder rounded-l"
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute inset-y-0 right-0 h-full bg-[#E8F0FE] p-2 rounded-r flex items-center"
            >
              {showPassword ? (
                <VisibilityOffIcon style={{ fontSize: "24px" }} />
              ) : (
                <VisibilityIcon style={{ fontSize: "24px" }} />
              )}
            </button>
          </div>

          <div className="text-lg w-full flex justify-end mt-4 text-darkGreen font-medium">
            <Link to={"/"} className="border-b border-darkGreen ">
              {" "}
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-6 w-full h-14 bg-darkGreen text-white rounded"
            onClick={LoginSubmitHandler}
          >
            Login
          </button>
        </div>

        <div className="text-grey text-center py-6 text-lg">
          <h2>
            Didn't sign up yet?{" "}
            <Link
              to={"/navbarsignup"}
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
