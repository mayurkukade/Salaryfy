import PlacementJobDetails from "../modules/questionnaire/components/placement-job-details.component";

function GreenHeading({ label }: { label: string }) {
  return (
    <p className="text-[#0E5F59] font-Lexend text-[1.25rem] font-semibold flex my-[1em]">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-1">
        <path
          fillRule="evenodd"
          d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
          clipRule="evenodd"
        />
      </svg>
      <span>{label}</span>
    </p>
  );
}

function onGetHiredClick() {
  debugger
}
const JobDescription = () => {
  return (
     
    <div className="bg-darkGreen min-h-screen flex flex-col justify-center items-center py-10 px-4 md:px-0">
      <div className="w-full md:w-[60.1875rem] h-[43.7rem] rounded-3xl bg-white shadow-md text-darkGreen">
        <div className="app-box-shadow mb-[5em] rounded-[2em]">
          <PlacementJobDetails onGetHiredClick={onGetHiredClick} />
          <div className='p-[1em] app-scrollbar h-[50em]'>
          <div className="px-[5em] py-[0.5em]">
            <div className="flex justify-between items-center">
              <GreenHeading label="Essential Requirements" />

              <p className="flex gap-[1em]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.875 7.5H11.9824C10.8891 7.5 10 6.61094 10 5.51758V0.625C10 0.4 10.0594 0.185938 10.1668 0H3.85742C3.10898 0 2.5 0.608984 2.5 1.35742V18.6426C2.5 19.391 3.10898 20 3.85742 20H16.1426C16.891 20 17.5 19.391 17.5 18.6426V7.3332C17.31 7.44285 17.0944 7.50038 16.875 7.5ZM7.6832 11.4332C7.92734 11.1891 8.32266 11.1891 8.5668 11.4332L9.375 12.241V8.4375C9.375 8.09219 9.65469 7.8125 10 7.8125C10.3453 7.8125 10.625 8.09219 10.625 8.4375V12.241L11.4332 11.4332C11.677 11.1891 12.073 11.1891 12.3168 11.4332C12.5609 11.677 12.5609 12.073 12.3168 12.3168L10.4418 14.1918C10.31 14.327 10.1203 14.388 9.93984 14.3723C9.62688 14.3305 9.72559 14.3592 7.6832 12.3168C7.43906 12.073 7.43906 11.677 7.6832 11.4332ZM13.125 16.875H6.875C6.52969 16.875 6.25 16.5953 6.25 16.25C6.25 15.9047 6.52969 15.625 6.875 15.625H13.125C13.4703 15.625 13.75 15.9047 13.75 16.25C13.75 16.5953 13.4703 16.875 13.125 16.875ZM11.9824 6.25H16.875L11.25 0.625V5.51758C11.25 5.92148 11.5785 6.25 11.9824 6.25Z"
                    fill="#005F59"
                  />
                </svg>
                <span className="text-[#0E5F59] font-medium text-[1.6em]">
                  Job Details
                </span>
              </p>
            </div>
            <p className="text-[1.6em]">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups. Lorem ipsum is placeholder text commonly used
              in the graphic, print, and publishing industries for previewing
              layouts and visual mockups.
            </p>
            <div className="">
              <GreenHeading label="Incentive" />

              <ol className="text-[1.6em]">
                <li>1. Recognition and rewards</li>
                <li>2. Referral programs</li>
                <li>3. Professional development</li>
                <li>4. Health and wellness</li>
                <li>5. Tuition reimbursement</li>
                <li>6. Bonuses and raises</li>
              </ol>
            </div>
            <div className="text-[1.6em]">
              <GreenHeading label="Interview Details" />
              <p className="mb-[1em]">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups. Lorem ipsum is placeholder text
                commonly used in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </p>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text.
              </p>
            </div>
            <div className="text-[1.6em]">
              <GreenHeading label="Job Details" />
              <p className="mb-[1em]">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups. Lorem ipsum is placeholder text
                commonly used in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </p>
              <p className="mb-[1em]">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text.
              </p>
              {/* <div className="flex bg-yellow text-[#0E5F59] w-fit p-5 h-[43px] rounded-lg  justify-center items-center relative mb-[2em]">
                <button className="  text-[20.247px] font-medium  ">
                  Get Hired
                </button>
                <svg
                  width="33"
                  height="19"
                  viewBox="0 0 33 19"
                  fill="none"
                  className="align-middle ml-3 mt-1 "
                >
                  <path
                    d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z"
                    fill="#005F59"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
