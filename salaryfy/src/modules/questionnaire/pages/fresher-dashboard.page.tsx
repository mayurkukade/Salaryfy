import { Button } from "@mui/material";
import DropdownMenu from "../../../components/DropdownMenu";
import BottomPageNavigationBar from "../components/bottom-navigation-bar.component";
import QuestionnaireTopBarStep from "../components/questionnaire-topbar-step.component";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HavingDoubts } from "../components/having-doubts.component";
import LenskartImage from '../../../assets/images/lenskart-icon.png';

export default function FresherDashboardPage() {
  return (
    <div className='w-100 flex flex-col items-center h-[100%]'>
      <QuestionnaireTopBarStep />
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]'>
        {/* STEPS */}
        <div className='py-[2em] px-[3em] h-[100%]'>
          <FresherDashboard />
          <BottomPageNavigationBar />
        </div>
      </div>
    </div>
  );
}

export function FresherDashboard() {
  return (
    <div className='flex'>
      <div className='flex flex-col'>
        <div className='text-[4em] text-[#005F59] font-bold mb-[1em]'>Hi Rahul,</div>
        <div className='mb-[2em]'><span className='text-[2.2em] text-[#5B5B5B]'>Our placement manager will get in touch with you within 24 hours, meanwhile please check and complete your profile.</span></div>
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
        <div style={{ boxShadow: '0 0 10px rgb(0, 0, 0, 0.2)' }} className='rounded-xl mb-[2em]'>
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
        <div className='text-[2.6em] font-semibold my-[1em]'>Recommended jobs</div>
        <div className='rounded-[2em] px-[2.5em] py-[2em] app-box-shadow'>
          <div className='flex mb-[1em]'>
            <div className='rounded-md border border-solid border-[#D7E8F0] p-[1em] h-[7.7em] w-[7.7em] flex items-center justify-center' style={{ background: 'linear-gradient(to right, #D7E8F0, #F1FAFB)' }}>
              <img src={LenskartImage} />
            </div>
            <div className='flex flex-col justify-center flex-grow px-[1em]'>
              <div className='text-[2em] font-semibold text-[#005F59]'>Sales Associates (Frontend Sales)</div>
              <div className='text-[1.8em] font-semibold text-[#5b5b5b]'>Lenskart</div>
            </div>
            <div className='text-[#5B5B5B] flex'>
              <div className='mr-[0.5em]'>Status</div>
              <div className='border border-solid h-[max-content] border-[#5B5B5B] px-[0.5em] rounded-[1em]'>Application Sent</div>
            </div>
          </div>
          <div className='mb-[0.5em] text-[1.6em] flex'>
            <div className='mr-[0.5em] text-[#5B5B5B]'>Location:</div>
            <div className='text-[#005F59]'>Bangalore</div>
          </div>
          <div className='text-[1.6em] flex flex-row'>
            <div className='mr-[0.5em] text-[#5B5B5B]'>Job-Type:</div>
            <div className='text-[#005F59]'>On-Site</div>
            <div className='bg-[#00595F4C] mx-[2em] flex-grow max-w-[1px]'></div>
            <div className='mr-[0.5em] text-[#5B5B5B]'>No of Posts:</div>
            <div className='text-[#005F59]'>38</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col pr-[1em] pl-[5em]'>
        <div className='flex flex-col mb-[1em]'>
          <Button variant='contained'>
            <span className='text-[1.25em] mr-[1em]'>Upload joining documents</span>
            <span className='' style={{ transform: 'scaleX(-1)' }}>
              <svg width="35" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.12891 12.1289C0.647814 12.61 0.647813 13.39 1.12891 13.8711L8.96875 21.7109C9.44985 22.192 10.2299 22.192 10.7109 21.7109C11.192 21.2298 11.192 20.4498 10.7109 19.9688L3.74219 13L10.7109 6.03124C11.192 5.55015 11.192 4.77015 10.7109 4.28905C10.2299 3.80796 9.44985 3.80796 8.96876 4.28905L1.12891 12.1289ZM33 11.7681L2 11.7681L2 14.2319L33 14.2319L33 11.7681Z" fill="#fff" />
              </svg>
            </span>
          </Button>
        </div>
        <div className='mx-[1em] whitespace-nowrap my-[1em] font-medium text-[2.6em] text-[#0E5F59]'>Upcoming Interviews</div>
        <div className='p-[1em] app-scrollbar h-[50em]'>
          <UpcomingInterviewCard className='mb-[2em]' />
          <UpcomingInterviewCard className='mb-[2em]' />
          <UpcomingInterviewCard className='mb-[2em]' />
          <UpcomingInterviewCard className='mb-[2em]' />
          <UpcomingInterviewCard />
        </div>

        <HavingDoubts />
      </div>
    </div>
  );
}

function UpcomingInterviewCard({ className }: { className?: string }) {
  return (
    <div className={'p-[1.5em] rounded-[1em] ' + className} style={{ boxShadow: '0 0 10px rgb(210, 210, 210)', background: 'linear-gradient(to right, #FECD080A, #0E5F591C)' }}>
      <div className='flex flex-col max-w-[32em]'>
        <div className='flex mb-[1em]'>
          <div className='mr-[1em] rounded-md border border-solid border-[#D7E8F0] p-[1em] h-[5em] w-[5em] flex items-center justify-center' style={{ background: 'linear-gradient(to right, #D7E8F0, #F1FAFB)' }}>
            <img src={LenskartImage} />
          </div>
          <div className='text-[1.5em] font-semibold'>
            <div className='text-[#0E5F59]'>Sales Associates (Frontend Sales)</div>
            <div className='text-[#5B5B5B]'>Lenskart</div>
          </div>
        </div>
        <div className='flex pb-[1em]'>
          <div>
            <div className='text-[1.4em] flex mb-[1em]'><div className='mr-[0.5em] whitespace-nowrap'>Interview on:</div><div className='bg-[#0E5F59] text-[#FECD08] px-[1em] rounded-[2em] whitespace-nowrap'>04 May 2023</div></div>
            <div className='text-[1.4em] flex mb-[1em]'><div className='mr-[0.5em]'>Status:</div><div className='border border-solid border-[#1877F2] text-[#1877F2] px-[1em] rounded-[2em]'>Scheduled</div></div>
            <div className='text-[1.4em] flex'><div className='mr-[0.5em]'>Location:</div><div className='text-[#0E5F59]'>Bangalore</div></div>
          </div>
          <div className='px-[1em] flex flex-row items-end'><div className='border border-solid border-[#0E5F59] text-[#0E5F59] bg-white px-[0.5em] py-[0.25em] rounded-[0.5em] font-semibold whitespace-nowrap'>View More</div></div>
        </div>
      </div>
    </div>
  );
}