import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';
import { CustomSelectProps, Option } from './types';
import { getValue, customStyles } from './helper';

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

  return (
    <div className='h-[1.5rem] mt-6'>
      <Select
        closeMenuOnSelect={false}
        styles={customStyles}
        className={className}
        name={field.name}
        value={getValue(options, field)}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
      />
    </div>
  );
};

export default SelectInput;
