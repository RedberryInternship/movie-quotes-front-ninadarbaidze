export const imagePreviewHandler = (quote: any) => {
  const defaultProfileImg = `/assets/images/profile.png`;

  if (
    quote.userId.profileImage &&
    quote.userId.profileImage.startsWith('https')
  ) {
    return quote.userId.profileImage;
  } else if (!quote.userId.profileImage) {
    return defaultProfileImg;
  } else {
    return `${process.env.NEXT_PUBLIC_API_URL}/${quote.userId.profileImage}`;
  }
};
