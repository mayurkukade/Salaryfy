import { Button } from "@mui/material";
import lenscartlogo from "../../../assets/Logos/lenskartlogo.png";
const JobCard = () => {
  return (
    <div className="p-[2em] app-box-shadow mx-auto mt-8 w-full rounded-[2em]" style={{ background: "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)" }}>
      <div className="flex gap-[2em] mb-[1em] flex-col md:flex-row">
        <div className="flex flex-row flex-grow gap-[2em]">
          <div className="rounded-[1em] p-[1em] flex items-center justify-center h-[7em] w-[7em] bg-gradient-to-br from-[#F1FAFB] to-[#D7E8F0]"><img src={lenscartlogo} /></div>
          <div className="flex-grow flex-row">
            <div className="text-[#005F59] text-[2em] font-semibold">Sales Associates(Frontend Sales)</div>
            <div className="text-[#5B5B5B] text-[2em] font-semibold">Lenskart</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[max-content] h-[max-content] flex gap-[1em] items-center px-[1em] py-[0.25em] border border-solid border-[red] rounded-[1.5em]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: "translateY(-1px)" }} xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6654 3.33203H11.9987V1.9987C11.9987 1.82189 11.9285 1.65232 11.8034 1.52729C11.6784 1.40227 11.5088 1.33203 11.332 1.33203C11.1552 1.33203 10.9857 1.40227 10.8606 1.52729C10.7356 1.65232 10.6654 1.82189 10.6654 1.9987V3.33203H5.33203V1.9987C5.33203 1.82189 5.26179 1.65232 5.13677 1.52729C5.01174 1.40227 4.84218 1.33203 4.66536 1.33203C4.48855 1.33203 4.31898 1.40227 4.19396 1.52729C4.06894 1.65232 3.9987 1.82189 3.9987 1.9987V3.33203H3.33203C2.8016 3.33203 2.29289 3.54274 1.91782 3.91782C1.54274 4.29289 1.33203 4.8016 1.33203 5.33203V5.9987H14.6654V5.33203C14.6654 4.8016 14.4546 4.29289 14.0796 3.91782C13.7045 3.54274 13.1958 3.33203 12.6654 3.33203ZM1.33203 12.6654C1.33203 13.1958 1.54274 13.7045 1.91782 14.0796C2.29289 14.4546 2.8016 14.6654 3.33203 14.6654H12.6654C13.1958 14.6654 13.7045 14.4546 14.0796 14.0796C14.4546 13.7045 14.6654 13.1958 14.6654 12.6654V7.33203H1.33203V12.6654Z" fill="#EA4335" />
            </svg>
            <span className="text-[#EA4335] text-[1.3em] font-medium">Interview on: 03 May 2023</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-[1em]">
        <div className="text-[1.6em]">
          <div className="flex gap-[0.5em]">
            <span className="text-[#5B5B5B]">Location:</span>
            <span className="text-[#0E5F59]">Banglore</span>
          </div>
          <div className="flex  ">
            <div className="flex gap-[0.5em]">
              <div>
                <span className="text-[#5B5B5B]">Job Type: </span>
                <span className="text-darkGreen">On-site</span>
              </div>
              <div className="text-[#0E5F594C]">|</div>
              <div>
                <span className="text-[#5B5B5B]">No of Posts: </span>
                <span className="text-darkGreen">38</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[2em] ">
          <Button variant="outlined" endIcon={<SideArrow />}><span className="text-[1.25em]" >Details</span></Button>
          <Button variant="contained" color="secondary" endIcon={<SideArrow />}><span className="text-[1.25em] text-[#0E5F59]" >Get Hired</span></Button>
        </div>
      </div>
    </div>
  );
};

function SideArrow() {
  return <svg width="33" height="19" viewBox="0 0 33 19" fill="none"><path d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z" fill="#005F59" /></svg>
}

export default JobCard;
