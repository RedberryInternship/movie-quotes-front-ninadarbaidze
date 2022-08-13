import { FormValues } from './types';
import { FieldProps } from 'formik';

const MovieTextArea: React.FC<FormValues & FieldProps> = ({
  field,
  ...props
}) => {
  let { className, lang } = props;

  return (
    <div className='h-[1.5rem] mb-6'>
      <div className='flex'></div>
      <div className='flex items-center relative'>
        <textarea
          {...props}
          {...field}
          className={`${className} py-1 placeholder:text-white text-white  pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate`}
        />
        {lang === 'Eng' ? (
          <p className='absolute right-4 cursor-pointer text-gray20'>Eng</p>
        ) : (
          <p className='absolute right-4 cursor-pointer text-gray20'>ქარ</p>
        )}
      </div>
    </div>
  );
};

export default MovieTextArea;
