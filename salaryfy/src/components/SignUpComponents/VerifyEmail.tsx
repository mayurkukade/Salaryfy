// import React from "react";

const VerifyEmail = () => {
  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center">
      <div className="w-[35.5rem] h-[29.9375rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className=" text-center text-[3.0rem] font-[700] mt-10 font-Lexend">
          Verify Email
        </h1>
        <div className="text-[1.25rem] font-[400] mt-3 text-center">
          <h2 className="">Please enter OTP sent on registered Email </h2>
        </div>
        {/* border-[2px] border-solid border-black */}
        <div className="text-[1.25rem] font-[400] mt-5 ml-[5rem] ">
          <div className="w-[26.4375rem] h-[8.5rem] rounded-[0.8125rem] bg-[#F4F4F4] p-5 ">
            <p className="font-[400] mb-2">OTP</p>

          {/* otp code */}
          <div className='flex justify-between '>
                <div className='flex'>
                <input type="text" className='bg-[#F4F4F4] w-[3.3rem] h-[3.3rem] mr-[1em] border border-[#005F59] border-solid rounded-md outline-none '  />
                <input type="text" className='bg-[#F4F4F4] w-[3.3rem] mr-[1em] border border-[#005F59] border-solid rounded-md outline-none' />
                <input type="text" className='bg-[#F4F4F4] w-[3.3rem] mr-[1em] border border-[#005F59] border-solid rounded-md outline-none' />
                <input type="text" className='bg-[#F4F4F4] w-[3.3rem] border border-[#005F59] border-solid rounded-md outline-none' />
                </div>
                <div className='flex items-center'>
                  <div className='mr-[0.25em]'>
                    <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.07296 12.2577L6.00837 12.1477C5.02183 10.4668 2.40024 6.89977 2.37375 6.86395L2.33594 6.81257L3.2291 5.92988L6.05637 7.90408C7.83649 5.59411 9.49723 4.00751 10.5805 3.081C11.7655 2.0675 12.5369 1.60091 12.5447 1.59644L12.5622 1.58594H14.0773L13.9326 1.71482C10.2106 5.03 6.17634 12.0761 6.13616 12.1469L6.07296 12.2577Z" fill="#005F59" />
                    </svg>
                  </div>
                  <div className='text-[1.2rem]'>Verified</div>
                </div>
              </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-[26.5rem] h-[3.1875rem] bg-darkGreen text-[#fff] rounded-[0.81694rem]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
