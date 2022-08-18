export interface Option {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  options: Option[];
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}
