export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Delhi', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Gurugram', color: '#0052CC' },
  { value: 'purple', label: 'Mumbai', color: '#5243AA' },
  { value: 'red', label: 'Pune', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Nashik', color: '#FF8B00' },
  { value: 'yellow', label: 'Chennai', color: '#FFC400' },
  { value: 'green', label: 'Thane', color: '#36B37E' },
  { value: 'forest', label: 'Surat', color: '#00875A' },
  { value: 'slate', label: 'Kolkata', color: '#253858' },
  { value: 'silver', label: 'Indore', color: '#666666' },
];




