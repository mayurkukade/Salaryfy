

const FillDetails = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] min-h-screen">
      <div
        className="w-[95%] md:w-[53.125rem] h-[40.25rem] rounded-[0.9375rem] bg-[#fff] text-darkGreen border-2 p-[70px] text-[1.125rem]"
        style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.08)" }}
      >
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Name"
          className="h-[2.1875rem] w-[21.375rem]  rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
        />

        <h2 className="mt-5">Email</h2>
        <input
          type="text"
          placeholder="gm@example.com"
          className="h-[2.1875rem] w-[15.375rem]  rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
        />
        <button className="bg-darkGreen text-yellow w-[5.1875rem] h-[2.1875rem] rounded-[0.3125rem] ml-3">
          Verify
        </button>

        <div className="flex gap-3">
          <div className="">
            <h2 className="mt-5">Set 4 Digit Password</h2>
            <input
              type="password"
              placeholder="****"
              className="h-[2.1875rem] w-[21.375rem]  rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
              
            />
               

            
            <div className="flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M18.8792 9.13069C18.7095 8.8985 14.6652 3.44531 9.49988 3.44531C4.33459 3.44531 0.290117 8.8985 0.120565 9.13047C0.042219 9.2378 0 9.36725 0 9.50013C0 9.63302 0.042219 9.76247 0.120565 9.8698C0.290117 10.102 4.33459 15.5552 9.49988 15.5552C14.6652 15.5552 18.7095 10.102 18.8792 9.86999C18.9577 9.7627 18.9999 9.63324 18.9999 9.50034C18.9999 9.36743 18.9577 9.23797 18.8792 9.13069ZM9.49988 14.3024C5.6951 14.3024 2.39975 10.6831 1.42425 9.49982C2.39849 8.31555 5.68693 4.69805 9.49988 4.69805C13.3045 4.69805 16.5996 8.31681 17.5755 9.50067C16.6013 10.6849 13.3128 14.3024 9.49988 14.3024Z" fill="#B3B3B3"/>
  <path d="M9.50044 5.74219C7.42818 5.74219 5.74219 7.42818 5.74219 9.50044C5.74219 11.5727 7.42818 13.2587 9.50044 13.2587C11.5727 13.2587 13.2587 11.5727 13.2587 9.50044C13.2587 7.42818 11.5727 5.74219 9.50044 5.74219ZM9.50044 12.0059C8.11886 12.0059 6.99496 10.882 6.99496 9.50044C6.99496 8.11889 8.11889 6.99496 9.50044 6.99496C10.882 6.99496 12.0059 8.11889 12.0059 9.50044C12.0059 10.882 10.882 12.0059 9.50044 12.0059Z" fill="#B3B3B3"/>
</svg>
            </div>
          </div>
          

          <div className="">
            <h2 className="mt-5">Confirm 4 Digit Password</h2>
            <input
              type="text"
              // placeholder="gm@example.com"
              className="h-[2.1875rem] w-[21.375rem]  rounded-[0.3125rem] border-[1px] border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder"
            />
          </div>
        </div>

        <h2 className="mt-5">Upload Your Resume</h2>

        <div
          className="h-[9.25rem] w-[45.125rem]  rounded-[0.8125rem]  border-solid border-darkGreen mt-2 pl-4 placeholder-green-500::placeholder "
          style={{ background: "rgba(14, 95, 89, 0.07)" }}
        >
          <div className="flex justify-center pt-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M23.4833 7.92578L22.2873 0H4.74031C2.09812 0 0 2.15273 0 4.79461V37.9758C0 40.6177 2.09805 42.7267 4.74031 42.7267H21.3852L33.3768 24.5703V11.6223L23.4833 7.92578Z"
                fill="#0E5F59"
              />
              <path
                d="M22.2891 0.0078125L33.3459 11.6192H25.9857C23.9416 11.6192 22.2891 9.96664 22.2891 7.92258V0.0078125Z"
                fill="#0CBC8B"
              />
              <path
                d="M21.8627 24.8967H7.69672C7.09891 24.8967 6.60938 25.3862 6.60938 25.9841C6.60938 26.5822 7.09891 27.0711 7.69672 27.0711H21.8627C22.4605 27.0711 22.9501 26.5822 22.9501 25.9841C22.9501 25.3862 22.4718 24.8967 21.8627 24.8967ZM7.69672 21.6353H18.71C19.3077 21.6353 19.7973 21.1461 19.7973 20.548C19.7973 19.9501 19.3077 19.4609 18.7099 19.4609H7.69672C7.09891 19.4609 6.60938 19.9501 6.60938 20.548C6.60938 21.1461 7.09891 21.6353 7.69672 21.6353ZM18.2857 30.4414H7.69672C7.09891 30.4414 6.60938 30.9309 6.60938 31.5284C6.60938 32.1266 7.09891 32.6158 7.69672 32.6158H18.2858C18.8839 32.6158 19.373 32.1266 19.373 31.5284C19.373 30.9309 18.8839 30.4414 18.2857 30.4414Z"
                fill="#FECD08"
              />
              <path
                d="M33.3438 22.4073C40.0844 23.3527 45.27 29.1366 45.27 36.138C45.27 43.7919 39.0624 50 31.4086 50C26.1468 50 21.5588 47.0645 19.2211 42.7375C18.1557 40.7697 17.5469 38.5193 17.5469 36.1273C17.5469 28.4734 23.7548 22.2656 31.4086 22.2656C32.0611 22.2766 32.7023 22.3203 33.3438 22.4073Z"
                fill="#FEDB41"
              />
              <path
                d="M32.1795 28.1135C31.9732 27.8963 31.6903 27.7656 31.386 27.7656C31.0814 27.7656 30.7989 27.8963 30.5923 28.1135L24.2211 34.9522C23.8082 35.3871 23.8409 36.0829 24.2758 36.4848C24.4821 36.6807 24.7542 36.7787 25.0152 36.7787C25.3085 36.7787 25.6127 36.6587 25.8303 36.4308L30.3314 31.6142V43.4868C30.3314 44.0846 30.8206 44.5741 31.4184 44.5741C32.0165 44.5741 32.5057 44.0846 32.5057 43.4868V31.6141L36.9741 36.4308C37.3874 36.8657 38.0614 36.898 38.507 36.4848C38.9419 36.0719 38.9635 35.3871 38.5613 34.9522L32.1795 28.1135Z"
                fill="#0E5F59"
              />
            </svg>
          </div>

          <h4 className="text-center text-[1rem] font-medium underline">
            Browser
          </h4>
          <p
            className="text-center font-normal text-[0.75rem]"
            style={{ color: "rgba(16, 88, 83, 0.50)" }}
          >
            Only Docx, PDF and max size 5MB
          </p>
        </div>

        <div className=" flex justify-center mt-5">
          <button className="flex flex-row w-[11.625rem] h-[3.375rem] rounded-[0.5625rem] bg-darkgrey justify-center items-center text-[#FFF] ">
            Next
            <svg
              className="ml-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="20"
              viewBox="0 0 33 20"
              fill="none"
            >
              <path
                d="M31.8711 10.8711C32.3522 10.39 32.3522 9.61 31.8711 9.12891L24.0312 1.28906C23.5502 0.807964 22.7701 0.807964 22.2891 1.28906C21.808 1.77015 21.808 2.55015 22.2891 3.03125L29.2578 10L22.2891 16.9688C21.808 17.4498 21.808 18.2299 22.2891 18.7109C22.7701 19.192 23.5502 19.192 24.0312 18.7109L31.8711 10.8711ZM0 11.2319H31V8.76809H0V11.2319Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FillDetails;
