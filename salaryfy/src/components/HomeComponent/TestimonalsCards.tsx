// import avtarlogo from "../../../assets/Homepage/feedbackimg.png";
import avatar from '../../assets/images/avatar.png'

import "./testimonals.css";
const TestimonalsCards = ({ testimonals, name, company,testimonalsImg }) => {
  return (
    <div className="container mx-auto mb-9">
      <div className="bubble speech w-auto h-[20rem] ">
        <p>{testimonals}</p>
     
      </div>

      <div className="flex content-center  ">
        <div className="mt-5 ">
          <div className="border-4 border-yellow rounded-full w-fit content-center ">
            <img src={testimonalsImg} className="border rounded-full w-[7.5rem] h-[7.5rem]" />
          </div>
        </div>

        <div className="flex-col  self-center mt-3 p-3 leading-7 ">
          <p className="text-white text-xl font-Lexend ">{name}</p>
          <p className='text-yellow text-[1rem] '>Placed by Data Folkz at</p>
          <span className="text-white text-[1.2rem]">{company} </span>
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
