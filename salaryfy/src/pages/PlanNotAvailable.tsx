
const PlanNotAvailable = () => {
  return (
    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center flex-col">
        
    <div className="w-[35.5rem] h-[35.75rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
      <div className="flex justify-center items-center mt-[90px]">
          <img src="../../assets/Logos/plannotavailable.png" alt="succesfull" />
      </div>
      <h5 className=" text-center text-[1.5625rem] font-[700] mt-3 font-Lexend">
      Plan Not Available
      </h5>
      
      <div className="text-[1.25rem] font-[400] mt-3 text-center text-grey">
          <h2 className="">The Plan you are choosing is not available, <br/>please go for other one </h2>
          {/* <h2 className="">send OTP to you</h2> */}
        </div>
      
      <div className="flex justify-center">
      <button
          type="submit"
          className="mt-8 w-[26.5rem] h-[3.1875rem] font-medium bg-darkGreen text-[#fff] rounded-[0.81694rem]"
        >
      Okay
        </button>
        </div>
    </div>
    
  </div>
  )
}

export default PlanNotAvailable