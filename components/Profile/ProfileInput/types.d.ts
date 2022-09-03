export type InputTypes = {
  name: string;
  label: string;
  className?: string;
  type: string;
  id: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<any>) => void;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  isTouched?: boolean | undefined;
  value?: string | undefined;
  errorMessage?: string;
  error?: boolean;
  errorMsg?: string;
  deleteInput?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  disablePassword?: boolean;
};
