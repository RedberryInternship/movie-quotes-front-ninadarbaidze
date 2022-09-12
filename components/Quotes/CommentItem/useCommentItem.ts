export const useCommentItem = (props: { image: string }) => {
  const { image } = props;
  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;

    if (image && image.startsWith('https')) {
      return image;
    } else if (image) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
    } else {
      return defaultProfileImg;
    }
  };
  return { myLoader };
};
