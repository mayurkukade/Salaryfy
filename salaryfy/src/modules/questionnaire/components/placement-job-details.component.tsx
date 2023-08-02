import image from '../../../assets/images/job-details-bg.png';
import CalendarVector from './calendar-vector';
import SideArrow from './side-arrow.icon';

export default function PlacementJobDetails() {
  return (
    <div>
      <div className='bg-cover-container'>
        <div className='w-[100%] h-[100%] absolute flex justify-end items-end z-[1] py-[1em] px-[2em]'>

          <div className='flex items-center gap-[1.5em]'>
            <div className='w-[fit-content] h-[fit-content] bg-white flex items-center border border-[#0E5F59] border-solid py-[0.5em] px-[1em] rounded-[2em]'>
              <CalendarVector />
              <div className='ml-[0.5em] text-[1.3em] text-[#0E5F59] font-medium'>Interview on: 05th May 2023</div>
            </div>

            <div className="flex bg-yellow text-[#0E5F59] px-[1em] py-[0.5em] rounded-lg  justify-center items-center w-[max-content] h-[max-content]">
              <span className="text-[2em] font-medium">Get Hired</span>
              <SideArrow />
            </div>
          </div>
        </div>
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
            <div className='text-[#5B5B5B]'><span>Location:&nbsp;</span><span className='text-[#0E5F59]'>Banglore</span></div>
            <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F594C]'></div>
            <div className='text-[#5B5B5B]'><span>Starting Salary:&nbsp;</span><span className='text-[#0E5F59]'>Upto 4 LPA</span></div>
            <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F594C]'></div>
            <div className='text-[#5B5B5B]'><span>Job Type:&nbsp;</span><span className='text-[#0E5F59]'>On-Site</span></div>
            <div className='mx-2 w-[1px] h-[1.4em] bg-[#0E5F594C]'></div>
            <div className='text-[#5B5B5B]'><span>No of Posts:&nbsp;</span><span className='text-[#0E5F59]'>38</span></div>
          </div>
        </div>

      </div>
    </div>
  );
}