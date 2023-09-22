import { useDispatch, useSelector } from "react-redux";
import { AppStoreStateType } from "../../../store/app.store";
import { useEffect } from "react";
import { setJobFilter } from "../../../features/reducers/job-filter/jobs-filter.slice";
import DropdownMenu from "../../../components/DropdownMenu";
import { OptionSelected } from "../../../features/reducers/job-filter/jobs-filter.interface";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Chip from "./chip.component";
import { CommonUtilities } from "../../../utils/common.utilities";
import { SLICE_NAMES } from "../../../features/slice-names.enum";
import { Button } from "@mui/material";
import { useLazyGetAllLocationsJobtypesCompanynamesQuery } from "../../../features/api-integration/jobs-search-slice/jobs-search.slice";
import { QuestionnaireHttpClient } from "../services/questionnaire.service";
import { concatMap, mergeMap, switchMap } from "rxjs";
import { setSelectedCity } from "../../../features/reducers/selected-city/selected-city.slice";

export default function FilterComponent({ className, onSearchButtonClick, onClearButtonClick }: { className?: string, onSearchButtonClick: () => void, onClearButtonClick: () => void }) {

  const dispatch = useDispatch();
  const jobFilterValues = useSelector((state: AppStoreStateType) => state.root[SLICE_NAMES.JOBS_FILTER]);
  const selectedCity = useSelector((state: AppStoreStateType) => state.root[SLICE_NAMES.SELECTED_CITY]);
  let once = false;
  const [getLnJtCn] = useLazyGetAllLocationsJobtypesCompanynamesQuery();
  const httpClient = new QuestionnaireHttpClient();

  useEffect(() => {
    if (once){ return; } once = true;
    
    httpClient.request(getLnJtCn({}))
      .pipe(
        concatMap(async ({ data: response }) => response as { locations: Array<string>, jobTypes: Array<string>, companyNames: Array<string> }),
        mergeMap(async (response) => Object.entries(response).map(([key, value]) => ([key, value.map((option) => ({ option, selected: selectedCity === option }))]))),
        switchMap(async (response) => Object.fromEntries(response))
      )
      .subscribe(async (response) => dispatch( setJobFilter(response) ));

  }, []);


  function onFilterOptionSelect(type: 'add' | 'remove', filterName: 'locations' | 'jobTypes' | 'companyNames', locationOption: string) {
    if (selectedCity === locationOption && type === 'remove' && filterName === 'locations') { setSelectedCity('') }
    const updatedOptions = jobFilterValues[filterName].map(value => {
      if (value.option === locationOption) return { ...value, selected: type === 'add' ? (value.option === locationOption) : !(value.option === locationOption) }
      return { ...value };
    });
    const updatedJobFilter = { ...jobFilterValues, [filterName]: updatedOptions };
    dispatch(setJobFilter(updatedJobFilter));
  }

  function clearFilterHandler() {
    onClearButtonClick();
  }

  return (
    <div className={"flex flex-col gap-[2em] px-[4em] py-[2em] pb-[3em] rounded-[2em]  app-box-shadow " + (className || '')}>
      <div className="flex flex-col gap-[1em]">
        <div className="text-[1.5em] font-semibold">Location</div>
        <DropdownMenu onOptionClick={(option: string) => onFilterOptionSelect('add', 'locations', option)} options={jobFilterValues.locations.filter((value: OptionSelected) => !value.selected).map((value: OptionSelected) => value.option)} label='Select' endIcon={<KeyboardArrowDownIcon />} />
        <div className="flex flex-wrap gap-[0.5em]">
          {
            jobFilterValues.locations
              .filter((value: OptionSelected) => value.selected)
              .map((value: OptionSelected) =>
                <Chip onClick={() => onFilterOptionSelect('remove', 'locations', value.option)} label={value.option} className="text-[1.5em]" key={CommonUtilities.generateRandomString(15)} />
              )
          }
        </div>
      </div>
      <div className="flex flex-col gap-[1em]">
        <div className="text-[1.5em] font-semibold">Job Type</div>
        <DropdownMenu label='Select' onOptionClick={(option: string) => onFilterOptionSelect('add', 'jobTypes', option)} options={jobFilterValues.jobTypes.filter((value: OptionSelected) => !value.selected).map((value: OptionSelected) => value.option)} endIcon={<KeyboardArrowDownIcon />} />
        <div className="flex flex-wrap gap-[0.5em]">
          {
            jobFilterValues.jobTypes
              .filter((value: OptionSelected) => value.selected)
              .map((value: OptionSelected) =>
                <Chip onClick={() => onFilterOptionSelect('remove', 'jobTypes', value.option)} label={value.option} className="text-[1.5em]" key={CommonUtilities.generateRandomString(15)} />
              )
          }
        </div>
      </div>
      <div className="flex flex-col gap-[1em] mb-[0.5em]">
        <div className="text-[1.5em] font-semibold">Company</div>
        <DropdownMenu label='Select' onOptionClick={(option: string) => onFilterOptionSelect('add', 'companyNames', option)} options={jobFilterValues.companyNames.filter((value: OptionSelected) => !value.selected).map((value: OptionSelected) => value.option)} endIcon={<KeyboardArrowDownIcon />} />
        <div className="flex flex-wrap gap-[0.5em]">
          {
            jobFilterValues.companyNames
              .filter((value: OptionSelected) => value.selected)
              .map((value: OptionSelected) =>
                <Chip onClick={() => onFilterOptionSelect('remove', 'companyNames', value.option)} label={value.option} className="text-[1.5em]" key={CommonUtilities.generateRandomString(15)} />
              )
          }
        </div>
        <div className="flex gap-[1em] justify-between">
          <Button variant='contained' onClick={onSearchButtonClick}>Filter Results</Button>
          <Button variant='outlined' onClick={clearFilterHandler}>Clear</Button>
        </div>
      </div>

    </div>
  );
}