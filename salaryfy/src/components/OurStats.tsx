const OurStats = () => {
  return (
    <div className="h-[12rem] bg-lightBlue font-Lexend ">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
        <div className="mt-[4.62rem] ml-[6.62rem]">
          <p className="text-[2rem] font-semibold">
           <span className="text-yellow">Our</span>  <span className="text-darkGreen">Stats</span>
          </p>
        </div>
        <div className="col-start-3 mt-[3.8rem] text-darkGreen">
          <p className="text-[2rem] font-semibold">5000+</p>
          <p className="text-[1rem] font-medium">Succesfully Job Switched</p>
        </div>
        <div className="col-start-4 mt-[3.8rem] text-darkGreen">
          <p className="text-[2rem] font-semibold">200%</p>
          <p className="text-[1rem] font-medium">Maximum Hike</p>
        </div>
        <div className="col-start-5 mt-[3.8rem] text-darkGreen">
          <p className="text-[2rem] font-semibold">5 Days</p>
          <p className="text-[1rem] font-medium">Fastest Job Switch Time</p>
        </div>
        {/* <div className="col-start-4 mt-[4.62rem]">
          <p>200%</p>
          <p>Maximun Hike</p>
        </div>
        <div className="col-start-5 mt-[4.62rem]">
          <p>5 Days</p>
          <p>Fastest Job Switch Time</p>
        </div> */}
      </div>
    </div>
  );
};

export default OurStats;
