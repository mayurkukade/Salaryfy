import QuestionnaireTopBarStep from "../components/questionnaire-topbar-step.component";
import UserJobDetails from "../components/job-details.component";
import BottomPageNavigationBar from "../components/bottom-navigation-bar.component";
import SubSteps from "../components/sub-steps.component";

export default function QuestionnairePersonalDetails() {

  return (
    <div className='w-100 flex flex-col items-center h-[100%]'>
      <QuestionnaireTopBarStep />
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]'>
        <div className='text-[1.4em]'>Job Details</div>
        <UserJobDetails />
        {/* STEPS */}
        <div className='py-[2em] px-[3em] h-[100%]'>

          <SubSteps />
          <PersonalDetails />

          <BottomPageNavigationBar />
        </div>
      </div>
    </div>
  );
}

function NameComponent() {
  return (
    <>
      <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em]'>
        <div>Name</div>
        <div><input type="text" placeholder='Your Name' className='w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none' /></div>
      </div>
    </>
  );
}

function PhoneNumberComponent() {
  return (
    <>
      <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em]'>
        <div>Phone number</div>
        <div><input type="text" placeholder='+91' className='w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none' /></div>
      </div>
    </>
  );
}

function EmailComponent() {
  return (
    <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em] md:max-w-[50%]'>
      <div>Email</div>
      <div className='flex gap-[1em]'>
        <input type="text" placeholder='Email' className='flex-grow border border-[#005F59] border-solid rounded-md outline-none' />
        <div className='bg-[#005F59] text-[#FECD08] rounded-md font-medium p-[0.25em] text-[1em]'>Verify</div>
      </div>
    </div>
  );
}

function UploadResumeComponent() {
  return (
    <div className='flex items-center flex-grow text-[#005F59] font-semibold text-[1.8em]'>
      <div className='flex flex-row items-center flex-grow h-[100%] px-[2em] py-[0.5em] justify-center rounded-[1em]' style={{ boxShadow: '0 0 5px rgb(0, 0, 0, 0.2)', backgroundColor: 'white' }}>
        <div className='mr-[0.5em]'>
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.625 27.625V17.875L11.375 21.125M14.625 17.875L17.875 21.125" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>Upload Resume</div>
      </div>
    </div>
  );
}

export function PersonalDetails() {
  return (
    <div className="flex flex-col gap-[2em] md:px-[10em]">
      <div className='font-semibold text-[1.8em] text-[#5B5B5B]'>Fill the details below</div>
      <div className=''>
        <div className='bg-[#F3FAF9] rounded-md py-[3em] px-[2em] md:px-[7em] gap-[2em] flex flex-col'>
          <div className='flex flex-col md:flex-row gap-[2em]'>
            <NameComponent />
            <PhoneNumberComponent />
          </div>
          <div className='flex flex-col md:flex-row gap-[2em]'>
            <EmailComponent />
            <UploadResumeComponent />
          </div>
          <div className='flex mb-[2em] justify-center md:justify-start'>
            <div className='flex pb-[1em] flex-col max-w-[50%] flex-grow text-[#005F59] font-semibold text-[1.8em] pr-[1em]'>
              <div className='mb-[0.25em]'>OTP</div>
              <div className='flex justify-between'>
                <div className='flex'>
                  <input type="text" className='w-[2em] mr-[1em] border border-[#005F59] border-solid rounded-md outline-none' />
                  <input type="text" className='w-[2em] mr-[1em] border border-[#005F59] border-solid rounded-md outline-none' />
                  <input type="text" className='w-[2em] mr-[1em] border border-[#005F59] border-solid rounded-md outline-none' />
                  <input type="text" className='w-[2em] border border-[#005F59] border-solid rounded-md outline-none' />
                </div>
                <div className='flex items-center'>
                  <div className='mr-[0.25em]'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.07296 12.2577L6.00837 12.1477C5.02183 10.4668 2.40024 6.89977 2.37375 6.86395L2.33594 6.81257L3.2291 5.92988L6.05637 7.90408C7.83649 5.59411 9.49723 4.00751 10.5805 3.081C11.7655 2.0675 12.5369 1.60091 12.5447 1.59644L12.5622 1.58594H14.0773L13.9326 1.71482C10.2106 5.03 6.17634 12.0761 6.13616 12.1469L6.07296 12.2577Z" fill="#005F59" />
                    </svg>
                  </div>
                  <div className='text-[0.75em]'>Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export function SubStepArrow() {
  return (
    <div className='mx-[3em] flex items-center'>
      <svg width="11" height="26" viewBox="0 0 11 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 13L0.499999 25.1244L0.5 0.875644L11 13Z" fill="#0E5F59" />
      </svg>
    </div>
  );
}