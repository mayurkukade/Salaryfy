import { Button, Chip, TextField } from "@mui/material";
import DropdownMenu from "../../../components/DropdownMenu";
import { HavingDoubts } from "../components/having-doubts.component";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BottomPageNavigationBar from "../components/bottom-navigation-bar.component";

export default function FresherProfileUploadPage() {

  return (
    <div className='w-100 flex flex-col items-center h-[100%]'>
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]'>
        <div className='py-[2em] px-[3em] h-[100%]'>
          <FresherProfileUpload />
          <BottomPageNavigationBar />
        </div>
      </div>
    </div>
  );
}

function FresherProfileUpload() {
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <div>

            <div className='flex mb-[2em]'>
              <div className='flex flex-col p-[1em] h-[20em] w-[18em] bg-[#F2F2F2] rounded-lg'>
                <div className='flex-grow flex justify-center items-center'>
                  <svg height='6em' width='6em'>
                    <rect height='100%' width='1px' x='50%' fill='#5B5B5B' />
                    <rect height='1px' width='100%' y='50%' fill='#5B5B5B' />
                  </svg>
                </div>
                <div className='text-[#5B5B5B] text-[1.8em] text-center'>Upload your Passport Photo</div>
              </div>
              <div className='px-[4em] py-[2em]'>
                <div className='font-bold text-[#005F59] text-[4em]'>Hi Rahul N,</div>
                <div className='text-[#5B5B5B] text-[2.4em]'>Please complete your profile and more subtext here</div>
              </div>
            </div>

            <div className='my-[3em]'>
              <div className='text-[#005F59] text-[3.2em] font-bold mb-[1em]'>Skills</div>

              <div className='flex w-[50em] mb-[2em]'>
                <div className='flex-grow flex flex-col pr-[2em]'><TextField size='small' /></div>
                <div className='flex'><Button variant='contained' >Add</Button></div>
              </div>

              <div className='flex flex-wrap gap-[1em] mb-[3em]'>
                <Chip className='text-[1.5em]' label='Hadoop' />
                <Chip className='text-[1.5em]' label='Other Skill' />
                <Chip className='text-[1.5em]' label='Other Skill' />
                <Chip className='text-[1.5em]' label='Other Skill' />
                <Chip className='text-[1.5em]' label='Other Skill' />
                <Chip className='text-[1.5em]' label='Other Skill' />
                <Chip className='text-[1.5em]' label='Other Skill' />
                <Chip className='text-[1.5em]' label='Other Skill' />
              </div>
            </div>

            <div className='grid grid-cols-[1fr,1fr] gap-[2em] my-[2em]' >
              <div>
                <div className='text-[#005F59] text-[1.8em] font-semibold'>Highest level of education</div>
                <div><DropdownMenu label='Select' endIcon={<KeyboardArrowDownIcon />} /></div>
              </div>
              <div>
                <div className='text-[#005F59] text-[1.8em] font-semibold'>Board/University/Open University</div>
                <div><DropdownMenu label='Select' endIcon={<KeyboardArrowDownIcon />} /></div>
              </div>
              <div>
                <div className='text-[#005F59] text-[1.8em] font-semibold'>Stream</div>
                <div><DropdownMenu label='Select' endIcon={<KeyboardArrowDownIcon />} /></div>
              </div>
              <div>
                <div className='text-[#005F59] text-[1.8em] font-semibold'>Percentage</div>
                <div className='flex flex-col'><TextField inputProps={{ style: { height: '100%' } }} size='small' /></div>
              </div>
            </div>

            <div className='my-[3em]'>
              <div className='text-[#005F59] text-[3.2em] font-bold mb-[1em]'>Upload Documents</div>

              <div className='text-[#5B5B5B] text-[2.4em] font-bold mb-[1em]'>Identification documents*</div>
              <div className='grid grid-cols-[1fr,1fr] gap-[2em] mb-[2em]'>
                <DocUploader label='Upload Aadhar' uploading={false} />
                <DocUploader label='Upload PAN' uploading={false} />
                <DocUploader label='Cancelled Cheque' uploading={false} />
                <DocUploader label='Front page of bank Passbook' uploading={false} />
              </div>

              <div className='text-[#5B5B5B] text-[2.4em] font-bold my-[2em]'>Education*</div>
              <div className='grid grid-cols-[1fr,1fr] gap-[2em] mb-[2em]'>
                <DocUploader label='12th_standard.png' uploading={true} progress={100} />
                <DocUploader label='graduate.png' uploading={true} progress={10} />
              </div>
              <div><Button variant='contained'>Add</Button></div>

              <div className='text-[#5B5B5B] text-[2.4em] font-bold my-[2em]'>Skills/Certification*</div>
              <div className='grid grid-cols-[1fr,1fr] gap-[2em] mb-[2em]'>
                <DocUploader label='MERN stack course.p...' uploading={true} progress={100} />
              </div>
              <div><Button variant='contained'>Add</Button></div>
            </div>

            <div className='flex gap-[2em] my-[2em] mt-[5em]'>
              <Button style={{ minWidth: '10em' }} size='large' variant='outlined'>Cancel</Button>
              <Button style={{ minWidth: '10em' }} size='large' variant='contained'>Save</Button>
            </div>

          </div>
        </div>

        <div>
          <HavingDoubts />
        </div>
      </div>
    </>
  );
}

