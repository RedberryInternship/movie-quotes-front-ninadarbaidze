export const useNotificationItem = (props: { notificationData }) => {
  const { notificationData } = props;
  const liked = notificationData.type === 'like';
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${notificationData.senderId.profileImage}`;
  };
  return { liked, myLoader };
};
