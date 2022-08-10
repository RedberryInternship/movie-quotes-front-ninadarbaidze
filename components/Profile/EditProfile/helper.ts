export const imagePreviewHandler = (
  imagePreview: string,
  userCtx: { userState: { profileImage: string } },
  session: any
) => {
  const defaultProfileImg = `/assets/images/profile.png`;
  if (imagePreview) {
    return imagePreview;
  } else if (
    !userCtx.userState.profileImage &&
    !imagePreview &&
    !session?.user
  ) {
    return defaultProfileImg;
  } else if (session?.user && !userCtx.userState.profileImage) {
    return session!.user.image as any;
  } else {
    return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
  }
};
