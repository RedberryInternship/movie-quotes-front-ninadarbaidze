import { StylesConfig } from 'react-select';

export const getValue = (options: any[], field: { value: string }) => {
  if (options) {
    return options.filter(
      (option: { value: string }) => field.value.indexOf(option.value) >= 0
    );
  } else {
    return [];
  }
};

export const customStyles: StylesConfig<typeof Option> = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted gray',
    color: '#6C757D',
    padding: 8,
  }),
  control: (provided) => ({
    ...provided,
    background: 'none',
    borderRadius: '4px',
    borderColor: '#6C757D',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#6C757D',
    color: 'white',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  menuList: (provided) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    background: '#11101A',
    borderColor: '#6C757D',
    borderWidth: '1px',
  }),

  singleValue: (provided, state: { isDisabled: boolean }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
