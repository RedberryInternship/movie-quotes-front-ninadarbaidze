export const imagePreviewHandler = (userCtx: {
  userState: { profileImage: string };
}) => {
  const defaultProfileImg = `/assets/images/profile.png`;

  if (
    userCtx.userState.profileImage &&
    userCtx.userState.profileImage.startsWith('https')
  ) {
    return userCtx.userState.profileImage;
  } else if (!userCtx.userState.profileImage) {
    return defaultProfileImg;
  } else {
    return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
  }
};
