import Image from 'next/image';
import { GoogleProfileForm, ProfileForm } from 'components';
import { useEditProfile } from './useEditProfile';
import { imagePreviewHandler } from './helper';
import { ArrowSmLeftIcon } from '@heroicons/react/solid';

const EditProfile = () => {
  const {
    t,
    updatePassword,
    imagePreview,
    imageChangeHandler,
    session,
    myLoader,
    userCtx,
    emailList,
    setEmailList,
    mobileProfileStateHandler,
    customLoader,
  } = useEditProfile();

  return (
    <>
      <div
        className='w-full pl-4  md:hidden pt-2 sm:pt-10 cursor-pointer'
        onClick={() => mobileProfileStateHandler()}
      >
        <ArrowSmLeftIcon className='text-white w-6 ' />
      </div>
      <div className='h-full mt-8 md:mt-24 lg:w-[90%] lg:mt-0'>
        <h1 className='xs:hidden lg:block text-white text-2xl pb-[10%] font-helvetica_ge font-thin'>
          {t('profile:profile')}
        </h1>
        <div className='bg-gray50 md:bg-mainDark relative lg:w-[100%] rounded-[12px]'>
          <div>
            <div
              className={`${
                userCtx.emailSection ||
                userCtx.passwordSection ||
                userCtx.formModal
                  ? 'hidden md:flex'
                  : 'flex'
              } absolute top-12 md:top-[-10vh] left-[50%]  translate-x-[-50%] w-[11rem] h-[11rem] bg-gray10 rounded-full overflow-clip border-2 border-black`}
            >
              <div>
                <div className='object-fit '>
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
              {session ? (
                <GoogleProfileForm imageChangeHandler={imageChangeHandler} />
              ) : (
                <ProfileForm
                  updatePassword={updatePassword}
                  imageChangeHandler={imageChangeHandler}
                  emailList={emailList}
                  setEmailList={setEmailList}
                  customLoader={customLoader}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
