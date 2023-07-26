import './questionnaire.css'
import image from '../../assets/images/job-details-bg.png'
export default function QuestionnaireModule0() {
  return (
    <div className='w-100 flex flex-col items-center'>
      <div className='flex-grow max-w-[100em] w-[100%] flex mb-[2em]'>
        <Step progress={100} active={false} no={1} title='Select the job' className='' />
        <Step progress={5} active={true} no={2} title='Upload your Resume' className='mx-[2em]' />
        <Step progress={0} active={false} no={3} title='Get hired!' className='' />
      </div>
      <div className='max-w-[100em] w-[100%] mb-[2em] flex flex-col'>
        <div className='text-[1.4em]'>Job Details</div>
        <div>
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

function Step({ className, title, no, active, progress }: { className?: string, title: string, no: number, active: boolean, progress: number }) {
  if (progress > 100 || progress < 0) throw new Error('Progress value must be between 0 and 100');
  return (
    <div className={'flex flex-grow ' + className}>
      <div className='flex flex-col items-center mr-[1.5em]' >
        <div className='text-[1.5em] text-[#005F59] mb-[0.5em]'>STEP</div>
        <div className={`w-[6.5em] h-[6.5em] rounded-[50%] ${active ? 'bg-[#FECD08]' : 'bg-[#005F59]'} ${ active ? 'text-[#005F59]' : 'text-[#fff]' } flex justify-center items-center`}>
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