import { ReactNode } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const FormField = ({ id, selectedDate, selectedLocation, selectedTime, handleFieldChange, handleDateChange, addFormField } : any) => {
  const handleLocationChange = (event: SelectChangeEvent<string>, _child: ReactNode) => {
    handleFieldChange(id, "selectedLocation", event.target.value);
  };

  const handleTimeChange = (time: Date | null) => {
    handleFieldChange(id, "selectedTime", time);
  };

 
  return (
    <>
    <div className=" gap-2 bg-[#0E5F5910] p-[1.5em] rounded-[1.5em] flex mb-[2em] flex-col md:flex-row ">
      <FormControl className="w-[18rem] rounded-md bg-white text-black">
        <InputLabel id={`location-label-${id}`} className="text-black">Select Location</InputLabel>
        <Select
          labelId={`location-label-${id}`}
          id={`location-${id}`}
        
     
          onChange={handleLocationChange}
          value={selectedLocation}
        >
          <MenuItem value={"Pune"}>Pune</MenuItem>
          <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
        </Select>
      </FormControl>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(id, date)}
        dateFormat="dd/MM/yyyy"
        className="border-2 w-[18rem] h-[3.5rem] rounded-md"
      />
      <DatePicker
        selected={selectedTime}
        onChange={handleTimeChange}
        className="border-2 w-[18rem] h-[3.5rem] rounded-md"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
      />
      <button onClick={addFormField}>
      <div className="flex justify-center">
                <Button sx={{ backgroundColor: '#FECD08', color: '#0E5F59' }} variant='contained'><span className='font-bold'>Add</span></Button>
              </div>

      </button>
     
    </div>
  
   </>
  );
};

export default FormField;
