import Image from 'next/image';
import { ProfileForm } from 'components';
import { useEditProfile } from './useEditProfile';
import { useContext } from 'react';
import { UserContext } from 'store';
import { useSession } from 'next-auth/react';
import { imagePreviewHandler } from './helper';

const EditProfile = () => {
  const {
    t,
    updatePassword,
    setUpdatePassword,
    imagePreview,
    imageChangeHandler,
  } = useEditProfile();
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (session?.user && !userCtx.userState.profileImage) {
      return session!.user.image as any;
    } else if (userCtx.userState.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
    } else {
      return defaultProfileImg;
    }
  };

  return (
    <>
      <div className='h-full xs:mt-24 lg:mt-0'>
        <h1 className='xs:hidden lg:block text-white text-2xl pb-[10%]'>
          {t('profile:profile')}
        </h1>
        <div className='bg-mainDark relative lg:w-[95%] rounded-[12px]'>
          <div className='absolute top-[-10vh] left-[50%]  translate-x-[-50%] w-[11rem] h-[11rem] bg-gray10 rounded-full overflow-clip border-2 border-black'>
            <div>
              <div className='object-fit'>
                <Image
                  loader={myLoader}
                  src={imagePreviewHandler(imagePreview, userCtx, session)}
                  alt='profile-icon'
                  width={350}
                  objectFit='cover'
                  height={350}
                />
              </div>
            </div>
          </div>
          <div>
            <ProfileForm
              imageChangeHandler={imageChangeHandler}
              updatePassword={updatePassword}
              setUpdatePassword={setUpdatePassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
