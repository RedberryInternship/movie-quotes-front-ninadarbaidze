import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';
import { CustomSelectProps, Option } from './types';
import { getValue } from './helper';

const SelectInput = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}: CustomSelectProps & FieldProps) => {
  const onChange = (option: Option[]) => {
    form.setFieldValue(
      field.name,
      (option as Option[]).map((item: Option) => item.value)
    );
  };
  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      borderBottom: '1px dotted gray',
      color: '#6C757D',
      padding: 10,
    }),
    control: (provided: any) => ({
      ...provided,
      background: 'none',
      borderRadius: '4px',
      borderColor: '#6C757D',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#6C757D',
      color: 'white',
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    menuList: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided: any) => ({
      ...provided,
      background: '#11101A',
    }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Select
      styles={customStyles}
      className={className}
      name={field.name}
      value={getValue(options, field)}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default SelectInput;
