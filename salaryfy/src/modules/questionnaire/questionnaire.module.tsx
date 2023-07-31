import './questionnaire.css'
import image from '../../assets/images/job-details-bg.png'
import { ChangeEvent, ReactNode, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';
import Checkbox from '@mui/material/Checkbox';
enum SUB_STEP_STATUS {
  COMPLETED = 'completed',
  PENDING = 'pending',
  REMAINING = 'remaining',
}

export default function QuestionnaireModule0() {

  return (
    <div className='w-100 flex flex-col items-center h-[100%]'>
      <div className='flex-grow max-w-[120em] w-[100%] flex mb-[2em]'>
        <Step progress={100} active={false} no={1} title='Select the job' className='' />
        <Step progress={5} active={true} no={2} title='Upload your Resume' className='mx-[2em]' />
        <Step progress={0} active={false} no={3} title='Get hired!' className='' />
      </div>
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]'>
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
        <div className='py-[2em] px-[3em] h-[100%]'>

          <div style={{ background: 'linear-gradient(45deg, #FFCE09 50%, transparent)' }} className='mb-[1em] text-[#0E5F59] text-[1.5em] px-[1em] rounded-[1em] py-[0.25em]'><span>3 steps selection process for&nbsp;</span><span className='font-bold'>Lenskart</span></div>

          <div className='flex justify-between mb-[2em]'>
            <SubStep status={SUB_STEP_STATUS.PENDING} no={1} title='Upload your Resume' />

            <SubStepArrow />

            <SubStep status={SUB_STEP_STATUS.REMAINING} no={2} title='Screening Quesions' />

            <SubStepArrow />

            <SubStep status={SUB_STEP_STATUS.REMAINING} no={3} title='Confirming Interview Slot' />
          </div>
          {/* <PersonalDetails/> */}
          {/* <ScreeningQuestions /> */}
          {/* <ScheduleInterview /> */}
          <FresherDashboard />

          <div className='flex justify-center'>
            <div className='flex items-center px-[1.5em] py-[0.5em] rounded-xl bg-[#B3B3B3] mx-[1em]'>
              <span className='mr-[1em]'>
                <svg width="35" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z" fill="#5B5B5B" />
                </svg>
              </span>
              <span className='text-[2em] text-[#5B5B5B] font-medium mr-[0.5em]'>Back</span>
            </div>
            <div className='flex items-center bg-[#FECD08] px-[1.5em] py-[0.5em] rounded-xl mx-[1em]'>
              <span className='text-[2em] font-medium mr-[0.5em] text-[#005F59]'>Next</span>
              <span className='' style={{ transform: 'scaleX(-1)' }}>
                <svg width="35" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z" fill="#005F59" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FresherDashboard() {
  return (
    <>
      <div className='text-[4em] text-[#005F59] font-bold mb-[1em]'>
        Hi Rahul,
      </div>
      <div className='mb-[2em]'><span className='text-[2.2em] text-[#5B5B5B]'>Our placement manager will get in touch with you within 24 hours, meanwhile please check and complete your profile.</span></div>

      <div className='flex flex-col'>
        <div style={{ boxShadow: '0 0 10px rgb(0, 0, 0, 0.2)' }} className='mb-[2em] text-[1.8em] rounded-xl overflow-hidden grid grid-cols-[max-content,auto] grid-cols-auto [&>*]:whitespace-nowrap [&>*]:px-[1.5em] [&>*]:py-[0.5em] [&>*]:border-b [&>*]:border-solid [&>*]:border-b-[#0E5F591A] [&>*:nth-child(odd)]:bg-[#0E5F5919] [&>*:nth-child(odd)]:text-[#5b5b5b] [&>*:nth-child(odd)]:w-[10em] [&>*:nth-child(even)]:w-[100%]'>
          <div>Full Name</div>
          <div>Rahul Roy</div>
          <div>Phone</div>
          <div>+91-9999999999</div>
          <div>Email</div>
          <div>rahul.roy@mail.com</div>
          <div>Status</div>
          <div><span className='bg-[#0CBC8B] rounded-[1em] text-[white] px-[0.5em] py-[0.25em]'>Selected</span></div>
          <div>Plan Opted</div>
          <div>Rapid Placement</div>
          <div>Sign Up Date</div>
          <div>30th MAy 2023</div>
          <div>Payment Method</div>
          <div>Card</div>
        </div>
        <div style={{ boxShadow: '0 0 10px rgb(0, 0, 0, 0.2)' }} className='rounded-xl'>
          <div className='grid grid-cols-[1fr,1fr] [&>*]:mx-[2em] [&>*]:my-[1em] p-[1.5em]'>
            <div>
              <div className='mb-[0.5em] text-[2em] text-[#005F59] font-semibold'>Highest Level of Education</div>
              <DropdownMenu label='AM' endIcon={<KeyboardArrowDownIcon />} />
            </div>
            <div>
              <div className='mb-[0.5em] text-[2em] text-[#005F59] font-semibold'>Board/University</div>
              <DropdownMenu label='AM' endIcon={<KeyboardArrowDownIcon />} />
            </div>
            <div>
              <div className='mb-[0.5em] text-[2em] text-[#005F59] font-semibold'>Stream</div>
              <DropdownMenu label='AM' endIcon={<KeyboardArrowDownIcon />} />
            </div>
            <div>
              <div className='mb-[0.5em] text-[2em] text-[#005F59] font-semibold'>Percentage secured</div>
              <DropdownMenu label='AM' endIcon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
          <div className='ms-[3.5em] mb-[3em]'>
            <Button variant='contained' sx={{ padding: '0.5em 2em' }}>Update</Button>
          </div>
        </div>
      </div>
    </>
  );
}

function DropdownMenu({ className, label, endIcon }: { className?: string, label: string, endIcon?: ReactNode }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={'flex ' + className}>
      <Button sx={{ display: 'flex', flexGrow: '1', justifyContent: 'space-between', bgcolor: 'white' }} onClick={handleClick} variant='outlined' endIcon={endIcon || <></>}>{label}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function ScheduleInterview() {

  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='h-[100%]'>
      <div className='font-semibold text-[1.8em] text-[#000] mb-[1em]'>You can select multiple locations with date and time</div>

      <div className='bg-[#0E5F5910] p-[1.5em] rounded-[1.5em] flex mb-[2em]'>
        <div className='flex flex-col mr-[2em]'>
          <div className='text-[1.6em] text-[#5B5B5B] mb-[1em]'>Please confirm your location for interview</div>
          <DropdownMenu className='flex-grow' label='Select Location' endIcon={<KeyboardArrowDownIcon />} />
        </div>
        <div className='flex flex-col flex-grow'>
          <div className='text-[1.6em] text-[#5B5B5B] mb-[1em]'>Please confirm your location for interview</div>
          <div className='flex'>
            <DropdownMenu className='flex-grow mr-[1em]' label='Select Date' endIcon={<KeyboardArrowDownIcon />} />
            <DropdownMenu className='flex-grow max-w-[8em]' label='10' endIcon={<KeyboardArrowDownIcon />} />
            <div className='mx-[1em] text-[1.5em] flex items-center'>:</div>
            <DropdownMenu className='flex-grow max-w-[8em] mr-[1em]' label='30' endIcon={<KeyboardArrowDownIcon />} />
            <DropdownMenu className='flex-grow max-w-[8em] mr-[1em]' label='AM' endIcon={<KeyboardArrowDownIcon />} />
            <Button sx={{ backgroundColor: '#FECD08', color: '#0E5F59' }} variant='contained'><span className='font-bold'>Add</span></Button>
          </div>
        </div>
      </div>

      <div className='h-[100%] mb-[2em]'>

        <div className='flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em]'>
          <div>Slot-1</div>
          <div className='mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]'></div>
          <div className='mr-[0.5em]'>Deverabisanahalli, On Tueday, 06 June 2023, 4:00 PM</div>
          <div><CancelIcon sx={{ color: 'red' }} /></div>
        </div>

        <div className='flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em]'>
          <div>Slot-2</div>
          <div className='mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]'></div>
          <div className='mr-[0.5em]'>Kalubisanahalli, On Thursday, 08 June 2023, 10:00 PM</div>
          <div><CancelIcon sx={{ color: 'red' }} /></div>
        </div>

        <div className='flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em]'>
          <div>Slot-3</div>
          <div className='mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]'></div>
          <div className='mr-[0.5em]'>Koremanagalam, On Satureday, 10 June 2023, 11:30 PM</div>
          <div><CancelIcon sx={{ color: 'red' }} /></div>
        </div>

        <div className='flex items-center text-[1.6em] text-[#5B5B5B]'>
          <div><Checkbox checked={checked} onChange={handleChange} /></div>
          <div>I want to get the job description on my </div>
          <div className='mx-[0.5em]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_205_11107)">
              <path d="M9.00225 0H8.99775C4.03538 0 0 4.0365 0 9C0 10.9688 0.6345 12.7935 1.71337 14.2751L0.59175 17.6186L4.05113 16.5128C5.47425 17.4555 7.17188 18 9.00225 18C13.9646 18 18 13.9624 18 9C18 4.03763 13.9646 0 9.00225 0Z" fill="#4CAF50" />
              <path d="M14.2416 12.708C14.0244 13.3211 13.1627 13.8296 12.4753 13.9781C12.0051 14.0782 11.3908 14.1581 9.32306 13.3009C6.67819 12.2051 4.97494 9.51748 4.84219 9.34311C4.71506 9.16873 3.77344 7.91998 3.77344 6.62848C3.77344 5.33698 4.42931 4.70811 4.69369 4.43811C4.91081 4.21648 5.26969 4.11523 5.61394 4.11523C5.72531 4.11523 5.82544 4.12086 5.91544 4.12536C6.17981 4.13661 6.31256 4.15236 6.48694 4.56973C6.70406 5.09286 7.23281 6.38436 7.29581 6.51711C7.35994 6.64986 7.42406 6.82986 7.33406 7.00423C7.24969 7.18423 7.17544 7.26411 7.04269 7.41711C6.90994 7.57011 6.78394 7.68711 6.65119 7.85136C6.52969 7.99423 6.39244 8.14723 6.54544 8.41161C6.69844 8.67036 7.22719 9.53323 8.00569 10.2262C9.01031 11.1206 9.82481 11.4064 10.1162 11.5279C10.3333 11.6179 10.5921 11.5965 10.7507 11.4277C10.9521 11.2106 11.2007 10.8506 11.4538 10.4962C11.6338 10.242 11.8611 10.2105 12.0996 10.3005C12.3426 10.3849 13.6284 11.0205 13.8928 11.1521C14.1572 11.2849 14.3316 11.3479 14.3957 11.4592C14.4587 11.5706 14.4587 12.0937 14.2416 12.708Z" fill="#FAFAFA" />
            </g>
            <defs>
              <clipPath id="clip0_205_11107">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </div>
          <div>whatsapp number</div>
        </div>
      </div>

    </div>
  )
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

function PersonalDetails() {
  return (
    <>
      <div className='font-semibold text-[1.8em] text-[#5B5B5B]'>Fill the details below</div>
      <div className='py-[3em] px-[10em]'>
        <div className='bg-[#F3FAF9] rounded-md py-[3em] px-[7em]'>
          <div className='flex mb-[4em]'>
            <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em] pr-[1em]'>
              <div>Name</div>
              <div><input type="text" placeholder='Your Name' className='w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none' /></div>
            </div>
            <div className='flex flex-col flex-grow text-[#005F59] font-semibold text-[1.8em] pl-[1em]'>
              <div>Phone number</div>
              <div><input type="text" placeholder='+91' className='w-[100%] px-[0.5em] border border-[#005F59] border-solid rounded-md outline-none' /></div>
            </div>
          </div>
          <div className='flex mb-[4em]'>
            <div className='flex flex-col max-w-[50%] flex-grow text-[#005F59] font-semibold text-[1.8em] pr-[1em]'>
              <div>Email</div>
              <div className='flex'>
                <input type="text" placeholder='Email' className='mr-[1em] w-[100%] border border-[#005F59] border-solid rounded-md outline-none' />
                <div className='bg-[#005F59] text-[#FECD08] rounded-md font-medium p-[0.25em] text-[1em]'>Verify</div>
              </div>
            </div>
            <div className='flex items-center flex-grow text-[#005F59] font-semibold text-[1.8em] pl-[1em]'>
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
          </div>
          <div className='flex mb-[2em]'>
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
    </>);
}

function ScreeningQuestions() {
  return (
    <>
      <div className='font-semibold text-[1.8em] text-[#5B5B5B] mb-[1em]'>Fill the details below</div>

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

    </>);
}

function Question({ question }: { question: string }) {
  return (
    <div className='flex'>
      <div className='mt-[0.25em] mr-[1em] h-[100%]'>
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.273438" width="12.2727" height="12.2727" rx="2" fill="#FECD08" />
          <path d="M15 11.1815L4.77273 17.0862L4.77273 5.27674L15 11.1815Z" fill="#0E5F59" />
        </svg>
      </div>
      <div className='text-[1.5em] font-medium'>
        <div className='mb-[0.5em]'>{question}</div>
      </div>
    </div>
  );
}

function YesNoResponse({ className }: { className?: string }) {
  return (
    <div className={'flex ' + className}>
      <div className='flex items-center mr-[0.5em]'>
        <span className='mr-[0.5em]'>
          <AppRadioButton active={true} />
        </span>
        <span>Yes</span>
      </div>
      <div className='flex items-center'>
        <span className='mr-[0.5em]'>
          <AppRadioButton active={false} />
        </span>
        <span>No</span>
      </div>
    </div>
  );
}

function RatingResponse({ className }: { className?: string }) {
  function Star({ className, active }: { className?: string, active?: boolean }) {
    return (<>
      {active && <div className={className}><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L12.7945 4.96546L18.535 6.56434L14.8307 11.232L15.084 17.1857L9.5 15.105L3.91604 17.1857L4.16933 11.232L0.464963 6.56434L6.20546 4.96546L9.5 0Z" fill="#FECD08" />
      </svg></div>}

      {
        !active && <div className={className}><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L12.7945 4.96546L18.535 6.56434L14.8307 11.232L15.084 17.1857L9.5 15.105L3.91604 17.1857L4.16933 11.232L0.464963 6.56434L6.20546 4.96546L9.5 0Z" fill="#D7E8F0" />
        </svg></div>
      }

    </>);
  }
  return (
    <div className={'flex ' + className}>
      <Star className='mr-[1em]' active={true} />
      <Star className='mr-[1em]' active={true} />
      <Star className='mr-[1em]' active={true} />
      <Star className='mr-[1em]' active={true} />
      <Star className='' active={false} />
    </div>
  );
}

function QuestionSeparator({ className }: { className?: string }) {
  return <div className={'bg-[#0E5F59] h-[1px] opacity-[0.2] w-[100%] ' + className}></div>
}

function AppRadioButton({ active }: { active?: boolean }) {
  const radioButtonColor = active ? '#005F59' : '#5B5B5B';
  return (
    <svg className='cursor-pointer' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em">
      <circle cx="10" cy="10" r="9" stroke={radioButtonColor} strokeWidth="2" fill="none" />
      {active && <circle cx="10" cy="10" r="5" fill="#005F59" opacity="1" />}
    </svg>
  )
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