function DocUploader({ className, label, uploading, progress }: { className?: string, label: string, uploading?: boolean, progress?: number }) {
  if (uploading) {
    return (
      <div className={'flex justify-between items-center shadow-lg px-[2em] py-[1.5em] rounded-[1em] ' + (className || '')}>
        <div className='flex items-center gap-[1em] flex-grow'>
          <div>
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex flex-col gap-[0.25em] text-[#005F59] text-[2em] font-semibold flex-grow pr-[1em]'>
            <div>{label}</div>
            {(progress !== 100) && <div className='h-[4px] w-[100%] bg-[#D9D9D9] relative'>
              <div className='absolute h-[4px] bg-[#0E5F59]' style={{ width: (progress?.toString() || 0) + '%' }}></div>
            </div>}
          </div>
        </div>
        <div className='w-[max-content]'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0009 30.7206C24.1304 30.7206 30.7206 24.1304 30.7206 16.0009C30.7206 7.87147 24.1304 1.28125 16.0009 1.28125C7.87147 1.28125 1.28125 7.87147 1.28125 16.0009C1.28125 24.1304 7.87147 30.7206 16.0009 30.7206Z" fill="#005F59" />
            <path d="M21.4025 19.3397C21.6054 19.5433 21.7434 19.8028 21.7989 20.0852C21.8545 20.3676 21.8251 20.6603 21.7144 20.9259C21.6038 21.1915 21.4169 21.4182 21.1776 21.5771C20.9382 21.736 20.6571 21.82 20.37 21.8185C19.992 21.8185 19.6284 21.6727 19.3376 21.3956L16.0076 18.0565L12.6776 21.3956C12.3868 21.6872 12.0233 21.8185 11.6452 21.8185C11.2671 21.8185 10.9036 21.6727 10.6128 21.3956C10.478 21.2607 10.371 21.1005 10.298 20.9241C10.2251 20.7477 10.1875 20.5586 10.1875 20.3676C10.1875 20.1767 10.2251 19.9876 10.298 19.8112C10.371 19.6348 10.478 19.4746 10.6128 19.3397L13.9427 16.0005L10.6128 12.6614C10.4781 12.5264 10.3713 12.3662 10.2985 12.1898C10.2256 12.0134 10.1881 11.8244 10.1881 11.6335C10.1881 11.4426 10.2256 11.2535 10.2985 11.0771C10.3713 10.9007 10.4781 10.7405 10.6128 10.6055C10.7474 10.4705 10.9072 10.3634 11.0831 10.2903C11.259 10.2173 11.4475 10.1797 11.6379 10.1797C11.8283 10.1797 12.0168 10.2173 12.1927 10.2903C12.3686 10.3634 12.5285 10.4705 12.6631 10.6055L15.9931 13.9446L19.3231 10.6055C19.4577 10.4705 19.6175 10.3634 19.7934 10.2903C19.9693 10.2173 20.1578 10.1797 20.3482 10.1797C20.5386 10.1797 20.7271 10.2173 20.903 10.2903C21.0789 10.3634 21.2388 10.4705 21.3734 10.6055C21.508 10.7405 21.6148 10.9007 21.6877 11.0771C21.7605 11.2535 21.798 11.4426 21.798 11.6335C21.798 11.8244 21.7605 12.0134 21.6877 12.1898C21.6148 12.3662 21.508 12.5264 21.3734 12.6614L18.0434 16.0005L21.3734 19.3397H21.4025Z" fill="white" stroke="#0E5F59" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={'flex items-center gap-[1em] shadow-lg px-[2em] py-[1.5em] rounded-[1em] ' + (className || '')}>
      <div>
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.625 27.625V17.875L11.375 21.125M14.625 17.875L17.875 21.125" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35.75 16.25V24.375C35.75 32.5 32.5 35.75 24.375 35.75H14.625C6.5 35.75 3.25 32.5 3.25 24.375V14.625C3.25 6.5 6.5 3.25 14.625 3.25H22.75" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35.75 16.25H29.25C24.375 16.25 22.75 14.625 22.75 9.75V3.25L35.75 16.25Z" stroke="#005F59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className='text-[#005F59] text-[2em] font-semibold'>{label}</div>
    </div>
  );

}