import { FieldProps } from 'formik';
import { InputHTMLAttributes } from 'react';
import { FormValues } from './types';

const MovieInput: React.FC<
  FormValues & FieldProps & InputHTMLAttributes<HTMLInputElement>
> = ({ field, form: { touched, errors }, ...props }) => {
  const { className, lang, type } = props;

  return (
    <div className='h-[1.5rem]'>
      <div className='flex '></div>
      <div className='flex items-center relative '>
        <input
          {...props}
          {...field}
          type={type ? type : 'text'}
          className={`${className} ${
            touched[field.name] && errors[field.name]
              ? 'border-[1px] border-red px-20'
              : 'border-[1px]  border-gray20'
          } py-1 appearance-none placeholder:text-white  text-white pl-3 w-[100%] bg-mainDark  rounded-[4px] px-12 truncate`}
        />
        {type === 'number' ? (
          ''
        ) : lang === 'Eng' ? (
          <p className='absolute right-4 cursor-pointer text-gray20'>Eng</p>
        ) : (
          <p className='absolute right-4 cursor-pointer text-gray20'>ქარ</p>
        )}
      </div>
    </div>
  );
};

export default MovieInput;
