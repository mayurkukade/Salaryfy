/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";

import UserJobDetails from "../components/job-details.component";

import SubSteps from "../components/sub-steps.component";

import { Button, Checkbox, MenuList } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreStateType, RootState } from "../../../store/app.store";
import { SLICE_NAMES } from "../../../features/slice-names.enum";
import {
  useDeleteInterviewScheduleMutation,
  useGetInterviewScheduleQuery,
  useInterviewScheduleApiMutation,
} from "../../../features/api-integration/interview-schedule/interview-schedule-slice";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { Link } from "react-router-dom";
import { closeModel } from "../../../features/reducers/schedule-interview-form/schedule-interview.slice";
import { JSX } from "react/jsx-runtime";
import { toast } from "react-toastify";
import { useGetJobByIdQuery } from "../../../features/api-integration/jobs-search-slice/jobs-search.slice";

export default function ScheduleInterviewPage() {
  return (
    <div className="w-100 flex flex-col items-center h-[100%]">
      <div className="max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]">
        <div className="text-[1.4em]">Job Details</div>
        <UserJobDetails />
        {/* STEPS */}
        <div className="py-[2em] px-[3em] h-[100%]">
          <SubSteps />
          <ScheduleInterview />
        </div>
      </div>
    </div>
  );
}

export function ScheduleInterview() {
  const [checked, setChecked] = useState(false);
  const [location, setLocation] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

  const isOpenselector = useSelector(
    (state: RootState) => state.scheduleInterviewForm.isOpen
  );
  console.log(isOpenselector);

  const userId = useSelector((state: RootState) => state.authSlice.userId);
  console.log(userId);
  const jobDetails = useSelector(
    (state: AppStoreStateType) => state.root[SLICE_NAMES.JOB_DETAILS]
  );
  console.log(jobDetails);
  console.log(selectedDate);
  const selectInterviewData = useSelector(
    (state: AppStoreStateType) => state.root[SLICE_NAMES.JOB_DETAILS]
  );
  console.log(selectInterviewData.interviewEndDate);
  const [interviewScheduleApi] = useInterviewScheduleApiMutation();
  const jobIdFormLocal: string = localStorage.getItem("jobId");
  const jobId: number = Number(jobIdFormLocal);
  console.log(jobId);
  const { data, isLoading, isError } = useGetInterviewScheduleQuery({
    userId,
    jobId,
  });

  

  const {data:getJobDetails,isLoading:isLoadingGetDetails,isError:isErrorGetDetails,isSuccess} = useGetJobByIdQuery(jobId)
  console.log(getJobDetails?.object.companyName,'getJobDetails')

  let getJobDetailsData 
  if(isSuccess){
    getJobDetailsData = getJobDetails?.object
  }else if(isLoadingGetDetails){
    getJobDetailsData = <p>isLoading</p>
  }else if(isErrorGetDetails){
    getJobDetailsData = <p>Error</p>
  }
 
  
console.log(getJobDetailsData)
  console.log(isError);
  const [deleteInterviewSchedule] = useDeleteInterviewScheduleMutation();

  console.log(data,'data');
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const handleDelete = async (interviewScheduleId: number) => {
    console.log(interviewScheduleId);
    try {
      console.log(interviewScheduleId);
      await deleteInterviewSchedule(interviewScheduleId);
    } catch (error) {
      console.error("Error deleting interview schedule:", error);
    }
  };

  //  slot details function
  const getDetailsModule = data?.list.map(
    (
      schedule: {
        interviewDate: React.ReactNode;
        location:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal;
        date:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal;
        time:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal;
      },
      i: React.Key
    ) => {
      console.log(schedule);
      let content:
        | string
        | number
        | boolean
        | JSX.Element
        | Iterable<React.ReactNode>;
      if (isLoading) {
        content = <p>Loading...</p>;
      } else if (isError) {
        return;
      } else if (data) {
        content = (
          <div className="mr-[0.5em] text-[0.7rem] md:text-[1rem] " key={i}>
            {schedule.location}, {schedule.interviewDate}, {schedule.time}
          </div>
        );
      }

      return (
        <>
          <div className="flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em] items-center">
            <div style={{ whiteSpace: "nowrap" }}>Slot-{i + 1}</div>
            <div className="mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]"></div>

            {content}
            <button onClick={() => handleDelete(schedule.interviewScheduleId)}>
            <CancelIcon sx={{ color: "red" }} />
          </button> 
          </div>
        </>
      );
    }
  );

  const getDetails = data?.list.map(
    (
      schedule: {
        interviewScheduleId: number;
        location:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal;
        date:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal;
        time:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal;
      },
      i: React.Key
    ) => {
      console.log(schedule.date);
      let content:
        | string
        | number
        | boolean
        | JSX.Element
        | Iterable<React.ReactNode>;
      if (isLoading) {
        content = <p>Loading...</p>;
      } else if (isError) {
        return;
      } else if (data) {
        content = (
          <div className="mr-[0.5em] text-[0.7rem] md:text-[1rem] " key={i}>
            {schedule.location}, {schedule.date}, {schedule.time}
          </div>
        );
      }

      return (
        <>
          <div className="flex font-semibold p-[0.5em] bg-[#E2F3F4] text-[#0E5F59] rounded-md text-[1.5em] w-[fit-content] mb-[1.5em] items-center">
            <div style={{ whiteSpace: "nowrap" }}>Slot-{i + 1}</div>
            <div className="mx-[1em] flex-grow w-[1px] bg-[#0E5F594E]"></div>

            {content}
            <button onClick={() => handleDelete(schedule.interviewScheduleId)}>
              <CancelIcon sx={{ color: "red" }} />
            </button>
          </div>
        </>
      );
    }
  );

  console.log(userId);
  const handleHourChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedHour(event.target.value);
  };

  const handleChangeLocation = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

