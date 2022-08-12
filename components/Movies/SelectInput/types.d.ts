export interface Option {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  options: any;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}
