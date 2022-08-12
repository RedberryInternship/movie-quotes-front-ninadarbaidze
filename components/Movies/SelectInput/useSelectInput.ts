export const useSelectInput = () => {
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      borderBottom: '1px dotted gray',
      color: '#6C757D',
      padding: 8,
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
      borderColor: '#6C757D',
      borderWidth: '1px',
    }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };
  return { customStyles };
};
