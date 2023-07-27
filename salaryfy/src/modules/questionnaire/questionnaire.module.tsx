import './questionnaire.css'
import image from '../../assets/images/job-details-bg.png'

enum SUB_STEP_STATUS {
  COMPLETED = 'completed',
  PENDING = 'pending',
  REMAINING = 'remaining',
}

export default function QuestionnaireModule0() {

  return (
    <div className='w-100 flex flex-col items-center'>
      <div className='flex-grow max-w-[120em] w-[100%] flex mb-[2em]'>
        <Step progress={100} active={false} no={1} title='Select the job' className='' />
        <Step progress={5} active={true} no={2} title='Upload your Resume' className='mx-[2em]' />
        <Step progress={0} active={false} no={3} title='Get hired!' className='' />
      </div>
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col'>
        <div className='text-[1.4em]'>Job Details</div>
        <div className='bg-cover-container'>
          <img src={image} style={{ width: '100%' }} />
        </div>
        <div className='flex' style={{ background: 'linear-gradient(rgba(254, 205, 8, 0.07), rgb(14, 95, 89, 0.09))' }}>

          {/* First */}
          <div className='text-[1.8em] font-semibold text-[#0E5F59] px-[2em] flex items-center'>
            <div className='relative min-w-[5em]'>
              <div className='absolute h-[5em] w-[5em] p-[0.5em] flex items-center justify-center rounded-md bg-[#D7E8F0] -translate-y-full overflow-hidden'>
                <img src='src/assets/images/lenskart-icon.png'></img>
              </div>
              <div className='relative text-center'>Lenskart</div>
            </div>
          </div>

          {/* Second */}
          <div className='px-[1em] py-[1em]'>
            <div className='text-[2em] font-bold mb-[0.5em]'>Sales Associate (Frontend Sales)</div>
            <div className='flex text-[1.4em] font-medium'>
              <div><span>Location:&nbsp;</span><span className='text-[#0E5F59]'>Banglore</span></div>
              <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F59]'></div>
              <div><span>Starting Salary:&nbsp;</span><span className='text-[#0E5F59]'>Upto 4 LPA</span></div>
            </div>
          </div>

          {/* THIRD */}
          <div className='flex-grow flex justify-end px-[2em] items-center'>
            <div className='w-[fit-content] h-[fit-content] bg-white flex items-center border border-[#0E5F59] border-solid py-[0.5em] px-[1em] rounded-[2em]'>
              <CalendarVector />
              <div className='ml-[0.5em] text-[1.3em] text-[#0E5F59] font-medium'>Interview on: 05th May 2023</div>
            </div>
          </div>

        </div>

        {/* STEPS */}
        <div className='py-[2em] px-[3em]'>

          <div style={{ background: 'linear-gradient(45deg, #FFCE09 50%, transparent)' }} className='mb-[1em] text-[#0E5F59] text-[1.5em] px-[1em] rounded-[1em] py-[0.25em]'><span>3 steps selection process for&nbsp;</span><span className='font-bold'>Lenskart</span></div>

          <div className='flex justify-between mb-[2em]'>
            <SubStep status={SUB_STEP_STATUS.PENDING} no={1} title='Upload your Resume' />

            <SubStepArrow />

            <SubStep status={SUB_STEP_STATUS.REMAINING} no={2} title='Screening Quesions' />

            <SubStepArrow />

            <SubStep status={SUB_STEP_STATUS.REMAINING} no={3} title='Confirming Interview Slot' />
          </div>

          <div className='font-semibold text-[1.8em] text-[#5B5B5B]'>Fill the details below</div>

          <div className='py-[3em] px-[10em]'>
            <div className='bg-[#F3FAF9] rounded-md py-[3em] px-[7em]'>
              <div className='flex mb-[4em]'>
                <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em] pr-[1em]'>
                  <div>Name</div>
                  <div><input type="text" placeholder='Rahul' className='w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none' /></div>
                </div>
                <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em] pl-[1em]'>
                  <div>Name</div>
                  <div><input type="text" placeholder='Rahul' className='w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none' /></div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex flex-col max-w-[50%] flex-grow text-[#005F59] font-semibold text-[1.8em] pr-[1em]'>
                  <div>Phone number</div>
                  <div className='flex'>
                    <input type="text" placeholder='Rahul' className='mr-[1em] w-[100%] border border-[#005F59] border-solid rounded-md outline-none' />
                    <div className='bg-[#005F59] text-[#FECD08] rounded-md font-medium p-[0.25em] text-[1em]'>Verify</div>
                  </div>
                </div>
                <div className='flex items-center flex-grow text-[#005F59] font-semibold text-[1.8em] pl-[1em]'>
                  <div className='flex flex-row items-center flex-grow h-[100%] px-[2em] py-[0.5em] justify-center rounded-[1em]' style={{ boxShadow: '0 0 5px rgb(0, 0, 0, 0.2)', backgroundColor: 'white' }}>
                    <div className='mr-[0.5em]'>
                      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.625 27.625V17.875L11.375 21.125M14.625 17.875L17.875 21.125" stroke="#005F59" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75" stroke="#005F59" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z" stroke="#005F59" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div>Upload Resume</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarVector() {
  return (
    <div className='bg-[#FECD08] h-[16px] w-[14px]'>
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.11411 15H11.883C12.9071 15 13.7393 14.1678 13.7393 13.1437V3.89332C13.7393 2.86925 12.9071 2.03702 11.883 2.03702H11.1467V1.51851C11.1467 1.23332 10.9134 1 10.6282 1C10.343 1 10.1097 1.23332 10.1097 1.51851V2.03702H3.88746V1.51851C3.88746 1.23332 3.6541 1 3.36891 1C3.08372 1 2.8504 1.23332 2.8504 1.51851V2.03702H2.11411C1.09004 2.03702 0.257812 2.86925 0.257812 3.89332V13.1437C0.257812 14.1678 1.09004 15 2.11411 15ZM1.29487 3.89332C1.29487 3.44222 1.66302 3.07408 2.11411 3.07408H2.8504V3.59259C2.8504 3.87778 3.08372 4.1111 3.36891 4.1111C3.6541 4.1111 3.88742 3.87778 3.88742 3.59259V3.07408H10.1097V3.59259C10.1097 3.87778 10.343 4.1111 10.6282 4.1111C10.9134 4.1111 11.1467 3.87778 11.1467 3.59259V3.07408H11.883C12.3341 3.07408 12.7022 3.44222 12.7022 3.89332V5.40741H1.29487V3.89332ZM1.29487 6.44443H12.7023V13.1437C12.7023 13.5948 12.3341 13.9629 11.883 13.9629H2.11411C1.66302 13.9629 1.29487 13.5948 1.29487 13.1437V6.44443Z" fill="#0E5F59" stroke="#0E5F59" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

function SubStep({ status, no, title }: { status: string, no: number, title: string }) {

  const stepCircleColor: string =
    status === SUB_STEP_STATUS.PENDING ? 'border-[white]'
      : status === SUB_STEP_STATUS.COMPLETED ? 'border-[#FECD08]'
        : status === SUB_STEP_STATUS.REMAINING ? 'border-[#0E5F59]'
          : 'border-red[#0E5F59]';

  const stepBgColor: string =
    status === SUB_STEP_STATUS.PENDING ? 'bg-[#0E5F59]'
      : status === SUB_STEP_STATUS.COMPLETED ? 'bg-[#0E5F59]'
        : status === SUB_STEP_STATUS.REMAINING ? 'bg-[white]'
          : 'bg-[white]';

  const titleColor: string =
    status === SUB_STEP_STATUS.PENDING ? 'text-[#FECD08]'
      : status === SUB_STEP_STATUS.COMPLETED ? 'text-[#FECD08]'
        : status === SUB_STEP_STATUS.REMAINING ? 'text-[#0E5F59]'
          : 'text-[white]';

  return (
    <div className={`flex ${stepBgColor} px-[2em] rounded-[1.5em] items-center h-[6.5em]`} style={{ boxShadow: '0 0 5px rgb(100, 100, 100, 0.25)' }}>
      <div className={`border ${stepCircleColor} border-solid h-[2em] w-[2em] mr-[1em] rounded-[1em] flex items-center justify-center bg-[white] text-[#0E5F59] text-[2em]`}>{no}</div>
      <div className=''>
        {(status !== SUB_STEP_STATUS.REMAINING) && <div className='font-medium text-[white] text-[1.3em]'>Step-{no}</div>}
        <div className={`text-[1.8em] font-medium ${titleColor}`}>{title}</div>
      </div>
    </div>
  );
}

function SubStepArrow() {
  return (
    <div className='mx-[3em] flex items-center'>
      <svg width="11" height="26" viewBox="0 0 11 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 13L0.499999 25.1244L0.5 0.875644L11 13Z" fill="#0E5F59" />
      </svg>
    </div>
  );
}

function Step({ className, title, no, active, progress }: { className?: string, title: string, no: number, active: boolean, progress: number }) {
  if (progress > 100 || progress < 0) throw new Error('Progress value must be between 0 and 100');
  return (
    <div className={'flex flex-grow ' + className}>
      <div className='flex flex-col items-center mr-[1.5em]' >
        <div className='text-[1.5em] text-[#005F59] mb-[0.5em]'>STEP</div>
        <div className={`w-[6.5em] h-[6.5em] rounded-[50%] ${active ? 'bg-[#FECD08]' : 'bg-[#005F59]'} ${active ? 'text-[#005F59]' : 'text-[#fff]'} flex justify-center items-center`}>
          <span className='text-[2em]'>{no}</span>
        </div>
      </div>
      <div className='flex-grow flex items-center flex-col justify-center'>
        <div className='text-[1.8em] font-medium text-[#005F59] mb-[0.5em] w-[100%]'>
          {title}
        </div>
        <div className='border rounded-[0.5em] w-[100%] h-[1em] bg-[#DFEAE9] relative'>
          <div className='h-[1em] rounded-[0.5em] bg-[#005F59] absolute' style={{ width: `${progress}%` }}></div>
        </div>
      </div>

    </div>
  );
}

export function QuestionnaireModule() {
  return (
    <div id="app">
      <div className="questionnaire">
        <div className="div-2">
          <div className="overlap-2">
            <div className="frame">
              <div className="overlap-3">
                <div className="rectangle"></div>
                <div className="text-wrapper-2">Fill the details below</div>
                <div className="rectangle-2"></div>
                <div className="overlap-wrapper">
                  <div className="overlap-4">
                    <div className="rectangle-3"></div>
                    <img className="rectangle-4" alt="Rectangle"
                      src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/rectangle-329.png" />
                    <div className="rectangle-5"></div>
                    <div className="text-wrapper-3">Sales Associates (Frontend Sales)</div>
                    <div className="text-wrapper-4">Lenskart</div>
                    <div className="group-2">
                      <div className="text-wrapper-5">Location:</div>
                      <div className="text-wrapper-6">Bangalore</div>
                    </div>
                    <div className="group-3">
                      <img className="line" alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/line-108.svg" />
                      <div className="group-4">
                        <div className="text-wrapper-5">Starting Salary:</div>
                        <div className="text-wrapper-7">Upto 4 LPA</div>
                      </div>
                    </div>
                    <div className="image-wrapper">
                      <img className="image" alt="Image"
                        src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/image-54@2x.png" />
                    </div>
                    <div className="group-wrapper">
                      <div className="group-5">
                        <p className="p">Interview on: 04 May 2023</p>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <div className="rectangle-6"></div>
                            <img className="group-6" alt="Group"
                              src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/group@2x.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-7">
                  <div className="element-steps-selection-wrapper">
                    <p className="element-steps-selection"><span className="span">3 steps selection process for </span><span
                      className="text-wrapper-8">Lenskart</span></p>
                  </div>
                </div>
                <div className="group-8">
                  <div className="group-9">
                    <div className="div-wrapper">
                      <div className="group-10">
                        <div className="group-11">
                          <div className="text-wrapper-9">Next</div>
                          <img className="arrow" alt="Arrow"
                            src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/arrow-4-1.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="group-12">
                      <div className="group-13">
                        <div className="group-14">
                          <div className="text-wrapper-10">Back</div>
                          <img className="arrow-2" alt="Arrow"
                            src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/arrow-4.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-15">
                    <div className="frame-2">
                      <div className="text-wrapper-11">Name</div>
                    </div>
                    <div className="frame-3">
                      <div className="text-wrapper-12">Rahul</div>
                    </div>
                  </div>
                  <div className="group-16">
                    <div className="frame-2 flex flex-col">
                      <div className="text-wrapper-11">Phone number</div>
                      <div className='flex w-[34em]'>
                        <div className="flex rounded-md align-center mr-[1em]">
                          <input type="text" placeholder='+91' className='pl-[0.5em] flex-grow h-[2em] border border-[#005f59] rounded-md text-[2em]' />
                        </div>
                        <div className="overlap-group-34 flex-grow bg-teal-800 rounded-md flex justify-center items-center">
                          <div className="text-[1.5em] text-[#f6e05e] font-medium">Verify</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-18">
                    <div className="frame-2">
                      <div className="text-wrapper-11">Email</div>
                    </div>
                    <div className="frame-5">
                      <div className="text-wrapper-12">Rahul@email.com</div>
                    </div>
                  </div>
                  <div className="group-19">
                    <div className="group-20">
                      <div className="text-wrapper-14 text-2xl whitespace-no-wrap absolute font-semibold text-teal-800">Upload Resume</div>
                      <img className="iconsax-linear" alt="Iconsax linear"
                        src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/iconsax-linear-documentupload.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-21">
              <div className="group-22">
                <div className="group-23">
                  <div className="text-wrapper-15">Screening Questions</div>
                  <div className="group-24">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-16">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-25">
                <div className="group-26">
                  <div className="text-wrapper-15">Confirm Interview Slot</div>
                  <div className="group-24">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-16">3</div>
                    </div>
                  </div>
                </div>
              </div><img className="polygon" alt="Polygon"
                src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/polygon-17.svg" /><img
                className="polygon-2" alt="Polygon"
                src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/polygon-17.svg" />
              <div className="group-27">
                <div className="group-28">
                  <div className="text-wrapper-17">Upload your resume</div>
                  <div className="text-wrapper-18">Step-1</div>
                  <div className="group-29">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-19">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-20">Job Details</div>
          <div className="group-30">
            <div className="group-31">
              <div className="overlap-group-6">
                <div className="text-wrapper-21">1</div>
              </div>
              <div className="text-wrapper-22">Select the Job</div>
              <div className="rectangle-7"></div>
              <div className="text-wrapper-23">STEP</div>
            </div>
            <div className="group-32">
              <div className="text-wrapper-24">Upload your Resume</div>
              <div className="div-3">
                <div className="rectangle-8"></div>
              </div>
              <div className="group-33">
                <div className="group-34">
                  <div className="overlap-group-7">
                    <div className="text-wrapper-25">2</div>
                  </div>
                </div>
                <div className="text-wrapper-23">STEP</div>
              </div>
            </div>
            <div className="group-35">
              <div className="text-wrapper-24">Get hired!</div>
              <div className="div-3"></div>
              <div className="group-33">
                <div className="group-34">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-25">3</div>
                  </div>
                </div>
                <div className="text-wrapper-23">STEP</div>
              </div>
            </div>
          </div>
          <div className="component user-logged component-21">
            <div className="overlap">
              <div className="header component-instance">
                <div className="overlap-group component-21-instance">
                  <div className="contact">Contact</div>
                  <div className="dashboard">Dashboard</div>
                  <div className="about-us">About us</div>
                </div>
              </div>
              <img className="group" alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/group-1171275417-1@2x.png" />
              <div className="div">
                <div className="user-name">User name</div>
                <img className="img" alt="Group"
                  src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/group-84-1@2x.png" />
                <img
                  className="vector" alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/c9b601854fc03a44b58158f4da9f3146/img/vector-1-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}