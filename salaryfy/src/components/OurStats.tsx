const OurStats = () => {
  return (
    // <div className="w-full h-[12rem] flex bg-[lightBlue]  justify-around text-center  ">
    //   <div className="">
    //     <p>OurStats</p>
    //   </div>
    //   <div className="">
    //     <ul>
    //       <li>
    //         <p>5000+</p> <span>Successfully Job Switched</span>{" "}
    //       </li>
    //       <li>
    //         <p>200%</p> <span>Maximum Hike</span>{" "}
    //       </li>
    //       <li>
    //         <p>5 Days</p> <span>Fastest Job Switch Time</span>{" "}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
    <div ><p>Our</p><span>Stats</span></div>
    <div className="col-start-3">
      <p>5000+</p>
      <p>Succesfully Job Switched</p>
    </div>
    <div className="col-start-4">
    <p>200%</p>
      <p>Maximun Hike</p>
    </div>
    <div className="col-start-5">
    <p>5 Days</p>
      <p>Fastest Job Switch Time</p>
    </div>
</div>
  );
};

export default OurStats;
