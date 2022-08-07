import Image from 'next/image';
import { ProfileForm } from 'components';
import { useEditProfile } from './useEditProfile';

const EditProfile = () => {
  const { t, updatePassword, setUpdatePassword } = useEditProfile();
  return (
    <>
      <div className='h-full xs:mt-24 lg:mt-0'>
        <h1 className='xs:hidden lg:block text-white text-2xl pb-[10%]'>
          My profile
        </h1>
        <div className='bg-mainDark relative lg:w-[95%] rounded-[12px]'>
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
