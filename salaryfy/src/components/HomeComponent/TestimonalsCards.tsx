import avtarlogo from "../../../assets/Homepage/feedbackimg.png";

import "./testimonals.css";
const TestimonalsCards = ({testimonals, name, course}) => {
  return (
    <div className="container mx-auto mb-9"  >
      <div className="bubble speech w-auto md:min-h-[40vh]  ">
       {testimonals}
        {/* <hr /> */}
        {/* <div className="flex justify-around">
          <div className="text-[0.5rem]">
            <span>Placed by Data Folkz at</span>
            <img src={Google} alt="google logo" className="h-[1rem]" />
          </div>

          <div className="text-[0.5rem] leading-5 mt-1">
            <span className="block">Placed in</span>
            <span className="border rounded-xl  bg-yellow text-darkGreen p-[5px] ">
              5 Days
            </span>
          </div>
        </div> */}
      </div>

      <div className="flex content-center  ">
        <div className="mt-5 ">
          <div className="border-4 border-yellow rounded-full w-fit content-center ">
            <img src={avtarlogo} className="border rounded-full" />
          </div>
        </div>

        <div className="flex-col  self-center p-5 leading-8 ">
          <p className="text-white font-Lexend text-[24px]">{name}</p>
          <span className="text-slate-400 text-[0.8rem]">
           {course}{" "}
          </span>
          {/* <div className="flex bg-yellow text-darkGreen  w-[12rem] h-auto rounded-xl  justify-center items-center relative">
            <button className="  text-[20.247px] font-medium ">Linkedin</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonalsCards;