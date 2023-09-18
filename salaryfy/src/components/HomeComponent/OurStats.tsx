const OurStats = () => {
  return (
    <div className="bg-lightBlue">
      <div
        className="container mx-auto h-[18rem] text-[4rem] flex flex-wrap items-center  justify-center md:justify-between px-4 md:px-8 text-center text-darkGreen md:h-[10rem] "
        // style={{border:"2px solid black"}}
      >
        {/* Column 1 */}
        <div className="w-[50%] md:w-[25%] mb-8 ">
          <p className=" text-[2rem] lg:text-[3.6rem]  font-semibold md:text-[2rem] sm:text-[1rem] leading-9">
            <span className="text-yellow">Our</span>
            <br className="lg:hidden " />
            <span className="">Stats</span>{" "}
          </p>
        </div>

        {/* Column 2 */}
        <div
          className="w-[50%] md:w-[25%] mb-8 "
          // style={{ borderRight: "1px solid grey" }}
        >
          <p className="text-[2rem] font-semibold mt-5 lg:mt-0">5000+</p>
          <p className="text-[1rem] font-medium">
            Successfully Job Switched
          </p>{" "}
        </div>

        {/* Column 3 */}
        <div
          className="w-[50%] md:w-[25%] mb-8 "
          // style={{ borderRight: "1px solid grey" }}
        >
          <p className="text-[2rem] font-semibold">200%</p>
          <p className="text-[1rem] font-medium">Maximum Hike</p>{" "}
        </div>

        {/* Column 4 */}
        <div className="w-[50%] md:w-[25%] mb-8 ">
          <p className="text-[2rem] font-semibold mt-5 lg:mt-0">5 Days</p>
          <p className="text-[1rem] font-medium">
            Fastest Job Switch Time
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
