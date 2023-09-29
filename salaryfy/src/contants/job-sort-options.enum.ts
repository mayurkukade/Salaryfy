enum SORT_OPTIONS {
  INTERVIEW_START_DATE = 'InterviewStartDate',
  COMPANY_NAME = 'companyName',
  JOB_TYPE = 'jobType',
  LOCATION = 'location',
  SORT = 'sort'
}

const SortOptions = {
  INTERVIEW_START_DATE: { label: 'Interview Start Date', value: SORT_OPTIONS.INTERVIEW_START_DATE, selected: false },
  COMPANY_NAME: { label: 'Company Name', value: SORT_OPTIONS.COMPANY_NAME, selected: false },
  JOB_TYPE: { label: 'Job Type', value: SORT_OPTIONS.JOB_TYPE, selected: false },
  LOCATION: { label: 'Location', value: SORT_OPTIONS.LOCATION, selected: false },
  SORT: { label: 'Sort By', value: SORT_OPTIONS.LOCATION, selected: true },
}

export { SORT_OPTIONS, SortOptions }