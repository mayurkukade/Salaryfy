// import React from "react";

export const PasswordResetSuccessful = () => {
  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center flex-col">
        
      <div className="w-[35.5rem] h-[30.9375rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <div className="flex justify-center items-center mt-[90px]">
            <img src="../../assets/Logos/succesfullylogo.png" alt="succesfull" />
        </div>
        <h5 className=" text-center text-[1.5625rem] font-[700] mt-10 font-Lexend">
          Password set successfully
        </h5>
        <div className="flex justify-center">
        <button
            type="submit"
            className="mt-8 w-[26.5rem] h-[3.1875rem] font-medium bg-darkGreen text-[#fff] rounded-[0.81694rem]"
          >
          Login Now
          </button>
          </div>
      </div>
      
    </div>
    
  );
};
