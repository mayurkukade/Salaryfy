export default function BottomPageNavigationBar() {
  return (
    <div className='flex justify-center mt-6'>
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
  );
}