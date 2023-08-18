import React from "react";


interface TestimonialCustomProps {
    content: string;
    imgSrc: string;
  }

const LandingPageTestimonials :React.FC<TestimonialCustomProps> =({
    content,
    imgSrc,
}) => {
  return (
    <div
      className="bg-[#FFF] rounded-[1.875rem] mx-auto w-[90%] h-[20rem]"
      style={{ boxShadow: "7px 16px 56px 1px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="p-4 w-[27.09231rem] h-[15.291rem]  mt-9">
        {/* <p
          className="text-[21rem] "
          style={{ color: "rgba(14, 95, 89, 0.10)" }}
        >
          ❛❛
        </p>
        <p
          className="text-[21rem]  "
          style={{ color: "rgba(14, 95, 89, 0.10)" }}
        >
          ❜❜
        </p> */}
        <div>
          <p className="z-10 text-[1.3rem] absolute w-[35rem] ml-[5rem] mt-[2.2rem] text-center ">
           {content}
          </p>
          <img src="../../assets/Logos/leftComma.png" alt="leftComma" />
          <img
            src="../../assets/Logos/rightcomma.png"
            alt="leftComma"
            className="absolute ml-[30rem]"
          />
        </div>
        <div className="ml-[150px]  h-[20px]">
          <img src={imgSrc} alt="bloomberg"   className=""/>
        </div>
      </div>
    </div>
  );
};

export default LandingPageTestimonials;
