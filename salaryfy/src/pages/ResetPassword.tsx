import eyelogo from "../../assets/Logos/eyelogo.png";
import eyelogo2 from "../../assets/Logos/eyelogo2.png";


const ResetPassword = () => {
  return (

    <div className="bg-darkGreen min-h-[100vh] flex justify-center items-center">
      <div className="w-[35.5rem] h-[37.625rem] rounded-3xl bg-[#fff] shadow-[7px 16px 56px 1px rgba(0, 0, 0, 0.10)] text-darkGreen">
        <h1 className=" text-center text-[3.0rem] font-[700] mt-10 font-Lexend">
        Reset Password
        </h1>
        <div className="text-[1.25rem] font-[400] mt-3 text-center text-grey">
          <h2 className="">Please enter new password and then <br/> confirm password</h2>
          {/* <h2 className="">send OTP to you</h2> */}
        </div>
        <div className="text-[1.25rem] font-[400] mt-5 ml-[5rem] ">
          <h2>Enter 4 Digit Password</h2>
          <input
            type="text"
            placeholder="gm@example.com"
            className="w-[26.5rem] h-[3.40669rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
            style={{
                backgroundImage: `url(${eyelogo})`,
                backgroundPosition: "10px center", // Adjust the position as needed
                backgroundRepeat: "no-repeat",
                paddingLeft: "40px", // Adjust the padding to make space for the eye logo
              }}
          />

          <h2 className="mt-5">Confirm 4 Digit Password</h2>

          <input
            type="text"
            placeholder="1234"
            className="w-[26.5rem] h-[3.40669rem] rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
            style={{
              backgroundImage: `url(${eyelogo2})`,
              backgroundPosition: "10px center", // Adjust the position as needed
              backgroundRepeat: "no-repeat",
              paddingLeft: "40px", // Adjust the padding to make space for the eye logo
            }}
          />
        
          <button
            type="submit"
            className="mt-8 w-[26.5rem] h-[3.1875rem] bg-darkGreen text-[#fff] rounded-[0.81694rem]"
          >
           Reset Password
          </button>
        </div>
   
      </div>
    </div>
   
  )
}

export default ResetPassword