export const useCommentItem = (props: { image: string }) => {
  const { image } = props;
  const myLoader = () => {
    if (image.startsWith('https')) {
      return image;
    } else {
      return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
    }
  };
  return { myLoader };
};
