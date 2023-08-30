import JobCard from "../../components/PlacementPageComponent/JobCard";
import DropdownMenu from "../../components/DropdownMenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, TextField } from "@mui/material";
import QuestionnaireTopBarStep from "./components/questionnaire-topbar-step.component";
import { useEffect, useRef, useState } from "react";
import { useLazyGetJobsFilterQuery, useLazyGetJobsSearchQuery } from "../../features/api-integration/jobs-search-slice/jobs-search.slice";
import { CommonUtilities } from "../../utils/common.utilities";
import FilterComponent from "./components/job-filter.component";
import { AppStoreStateType } from "../../store/app.store";
import { SLICE_NAMES } from "../../features/slice-names.enum";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../features/reducers/jobs/jobs.slice";
import { JobType } from "../../features/reducers/jobs/jobs.interface";
import { OptionSelected } from "../../features/reducers/job-filter/jobs-filter.interface";
function FilterSVGIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_46_6884)">
        <path d="M1.46875 3.64474H8.60562C8.82071 4.62381 9.69505 5.35884 10.7378 5.35884C11.7805 5.35884 12.6549 4.62384 12.87 3.64474H15.5312C15.7901 3.64474 16 3.43485 16 3.17599C16 2.91712 15.7901 2.70724 15.5312 2.70724H12.8697C12.6542 1.72866 11.7787 0.993164 10.7378 0.993164C9.69634 0.993164 8.82121 1.72854 8.60579 2.70724H1.46875C1.20988 2.70724 1 2.91712 1 3.17599C1 3.43485 1.20988 3.64474 1.46875 3.64474ZM9.49249 3.17722L9.49252 3.17218C9.49457 2.4876 10.0532 1.93069 10.7378 1.93069C11.4214 1.93069 11.9801 2.48684 11.983 3.17109L11.9831 3.17798C11.982 3.86373 11.4238 4.42137 10.7378 4.42137C10.0521 4.42137 9.49401 3.86429 9.49246 3.17895L9.49249 3.17722ZM15.5312 13.3561H12.8697C12.6542 12.3775 11.7787 11.642 10.7378 11.642C9.69634 11.642 8.82121 12.3774 8.60579 13.3561H1.46875C1.20988 13.3561 1 13.5659 1 13.8248C1 14.0837 1.20988 14.2936 1.46875 14.2936H8.60562C8.82071 15.2727 9.69505 16.0077 10.7378 16.0077C11.7805 16.0077 12.6549 15.2727 12.87 14.2936H15.5312C15.7901 14.2936 16 14.0837 16 13.8248C16 13.5659 15.7901 13.3561 15.5312 13.3561ZM10.7378 15.0702C10.0521 15.0702 9.49401 14.5131 9.49246 13.8278L9.49249 13.8261L9.49252 13.821C9.49457 13.1365 10.0532 12.5795 10.7378 12.5795C11.4214 12.5795 11.9801 13.1357 11.983 13.8199L11.9831 13.8268C11.9821 14.5126 11.4239 15.0702 10.7378 15.0702ZM15.5312 8.03168H8.39438C8.17929 7.05261 7.30495 6.31761 6.26222 6.31761C5.21948 6.31761 4.34515 7.05261 4.13005 8.03168H1.46875C1.20988 8.03168 1 8.24156 1 8.50043C1 8.75933 1.20988 8.96918 1.46875 8.96918H4.13028C4.34582 9.94772 5.22133 10.6833 6.26222 10.6833C7.30366 10.6833 8.17879 9.94784 8.39421 8.96918H15.5312C15.7901 8.96918 16 8.75933 16 8.50043C16 8.24156 15.7901 8.03168 15.5312 8.03168ZM7.50751 8.4992L7.50748 8.50424C7.50543 9.18882 6.94683 9.74572 6.26222 9.74572C5.57857 9.74572 5.01994 9.18958 5.01698 8.50535L5.01689 8.4985C5.01792 7.81266 5.57617 7.25511 6.26222 7.25511C6.94794 7.25511 7.50599 7.81216 7.50754 8.49753L7.50751 8.4992Z" fill="white" stroke="white" strokeWidth="0.5" />
      </g>
      <defs>
        <clipPath id="clip0_46_6884">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

function SortSVGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.71932 12.2197L5.99957 13.9395V2.25C5.99957 2.05109 5.92056 1.86032 5.7799 1.71967C5.63925 1.57902 5.44849 1.5 5.24957 1.5C5.05066 1.5 4.8599 1.57902 4.71924 1.71967C4.57859 1.86032 4.49957 2.05109 4.49957 2.25V13.9395L2.77982 12.2197C2.63837 12.0831 2.44892 12.0075 2.25227 12.0092C2.05562 12.011 1.86752 12.0898 1.72846 12.2289C1.5894 12.3679 1.51053 12.5561 1.50882 12.7527C1.50711 12.9493 1.5827 13.1388 1.71932 13.2803L4.71932 16.2803C4.86007 16.4207 5.05076 16.4995 5.24957 16.4995C5.44839 16.4995 5.63908 16.4207 5.77982 16.2803L8.77982 13.2803C8.91644 13.1388 8.99204 12.9493 8.99033 12.7527C8.98862 12.5561 8.90974 12.3679 8.77069 12.2289C8.63163 12.0898 8.44352 12.011 8.24687 12.0092C8.05023 12.0075 7.86077 12.0831 7.71932 12.2197ZM8.24957 4.5H15.7496C15.9485 4.5 16.1393 4.42098 16.2799 4.28033C16.4206 4.13968 16.4996 3.94891 16.4996 3.75C16.4996 3.55109 16.4206 3.36032 16.2799 3.21967C16.1393 3.07902 15.9485 3 15.7496 3H8.24957C8.05066 3 7.8599 3.07902 7.71924 3.21967C7.57859 3.36032 7.49957 3.55109 7.49957 3.75C7.49957 3.94891 7.57859 4.13968 7.71924 4.28033C7.8599 4.42098 8.05066 4.5 8.24957 4.5ZM15.7496 6H8.24957C8.05066 6 7.8599 6.07902 7.71924 6.21967C7.57859 6.36032 7.49957 6.55109 7.49957 6.75C7.49957 6.94891 7.57859 7.13968 7.71924 7.28033C7.8599 7.42098 8.05066 7.5 8.24957 7.5H15.7496C15.9485 7.5 16.1393 7.42098 16.2799 7.28033C16.4206 7.13968 16.4996 6.94891 16.4996 6.75C16.4996 6.55109 16.4206 6.36032 16.2799 6.21967C16.1393 6.07902 15.9485 6 15.7496 6Z" fill="white" />
      <path d="M13.5 9H8.25C8.05109 9 7.86032 9.07902 7.71967 9.21967C7.57902 9.36032 7.5 9.55109 7.5 9.75C7.5 9.94891 7.57902 10.1397 7.71967 10.2803C7.86032 10.421 8.05109 10.5 8.25 10.5H13.5C13.6989 10.5 13.8897 10.421 14.0303 10.2803C14.171 10.1397 14.25 9.94891 14.25 9.75C14.25 9.55109 14.171 9.36032 14.0303 9.21967C13.8897 9.07902 13.6989 9 13.5 9Z" fill="white" />
    </svg>
  );
}

