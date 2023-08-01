import lenscartlogo from "../../../assets/Logos/lenskartlogo.png";
const JobCard = () => {
  return (
    <div className="p-[2em] app-box-shadow container mx-auto mt-8 w-full rounded-[2em]" style={{background: "linear-gradient(96deg, rgba(254, 205, 8, 0.01) 0%, rgba(0, 95, 89, 0.04) 100%)"}}>
      <div className="flex gap-[2em]">
        <div className="rounded-[1em] p-[1em] flex items-center justify-center h-[7em] w-[7em] bg-gradient-to-br from-[#F1FAFB] to-[#D7E8F0]"><img src={lenscartlogo} /></div>
        <div className="flex-grow flex-row">
          <div className="text-[#005F59] text-[2em] font-semibold">Sales Associates(Frontend Sales)</div>
          <div className="text-[#5B5B5B] text-[2em] font-semibold">Lenskart</div>
        </div>
        <div className="">
          <div className="flex p-2 align-text-top rounded-xl" style={{ border: "1px solid red" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" fill="#FECD08" />
              <path d="M3.11411 15H12.883C13.9071 15 14.7393 14.1678 14.7393 13.1437V3.89332C14.7393 2.86925 13.9071 2.03702 12.883 2.03702H12.1467V1.51851C12.1467 1.23332 11.9134 1 11.6282 1C11.343 1 11.1097 1.23332 11.1097 1.51851V2.03702H4.88746V1.51851C4.88746 1.23332 4.6541 1 4.36891 1C4.08372 1 3.8504 1.23332 3.8504 1.51851V2.03702H3.11411C2.09004 2.03702 1.25781 2.86925 1.25781 3.89332V13.1437C1.25781 14.1678 2.09004 15 3.11411 15ZM2.29487 3.89332C2.29487 3.44222 2.66302 3.07408 3.11411 3.07408H3.8504V3.59259C3.8504 3.87778 4.08372 4.1111 4.36891 4.1111C4.6541 4.1111 4.88742 3.87778 4.88742 3.59259V3.07408H11.1097V3.59259C11.1097 3.87778 11.343 4.1111 11.6282 4.1111C11.9134 4.1111 12.1467 3.87778 12.1467 3.59259V3.07408H12.883C13.3341 3.07408 13.7022 3.44222 13.7022 3.89332V5.40741H2.29487V3.89332ZM2.29487 6.44443H13.7023V13.1437C13.7023 13.5948 13.3341 13.9629 12.883 13.9629H3.11411C2.66302 13.9629 2.29487 13.5948 2.29487 13.1437V6.44443Z" fill="#0E5F59" stroke="#0E5F59" stroke-width="0.3" />
            </svg>
           <span>Interview on:03 May 2023</span> 
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p>
            Location:
            <span className="text-darkGreen font-semibold">Banglore</span>
          </p>
          <div className="flex  ">
            <div className="flex">
              <p>
                Job Type: <span className="text-darkGreen">On-site |</span>
              </p>

              <p>
                No of Posts: <span className="text-darkGreen">38</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex  ">
          <div className="flex bg-yellow text-darkGreen ml-3 w-auto h-[43px] rounded-md p-5  justify-center items-center relative ">
            <button className="  text-[20.247px] font-medium ">Details</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="19"
              viewBox="0 0 33 19"
              fill="none"
              className="align-middle ml-3 mt-1 "
            >
              <path
                d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z"
                fill="#005F59"
              />
            </svg>
          </div>
          <div className="flex bg-yellow text-darkGreen ml-3 p-5 w-auto h-[43px] rounded-md  justify-center items-center relative  ">
            <button className="  text-[20.247px] font-medium ">
              Get Hired
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="19"
              viewBox="0 0 33 19"
              fill="none"
              className="align-middle ml-3 mt-1 "
            >
              <path
                d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z"
                fill="#005F59"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

{
  /* <div className="flex justify-end content-end ml-[rem]">
<div className="flex bg-yellow text-darkGreen ml-3 w-auto h-[43px] rounded-md p-5  justify-center items-center relative ">
  <button className="  text-[20.247px] font-medium ">Details</button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="19"
    viewBox="0 0 33 19"
    fill="none"
    className="align-middle ml-3 mt-1 "
  >
    <path
      d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z"
      fill="#005F59"
    />
  </svg>
</div>
<div className="flex bg-yellow text-darkGreen ml-3 p-5 w-auto h-[43px] rounded-md  justify-center items-center relative  ">
  <button className="  text-[20.247px] font-medium ">Get Hired</button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="19"
    viewBox="0 0 33 19"
    fill="none"
    className="align-middle ml-3 mt-1 "
  >
    <path
      d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z"
      fill="#005F59"
    />
  </svg>
</div>
</div> */
}
