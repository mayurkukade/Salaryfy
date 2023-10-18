import { Button, FormControl, TextField } from "@mui/material";

import React, { useState } from "react";

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
 const [inputStateJobPost, setinputStateJobPost] = useState<JobPost>({
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

 const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value} = e.target
setinputStateJobPost((preVal)=>{
  return{
    ...preVal,
    [name]:value
  }
})

 }

 const submitHandler = (e:React.MouseEvent<HTMLInputElement>)=>{
  e.preventDefault()
  //console.log(inputStateJobPost)
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
              value={inputStateJobPost.jobsTitle}
              
            />
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              className="w-[50%]"
              autoComplete="off"
              name="companyName"
              onChange={onChangeHandler}
              value={inputStateJobPost.companyName}
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
              value={inputStateJobPost.location}
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
              value={inputStateJobPost.logo}
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
              value={inputStateJobPost.totalPost}
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
              value={inputStateJobPost.highestEducation}
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
              value={inputStateJobPost.interviewStartDate}
            />
            <TextField
              id="outlined-basic"
              label="Interview End Date"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewEndDate"
              onChange={onChangeHandler}
              value={inputStateJobPost.interviewEndDate}
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
              value={inputStateJobPost.incentives}
            />
            <TextField
              id="outlined-basic"
              label="Interview Details"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewDetails"
              onChange={onChangeHandler}
              value={inputStateJobPost.interviewDetails}
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
              value={inputStateJobPost.jobDetails}
            />
            <TextField
              id="outlined-basic"
              label="Date"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="date"
              onChange={onChangeHandler}
              value={inputStateJobPost.date}
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
              value={inputStateJobPost.startingSalary}
            />
            <TextField
              id="outlined-basic"
              label="Interview Locations"
              variant="outlined"
              autoComplete="off"
              className="w-[50%]"
              name="interviewLocations"
              onChange={onChangeHandler}
              value={inputStateJobPost.interviewLocations}
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
