const OurStats = () => {
  return (
    // <div className="h-[12rem] bg-lightBlue font-Lexend ">
    //   <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
    //     <div className="mt-[4.62rem] ml-[6.62rem]">
    //       <p className="text-[2rem] font-semibold">
    //        <span className="text-yellow">Our</span>  <span className="text-darkGreen">Stats</span>
    //       </p>
    //     </div>
    //     <div className="mt-[3.8rem] text-darkGreen">
    //       <p className="text-[2rem] font-semibold">5000+</p>
    //       <p className="text-[1rem] font-medium">Succesfully Job Switched</p>
    //     </div>
    //     <div className=" mt-[3.8rem] text-darkGreen">
    //       <p className="text-[2rem] font-semibold">200%</p>
    //       <p className="text-[1rem] font-medium">Maximum Hike</p>
    //     </div>
    //     <div className=" mt-[3.8rem] text-darkGreen">
    //       <p className="text-[2rem] font-semibold">5 Days</p>
    //       <p className="text-[1rem] font-medium">Fastest Job Switch Time</p>
    //     </div>
    //     {/* <div className="col-start-4 mt-[4.62rem]">
    //       <p>200%</p>
    //       <p>Maximun Hike</p>
    //     </div>
    //     <div className="col-start-5 mt-[4.62rem]">
    //       <p>5 Days</p>
    //       <p>Fastest Job Switch Time</p>
    //     </div> */}
    //   </div>
    // </div>

    // <div
    //   className=" container mx-auto flex justify-between items-center px-11 h-[12rem]  md:flex-wrap md:flex-col  text-darkGreen"

    // >
    //   <div className="w-[25%]"   style={{ border: "2px solid black" }}>
    //     {" "}
    //     <p className="text-[2rem] font-semibold">
    //       <span className="text-yellow">Our</span>{" "}
    //       <span className="">Stats</span>{" "}
    //     </p>{" "}
    //   </div>{" "}
    //   <div className="w-[25%] "   style={{ border: "2px solid black" }}>
    //     <p className="text-[2rem] font-semibold">5000+</p>
    //     <p className="text-[1rem] font-medium">Succesfully Job Switched</p>{" "}
    //   </div>{" "}
    //   <div className=" w-[25%] "   style={{ border: "2px solid black" }}>
    //     <p className="text-[2rem] font-semibold">200%</p>
    //     <p className="text-[1rem] font-medium">Maximum Hike</p>{" "}
    //   </div>{" "}
    //   <div className="  w-[25%]"   style={{ border: "2px solid black" }}>
    //     <p className="text-[2rem] font-semibold">5 Days</p>
    //     <p className="text-[1rem] font-medium">Fastest Job Switch Time</p>{" "}
    //   </div>
    // </div>

    <div className="bg-lightBlue">
      <div
        className="container mx-auto h-[18rem] text-[4rem] flex flex-wrap items-center  justify-center md:justify-between px-4 md:px-11 text-center text-darkGreen md:h-[12rem] "
        // style={{border:"2px solid black"}}
      >
        {/* Column 1 */}
        <div className="w-[50%] md:w-[25%] mb-8 ">
          <p className="text-[2rem] font-semibold">
            <span className="text-yellow">Our</span>{" "}
            <span className="">Stats</span>{" "}
          </p>
        </div>

        {/* Column 2 */}
        <div
          className="w-[50%] md:w-[25%] mb-8 "
          // style={{ borderRight: "1px solid grey" }}
        >
          <p className="text-[2rem] font-semibold">5000+</p>
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
          <p className="text-[2rem] font-semibold">5 Days</p>
          <p className="text-[1rem] font-medium">
            Fastest Job Switch Time
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
