import Image from 'next/image';
import { GoogleProfileForm, ProfileForm } from 'components';
import { useEditProfile } from './useEditProfile';
import { imagePreviewHandler } from './helper';

const EditProfile = () => {
  const {
    t,
    updatePassword,
    setUpdatePassword,
    imagePreview,
    imageChangeHandler,
    session,
    myLoader,
    userCtx,
  } = useEditProfile();

  return (
    <>
      <div className='h-full xs:mt-24 lg:w-[90%] lg:mt-0'>
        <h1 className='xs:hidden lg:block text-white text-2xl pb-[10%]'>
          {t('profile:profile')}
        </h1>
        <div className='bg-mainDark relative lg:w-[100%] rounded-[12px]'>
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
            {/* <ProfileForm
              imageChangeHandler={imageChangeHandler}
              updatePassword={updatePassword}
              setUpdatePassword={setUpdatePassword}
            /> */}
            {session ? (
              <GoogleProfileForm imageChangeHandler={imageChangeHandler} />
            ) : (
              <ProfileForm
                updatePassword={updatePassword}
                setUpdatePassword={setUpdatePassword}
                imageChangeHandler={imageChangeHandler}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
