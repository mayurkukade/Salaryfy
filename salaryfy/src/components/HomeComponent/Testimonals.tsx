import HomeCarousole2 from "./HomeCarousole";

const Testimonals = () => {
  return (
    // <div className="bg-darkGreen" style={{border:"2px solid black"}}>
    //   <p className="text-center  mt-[7.19rem] text-[3.9375rem] font-bold font-Lexend ">
    //     Our <span className="text-yellow">speed</span> is your <span className="text-yellow">power</span>
    //   </p>
    //   <HomeCarousole2/>
    // </div>

    <div className="bg-darkGreen" style={{ border: "2px solid black" }}>
      <p className="text-center  mt-[7.19rem] text-[2rem] font-bold font-Lexend ">
        Our <span className="text-yellow">speed</span> is your{" "}
        <span className="text-yellow">power</span>
      </p>
      <HomeCarousole2 />
    </div>
  );
};

export default Testimonals;
