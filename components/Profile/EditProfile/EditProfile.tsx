import Image from 'next/image';
import { ProfileForm } from 'components';
import { useEditProfile } from './useEditProfile';
import { useState } from 'react';

const EditProfile = () => {
  const { t, updatePassword, setUpdatePassword } = useEditProfile();
  const [imagePreview, setImagePreview] = useState('');

  const imageChangeHandler = (imageUrl: string) => {
    setImagePreview(imageUrl);
  };

  const imagePreviewHandler = () => {
    const defaultProfileImg = '/assets/images/profile.png';
    if (!imagePreview) {
      return defaultProfileImg;
    } else {
      return imagePreview;
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
              <div className=''>
                <Image
                  src={imagePreviewHandler()}
                  alt='profile-icon'
                  width={350}
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