export default function PlacementDrivePage() {
  const expandableRef = useRef<HTMLDivElement | null>(null);

  const [lazyGetSearchJobs] = useLazyGetJobsSearchQuery();
  const [lazyGetFilterJobs] = useLazyGetJobsFilterQuery();
  const jobFilterValues = useSelector((state: AppStoreStateType) => state.root[SLICE_NAMES.JOBS_FILTER]);
  const jobs = useSelector((state: AppStoreStateType) => state.root[SLICE_NAMES.JOBS]);
  const [filterKey, setFilterKey] = useState<string>(CommonUtilities.generateRandomString(10));
  const dispatch = useDispatch();
  const searchFieldRef = useRef<HTMLInputElement | null>(null);

  let once = false;

  async function searchByFilterComponent() {
    const filterProperties = {
      companyName: jobFilterValues.companyNames.filter((value: OptionSelected) => value.selected).map((value: OptionSelected) => value.option).join(','),
      jobType: jobFilterValues.jobTypes.filter((value: OptionSelected) => value.selected).map((value: OptionSelected) => value.option).join(','),
      location: jobFilterValues.locations.filter((value: OptionSelected) => value.selected).map((value: OptionSelected) => value.option).join(',')
    }

    const filterPropertiesUriEncoded = Object.entries(filterProperties).map(([key, value]: [string, string]) => [key, encodeURIComponent(value)].join('=') ).join('&');
    const { data: { list: jobsData } } = await lazyGetFilterJobs(filterPropertiesUriEncoded);

    dispatch(setJobs(jobsData));
  }

  async function searchByKeyword() {
    const searchElement = searchFieldRef.current;
    if (searchElement){
      setAllJobs(searchElement.value)
    }

  }

  async function setAllJobs(searchKeywords: string) {
    const { data: { list: fetchedJobs } } = await lazyGetSearchJobs(searchKeywords);

    console.log(fetchedJobs);

    dispatch(setJobs(fetchedJobs));
    setFilterKey(() => CommonUtilities.generateRandomString(10));
  }
  useEffect(() => {
    if (once) { return; }
    once = true;
    setAllJobs('');
  }, []);

  function toggleFilter() {
    const element = expandableRef.current;
    if (element && element?.style.height === '0px') {
      // element.style.height = element.scrollHeight + 'px';
      element.style.height = 'max-content';
      return;
    }

    if (element && element?.style.height !== '0px') {
      element.style.height = '0px';
      return
    }

  }

  return (
    <div className="flex flex-col p-[2em]  " >
      <div className="flex justify-center" >
      <QuestionnaireTopBarStep />
      </div>
      
      <div className="flex gap-[2em]">
        <Box className="text-[#0E5F59]" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
          <FilterComponent onSearchButtonClick={searchByFilterComponent} key={filterKey} className="w-[30em]" />
        </Box>
        <div className="flex-grow p-3">
          <p className="text-[1.2rem] font-semibold text-darkGreen mb-2">Search</p>
          <div className="flex gap-[2.5em] h-[4em]">
            <TextField inputRef={searchFieldRef} className="flex-grow" placeholder="Enter Keyword" size="small" />
            <Button variant="contained" onClick={searchByKeyword} >Search</Button>

            {/* Desktop View */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}><DropdownMenu variant='contained' endIcon={<KeyboardArrowDownIcon />} label="Sort" /></Box>

            {/* Mobile View */}
            <Box className='h-[100%]' sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}><Button className="h-[100%]" variant='contained' onClick={toggleFilter} ><FilterSVGIcon /></Button></Box>
            <Box className='h-[100%]' sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}><Button className="h-[100%]" variant='contained'><SortSVGIcon /></Button></Box>
          </div>

          <Box ref={expandableRef} id='expandable-element' className='w-[100%] my-[4em] relative' style={{ height: '0px', transition: '1000ms ease' }} sx={{ overflow: 'hidden', display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
            <div className="aboslute">
              <FilterComponent onSearchButtonClick={searchByFilterComponent} key={filterKey} className="w-[100%]" />
            </div>
          </Box>
          {
            jobs.map((details: JobType) => <JobCard details={details} key={CommonUtilities.generateRandomString(10)} />)
          }
        </div>
      </div>
    </div>
  );
}

