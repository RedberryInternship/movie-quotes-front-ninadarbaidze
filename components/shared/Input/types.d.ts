export type InputTypes = {
  name: string;
  label: string;
  className?: string;
  type: string;
  id: string;
  placeholder: string;
  onChange: () => void;
  onBlur: () => void;
  isTouched: boolean | undefined;
  value: string;
  errorMessage: string;
  error?: boolean;
  errorMsg?: string;
  deleteInput?: boolean;
};
