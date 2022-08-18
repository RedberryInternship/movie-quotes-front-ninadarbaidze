import Image from 'next/image';
import Link from 'next/link';
import { useUserInfo } from './useUserInfo';
import { imagePreviewHandler } from './helper';
import { UserInfoTypes } from './types';

const UserInfo: React.FC<UserInfoTypes> = (props) => {
  const { useLink, className, color } = props;
  const { t, session, myLoader, userCtx } = useUserInfo();

  return (
    <>
      <div className={`${className} flex items-center  gap-3`}>
        <div
          className={`w-12 h-12 rounded-full overflow-clip border-2 border-${
            color ? color : 'mainDark2'
          }`}
        >
          <div className='object-cover'>
            <Image
              loader={myLoader}
              src={imagePreviewHandler(userCtx, session)}
              alt='profile-icon'
              width={50}
              height={50}
            />
          </div>
        </div>
        <div>
          <p className='text-white'>{userCtx.userState.username}</p>
          {useLink && (
            <Link href='/feed/profile'>
              <a className='text-gray10 text-xs'>{t('profile:editProfile')}</a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
