import { FieldProps } from 'formik';
import { FormValues } from './types';

const MovieInput: React.FC<FormValues & FieldProps> = ({ field, ...props }) => {
  const { className, lang, type } = props;
  return (
    <div className='h-[1.5rem]'>
      <div className='flex '></div>
      <div className='flex items-center relative'>
        <input
          {...props}
          {...field}
          type={type ? type : 'text'}
          className={`${className} py-1 outline-none appearance-none placeholder:text-white  text-white pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate`}
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
