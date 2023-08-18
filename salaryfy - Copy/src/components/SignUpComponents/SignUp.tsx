import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
type EmailType = {
  addEmail: string;
};

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useRegisterMutation } from "../../features/api-integration/apiUserSlice/api-integration-user.slice";
const SignUp = () => {
  const [formData, setFormData] = useState<EmailType>({
    addEmail: "",
  });
  const [validEmail, setValidEmail] = useState(false);
  const [register] = useRegisterMutation();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await register(formData);
      toast.success("otp is send to your email address", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/verifyemail");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setValidEmail(emailPattern.test(formData.addEmail));
  }, [formData]);

  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center">
      <div className="w-[35.5rem] h-[29.9375rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className=" text-center text-[3.0rem] font-[700] mt-10 font-Lexend">
          Sign Up
        </h1>
        <div className="text-[1.25rem] font-[400] mt-3 text-center">
          <h2 className="">Please enter your email id and we will </h2>
          <h2 className="">send OTP to you</h2>
        </div>
        <div className="text-[1.25rem] font-[400] mt-5 ml-[5rem] ">
          <form>
            <h2>Enter Email Id</h2>
            <input
              type="email"
              name="addEmail"
              value={formData.addEmail}
              onChange={handleChange}
              placeholder="gm@example.com"
              className="w-[26.5rem] h-[3.40669rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-8 w-[26.5rem] h-[3.1875rem] bg-darkGreen text-[#fff] rounded-[0.81694rem] disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!validEmail}
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
