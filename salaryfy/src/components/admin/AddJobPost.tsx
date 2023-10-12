import { Button, FormControl, TextField } from "@mui/material";

import React, { useState } from "react";
import {  usePostJobsMutation } from "../../features/api-integration/adminSlice/adminApiSlice";

interface JobPost {
  jobsTitle:string,
  companyName:string,
  location:string,
  logo:string,
  totalPost:number,
  highestEducation:string,
  interviewStartDate:string,
  interviewEndDate:string,
  incentives:string,
  interviewDetails:string,
  jobDetails:string,
  date:string,
  startingSalary:string,
  interviewLocations:string,
  interviewTimeSlotTo:string,
  jobType:string
}

const AddJobPost = () => {
 const [inputStatesJobPost, setinputStatesJobPost] = useState<JobPost>({
   jobsTitle: "",
   companyName: "",
   location: "",
   logo: "",
   totalPost: 0,
   highestEducation: "",
   interviewStartDate: "",
   interviewEndDate: "",
   incentives: "",
   interviewDetails: "",
   jobDetails: "",
   date: "",
   startingSalary: "",
   interviewLocations: "",
   interviewTimeSlotTo: "",
   jobType: "",
 });

 const [inputStateJobPost] = usePostJobsMutation()
 

 const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value} = e.target
setinputStatesJobPost((preVal)=>{
  return{
    ...preVal,
    [name]:value
  }
})

 }

 const submitHandler = async(e:React.MouseEvent<HTMLInputElement>)=>{
  e.preventDefault()
  const {jobDetails} = inputStatesJobPost
  try {
    
    const res = await inputStateJobPost(
      {
        postName: jobDetails,
        companyName: "Justdial",
        location: "Bhopal",
        logo: "Justdial",
        noOfPosts: 15,
        interviewStartDate: "2023-10-20",
        interviewEndDate: "2023-10-30",
        essentialRequirements: "Bachelor's degree in Computer Science",
        incentives: "Healthcare, 401(k), Flexible hours...",
        interviewDetails: "Freshers/Experience (Selling/Customer Acquisition Skills), communication skills",
        jobDetails: null,
        date: "2023-10-18",
        startingSalary: "17605-22000",
        jobFairSetNo: 7,
        status: true,
        interviewLocation: ["[location1", "location2]"],
        interviewTimeSlot1Min: "10:00",
        interviewTimeSlot1Max: "15:00",
        interviewTimeSlot2Min: null,
        interviewTimeSlot2Max: null,
        jobType: "On-Site",
        user_Id: 1
      }
      
    ) 
    console.log(res)
  } catch (error) {
    console.log(error)
  }

 }






  return (
    <div>
      <div className=" flex  justify-center mb-5 ">
        <FormControl className="w-[100%]   space-y-2" sx={{ m: 1 }}>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
             
              id="outlined-basic"
              label="Jobs Title"
              variant="outlined"
              className="w-[50%]"
              autoComplete="off"
              name="jobsTitle"
              onChange={onChangeHandler}
              value={inputStatesJobPost.jobsTitle}
              
            />
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              className="w-[50%]"
              autoComplete="off"
              name="companyName"
              onChange={onChangeHandler}
              value={inputStatesJobPost.companyName}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              className="w-[50%]"
              autoComplete="off"
              name="location"
              value={inputStatesJobPost.location}
              onChange={onChangeHandler}
            />
            <TextField
              id="outlined-basic"
              label="Logo"
              variant="outlined"
              className="w-[50%]"
              autoComplete="off"
              name="logo"
              onChange={onChangeHandler}
              value={inputStatesJobPost.logo}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Total Post"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="totalPost"
              onChange={onChangeHandler}
              value={inputStatesJobPost.totalPost}
              type="number"
            />
            <TextField
              id="outlined-basic"
              label="Highest Education Require"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="highestEducation"
              onChange={onChangeHandler}
              value={inputStatesJobPost.highestEducation}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Interview Start Date"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewStartDate"
              onChange={onChangeHandler}
              value={inputStatesJobPost.interviewStartDate}
            />
            <TextField
              id="outlined-basic"
              label="Interview End Date"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewEndDate"
              onChange={onChangeHandler}
              value={inputStatesJobPost.interviewEndDate}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Incentives"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="incentives"
              onChange={onChangeHandler}
              value={inputStatesJobPost.incentives}
            />
            <TextField
              id="outlined-basic"
              label="Interview Details"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewDetails"
              onChange={onChangeHandler}
              value={inputStatesJobPost.interviewDetails}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Job Details"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="jobDetails"
              onChange={onChangeHandler}
              value={inputStatesJobPost.jobDetails}
            />
            <TextField
              id="outlined-basic"
              label="Date"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="date"
              onChange={onChangeHandler}
              value={inputStatesJobPost.date}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Starting Salary"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="startingSalary"
              onChange={onChangeHandler}
              value={inputStatesJobPost.startingSalary}
            />
            <TextField
              id="outlined-basic"
              label="Interview Locations"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewLocations"
              onChange={onChangeHandler}
              value={inputStatesJobPost.interviewLocations}
            />
          </div>
          <div className="space-x-3 flex p-3 justify-around">
            <TextField
              id="outlined-basic"
              label="Interview Time Slot From"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewSlotTimeFrom"
              onChange={onChangeHandler}
            />
            <TextField
              id="outlined-basic"
              label="Interview Time Slot To"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewTimeSlotTo"
              onChange={onChangeHandler}

            />
            <TextField
              id="outlined-basic"
              label="Job Type"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="jobType"
              onChange={onChangeHandler}
            />
          </div>
        </FormControl>
      </div>
      <div className="flex justify-center " onClick={submitHandler}>
        <Button variant="contained" >Save</Button>
      </div>
    </div>
  );
};

export default AddJobPost;
