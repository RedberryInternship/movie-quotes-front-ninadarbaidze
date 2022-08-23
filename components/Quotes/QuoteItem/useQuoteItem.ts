export const useQuoteItem = ({ image }) => {
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
  };
  return { myLoader };
};
