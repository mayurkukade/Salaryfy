
import JobCard from "../../components/PlacementPageComponent/JobCard";
import DropdownMenu from "../../components/DropdownMenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Chip from "./components/chip.component";
import { TextField } from "@mui/material";

const PlacementDrivePage = () => {
  return (
    <div className="flex gap-[2em] p-[2em]">
      <div className="text-[#0E5F59]">
        <div className="flex flex-col gap-[2em] px-[4em] py-[2em] pb-[3em] rounded-[2em] w-[30em] app-box-shadow">
          <div className="flex flex-col gap-[1em]">
            <div className="text-[1.5em] font-semibold">Location</div>
            <DropdownMenu label='Select' endIcon={<KeyboardArrowDownIcon />} />
            <div className="flex flex-wrap gap-[0.5em]">
              <Chip className="text-[1.5em]" label='Delhi' />
              <Chip className="text-[1.5em]" label='Lahore' />
            </div>
          </div>
          <div className="flex flex-col gap-[1em]">
            <div className="text-[1.5em] font-semibold">Job Type</div>
            <DropdownMenu label='Select' endIcon={<KeyboardArrowDownIcon />} />
            <div className="flex flex-wrap gap-[0.5em]">
              <Chip className="text-[1.5em]" label='on-site' />
            </div>
          </div>
          <div className="flex flex-col gap-[1em] mb-[0.5em]">
            <div className="text-[1.5em] font-semibold">Company</div>
            <DropdownMenu label='Select' endIcon={<KeyboardArrowDownIcon />} />
            <div className="flex flex-wrap gap-[0.5em]">
              <Chip className="text-[1.5em]" label='Tesla' />
            </div>
          </div>

        </div>
      </div>
      <div className="flex-grow p-3 ">
        <p className="text-[1.2rem] font-semibold text-darkGreen mb-2">
          Search
        </p>
        <div className="flex gap-[2.5em]">
          <TextField className="flex-grow" placeholder="Enter Keyword" size="small" />
          <DropdownMenu variant='contained' endIcon={<KeyboardArrowDownIcon />} label="Sort" />
        </div>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default PlacementDrivePage;
//
