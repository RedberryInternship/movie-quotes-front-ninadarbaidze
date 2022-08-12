import React, { useState } from 'react';
import { FieldProps } from 'formik';

const ImageInput = ({ form }: any & FieldProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('image', event.currentTarget.files![0]);
  };

  const [dragActive, setDragActive] = useState(false);
  return (
    <div className='w-24 h-24 border-2 border-white'>
      <input type='file' accept='image/*' onChange={onChange} />
    </div>
  );
};

export default ImageInput;
