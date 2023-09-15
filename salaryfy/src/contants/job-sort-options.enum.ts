enum SORT_OPTIONS {
  INTERVIEW_START_DATE = 'InterviewStartDate',
  COMPANY_NAME = 'companyName',
  JOB_TYPE = 'jobType',
  LOCATION = 'location',
}

const SortOptions = {
  INTERVIEW_START_DATE: { label: 'Interview Start Date', value: SORT_OPTIONS.INTERVIEW_START_DATE, selected: false },
  COMPANY_NAME: { label: 'Company Name', value: SORT_OPTIONS.COMPANY_NAME, selected: true },
  JOB_TYPE: { label: 'Job Type', value: SORT_OPTIONS.JOB_TYPE, selected: false },
  LOCATION: { label: 'Location', value: SORT_OPTIONS.LOCATION, selected: false },
}

export { SORT_OPTIONS, SortOptions }