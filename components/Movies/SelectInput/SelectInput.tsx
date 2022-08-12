import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';
import { CustomSelectProps, Option } from './types';
import { getValue } from './helper';
import { useSelectInput } from './useSelectInput';

const SelectInput = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}: CustomSelectProps & FieldProps) => {
  const { customStyles } = useSelectInput();

  const onChange = (option: Option[]) => {
    form.setFieldValue(
      field.name,
      (option as Option[]).map((item: Option) => item.value)
    );
  };

  return (
    <div className='mt-[6%] mb-[-2%]'>
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
    </div>
  );
};

export default SelectInput;
