import React from "react";
// import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const Paymentcompleted = () => {
  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center">
      <div className="w-[50.5625rem] h-[44.5rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="809"
          height="65"
          viewBox="0 0 809 65"
          fill="none"
        >
          <path
            d="M0 13C0 5.8203 5.8203 0 13 0H796C803.18 0 809 5.8203 809 13V51.4729C809 59.222 802.264 65.2503 794.562 64.3932L409.255 21.5117C408.307 21.4062 407.351 21.4053 406.403 21.5091L14.4147 64.422C6.72095 65.2642 0 59.2389 0 51.4992V13Z"
            fill="#D7E8F0"
          />
        </svg>

        <h2 className=" text-center text-[1.375rem] font-[600] mt-10 font-Inter ">
          Your interview for
        </h2>
        <div className=" flex justify-center items-center py-3">
          <img
            src="../../assets/Logos/lenskartlogo.png"
            className=" w-[4.625rem] h[4.625rem]"
          />
        </div>
        <div className="text-[1.375rem] font-[600] text-center font-Inter">
          <h2 className="">has been successfully scheduled on following </h2>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex font-semibold p-[0.5em] bg-[#E2F3F4] text-darkGreen rounded-md text-[1.5em] w-[fit-content] h-[3.1875rem] mb-[1.5em] ">
            <div>Slot-1</div>
            <div className="mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]"></div>
            <div className="mr-[0.5em]">
              Deverabisanahalli, On Tueday, 06 June 2023, 4:00 PM
            </div>
            {/* <div><CancelIcon sx={{ color: 'red' }} /></div> */}
          </div>

          <div className="flex font-semibold p-[0.5em] bg-[#E2F3F4] text-darkGreen rounded-md text-[1.5em] w-[fit-content] h-[3.1875rem] mb-[1.5em]">
            <div>Slot-2</div>
            <div className="mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]"></div>
            <div className="mr-[0.5em]">
              Kalubisanahalli, On Thursday, 08 June 2023, 10:00 PM
            </div>
            {/* <div><CancelIcon sx={{ color: 'red' }} /></div> */}
          </div>

          <div className="flex font-semibold p-[0.5em] bg-[#E2F3F4] text-darkGreen rounded-md text-[1.5em] w-[fit-content] h-[3.1875rem] mb-[1.5em] ">
            <div>Slot-3</div>
            <div className="mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]"></div>
            <div className="mr-[0.5em]">
              Koremanagalam, On Satureday, 10 June 2023, 11:30 PM
            </div>
            {/* <div><CancelIcon sx={{ color: 'red' }} /></div> */}
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[42.5625rem] h-[0.0625rem] " />
        </div>
        <div className=" flex justify-center ">
          <button
            type="submit"
            className="mt-8 w-[16.4375rem] h-[3.375rem] font-medium	 bg-yellow text-darkGreen rounded-[0.81694rem] flex text-[1.26544rem] justify-center items-center "
          >
            Go to dashboard
            <svg
              className="ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="20"
              viewBox="0 0 33 20"
              fill="none"
            >
              <path
                d="M31.8711 10.8711C32.3522 10.39 32.3522 9.61 31.8711 9.12891L24.0312 1.28906C23.5502 0.807964 22.7701 0.807964 22.2891 1.28906C21.808 1.77015 21.808 2.55015 22.2891 3.03125L29.2578 10L22.2891 16.9688C21.808 17.4498 21.808 18.2299 22.2891 18.7109C22.7701 19.192 23.5502 19.192 24.0312 18.7109L31.8711 10.8711ZM0 11.2319H31V8.76809H0V11.2319Z"
                fill="#005F59"
              />
            </svg>
          </button>
        </div>

        <div className="text-[1.26544rem] flex justify-center mt-4  text-darkGreen font-medium	 ">
          <Link to={"/"} className="border-b border-darkGreen">
            {" "}
            View more jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Paymentcompleted;
