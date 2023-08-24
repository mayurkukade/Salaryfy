export type OptionSelected = { option: string, selected: boolean };

export interface JobsFilterType {
  locations: Array<OptionSelected>;
  jobTypes: Array<OptionSelected>;
  companyNames: Array<OptionSelected>;
}