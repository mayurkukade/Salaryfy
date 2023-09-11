import avtarlogo from "../../../assets/Homepage/feedbackimg.png";

import "./testimonals.css";
const TestimonalsCards = ({testimonals, name, course}) => {
  return (
    <div className="container mx-auto mb-9"  >
      <div className="bubble speech w-auto md:min-h-[40vh]  ">
       {testimonals}
        
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
          
        </div>
      </div>
    </div>
  );
};

export default TestimonalsCards;
