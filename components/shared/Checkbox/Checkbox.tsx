import { CheckboxTypes } from './types';

const Checkbox: React.FC<CheckboxTypes> = (props) => {
  const { name, checked, onChange, text } = props;
  return (
    <>
      <div className='flex gap-2 '>
        <input
          type='checkbox'
          onChange={onChange}
          name={name}
          checked={checked}
        />
        <p className='text-white text-base'>{text}</p>
      </div>
    </>
  );
};

export default Checkbox;
