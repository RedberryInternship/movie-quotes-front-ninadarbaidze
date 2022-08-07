import Image from 'next/image';
import { ProfileForm } from 'components';
import { useEditProfile } from './useEditProfile';

const EditProfile = () => {
  const { t, updatePassword, setUpdatePassword } = useEditProfile();
  return (
    <>
      <div className='h-full'>
        <h1 className='text-white text-2xl pb-[10%]'>My profile</h1>
        <div className='bg-mainDark relative w-[95%]'>
          <div className='absolute top-[-10vh] left-[50%]  translate-x-[-50%] w-[11rem] h-[11rem] bg-darkWhite rounded-full overflow-clip border-2 border-black'>
            <div>
              <div className='object-fit'>
                <Image
                  src={'/assets/images/image-1.png'}
                  alt='profile-icon'
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div>
            <p className='text-white text-center text-2xl mt-12'>
              Nina Darbaidze
            </p>
            <ProfileForm
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
