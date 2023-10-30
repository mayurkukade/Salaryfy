const OurStats = () => {
  return (
    <div className="bg-lightBlue lg:h-[8rem] xs:h-[18rem] xs:p-2 ">
      <div
        className="container mx-auto h-[18rem] text-[4rem] flex flex-wrap items-center  justify-center md:justify-between px-4 md:px-8 text-center text-darkGreen md:h-[10rem] "
        // style={{border:"2px solid black"}}
      >
        {/* Column 1 */}
        <div className="w-[50%] md:w-[25%] mb-8 ">
          <p className=" text-[2rem] xs:text-[2rem] xs:text-start xs:ml-5  lg:text-[3.6rem]  font-semibold md:text-[2rem] sm:text-[2rem] leading-9">
            <span className="text-yellow xs:text-[2rem] lg:text-[2.75rem]  ">Our</span>
            <br className="lg:hidden " />
            <span className="xs:text-[2rem] lg:text-[2.75rem]">Stats</span>{" "}
          </p>
        </div>

        {/* Column 2 */}
        <div
          className="w-[50%] md:w-[25%] mb-8 "
          // style={{ borderRight: "1px solid grey" }}
        >
          <p className="lg:text-[2rem] font-semibold mt-5 lg:mt-0 lg:text-center xs:text-start xs:ml-5 xxs:text-[1.5rem]">5000+</p>
          <p className="text-[1rem] font-medium lg:text-center xs:text-start xs:ml-5">
            Successfully Job Switched
          </p>{" "}
        </div>

        {/* Column 3 */}
        <div
          className="w-[50%] md:w-[25%] mb-8  "
          // style={{ borderRight: "1px solid grey" }}
        >
          <p className="lg:text-[2rem] font-semibold xs:text-start xs:ml-5 lg:text-center xxs:text-[1.5rem] ">200%</p>
          <p className="text-[1rem] font-medium xs:text-start xs:ml-5 lg:text-center ">Maximum Hike</p>{" "}
        </div>

        {/* Column 4 */}
        <div className="w-[50%] md:w-[25%] mb-8 ">
          <p className="lg:text-[2rem] font-semibold mt-5 lg:mt-0 xs:text-start xs:ml-5 xxs:text-[1.5rem]">5 Days</p>
          <p className="text-[1rem] font-medium xs:ml-5 xs:text-start">
            Fastest Job Switch Time
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
