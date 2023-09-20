import { Box, Button } from '@mui/material';
import image from '../../../assets/images/job-details-bg.png';
import CalendarVector from './calendar-vector';
import SideArrow from './side-arrow.icon';
import { JobsDetailsType } from '../../../features/reducers/job-details/job-details.interface';
import { CommonUtilities } from '../../../utils/common.utilities';

export default function PlacementJobDetails({ jobDetails, onGetHiredClick }: { jobDetails: JobsDetailsType, onGetHiredClick: () => void }) {
  console.log(jobDetails)
 
  return (
    <>        
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
        <div className='bg-cover-container z-[-1]'>
          <div className='w-[100%] h-[100%] absolute flex justify-end items-end z-[1] py-[1em] px-[2em]'>
  
            <div className='flex items-center gap-[1.5em] '>
              <div className='w-[fit-content] h-[fit-content] bg-white flex items-center border border-[#0E5F59] border-solid py-[0.5em] px-[1em] rounded-[2em]'>
                <CalendarVector />
                <div className='ml-[0.5em] text-[1.3em] text-[#0E5F59] font-medium'>Interview on: {CommonUtilities.date.formatDate( jobDetails.interviewStartDate )} </div>
              </div>

            
              <div onClick={onGetHiredClick} className=" cursor-pointer select-none flex bg-yellow text-[#0E5F59] px-[1em] py-[0.5em] rounded-lg  justify-center items-center w-[max-content] h-[max-content]">
              <span className="text-[2em] font-[600]">Get Hired</span>
              <SideArrow />
            </div>
       
            </div>
          </div>
          <img src={image} style={{ width: '100%' }} />
        </div>

        <div className='flex' style={{ background: 'linear-gradient(rgba(254, 205, 8, 0.07), rgb(14, 95, 89, 0.09))' }}>

          {/* First */}
          <div className='z-[-1] text-[1.8em] font-medium text-[#0E5F59] px-[2em] flex items-center'>
            <div className='relative min-w-[5em]'>
              <div className='absolute h-[5em] w-[5em] p-[0.5em] flex items-center justify-center rounded-md bg-[#D7E8F0] -translate-y-full overflow-hidden'>
                <img src={jobDetails.logo}></img>
              </div>
              <div className='relative text-center  '><p className='font-bold'>{ jobDetails.companyName }</p></div>
            </div>
          </div>

          {/* Second */}
          <div className='px-[1em] py-[1em] '>
            <div className='text-[2em] font-bold mb-[0.5em] '>{ jobDetails.postName }</div>
            <div className='flex text-[1.4em] font-medium'>
              <div className='text-[#5B5B5B]'><span>Location:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.location }</span></div>
              <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F594C]'></div>
              <div className='text-[#5B5B5B]'><span>Starting Salary:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.startingSalary }</span></div>
              <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F594C]'></div>
              <div className='text-[#5B5B5B]'><span>Job Type:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.jobType }</span></div>
              <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F594C]'></div>
              <div className='text-[#5B5B5B]'><span>No of Posts:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.noOfPosts || 'posts' }</span></div>
            </div>
          </div>

        </div>
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
        <div className='bg-cover-container min-h-[15em] flex flex-col rounded-[2em,0em] overflow-hidden'>
          <div className='w-[100%] h-[100%] absolute flex z-[1] py-[1em] px-[2em]'></div>
          <div className='flex-grow h-[100%] w-[100%] relative flex justify-center overflow-hidden'>
            <div className='h-[100%] w-[max-content] absolute flex justify-center'>
              <img src={image} className='h-full' />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center p-[2em]' style={{ background: 'linear-gradient(rgba(254, 205, 8, 0.07), rgb(14, 95, 89, 0.09))' }}>

          {/* First */}
          <div className='text-[1.8em] font-semibold text-[#0E5F59] px-[2em] flex items-center'>
            <div className='relative min-w-[5em] mt-[1em]'>
              <div className='absolute h-[5em] w-[5em] p-[0.5em] flex items-center justify-center rounded-md bg-[#D7E8F0] -translate-y-full overflow-hidden'>
                <img src={jobDetails.logo}></img>
              </div>
              <div className='relative text-center'>{jobDetails.companyName}</div>
            </div>
          </div>

          {/* Second */}
          <div className='w-[100%] flex flex-col gap-[1em]'>
            <div className='text-[1.8em] font-[700]'>{jobDetails.postName}</div>
            <div className='flex bg-white text-[1.1em] gap-[0.5em] text-[#0E5F59] w-[max-content] border border-solid rounded-[2em] px-[1em] py-[0.5em]'>
              <span>
                {/* <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2923 2.70801H9.75065V1.62467C9.75065 1.48102 9.69358 1.34324 9.592 1.24166C9.49042 1.14008 9.35264 1.08301 9.20898 1.08301C9.06532 1.08301 8.92755 1.14008 8.82597 1.24166C8.72439 1.34324 8.66732 1.48102 8.66732 1.62467V2.70801H4.33398V1.62467C4.33398 1.48102 4.27692 1.34324 4.17533 1.24166C4.07375 1.14008 3.93598 1.08301 3.79232 1.08301C3.64866 1.08301 3.51088 1.14008 3.4093 1.24166C3.30772 1.34324 3.25065 1.48102 3.25065 1.62467V2.70801H2.70898C2.27801 2.70801 1.86468 2.87921 1.55994 3.18396C1.25519 3.48871 1.08398 3.90203 1.08398 4.33301V4.87467H11.9173V4.33301C11.9173 3.90203 11.7461 3.48871 11.4414 3.18396C11.1366 2.87921 10.7233 2.70801 10.2923 2.70801ZM1.08398 10.2913C1.08398 10.7223 1.25519 11.1356 1.55994 11.4404C1.86468 11.7451 2.27801 11.9163 2.70898 11.9163H10.2923C10.7233 11.9163 11.1366 11.7451 11.4414 11.4404C11.7461 11.1356 11.9173 10.7223 11.9173 10.2913V5.95801H1.08398V10.2913Z" fill="#EA4335" />
                </svg> */}
                <CalendarVector />
              </span>
              <span>Interview on: { CommonUtilities.date.formatDate(jobDetails.interviewStartDate) }</span>
            </div>

            <div onClick={onGetHiredClick} className="cursor-pointer select-none flex bg-yellow text-[#0E5F59] px-[1em] py-[0.5em] rounded-lg  justify-center items-center w-[max-content] h-[max-content]">
              <span className="text-[2em] font-[600]">Get Hired</span>
              <SideArrow />
            </div>

            <div className='text-[1.4em] font-medium'><span className='text-[#5B5B5B]'>Location&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.location }</span></div>
            <div className='text-[1.4em] font-medium'><span className='text-[#5B5B5B]'>Starting Salary:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.startingSalary || 'salary' }</span></div>
            <div className='text-[1.4em] font-medium'><span className='text-[#5B5B5B]'>Job Type:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.jobType }</span></div>
            <div className='text-[1.4em] font-medium'><span className='text-[#5B5B5B]'>No of Posts:&nbsp;</span><span className='text-[#0E5F59]'>{ jobDetails.noOfPosts || 'posts' }</span></div>

          </div>

        </div>
      </Box>
    </>
  );
}