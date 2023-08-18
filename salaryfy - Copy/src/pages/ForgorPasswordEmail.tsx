// import React from 'react'

const SignUp = () => {
  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center">
      <div className="w-[35.5rem] h-[29.9375rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className=" text-center text-[3.0rem] font-[700] mt-10 font-Lexend">
        Forgot Password
        </h1>
        <div className="text-[1.25rem] font-[400] mt-3 text-center text-grey">
          <h2 className="">Please enter registered Email id & we will<br/> send you verification code on that </h2>
          {/* <h2 className="">send OTP to you</h2> */}
        </div>
        <div className="text-[1.25rem] font-[400] mt-5 ml-[5rem] ">
          <h2>Enter Email Id</h2>
          <input
            type="text"
            placeholder="gm@example.com"
            className="w-[26.5rem] h-[3.40669rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
          />
          <button
            type="submit"
            className="mt-8 w-[26.5rem] h-[3.1875rem] bg-darkGreen text-[#fff] rounded-[0.81694rem]"
          >
            Send me Verification Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
