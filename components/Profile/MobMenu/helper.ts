export const imagePreviewHandler = (
  userCtx: { userState: { profileImage: string } },
  session: any
) => {
  const defaultProfileImg = `/assets/images/profile.png`;

  if (!userCtx.userState.profileImage && session?.user) {
    return defaultProfileImg;
  } else if (session?.user) {
    return session!.user.image as any;
  } else {
    return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
  }
};