const locationStringArray = getJobDetailsData.interviewLocation.split(',')


console.log(getJobDetailsData,'datajobdetails')

  const AddSubmitHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(selectedHour);

    // const dateFormat =
    //   selectedDate != null ? selectedDate.toISOString().split("T")[0] : "";

    const currentDate = new Date();
    const Currentyear = currentDate.getFullYear();
    const Currentmonth = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's zero-based
    const Currentday = String(currentDate.getDate()).padStart(2, "0");

    if(currentDate >= selectedDate){
     return toast.error('you cant select previous date from current date', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    
    const CurrentformattedDate = `${Currentyear}-${Currentmonth}-${Currentday}`;

    const hourFormat = `${selectedHour}:00`;
    console.log(hourFormat);

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's zero-based
    const day = String(selectedDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    
    try {
      const formDetails = {
        location: location,
        interviewDate: formattedDate,
        time: hourFormat,
        date: CurrentformattedDate,
        userId: userId,
        jobId: jobId,
        status: "Scheduled",
      };
      const res = await interviewScheduleApi(formDetails).unwrap();

      console.log(res);

      setLocation("");
      setSelectedHour("");

      setSelectedDate(null);

      setChecked(false);
    } catch (error) {
      console.log(error.data.message);
      toast.error(error.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

const interviewSlotMin = getJobDetailsData.interviewTimeSlot1Min
const interviewSlotMinNumber = Number(interviewSlotMin)
console.log(interviewSlotMinNumber)
const interviewSlotMax = getJobDetailsData.interviewTimeSlot1Max 
const interviewSlotMaxNumber = Number(interviewSlotMax)

  return (
    <div className="h-[100%] ">
      <p className="font-normal leading-[23px] text-[15px] mb-[1em]">
        You can select multiple locations with date and time
      </p>

      <div className="bg-[#0E5F5910]  p-[1.5em] rounded-[1.5em] flex  mb-[2em] flex-col md:flex-row ">
        <div className="flex flex-col mr-[2em]">
          <div className="text-[1.6em] text-[#5B5B5B] mb-[1em]">
            <p className="font-normal leading-[23px] text-[15px] mb-[0.1em]">
              Please confirm your location for interview{" "}
            </p>
          </div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="location">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="location"
                value={location}
                label="Location"
                onChange={handleChangeLocation}
                className="font-[500]"
                sx={{
                  backgroundColor: "white",
                  fontSize: "1rem",
                }}
              >
             {locationStringArray.map((location:any, index:number):any => (
    <MenuItem key={index} value={location}>
    {location}
  </MenuItem>
  ))}
                
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="text-[1.6em] text-[#5B5B5B] mb-[1em]">
            <p className="font-normal leading-[23px] text-[15px] mb-[0.1em]">
              {" "}
              Please confirm your location for interview{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[2em]">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className="border-2 w-[18rem] h-[3.5rem] rounded-md p-2 text-[1rem] font-[400]"
              placeholderText={"Please select a date"}
            />
            <div className="flex flex-col sm:flex-row gap-[2em] ">
              <div className="flex">
                <FormControl fullWidth>
                  <InputLabel id="hour-label">Hour</InputLabel>
                  <Select
                    labelId="hour-label"
                    value={selectedHour}
                    label="Hour"
                    onChange={handleHourChange}
                    className="w-[6rem] bg-[white] h-[3.4rem] font-[500]"
                  >
                    {Array.from({ length: interviewSlotMaxNumber-2 }, (_, i) => {
                      // Generate time in half-hour increments from 9:00 to 21:00
                      const hour = Math.floor(i / 2) + interviewSlotMinNumber;
                      const minute = i % 2 === 0 ? "00" : "30";
                      const time = `${hour}:${minute}`;
                      return (
                        <MenuItem key={time} value={time}>
                          <p className="text-[1rem]"></p> {time}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {/* <div className="mx-[1em] text-[1.5em] flex items-center">:</div> */}
                {/* <FormControl fullWidth>
                  <InputLabel id="minute-label">Minute</InputLabel>
                  <Select
                    labelId="minute-label"
                    value={selectedMinute}
                    label="Minute"
                    onChange={handleMinuteChange}
                    className="w-[6rem] bg-[white] h-[3.4rem]"
                  >
                    {[0, 15, 30, 45].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value == 0 ? "00" : value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
              </div>
              <div className="flex justify-center h-[3.3rem]">
                <Button
                  sx={{ backgroundColor: "#FECD08", color: "#0E5F59" }}
                  variant="contained"
                  onClick={AddSubmitHandler}
                >
                  <span className="text-[18px] leading-[27px] font-semibold mr-[0.5em] ">
                    Add
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getDetailsModule}

      {/* This is whatsapp Checkbox Code */}
      <div className="flex items-center text-[1.6em] text-[#5B5B5B]">
        <div>
          <Checkbox checked={checked} onChange={handleChange} />
        </div>
        <div>
          <p className="text-[15px] font-Lexend font-normal leading-[23px]">
            I want to get the job description on my
          </p>{" "}
        </div>
        <div className="mx-[0.5em]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_205_11107)">
              <path
                d="M9.00225 0H8.99775C4.03538 0 0 4.0365 0 9C0 10.9688 0.6345 12.7935 1.71337 14.2751L0.59175 17.6186L4.05113 16.5128C5.47425 17.4555 7.17188 18 9.00225 18C13.9646 18 18 13.9624 18 9C18 4.03763 13.9646 0 9.00225 0Z"
                fill="#4CAF50"
              />
              <path
                d="M14.2416 12.708C14.0244 13.3211 13.1627 13.8296 12.4753 13.9781C12.0051 14.0782 11.3908 14.1581 9.32306 13.3009C6.67819 12.2051 4.97494 9.51748 4.84219 9.34311C4.71506 9.16873 3.77344 7.91998 3.77344 6.62848C3.77344 5.33698 4.42931 4.70811 4.69369 4.43811C4.91081 4.21648 5.26969 4.11523 5.61394 4.11523C5.72531 4.11523 5.82544 4.12086 5.91544 4.12536C6.17981 4.13661 6.31256 4.15236 6.48694 4.56973C6.70406 5.09286 7.23281 6.38436 7.29581 6.51711C7.35994 6.64986 7.42406 6.82986 7.33406 7.00423C7.24969 7.18423 7.17544 7.26411 7.04269 7.41711C6.90994 7.57011 6.78394 7.68711 6.65119 7.85136C6.52969 7.99423 6.39244 8.14723 6.54544 8.41161C6.69844 8.67036 7.22719 9.53323 8.00569 10.2262C9.01031 11.1206 9.82481 11.4064 10.1162 11.5279C10.3333 11.6179 10.5921 11.5965 10.7507 11.4277C10.9521 11.2106 11.2007 10.8506 11.4538 10.4962C11.6338 10.242 11.8611 10.2105 12.0996 10.3005C12.3426 10.3849 13.6284 11.0205 13.8928 11.1521C14.1572 11.2849 14.3316 11.3479 14.3957 11.4592C14.4587 11.5706 14.4587 12.0937 14.2416 12.708Z"
                fill="#FAFAFA"
              />
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
      <Modal getDetails={getDetailsModule} getJobDetailsData={getJobDetailsData} />
    </div>
  );
}

const Modal = ({ getDetails,getJobDetailsData }) => {
  const jobDetails = useSelector(
    (state: AppStoreStateType) => state.root[SLICE_NAMES.JOB_DETAILS]
  );
  console.log(jobDetails);
  const openModelSelector = useSelector(
    (state: RootState) => state.scheduleInterviewForm.isOpen
  );
  console.log(openModelSelector);
  const dispatch = useDispatch();

  const handleCLose = () => {
    dispatch(closeModel());
  };

  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={openModelSelector}
        onClose={handleCLose}
        aria-labelledby="responsive-dialog-title"
        style={{ border: "2px solid black" }}
      >
        <DialogContent className="w-full md:w-full h-[44.5rem] rounded-3xl bg-white shadow-md text-black">
          <DialogContentText>
            <div>
              <div>
                {/* ... Your content ... */}
                <svg
                  className="max-w-full h-auto" // Add responsive classes
                  xmlns="http://www.w3.org/2000/svg"
                  width="809"
                  height="65"
                  viewBox="0 0 809 65"
                  fill="none"
                >
                  <path
                    d="M0 13C0 5.8203 5.8203 0 13 0H796C803.18 0 809 5.8203 809 13V51.4729C809 59.222 802.264 65.2503 794.562 64.3932L409.255 21.5117C408.307 21.4062 407.351 21.4053 406.403 21.5091L14.4147 64.422C6.72095 65.2642 0 59.2389 0 51.4992V13Z"
                    fill="#D7E8F0"
                  />
                </svg>

                <h2 className=" text-center text-[1rem] md:text-[1.375rem] font-[600] mt-10 font-Inter ">
                  Your interview for
                </h2>
                <div className=" flex justify-center items-center py-3">
                  <img
                    src={getJobDetailsData.logo}
                    className=" w-[4.625rem] h[4.625rem]"
                  />
                </div>
                <div className="text-[1rem] md:text-[1.375rem] font-[600] text-center font-Inter">
                  <h2 className="">
                    has been successfully scheduled on following{" "}
                  </h2>
                </div>

                <div className="flex justify-center pt-5">
                  <div
                    className="flex flex-col justify-center items-center w-[max-content] text-[0.8rem] md:text-[1em]   "
                    style={{ minHeight: "30vh" }}
                  >
                    {getDetails}
                  </div>
                </div>
                <div className="flex justify-center">
                  <hr className="w-[42.5625rem] h-[0.0625rem] " />
                </div>
                <div className=" flex justify-center ">
                  <Link
                    to="/questionnaire/fresher-dashboard"
                    type="submit"
                    className="mt-8 w-[16.4375rem] h-[3.375rem] font-medium  bg-yellow text-darkGreen rounded-[0.81694rem] flex text-[1.26544rem] justify-center items-center "
                  >
                    Go to dashboard
                    <svg
                      className="ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="20"
                      viewBox="0 0 33 20"
                      fill="none"
                    >
                      <path
                        d="M31.8711 10.8711C32.3522 10.39 32.3522 9.61 31.8711 9.12891L24.0312 1.28906C23.5502 0.807964 22.7701 0.807964 22.2891 1.28906C21.808 1.77015 21.808 2.55015 22.2891 3.03125L29.2578 10L22.2891 16.9688C21.808 17.4498 21.808 18.2299 22.2891 18.7109C22.7701 19.192 23.5502 19.192 24.0312 18.7109L31.8711 10.8711ZM0 11.2319H31V8.76809H0V11.2319Z"
                        fill="#005F59"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="text-[1.26544rem] flex justify-center mt-4  text-darkGreen font-medium   ">
                  <Link to={"/placementdrive"} className="border-b border-darkGreen">
                    {" "}
                    View more jobs
                  </Link>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};