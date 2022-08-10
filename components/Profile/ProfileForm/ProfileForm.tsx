import { useProfileForm } from './useProfileForm';
import { UpdatePassTypes } from './types';
import { Input, Button } from 'components';

const ProfileForm: React.FC<UpdatePassTypes> = (props) => {
  const { updatePassword, setUpdatePassword, imageChangeHandler } = props;
  const { t, formik, fileRef, changeHandler } = useProfileForm();

  return (
    <>
      <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        <p
          className='text-white text-center text-md z-50 pt-28 cursor-pointer'
          onClick={() => fileRef.current!.click()}
        >
          {t('profile:upload')}
        </p>
        <div className='pt-6 xs:px-[10%] md:px-[20%] pb-12 w-full'>
          <input
            type='file'
            name='image'
            ref={fileRef}
            accept='image/*'
            hidden
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeHandler(e, imageChangeHandler)
            }
          />
          <Input
            name={'username'}
            label={t('profile:username')}
            type={'text'}
            id={'username'}
            placeholder={t('profile:usernamePlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.username}
            value={formik.values.username}
            errorMessage={formik.errors.username!}
            deleteInput={true}
          />
          <Input
            id='email'
            name='email'
            type='email'
            label={t('home:loginInp1')}
            placeholder={t('home:emailPlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.email}
            value={formik.values.email}
            errorMessage={formik.errors.email!}
            deleteInput={true}
          />

          {!updatePassword && (
            <a
              className='link cursor-pointer'
              onClick={() => setUpdatePassword(true)}
            >
              {t('home:forgotPass')}
            </a>
          )}
          {updatePassword && (
            <>
              <Input
                id='password'
                name='password'
                type='password'
                label={t('home:inputPassword')}
                placeholder={t('home:passwordPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isTouched={formik.touched.password}
                value={formik.values.password}
                errorMessage={formik.errors.password!}
              />
              <Input
                id='repPassword'
                name='repeatPassword'
                type='password'
                label={t('home:inputConfirmPass')}
                placeholder={t('home:confirmPassPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isTouched={formik.touched.repeatPassword}
                value={formik.values.repeatPassword}
                errorMessage={formik.errors.repeatPassword!}
              />
            </>
          )}
        </div>
        <div className='absolute left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-[calc(100%_-_10rem)]'>
          <Button
            text={t('profile:saveBtn')}
            className='bg-red hover:bg-redHover w-[10rem] mt-12 h-12 text-base'
          />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
