import { InputTypes } from './types';

const MovieInput: React.FC<InputTypes> = (props) => {
  let {
    name,
    className,
    type,
    id,
    placeholder,
    onChange,
    value,
    onBlur,
    lang,
  } = props;

  return (
    <div className='h-[1.5rem]'>
      <div className='flex gap-2 mb-2 mt-8'></div>
      <div className='flex items-center relative'>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`${className} py-1 placeholder:text-white  pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate`}
        />
        {lang === 'Eng' ? (
          <p className='absolute ml-[94%] cursor-pointer text-gray20'>Eng</p>
        ) : (
          <p className='absolute ml-[94%] cursor-pointer text-gray20'>ქარ</p>
        )}
      </div>
    </div>
  );
};

export default MovieInput;
