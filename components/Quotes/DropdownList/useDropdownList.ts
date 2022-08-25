export const useDropdownList = (props: { image: string }) => {
  const { image } = props;
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image as string}`;
  };

  return { myLoader };
};
